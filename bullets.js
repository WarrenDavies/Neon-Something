function firePistol() {
	createBullet(mouseX + cameraX, mouseY + cameraY, Player1.x, Player1.y, Player1.activeWeapon, 100, 5, 5, 1);
}

function fireMachineGun() {
	createBullet(mouseX + cameraX, mouseY + cameraY, Player1.x, Player1.y, Player1.activeWeapon, 500, 5, 5, 5);
}

function firePlasmaGun() {
	if (plasmaCharge === 0) {
		createBullet(mouseX + cameraX, mouseY + cameraY, Player1.x, Player1.y, Player1.activeWeapon, 500, 25, 25, 50);
		plasmaCharge = 100;
	}
}

function fireRocketLauncher() {
	if (rocketReload === 0) {
		createBullet(mouseX + cameraX, mouseY + cameraY, Player1.x, Player1.y, Player1.activeWeapon, 500, 25, 10, 300);
		rocketReload = 50;
	}
}

// Create bullets
function createBullet(targetX, targetY, shooterX, shooterY, type, range, w, h, power) {
	checkBulletPush = false;
	var deltaX = targetX - shooterX;
	var deltaY = targetY - shooterY;
	var rotation = Math.atan2(deltaY, deltaX);
	var xtarget = Math.cos(rotation);
	var ytarget = Math.sin(rotation);
	var limitX = xtarget * range;
	var limitY = ytarget * range;
	if (type === 4) {
		// limitX = targetX;
		// limitY = targetY;
	}
	var weaponType = "";
	//if (type === 0){ 
		weaponColor="#000";
		weaponType = "bullet";
		checkBulletPush = true;
	//	}
	if (checkBulletPush === true) {
		theBullets.push({
			active:true,
			onScreen: true,
			deltaX: deltaX,
			deltaY: deltaY,
			x: shooterX,
			y: shooterY,
			xVelocity: 15,
			yVelocity: 15,
			power: 1,
			xtarget: xtarget,
			ytarget: ytarget,
			limitX: limitX,
			limitY: limitY,
			type: type,
			w: w,
			h: h,
			color: weaponColor,
			angle: rotation
		});
		Player1.ammo[Player1.activeWeapon] -= 1;
	}
} // end createBullet

function createExplosion(x, y, rt, p) {
	theExplosions.push({x: x, y: y, r: 1, rt: rt, power: p});
}

function updateExplosions() {
	theExplosions.forEach(function(i, j) {
		if (i.r <= i.rt) {
			i.r += 10;
		}
		if (i.r > i.rt) {
			theExplosions.splice(j);
		}
	});
}

function drawExplosions() {
	if (theExplosions.length > 0) {
		theExplosions.forEach(function(i, j) {
			c.beginPath();
			c.arc(i.x - cameraX, i.y - cameraY, i.r, 0, 2*Math.PI);
			c.strokeStyle = "red";
			c.stroke();
		});
	}
}

// update this so that the collision is checking the middle of the bullet (bullet width / 2)
function updateBullets() {
	theBullets.forEach ( function(i, j) {
		
		var rocketHit = false;
		// has the range been reached
		if (collidesSpecify( i.x - 2, i.y - 2, 2, 2, i.limitX - 3, i.limitY-3, 6, 6) || (i.x > i.limitX - 30 && i.x < i.limitX + 30 && i.y > i.limitY - 30 && i.y < i.limitY + 30) ) {
			if (i.type === 4) {
				createExplosion(i.x, i.y, 100, i.power);
			}
			theBullets.splice(j);
			return
		}
		
		//collision with walls
		if (checkBulletWallCollision(i, j) ){
			if (i.type === 4) {
				createExplosion(i.x, i.y, 100, i.power);
			}
			theBullets.splice(j, 1);
			return	
		}
		if (checkBulletCivilianCollision(i, j) ){
			if (i.type === 4) {
				createExplosion(i.x, i.y, 100, i.power);
			}
			if (i.type !== 3) {
				theBullets.splice(j, 1);
				return	
			}
		}
		
		if (checkBulletZombieCollision(i, j) ){
			if (i.type === 4) {
				createExplosion(i.x, i.y, 100, i.power);
			}
			if (i.type !== 3) {
				theBullets.splice(j, 1);
				return	
			}
		}


		i.x += i.xtarget * i.xVelocity;
		i.y += i.ytarget * i.yVelocity;
		
	});
	if (theExplosions.length > 0) {
		updateExplosions();
	}
}



function drawBullets() {
	theBullets.forEach ( function(i, j) {
		if (i.active === true) {	
			if (i.x > cameraX - 100 && i.x < cameraX + cameraW + 100 && i.y > cameraY - 100 && i.y < cameraY + cameraH + 100 ) {
				c.beginPath();
				c.save();
				c.translate(i.x - cameraX, i.y - cameraY);
				if (deltaX < 0) {
					c.rotate(i.angle);
				} else {
					c.rotate(i.angle);
					c.scale(-1,1);
				}
				c.translate(-i.x, -i.y);
				c.fillStyle = i.color;
				c.rect(i.x, i.y, i.w, i.h);
				c.fill();
				c.restore();
				c.closePath();
			}
		}	
	});
} // draw bullets 

function changeWeapon(change) {
		var checkWeapon = Player1.activeWeapon;
		for (j = Player1.weaponsPossessed.length; j >= 0; j--) {
			checkWeapon += change;
			if (checkWeapon < 0) {
				checkWeapon = Player1.weaponsPossessed.length - 1;
			}
			if (checkWeapon > Player1.weaponsPossessed.length) {
				checkWeapon = 0;
			}
			if (Player1.weaponsPossessed[(checkWeapon)] === true) {
				Player1.activeWeapon = checkWeapon;
				keys[81] = false;
				keys[69] = false;
				break;
			}
		}
	}

