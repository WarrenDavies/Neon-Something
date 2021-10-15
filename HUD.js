function drawHUD() {
	c.fillStyle = 'black';
	let topHUDHeight = 30;
	c.fillRect(0,0,cameraW, topHUDHeight);

	let topHUDXStartPoint = 20;
	let healthTitleGap = 80;
	let topHUDYTextStartPoint = 22;
	let topHUDBarYStartPoint = 16;
	let sectionOffset = 20;
	// health bar
		c.font = '18pt Calibri';
		c.fillStyle = 'white';
		c.strokeStyle = "yellow";
		c.fillText("Health:", topHUDXStartPoint, topHUDYTextStartPoint);	
		if (Player1.health > 0) {
			c.beginPath();
			c.moveTo(healthTitleGap + topHUDXStartPoint, topHUDBarYStartPoint);
			c.lineTo(healthTitleGap + topHUDXStartPoint + Player1.health, topHUDBarYStartPoint);
			c.lineWidth = 10;
			if (Player1.health < 50) {	
				c.strokeStyle = "red";
			}
			c.stroke();
			c.closePath();
		} else {
			c.strokeStyle = "red";
			c.fillStyle = 'red';
			c.lineWidth = 1;
			c.font = 'bold 18pt Calibri';
			c.fillText("DEAD", healthTitleGap + topHUDXStartPoint, topHUDYTextStartPoint);
		}
		//c.stroke();


	let healthOffset = topHUDXStartPoint + healthTitleGap + Player1.maxHealth + sectionOffset;
	let staminaTitleGap = 95;
	// stamina bar
	c.font = '18pt Calibri';
	c.fillStyle = 'white';
	c.strokeStyle = "yellow";
	c.fillText("Stamina:", healthOffset, topHUDYTextStartPoint);

	//c.fillText("y: " + Player1.y, 10, 75);
	let staminaBarStartPoint = healthOffset + staminaTitleGap;
	if (Player1.energy > 0) {
		c.beginPath();
		c.moveTo(staminaBarStartPoint, topHUDBarYStartPoint);
		c.lineTo(staminaBarStartPoint + Player1.energy, topHUDBarYStartPoint);
		c.lineWidth = 10;
		
		if (Player1.energy < 50) {
			c.strokeStyle = "red";
		}
		c.stroke();
		c.closePath();
	} else {
		c.strokeStyle = "red";
		c.fillStyle = 'red';
		c.lineWidth = 10;
		c.font = 'bold 18pt Calibri';
		c.fillText("TIRED", staminaBarStartPoint, topHUDYTextStartPoint);
	}
	
	
		//console.log(race.completeTimer);
		if (race.on || race.completeTimer > 0.1) {
			var raceDisplay = Math.round(race.currentRaceTime * 100) / 100
			if (race.bestRaceTime < raceDisplay && race.bestRaceTime > 0) {
				c.fillStyle = 'red';
			}
			c.fillText("Race Time: " + raceDisplay, 10, 75);
			c.fillStyle = 'white';
			if (race.bestRaceTime > 0) {
				c.fillText("Best Time: " + race.bestRaceTime, 10, 100);
			}
			
			if (race.completeTimer > 0.1) {
				race.completeTimer -= 0.2;
				if (race.completeTimer < 0.2 ) {
					
					if (race.currentRaceTime < race.bestRaceTime || race.bestRaceTime === 0) {
						race.bestRaceTime = Math.round(race.currentRaceTime * 100) / 100;
					}
					race.currentRaceTime = 0;
					race.completeTimer = 0;
				}
			}
		}


	//timer
	let staminaOffset = healthOffset + staminaTitleGap + Player1.maxEnergy + sectionOffset;
	let timerTitleGap = 63;
	c.font = '18pt Calibri';
	c.fillStyle = 'white';
	c.strokeStyle = "black";
	c.fillText("Time:", staminaOffset, topHUDYTextStartPoint);	
	c.fillText(Math.floor(time), staminaOffset + timerTitleGap, topHUDYTextStartPoint);
	
	// Points
	let pointsTitleGap = 73;
	let timerWidth = 80;
	let timerOffset = staminaOffset + sectionOffset + timerWidth;
	
	c.fillText("Points:", timerOffset, topHUDYTextStartPoint);	
	c.fillText(Player1.points, timerOffset + pointsTitleGap, topHUDYTextStartPoint);	

	

	let lowerHUDstartPoint = 20;
	let ammoTitleGap = 80;
	let ammoY = cameraH - 13;
	let lowerHUDheight = 40;

	c.fillStyle = 'black';
	c.fillRect (0, cameraH - lowerHUDheight, cameraW, lowerHUDheight);
	
	
	c.font = '18pt Calibri';
	c.strokeStyle = 'white';
	c.fillStyle = 'white';
	c.fillText("Ammo:", lowerHUDstartPoint, ammoY);

	if (Player1.activeWeapon === 0) {
		c.strokeStyle = 'white';c.fillText(Player1.weaponsPossessed[Player1.activeWeapon].ammo, lowerHUDstartPoint + ammoTitleGap, ammoY);
	}
	if (Player1.activeWeapon === 1) {
		c.strokeStyle = 'blue';c.fillText(Player1.weaponsPossessed[Player1.activeWeapon].ammo, lowerHUDstartPoint + ammoTitleGap, ammoY);
	}
	if (Player1.activeWeapon === 2) {
		c.strokeStyle = 'orange';c.fillText(Player1.weaponsPossessed[Player1.activeWeapon].ammo, lowerHUDstartPoint + ammoTitleGap, ammoY);
	}
	if (Player1.activeWeapon === 3) {
		c.strokeStyle = 'purple';c.fillText(Player1.weaponsPossessed[Player1.activeWeapon].ammo, lowerHUDstartPoint + ammoTitleGap, ammoY);
	}
	if (Player1.activeWeapon === 4) {
		c.strokeStyle = 'white';c.fillText(turretAmmo, 740, 590);
	}
	if (Player1.activeWeapon === 5) {
		c.strokeStyle = 'white';c.fillText(trapAmmo, 740, 590);
	}

	let ammoNumberGap = 100;
	let gapToWeaponsBar = lowerHUDstartPoint + ammoTitleGap + ammoNumberGap;
	let iconOffset = 1;
	weaponsBar.forEach ( function( i, j) {

		let weaponGap = 40;

		c.save();
		c.beginPath();
		c.translate(gapToWeaponsBar + (weaponGap * j), ammoY - iconOffset);
		if (Player1.weaponsPossessed[j].possess === false) {
			c.fillStyle = Player1.weaponsPossessed[j].notHaveColor;
			c.strokeStyle = Player1.weaponsPossessed[j].notHaveColor;
		} else {
			c.fillStyle = Player1.weaponsPossessed[j].haveColor;
			c.strokeStyle = Player1.weaponsPossessed[j].haveColor;
		}
		c.moveTo(-15, -15);
		c.lineTo(15, -15);
		c.lineTo(15, 3);
		c.lineTo(-15, 3);
		c.lineTo(-15, -15);
		c.lineTo(15, -15);
		
		//c.rect(-15, -15, 15, 3);
		//c.strokeStyle = i.border;
		c.lineWidth = 3;
		if (Player1.activeWeapon === j && Player1.weaponsPossessed[j].possess === true) {
			c.lineWidth = 8;
			c.strokeStyle='white';
		}
		c.stroke();
		c.fill();
		
		if (!Player1.weaponsPossessed[j]) {
			c.lineWidth = 4;
			c.strokeStyle = 'red';
			c.moveTo(-15, -15);
			c.lineTo(15,3);
			c.moveTo(15,-15);
			c.lineTo(-15,3);
			c.stroke();
		}
		c.restore();
		
		});
		



}

