function firePistol() {
	createBullet(mouseX + cameraX, mouseY + cameraY, Player1.x, Player1.y, Player1.activeWeapon, 300, 3, 3, 2, "pistol", "black");
}

function fireMachineGun() {
	createBullet(mouseX + cameraX, mouseY + cameraY, Player1.x, Player1.y, Player1.activeWeapon, 600, 3, 3, 5, "machineGun", "black");
}

function firePlasmaGun() {
	if (plasmaCharge === 0) {
		createBullet(mouseX + cameraX, mouseY + cameraY, Player1.x, Player1.y, Player1.activeWeapon, 1000, 15, 15, 300, "plasmaGun", "blue");
		plasmaCharge = 5;
	}
}

function fireRocketLauncher() {
	if (rocketReload === 0) {
		createBullet(mouseX + cameraX, mouseY + cameraY, Player1.x, Player1.y, Player1.activeWeapon, 1200, 25, 10, 500, "rocket", "black");
		rocketReload = 5;
	}
}

// Create bullets
function createBullet(targetX, targetY, shooterX, shooterY, type, range, w, h, power, typeName, weaponColor) {
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
	checkBulletPush = true;
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
			power: power,
			xtarget: xtarget,
			ytarget: ytarget,
			xSource: shooterX,
			ySource: shooterY,
			limitX: limitX,
			limitY: limitY,
			range: range,
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
		if (getDistance(i.xSource, i.ySource, i.x, i.y) > i.range) {
			if (i.type === 4) {
				createExplosion(i.x, i.y, 150, i.power);
			}
			theBullets.splice(j, 1);
			return
		}
			
		//collision with walls
		if (checkBulletWallCollision(i, j) ){
			if (i.type === 4) {
				createExplosion(i.x, i.y, 150, i.power);
			}
			theBullets.splice(j, 1);
			return	
		}
		if (checkBulletCivilianCollision(i, j) ){
			if (i.type === 4) {
				createExplosion(i.x, i.y, 150, i.power);
			}
			if (i.type !== 3) {
				theBullets.splice(j, 1);
				return	
			}
		}
		
		if (checkBulletZombieCollision(i, j) ){
			if (i.type === 4) {
				createExplosion(i.x, i.y, 150, i.power);
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
			// I know that this is not the right way to do it. later I'll do this with classes and let each bullet draw itself
			if (i.type == 1 || i.type == 2 || i.type == 3) {
				c.beginPath();
				c.arc(i.x - cameraX, i.y - cameraY, i.w, 0, 2*Math.PI);
				c.fillStyle = i.color;
				c.strokeStyle = i.color;
				c.fill();
				c.stroke();
			} else {
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

