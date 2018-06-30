// Create bullets
function createBullet(targetX, targetY, shooterX, shooterY, type) {
	checkBulletPush = false;
	var deltaX = targetX - shooterX;
	var deltaY = targetY - shooterY;
	var rotation = Math.atan2(deltaY, deltaX);
	var xtarget = Math.cos(rotation);
	var ytarget = Math.sin(rotation);
	var limitX = xtarget * 500;
	var limitY = ytarget * 500;
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
			xtarget: xtarget,
			ytarget: ytarget,
			limitX: limitX,
			limitY: limitY,
			type: weaponType,
			w: 5,
			h: 5,
			color: weaponColor,
			angle: rotation
		});
	}
} // end createBullet

// update this so that the collision is checking the middle of the bullet (bullet width / 2)
function updateBullets() {
	theBullets.forEach ( function(i, j) {
		
		
		// has the range been reached
		if (collidesSpecify( i.x - 2, i.y - 2, 2, 2, i.limitX - 3, i.limitY-3, 6, 6) || (i.x > i.limitX - 30 && i.x < i.limitX + 30 && i.y > i.limitY - 30 && i.y < i.limitY + 30) ) {
			theBullets.splice(j);
			return
		}
		
		//collision with walls
		if (checkBulletWallCollision(i, j) ){
			theBullets.splice(j, 1);
			return	
		}
		if (checkBulletCivilianCollision(i, j) ){
			theBullets.splice(j, 1);
			return	
		}
		
		if (checkBulletCivilianCollision(i, j) ){
			theBullets.splice(j, 1);
			return	
		}
		
		i.x += i.xtarget * i.xVelocity;
		i.y += i.ytarget * i.yVelocity;
		
	});
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
				console.log(Player1.activeWeapon);
				break;
			}
		}
	}

