function updatePlayer () {
	if (Player1.gettingInVehicle > 0) {
		var deltaX = vehiclesOnScreen[Player1.gettingInVehicle].x - Player1.x;
		var deltaY = vehiclesOnScreen[Player1.gettingInVehicle].y - Player1.y;
		Player1.angle = Math.atan2(deltaY,  deltaX);
		Player1.xVector = Math.cos(Player1.angle);
		Player1.yVector = Math.sin(Player1.angle);
		
} 

if (Player1.mot === 0) {

//	c.fillStyle = "red";
//c.fillRect (Player1.x - cameraX - (Player1.w / 2) , Player1.y - cameraY - (Player1.h / 2)  , Player1.w, Player1.h);


	if (Player1.speed > 0) {
		//console.log(checkPlayerCollision(Player1.x + (Player1.xVector * Player1.speed), Player1.y + (Player1.yVector * Player1.speed)));
		
		checkPlayerCollision(Player1.xVector * Player1.speed, Player1.yVector * Player1.speed);
		
		
		
		Player1.x += Player1.xVector * Player1.speed;
		Player1.y += Player1.yVector * Player1.speed;
		
		//c.fillRect (Player1.xVector * Player1.speed + Player1.x - cameraX - (Player1.w / 2) , Player1.yVector * Player1.speed
		// + Player1.y - cameraY - (Player1.h / 2)  , Player1.w, Player1.h);
			
	}
} else {
			// we're in a vehicle, so let's update the player and camera to match the vehicles angle and position
			Player1.x = vehiclesOnScreen[Player1.mot].x;
			Player1.y = vehiclesOnScreen[Player1.mot].y;
			Player1.angle = vehiclesOnScreen[Player1.mot].angle;
			Player1.speed = vehiclesOnScreen[Player1.mot].speed;
			
			//cameraX = (Player1.x - Player1.w / 2) - (cameraW / 2);
			//cameraY = (Player1.y - Player1.h / 2) - (cameraH / 2);
			
			
	}	

	
	//c.rect( Player1.x - (Player1.w / 2), Player1.y - (Player1.h / 2), Player1.w, Player1.h);
	theCivilians.forEach( function(i, j) {
		if (collidesSpecify (Player1.x - (Player1.w / 2), Player1.y - (Player1.h / 2), Player1.w, Player1.h, i.x - (i.w / 2), i.y - (i.h / 2), i.w, i.h) ) {
		
			
			
			if (Player1.mot > 0 && vehiclesOnScreen[Player1.mot].speed >5 ) {
			
			theSplats.push({x: i.x - (i.w / 2), y: i.y - (i.h / 2), w: i.w, h: i.h });
			theCivilians.splice(j, 1);
			//console.log("hit");
			
			} else {
			i.x += Player1.xVector * (Player1.speed);
			i.y += Player1.yVector * (Player1.speed);
			}
			
			
		}
	
	});
	
	theZombies.forEach( function(i, j) {
		if (collidesSpecify (Player1.x - (Player1.w / 2), Player1.y - (Player1.h / 2), Player1.w, Player1.h, i.x - (i.w / 2), i.y - (i.h / 2), i.w, i.h) ) {
			if (Player1.mot > 0 && vehiclesOnScreen[Player1.mot].speed >5 ) {
				theSplats.push({x: i.x - (i.w / 2), y: i.y - (i.h / 2), w: i.w, h: i.h });
				theZombies.splice(j, 1);
			//console.log("hit");
			
			} else {
			i.x += Player1.xVector * (Player1.speed);
			i.y += Player1.yVector * (Player1.speed);
			}
			
			
		}
	
	});
	
	
	Player1.inBuilding = false;
	buildingsOnScreen.forEach( function(i, j){
	//delete the below and uncomment the above when the easy building maker is done
	//theBuildings.forEach( function(j, i){
		if (Player1.x > theBuildings[i].upperLeftX && Player1.x < theBuildings[i].lowerRightX && Player1.y > theBuildings[i].upperLeftY && Player1.y < theBuildings[i].lowerRightY) {
			Player1.inBuilding = i;
		}
	});
} 
 
 
function drawPlayer() {
 
 
  //////// BELOW IS TO DEBUG PLAYER AND CIV COLLISION
 
 // to help test civ collision
 
//	Player1.xVector = Math.cos(Player1.angle);
//	Player1.yVector = Math.sin(Player1.angle);
//	c.strokeStyle = "black";
	
//	for (k = 0; k < theCivilians.length - 1; k++) {
			
	//			if (getLineIntersection(Player1.x, Player1.y, Player1.x + (Player1.xVector * 70), Player1.y + (Player1.yVector * 70), theCivilians[k].x - 20, theCivilians[k].y + 20, theCivilians[k].x + 20, theCivilians[k].y - 20)  ||   getLineIntersection(Player1.x, Player1.y, Player1.x + (Player1.xVector * 70), Player1.y + (Player1.yVector * 70), theCivilians[k].x + 20, theCivilians[k].y + 20, theCivilians[k].x - 20, theCivilians[k].y - 20)   ) {
				
					
			//			c.font = 'bold 14pt Calibri';
			//			c.style = 'black';
			//			c.fillText("Player about to collide:" + j + " "  + k, 100, 400);
			//			c.strokeStyle = "red";
					
			//	}
			
	//	}
	
	
	//c.beginPath();
	//	c.save();
	//	c.translate(Player1.x - cameraX, Player1.y - cameraY );
	//	c.translate(-Player1.x , -Player1.y);
		
	//	c.moveTo(Player1.x, Player1.y)
	//	c.lineTo(Player1.x + (Player1.xVector * 70), Player1.y + (Player1.yVector * 70) );
	//	c.lineWidth = 1;
	//	c.stroke();
	//	c.restore();
 
 //////// ABOVE IS TO DEBUG PLAYER AND CIV COLLISION
 
 	//drawing begins
	c.beginPath();
	c.save();

	
	
	
	if (Player1.mot === 0) {
		if (keys[70] && Player1.gettingInVehicle > 0) {
			Player1.deltaX = vehiclesOnScreen[Player1.gettingInVehicle].x - cameraX - Player1.x + cameraX;
			Player1.deltaY = vehiclesOnScreen[Player1.gettingInVehicle].y - cameraY - Player1.y + cameraY;
		} else {
			Player1.deltaX = mouseX - Player1.x + cameraX;
			Player1.deltaY = mouseY - Player1.y + cameraY;
		}
		Player1.angle = Math.atan(Player1.deltaY / Player1.deltaX);
		
		c.translate(Player1.x - cameraX, Player1.y - cameraY); 
		
		if (Player1.deltaX < 0) {
			c.rotate(Player1.angle);
			c.scale(-1,1);
		} else {
			c.rotate(Player1.angle);
		
		}
		c.translate(-Player1.x,-Player1.y);
	
	if (keys[83] || keys[87] || keys[70] || keys[65] || keys[68] ) {
		Player1.walkTimer += 0.15;
		if (Player1.walkTimer >= 3.8) {
			Player1.walkTimer = 0.1;
		}
			
		c.drawImage( Player1.walkAnimations[Math.ceil(Player1.walkTimer)], Player1.x - (Player1.w / 2) - 10, Player1.y - (Player1.h / 2) - 10, Player1.w + 20, Player1.h + 20);
	
	} else {
	
	Player1.walkTimer = 0;
	
	c.drawImage( Player1.standImage, Player1.x - (Player1.w / 2) - 10, Player1.y - (Player1.h / 2) - 10, Player1.w + 20, Player1.h + 20);
	
	}

	} else {
	
	//console.log("89jj");
	c.translate(-Player1.x , -Player1.y);
	//c.rect( Player1.x - (Player1.w / 2), Player1.y - (Player1.h / 2), Player1.w, Player1.h);
	
	}

	c.restore();
	c.closePath();
 
 
	//}
} // draw player
