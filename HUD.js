function drawHUD() {
	// stamina bar
	c.font = '18pt Calibri';
	c.fillStyle = 'black';
	c.strokeStyle = "black";
	c.fillText("Stamina:", 10, 25);
	//console.log(race.completeTimer);
	if (race.on || race.completeTimer > 0.1) {
		var raceDisplay = Math.round(race.currentRaceTime * 100) / 100
		if (race.bestRaceTime < raceDisplay && race.bestRaceTime > 0) {
			c.fillStyle = 'red';
		}
		c.fillText("Race Time: " + raceDisplay, 10, 75);
		c.fillStyle = 'black';
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
	//c.fillText("y: " + Player1.y, 10, 75);
	
	if (Player1.energy > 0) {
		c.beginPath();
		c.moveTo(105, 20);
		c.lineTo(105 + Player1.energy, 20);
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
		c.fillText("TIRED", 110, 25);
	}
	
	
	
 	// health bar
	c.font = '18pt Calibri';
	c.fillStyle = 'black';
	c.strokeStyle = "black";
	c.fillText("Health:", 280, 25);	
	if (Player1.health > 0) {
		c.beginPath();
		c.moveTo(360, 20);
		c.lineTo(360 + Player1.health, 20);
		c.lineWidth = 10;
		if (Player1.health < 50) {	
			c.strokeStyle = "red";
		}
	c.stroke();
	} else {
		c.strokeStyle = "red";
		c.fillStyle = 'red';
		c.lineWidth = 10;
		c.font = 'bold 18pt Calibri';
		c.fillText("DEAD", 410, 25);
	}
	c.stroke();

	//timer
	c.font = '18pt Calibri';
	c.fillStyle = 'black';
	c.strokeStyle = "black";
	c.fillText("Time:", 520, 25);	
	c.fillText(Math.floor(time), 580, 25);
	
	c.fillText("Weapon:", 630, 25);	
	c.fillText(Player1.activeWeapon, 725, 25);	
	
	c.fillText("Ammo:", 770, 25);	
	c.fillText(Player1.ammo[Player1.activeWeapon], 850, 25);	
	
	c.fillText("Kills:", 930, 25);	
	c.fillText(Player1.kills, 980, 25);	
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
			
			c.fillText("onTile.x: " +
			debugTarget.onTile.x, 100, 550);
			c.fillText("onTile.y: " +
			debugTarget.onTile.y, 100, 575);
			c.fillText("inBuilding: " +
			debugTarget.inBuilding, 100, 600);

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
			
			// intersection
			c.font = 'bold 14pt Calibri';
			c.strokeStyle = "white";
			//c.fillText("x: " + lineIntersectionForDebug[0], 200, 45);
			//c.fillText("y: " + lineIntersectionForDebug[1], 300, 45);
		
}