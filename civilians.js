function loadCivilian() {
  	for (j = 0; j < theWayPoints.length; j++) {
		// var xHolder = i.x;
		// var xHolder = i.x;
		// var yHolder = i.y;
		theCivilians.push({
			x: theWayPoints[j].x,
			y: theWayPoints[j].y,
			w: 20,
			h: 20,
			xTarget: 0,
			yTarget: 0,
			speed: 2,
			health: 150,
			xdirection: 1,
			ydirection: 0,
			acceleration: 1,
			radius: 0,
			targetAngle: 0,
			angle: 0,
			mot: 0,
			closestVehicle: 0,
			gettingInVehicle: 0,
			inBuilding: 0,
			collideDistance: 80,
			walkTimer: 0,
			walking: true,
			standImage: civStand,
			walkAnimations: ["", civWalk1, civWalk2, civWalk3, civWalk4],
			targetWayPoint: 0,
			targetAngle: 0,
			currentWayPoint: 0,
			facingBackwards: false,
			xVector: 0,
			yVector: 0,
			collisionCourse: false,
			wayPoints: [],
			collidesWithType: "No Collision",
			collidesWithWall: "No Collision",
			verticalBuildingCollision: false,
			horizontalBuildingCollision: false,
			stuck: false,
			collidesWithID: -1,
			currentStatus: "spawned",	
		 });
		theCivilians[j].x = theWayPoints[j].x;
		theCivilians[j].y = theWayPoints[j].y;
		theCivilians[j].currentWayPoint = j;
		theCivilians[j].targetWayPoint = j;
		theCivilians[j].wayPoints[0] = {
			x: theWayPoints[j].x,
			y: theWayPoints[j].y,
			type: "mapWaypoint",
			wayPointNo: j,
		};
	 } // for
}

