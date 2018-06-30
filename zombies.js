function spawnZombie() {
	if (theZombies.length < 50) {
// spawns a zombie along the edge of the map, first by getting a random binary number which chooses either a horizontal or a vertical edge.
		let positionChooser = Math.floor(Math.random() * 2);
		let spawnX;
		let spawnY;
		if (positionChooser === 0) {
// 0 means the zombie will go along the a vertical edge. So there's another random number here which determines whether it will be the left or right edge.
			if (Math.floor(Math.random() * 2) === 0) {
// an x value of 10 means the zombie will spawn 10 pixels from the left edge of the map
				spawnX = 10;
			} else {
//otherwise, we spaen it 10 pixels to the left of the right edge of the map, as determined by the length of row [0] in the map array (any would do, they are all the same size because it's just a simple grid.)
			spawnX = (map[0].length * 50) - 10
			}
// then we just choose a random number for the Y coordinate based on the length of the map * 50, which is the width of the tiles
			spawnY = Math.floor(Math.random() * (map.length * 50))
		} else {
// 1 means the zombie will spawn along a horizontal edge. This is exactly the same principle as above
			if (Math.floor(Math.random() * 2) === 0) {
				spawnY = 10;
			} else {
				spawnY = (map.length * 50) - 10
			}
			spawnX = Math.floor(Math.random() * (map[0].length * 50))
		}
		theZombies.push({
			x: spawnX,
			y: spawnY,
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
			closestVehicle: 0,
			collideDistance: 80,
			walkTimer: 0,
			walking: true,
			standImage: zombieStand,
			walkAnimations: ["", zombieWalk1, zombieWalk2, zombieWalk3, zombieWalk4, zombieWalk5, zombieWalk6, zombieWalk7, zombieWalk8, zombieWalk9, zombieWalk10, zombieWalk11, zombieWalk12, zombieWalk13, zombieWalk14, zombieWalk15, zombieWalk16],
			targetWayPoint: 0,
			targetAngle: 0,
			currentWayPoint: 0,
			facingBackwards: false,
			xVector: 0,
			yVector: 0,
			collisionCourse: false,
			canWalkX: true,
			canWalkY: true,
			wayPoints: [],
			collidesWithType: "No Collision",
			collidesWithWall: "No Collision",
			verticalBuildingCollision: false,
			horizontalBuildingCollision: false,
			stuck: false,
			collidesWithID: -1,
			currentStatus: "spawned",
			type: "zombie",
		});
	}
}