function debugHUD(){
		// draw way points
	c.font = '18pt Calibri';
	c.fillStyle = 'black';
	c.strokeStyle = "black";
		var showWayPoints = true;
		var showPlayer = false;
		if (showWayPoints) {
		
			theWayPoints.forEach( function(i, j) {
					c.beginPath();
					c.save();
					c.translate(i.x - cameraX, i.y - cameraY); 
					c.translate(-i.x , -i.y);
					c.moveTo(i.x - 10, i.y - 10);
					c.lineTo(i.x + 10, i.y + 10);
					c.strokeStyle = "red";
					c.lineWidth = 2;
					c.stroke();
					
					c.beginPath();
					c.moveTo(i.x + 10, i.y - 10);
					c.lineTo(i.x - 10, i.y + 10);
					c.stroke()
					
					c.fillText(j, i.x - 5, i.y - 20);
					c.restore();
				});

			if (debugTarget) {
				if (debugTarget.wayPoints.length > 0) {
					debugTarget.wayPoints.forEach( function(i, j) {
						c.beginPath();
						c.save();
						c.translate(i.x - cameraX, i.y - cameraY); 
						c.translate(-i.x , -i.y);
						c.moveTo(i.x - 10, i.y - 10);
						c.lineTo(i.x + 10, i.y + 10);
						c.strokeStyle = "blue";
						c.lineWidth = 2;
						c.stroke();
						
						c.beginPath();
						c.moveTo(i.x + 10, i.y - 10);
						c.lineTo(i.x - 10, i.y + 10);
						c.stroke()
						
						c.fillText(j, i.x - 5, i.y - 20);
						c.restore();
					});
				}
			}
		}
		
		
		
		if (showPlayer){
			c.beginPath();
			c.font = 'bold 14pt Calibri';
			c.fillStyle = "white";
			c.fillText("PLAYER ", 100, 125);
			//c.fillText("x: " + Player1.x, 100, 150);
			//c.fillText("y: " + Player1.y, 100, 175);
			c.fillText("angle: " + Player1.angle, 100, 200);
			c.fillText("xVector: " + Math.cos(Player1.angle) , 100, 225);
			c.fillText("yVector: " + Math.sin(Player1.angle), 100, 250);
			//c.fillText("target angle: " + Player1.targetAngle, 100, 225);
			//c.fillText("Target WP: " + Player1.targetWayPoint, 100, 250);
			
			c.fillText("vehic speed: " + vehiclesOnScreen[Player1.mot].speed, 100, 275);
			
			}
			
			if (debugTarget){
			c.font = 'bold 14pt Calibri';
			c.fillStyle = "white";
			c.fillText("ID: " + Math.floor(debugTarget.ID), 500, 125);
			c.fillText("x: " + Math.floor(debugTarget.x), 500, 150);
			c.fillText("y: " + Math.floor(debugTarget.y), 500, 175);
			c.fillText("angle: " + debugTarget.angle, 500, 200);
			c.fillText("target angle: " + debugTarget.targetAngle, 500, 225);
			c.fillText("Target WP: " + debugTarget.targetWayPoint, 500, 250);
			c.fillText("V x: " + Math.cos(debugTarget.angle),500, 275);
			c.fillText("V y: " + Math.sin(debugTarget.angle),500, 300);
			c.fillText("facing backwards: " + debugTarget.facingBackwards,500, 325);
			c.fillText("Target WP x: " + theWayPoints[debugTarget.targetWayPoint].x,500, 350);
			c.fillText("Target WP y: " + theWayPoints[debugTarget.targetWayPoint].y,500, 375);
			
			c.fillText("distanceHolder: " + Math.floor(debugTarget.distanceHolder),500, 400);
			
			c.fillText("distanceStepHolder: " + Math.floor(debugTarget.distanceStepHolder),500, 425);
			
			var difference = debugTarget.distanceHolder -debugTarget.distanceStepHolder
			
			c.fillText("difference: " + difference,500, 450);
			c.fillText("xTarget: " + debugTarget.xTarget,500, 475);
			c.fillText("yTarget: " + debugTarget.yTarget,500, 500);
			
			c.fillText("collides with: " +
			debugTarget.collidesWith,500, 525);
			c.fillText("No. of waypoints: " +
			debugTarget.wayPoints.length,500, 550);

			c.fillText("Distance to Player: " +
			debugTarget.distanceToPlayer ,500, 575);
			
			let wallsString = "";
			debugTarget.collidesWithWalls.forEach(function(i,j) {
				wallsString += i + ", ";
			})
			c.fillText("collidesWithWalls: " +
			wallsString ,500, 600);
			
			c.fillText("horizontalBuildingCollision: " +
			debugTarget.horizontalBuildingCollision ,500, 625);
			c.fillText("verticalBuildingCollision: " +
			debugTarget.verticalBuildingCollision ,500, 650);


			c.font = 'bold 18pt Calibri';
			c.fillStyle = "white";
			c.fillText("ZOMBIES:", 100, 75)

			c.font = 'bold 14pt Calibri';
			c.fillText("canWalkX: " +
			debugTarget.canWalkX, 100, 125);			
			c.fillText("canWalkY: " +
			debugTarget.canWalkY, 100, 150);
			c.fillText("zombieBlock: " +
			debugTarget.zombieBlock, 100, 175);

			c.fillText("xVector: " +
			debugTarget.xVector, 100, 200);
			c.fillText("yVector: " +
			debugTarget.yVector, 100, 225);

			c.fillText("collisionCourse: " +
			debugTarget.collisionCourse, 100, 250);

			c.fillText("collides with ID: " +
			debugTarget.collidesWithID,100, 275);

			c.fillText("wayPointsReached: " +
			debugTarget.collidesWithID, 100, 300);

			c.fillText("collidesWithType: " +
			debugTarget.collidesWithType, 100, 325);

			c.fillText("canseeplayer: " +
			debugTarget.canSeePlayer, 100, 350);

			c.fillText("redirectedCount: " +
			debugTarget.redirectedCount, 100, 375);
			
			c.fillText("lineStuckOn: " +
			debugTarget.lineStuckOn, 100, 400);
		
			c.fillText("canMove: " +
			debugTarget.canMove, 100, 425);

			c.fillText("collidesWithWall: " +
			debugTarget.collidesWithWall, 100, 450);

			c.fillText("xPrevious: " +
			debugTarget.xPrevious, 100, 475);

			c.fillText("yPrevious: " +
			debugTarget.yPrevious, 100, 500);
			
			c.fillText("stoodStilTimer: " +
			debugTarget.stoodStillTimer, 100, 525);
			
			// c.fillText("onTile.x: " +
			// debugTarget.onTile.x, 100, 550);
			// c.fillText("onTile.y: " +
			// debugTarget.onTile.y, 100, 575);
			c.fillText("inBuilding: " +
			debugTarget.inBuilding, 100, 600);

			let nearWallsString = "";
			//console.log(map[debugTarget.onTile.y][debugTarget.onTile.x]);
			// map[debugTarget.onTile.y][debugTarget.onTile.x].nearWalls.forEach((i, j) => {
			// 	if (j > 0) {
			// 		nearWallsString += " / ";	
			// 	}
			// 	nearWallsString += i.building + ", " + i.wall;
			// })
			c.fillText("Near Walls: " + nearWallsString, 100, 625);
			c.fillText("way point history: " + debugTarget.wayPointsHistory.length, 100, 650);



			c.save();
			c.translate(debugTarget.x - cameraX, debugTarget.y - cameraY );
			c.translate(-debugTarget.x , -debugTarget.y);
			
			c.strokeStyle = "red";
			c.moveTo(debugTarget.x, debugTarget.y)
			c.lineTo(debugTarget.x + (debugTarget.xVector * 5000), debugTarget.y + (debugTarget.yVector * 5000) );
			c.lineWidth = 1;
			c.stroke();
			
			




			for (var line in theBuildings[1].walls) {
				if (theBuildings[1].walls.hasOwnProperty(line)) {
					c.strokeStyle = "green";
					c.linewidth = 1;
					c.rect(theBuildings[1].walls[line].p1x - cameraX + Player1.x, 
					theBuildings[1].walls[line].p1y - cameraY + Player1.y,
					theBuildings[1].walls[line].w, 
					theBuildings[1].walls[line].h);
					c.stroke();
					c.strokeStyle = "red";
				}
			}




			c.restore();
			
			}

			c.font = 'bold 18pt Calibri';
			c.fillStyle = "white";
			c.fillText("Current tile:", 900, 75);
			c.font = 'bold 14pt Calibri';
			// c.fillText("Location: x = " + Player1.x + " (" + Player1.onTile.x + "), y = " + Player1.y + " (" + Player1.onTile.y + ")", 900, 125);
			// c.fillText("Building: " + map[Player1.onTile.y][Player1.onTile.x].building, 900, 150);
			// c.fillText("Speed modifier: " + map[Player1.onTile.y][Player1.onTile.x].speedModifier, 900, 225);
			c.fillText("Speed: " + Player1.speed, 900, 250);
			let nearWallsString = "";
			// map[Player1.onTile.y][Player1.onTile.x].nearWalls.forEach((i, j) => {
			// 	if (j > 0) {
			// 		nearWallsString += " / ";	
			// 	}
			// 	nearWallsString += i.building + ", " + i.wall;
			// })
			
			c.fillText("Near Walls: " + nearWallsString, 900, 175);
			// c.fillText("Near Walls Length: " + map[Player1.onTile.y][Player1.onTile.x].nearWalls.length, 900, 200);
			// intersection
			c.font = 'bold 14pt Calibri';
			c.strokeStyle = "white";
			//c.fillText("x: " + lineIntersectionForDebug[0], 200, 45);
			//c.fillText("y: " + lineIntersectionForDebug[1], 300, 45);
			if (memi % 10 == 0) {
				memUse = window.performance.memory
			}
			memi++
			// hovers around 30-50, occasional spikes to 70-80, even 100
			
			c.fillText("totalJSHeapSize: " + memUse.dtotalJSHeapSize, 900, 300);
			c.fillText("usedJSHeapSize: " + memUse.usedJSHeapSize, 900, 325);
			c.fillText("jsHeapSizeLimit: " + memUse.jsHeapSizeLimit, 900, 350);
			
			// {
			// 	totalJSHeapSize: 29400000,
			// 	usedJSHeapSize: 15200000,
			// 	jsHeapSizeLimit: 1530000000
			//   }

}


function passMessage(message) {
	if (!narratorMessage.activeMessage) {
		narratorMessage.activeMessage = true;
		narratorMessage.message = message;
	}

	if (narratorMessage.activeMessage) {
		if (narratorMessage.message.priority < message.priority) {
			narratorMessage.message = message
		}
	}
}

function updateMessage() {
	c.strokeStyle = "white";
	c.fillText(narratorMessage.message.text, 400, cameraH - 13);

	narratorMessage.message.timeActive++;

	if (narratorMessage.message.timeActive > narratorMessage.message.removeAfter) {
		narratorMessage.activeMessage = false;
		narratorMessage.message.text = "";
		narratorMessage.message.priority = 0;
		narratorMessage.message.timeActive = 0;
		narratorMessage.message.removeAfter = 0;
	} 
}