function updateCivilians() {
	theCivilians.forEach(function(i, j) {
		if (i.wayPoints.length > 0) {
			
// if the civilian has reached the way point 
			if (collidesSpecify(i.x, i.y, i.w, i.h, i.wayPoints[i.wayPoints.length - 1].x - 20, i.wayPoints[i.wayPoints.length - 1].y - 20, 40, 40) ) {
				
// stop walking
			i.walking = false;
			i.currentStatus = "Reached wayPoint"
			
// if this is a map waypoint, log where we are so we can choose a new waypoint that connects to this one
				if (i.wayPoints[i.wayPoints.length - 1].type = "mapWayPoint") {
					i.currentWayPoint = i.wayPoints[i.wayPoints.length - 1].wayPointNo;
				}	
				
// if other waypoints exist, splice the one we just reached
				if (i.wayPoints.length > 0) {
					i.wayPoints.splice (i.wayPoints.length - 1, 1);
				}
			}
		}
		
// if no waypoints exist, we have reached the final destination. 
		if (i.wayPoints.length === 0) {
			
// For now, we will just set a new random waypoint.
			var newTargetWayPoint = Math.floor(Math.random()*theWayPoints[i.currentWayPoint].connections.length);
			i.targetWayPoint = theWayPoints[i.currentWayPoint].connections[newTargetWayPoint];
			i.wayPoints.push({
				x: theWayPoints[i.targetWayPoint].x,
				y: theWayPoints[i.targetWayPoint].y,
				type: "mapWaypoint",
				wayPointNo: i.targetWayPoint,
			});
		}
// set direction for movement		
			i.xVector = getXDirection(i.x, i.y, i.wayPoints[i.wayPoints.length - 1].x, i.wayPoints[i.wayPoints.length - 1].y);
			i.yVector = getYDirection(i.x, i.y, i.wayPoints[i.wayPoints.length - 1].x, i.wayPoints[i.wayPoints.length - 1].y);
			
// set the new target angle.
			var deltaX = i.wayPoints[i.wayPoints.length - 1].x - i.x;
			var deltaY = i.wayPoints[i.wayPoints.length - 1].y - i.y;
			i.targetAngle = Math.atan(deltaY / deltaX);

// some stuff for debugging		
//showWayPoints = true;	
if (i.wayPoints.length > 0 && showWayPoints) {		
//draw collision areas
		lineColor = "black";
		c.beginPath();
		c.save();
		c.translate(i.x - cameraX, i.y - cameraY); 
		c.translate(-i.x , -i.y);
		c.moveTo(i.x - 20, i.y - 20);
		c.lineTo(i.x + 20, i.y + 20);
		c.strokeStyle = "red";
		c.lineWidth = 2;
		c.stroke();
				
		c.beginPath();
		c.moveTo(i.x + 20, i.y - 20);
		c.lineTo(i.x - 20, i.y + 20);
		c.stroke()
		
		c.fillText(j, i.x - 5, i.y - 20);
		c.restore();

		c.beginPath();
		c.save();
		c.translate(i.x - cameraX, i.y - cameraY );
		c.translate(-i.x , -i.y);
		c.strokeStyle = lineColor;
		c.moveTo(i.x, i.y)
		c.lineTo(i.x + (i.xVector * i.collideDistance), i.y + (i.yVector * i.collideDistance) );
		c.lineWidth = 1;
		c.stroke();
		c.restore();
		

//draw interim waypoint FOR DEBUGGING
			i.wayPoints.forEach(function (k, l) {
				if (collidesSpecify(cameraX, cameraY, cameraW, cameraH, k.x - 20, k.y - 20, 40, 40)) {
					c.beginPath();
					c.save();
					c.translate(i.x - cameraX, i.y - cameraY); 
					c.translate(-i.x , -i.y);
					c.moveTo(k.x - 20, k.y - 20);
					c.lineTo(k.x + 20, k.y + 20);
					c.strokeStyle = "blue";
					c.lineWidth = 2;
					c.stroke();
					c.beginPath();
					c.moveTo(k.x + 20, k.y - 20);
					c.lineTo(k.x - 20, k.y + 20);
					c.stroke()
					c.fillStyle = "black";
					c.fillText(j, i.x - 5, i.y - 20);
					c.restore();
				}
			});
		 }
	
// Check if the civilian is walking and if so, detect collision	
		if (i.walking) {
			
// check collisions with other civilians
				for (k = 0; k < theCivilians.length - 1; k++) {
					if ( k != j ) {
						if (collidesSpecify(i.x + ((i.speed * 10) * i.xVector), i.y + ((i.speed * 10) * i.yVector), i.w, i.h, theCivilians[k].x, theCivilians[k].y, theCivilians[k].w, theCivilians[k].h)) {
							i.collisionCourse = true;
							i.collidesWithID = k;
							i.collidesWithType = "Civilian";
							
						}	
					}
				}
				
checkNPCCollisionWithBuilding(i);
			
// check collisions with player
				if (collidesSpecify(i.x + ((i.speed * 10) * i.xVector), i.y + ((i.speed * 10) * i.yVector), i.w, i.h, Player1.x, Player1.y, Player1.w, Player1.h)) {
					i.collisionCourse = true;
					i.collidesWithType = "Player";
					i.collidesWithID = -1;
				}
			
// This part defines what we do if a collision was detected
				if (i.collisionCourse) {

				
					if (i.collidesWithType !== "Civilian" || i.wayPoints[i.wayPoints.length - 1].type !== "Avoid Civilian") {
						i.walking = false;

// if two civilian collide with each other (must be head on), have them move opposite directions to avoid each other (i.e., both rotate clockwise), if it's a civilian but not headon (hit their side, or shunt), make it random as to which way they move to avoid				
						if (i.collidesWithType === "Civilian") { 
							if (theCivilians[i.collidesWithID].collidesWithID === j) {
								var holdAngle = i.angle + 1.5;
							} else {
								var directionRandomizer = Math.round(Math.random());
								if (directionRandomizer === 0) {
									var holdAngle = i.angle + 1.5;
								} else {
									var holdAngle = i.angle - 1.5;
								}
							}
						}

// if colliding with the player, it's random as to whether we move to the left or to the right to avoid						
						if (i.collidesWithType === "Player") {
							var directionRandomizer = Math.round(Math.random());
							if (directionRandomizer === 0) {
								var holdAngle = i.angle + 1.5;
							} else {
								var holdAngle = i.angle - 1.5;
							}
						}
							
// set a waypoint to the side, so can move around the collision. The 80 here is how far away to walk -- can customize this later to make it adjust based on the size of the colliding object.
						if (i.collidesWithType === "Player" || i.collidesWithType === "Civilian") {
							var holdCos = Math.cos(holdAngle);
							var holdSin = Math.sin(holdAngle);
							i.wayPoints.push({
								x: i.x + (holdCos * 80),
								y: i.y + (holdSin * 80),
								type: "Avoid Civilian",
							});
						}
						
						if (i.collidesWithType === "Building") {
							
							
						}
						
						
						i.collisionCourse = false;
						i.collidesWith = 0;
						
						i.xVector = getXDirection(i.x, i.y, i.wayPoints[i.wayPoints.length - 1].x, i.wayPoints[i.wayPoints.length - 1].y);
						i.yVector = getYDirection(i.x, i.y, i.wayPoints[i.wayPoints.length - 1].x, i.wayPoints[i.wayPoints.length - 1].y);
					}
				} 
			}
		 
			if (!i.walking) {
				if (i.wayPoints.length > 0) {
					i.angle = getAngle(i.x, i.y, i.wayPoints[i.wayPoints.length - 1].x, i.wayPoints[i.wayPoints.length - 1].y);
					i.walking = true;
				} 
			} 
		
			if (i.walking) {
				if (!i.horizontalBuildingCollision) {
					i.x += i.speed * i.xVector;
				}
				if (!i.verticalBuildingCollision) {
					i.y += i.speed * i.yVector;
				}
				if (i.horizontalBuildingCollision && i.verticalBuildingCollision) {
					i.stuck = true;
					// set a random way point but check it's not inside a building
				}
				
			}
	});
	if (theCivilians.length === 0) {
		loadCivilian();
	}	
} //updateCivilians