function updateZombies() {
	theZombies.forEach(function(i, j) {
// target the player and set direction for movement. Later will make them target civilians too but first thing's first.

		if (i.wayPoints.length === 0) {
// if there is no waypoint, the zombie is not navigating around an obstable, so head for the player
			setNPCdirection(i, Player1);
		}
		
// Check if the zombie is walking and if so, set collision course to false, detect collision with Player, buildings, and other obstacles. 	
		if (i.walking) {
			i.collisionCourse = false;
			
// check for player collision
			if (collidesSpecify(i.x + ((i.speed) * i.xVector), i.y + ((i.speed) * i.yVector), i.w, i.h, Player1.x, Player1.y, Player1.w, Player1.h)) {
				i.collisionCourse = true;
				i.collidesWithType = "Player";
				i.collidesWithID = -1;
				Player1.health -= 1;
			}

// check collision with buildings
			checkNPCCollisionWithBuilding(i)
			if (i.collidesWithType === "Avoid Building") {
				i.x -= (i.speed * i.xVector);
			}			
			if (i.wayPoints.length > 0) {
				setNPCdirection(i, i.wayPoints[i.wayPoints.length - 1]);
			}

// check collision with waypoints
			if (i.wayPoints.length > 0) {
// if zombie can see the player, ignore the waypoint and head right for him
				var canSeePlayer = true;
				buildingsOnScreen.forEach(function(k, l) {
					for (var line in theBuildings[k].walls) {
						if (theBuildings[k].walls.hasOwnProperty(line)) {
							
							c.beginPath();
							c.moveTo(i.x + (i.w / 2), 
							i.y + (i.h / 2));
							c.lineTo(Player1.x + (Player1.w / 2), 
							Player1.y + (Player1.h / 2));
							c.stroke();
							
							if (getLineIntersection(
							i.x + (i.w / 2), 
							i.y + (i.h / 2), 
							Player1.x + (Player1.w / 2), 
							Player1.y + (Player1.h / 2),
							theBuildings[k].walls[line].p1x, 
							theBuildings[k].walls[line].p1y,
							theBuildings[k].walls[line].p2x, 
							theBuildings[k].walls[line].p2y,
							)){
								canSeePlayer = false;
							}
						}	
					}
				});
				
				if (canSeePlayer === true) {
					i.wayPoints.splice(0);
					setNPCdirection(i, Player1);
				} else {				
					if (collidesSpecify(i.x, i.y, i.w, i.h, i.wayPoints[i.wayPoints.length - 1].x - 20, i.wayPoints[i.wayPoints.length - 1].y - 20, 40, 40)) {
						i.collisionCourse = false;
						i.collidesWithType = null;
						i.collidesWithID = null;
						i.wayPoints.splice(i.wayPoints.length - 1);
						setNPCdirection(i, Player1);			
					}
				}
			}

			
// check collision with other zombies to prevent them standing on top of each other
			// x axis collisions
			i.canWalkX = true;
			theZombies.forEach(function(k, l) {
				if (j !== l) {
					if (collidesSpecify(
						i.x + ((i.speed) * i.xVector), 
						i.y, 
						i.w, 
						i.h, 
						k.x, 
						k.y, 
						k.w, 
						k.h
					)) {
						i.canWalkX = false;
						if (i.wayPoints.length > 0 && k.wayPoints.length > 0) {
							if (j < l) {
								k.wayPoints[k.wayPoints.length - 1] = i.wayPoints[i.wayPoints.length - 1];
							} else {
								i.wayPoints[i.wayPoints.length - 1] = k.wayPoints[k.wayPoints.length - 1];								
							}
						}
					}
				}
			});
			i.canWalkY = true;
			theZombies.forEach(function(k, l) {
				if (j !== l) {
					if (collidesSpecify(
						i.x, 
						i.y + ((i.speed) * i.yVector), 
						i.w, 
						i.h, 
						k.x, 
						k.y, 
						k.w, 
						k.h
					)) {
						i.canWalkY = false;
						if (i.wayPoints.length > 0 && k.wayPoints.length > 0) {
							if (j < l) {
								k.wayPoints[k.wayPoints.length - 1] = i.wayPoints[i.wayPoints.length - 1];
							} else {
								i.wayPoints[i.wayPoints.length - 1] = k.wayPoints[k.wayPoints.length - 1];								
							}
						} else { /* zombie goes to random waypoint on collision
							let newXTarget = k.x + (Math.floor(Math.random() * 30));
							let newYTarget = k.y + (Math.floor(Math.random() * 30));
							k.wayPoints.push({
								x: newXTarget,
								y: newYTarget,
								type: "Zombie Collision",
							}); */
						}
					}
				}
			});		
		} // if walking
		
// move the zombie if needed
		if (i.collisionCourse === false) {
			if (i.collidesWithType != null) {
				i.collidesWithType = null;
				i.collidesWithID = null;
			}
			if (i.canWalkX) {
				i.x += i.speed * i.xVector; 
			}
			if (i.canWalkY) {
				i.y += i.speed * i.yVector;
			}
		}
		
// Check building collision. This needs to be more sophisticated with zombies, such that they ignore wayPoints if there is a direct line of sight to the player
		//checkNPCCollisionWithBuilding(i);
	
	
	}); //zombies forEach
} // updateZombies

function drawZombies() {
	theZombies.forEach(function(i, j) {
		if (isOnScreen(i)) {
			c.save();
			c.translate(i.x + (i.w / 2) - cameraX, i.y + (i.h / 2) - cameraY);
			if (i.xTarget - i.x < 0) {
				c.rotate(i.angle);
				c.scale(-1, 1);
			} else {
				c.rotate(i.angle);
			} 
			c.translate(-i.x - (i.w / 2), -i.y - (i.h / 2) );
			
			
			if (i.walking === true ) {
				i.walkTimer += 0.15;	
				if (i.walkTimer >= 15.8) {
					i.walkTimer = 0.1;
				}
				c.drawImage( i.walkAnimations[Math.ceil(i.walkTimer)], i.x - 15, i.y - 15 , i.w + 30, i.h + 30);
			
			} else {
				i.walkTimer = 0;
				//c.drawImage( i.standImage, i.x - (i.w / 2) - 15, i.y - (i.h / 2) - 15, i.w + 30, i.h + 30);
			}
			c.restore();
		} // if isOnScreen
	}); // theZombies.forEach
} // drawZombies();