function drawCivilians() {

theCivilians.forEach( function(i, j) {

if (i.x > cameraX - 100 && i.x < cameraX + cameraW + 100 && i.y > cameraY - 100 && i.y < cameraY + cameraH + 100 ) {	
	//drawing begins
		
		
		
		
		
		
		c.beginPath();
		c.save();
		c.translate(i.x - cameraX, i.y - cameraY);
		
		if (i.mot === 0) {
		
		
		
		if (theWayPoints[i.targetWayPoint].x - i.x < 0) {
			c.rotate(i.angle);
			//c.scale(-1, 1);
		} else {
			c.rotate(i.angle);
			
		} 
		
		if (theWayPoints[i.targetWayPoint].y - i.y < 0) {
			//c.rotate(-i.angle);
		//	c.scale(1, 1);
		
		} else {
			//c.rotate(i.angle);
			//c.scale(1, -1);
		}
		
		
		c.translate(-i.x , -i.y);
		
		// console.log("j: x = "+ i.x + " y = " + i.y);
		
		
	
		
		
		
		if (i.walking === true ) {
		
		i.walkTimer += 0.15;
		
		if (i.walkTimer >= 3.8) {
			i.walkTimer = 0.1;
		}
		c.drawImage( i.walkAnimations[Math.ceil(i.walkTimer)], i.x - (i.w / 2) - 10, i.y - (i.h / 2) - 10, i.w + 20, i.h + 20);
		
		c.strokeStyle = "black";
		c.rect(i.x , i.y , i.w, i.h);
		c.lineWidth = 1;
		c.stroke();	
		
		
		} else {
		
		i.walkTimer = 0;
		
		c.drawImage( i.standImage, i.x - (i.w / 2) - 10, i.y - (i.h / 2) - 10, i.w + 20, i.h + 20);
		
		}

		}

		c.restore();
		c.closePath();
	}
		});

} // drawCivilians


function drawSplats (){

	theSplats.forEach(function (i, j) {
	
		c.beginPath();
		c.save();
		c.translate(i.x - cameraX, i.y - cameraY); 
		c.translate(-i.x, -i.y);
		c.fillStyle = "red";
		c.rect(i.x, i.y, i.w, i.h);
		c.fill();
		c.restore();
	});

} // draw splats


