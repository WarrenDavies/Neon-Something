function spawnZombie() {
	if (theZombies.length < 100) {
	//if (theZombies.length < 1) {
// spawns a zombie along the edge of the map, first by getting a random binary number which chooses either a horizontal or a vertical edge.
		let positionChooser = Math.floor(Math.random() * 2);
		let spawnX;
		let spawnY;
		if (positionChooser === 0) {
// 0 means the zombie will go along the a vertical edge. So there's another random number here which determines whether it will be the left or right edge.
			if (Math.floor(Math.random() * 2) === 0) {
// an x value of 10 means the zombie will spawn 10 pixels from the left edge of the map
				spawnX = 30;
			} else {
//otherwise, we spaen it 10 pixels to the left of the right edge of the map, as determined by the length of row [0] in the map array (any would do, they are all the same size because it's just a simple grid.)
			spawnX = (map[0].length * 50) - 30
			}
// then we just choose a random number for the Y coordinate based on the length of the map * 50, which is the width of the tiles
			spawnY = Math.floor(Math.random() * (map.length * 50))
		} else {
// 1 means the zombie will spawn along a horizontal edge. This is exactly the same principle as above
			if (Math.floor(Math.random() * 2) === 0) {
				spawnY = 30;
			} else {
				spawnY = (map.length * 50) - 30
			}
			spawnX = Math.floor(Math.random() * (map[0].length * 50))
		}

		//spawnX = Player1.x - 200;
		//spawnY = Player1.y - 200;
		let zomID = theZombies.length;
		if (Player1.kills === 0) {
			var zomHealth = 1;
			var zomSpeed = 3;
		} else {
			var zomHealth = Math.floor(Player1.kills / 100) + 1;
			var zomSpeed = Math.floor(Player1.kills / 100) + 3;
		}
		theZombies.push({
			ID: zomID,
			x: spawnX,
			y: spawnY,
			xPrevious: spawnX,
			yPrevious: spawnY,
			w: 20,
			h: 20,
			xTarget: 0,
			yTarget: 0,
			speed: zomSpeed,
			health: zomHealth,
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
			wayPointsHistory: [],
			wayPointGrace: 0,
			collidesWithType: "No Collision",
			collidesWithWall: "No Collision",
			collidesWithWalls: [],
			zombieBlock: false,
			verticalBuildingCollision: false,
			horizontalBuildingCollision: false,
			stuck: false,
			collidesWithID: -1,
			currentStatus: "spawned",
			type: "zombie",
			wayPointsReached: 0,
			canSeePlayer: false,
			stoodStillTimer: 0,
			byOrderOf: -1,
			stepDistance: 8,
			redirectedCount: 0,
			lineStuckOn: "",
			canMOve: "",
			onTile: {x: 0, y: 0},
			inBuilding: false,
			distanceToPlayer: 0,
		});
		theZombies[theZombies.length -1].onTile = returnTile(theZombies[theZombies.length -1]);
	}
}

function updateZombies() {
	theZombies.forEach(function(i, j) {
// target the player and set direction for movement. Later will make them target civilians too but first thing's first.

		// first let's get the distance to the player
		i.distanceToPlayer = getDistance(i.x, i.y, Player1.x, Player1.y);

		if (i.wayPoints.length === 0) {
// if there is no waypoint, the zombie is not navigating around an obstable, so head for the player
			setNPCdirection(i, Player1);
		}
		
// Check if the zombie is walking and if so, set collision course to false, detect collision with Player, buildings, and other obstacles. 	
		if (i.walking) {
			i.collisionCourse = false;
			i.canWalkX = true;
			i.canWalkY = true;

// check for player collision
			if (collidesSpecify(i.x + ((i.speed) * i.xVector), i.y + ((i.speed) * i.yVector), i.w, i.h, Player1.x, Player1.y, Player1.w, Player1.h)) {
				i.collisionCourse = true;
				i.collidesWithType = "Player";
				i.collidesWithID = -1;
				Player1.health -= 1;
				i.canWalkX = false;
				i.canWalkY = false;
			} 
			
			
// check collision with buildings
			if (i.collisionCourse === false) {
				if (checkNPCCollisionWithBuilding(i)) {
					i.x -= (i.speed * i.xVector);
					i.y -= (i.speed * i.yVector);
					if (i.wayPoints.length > 0) {
						setNPCdirection(i, i.wayPoints[i.wayPoints.length - 1]);
					}
				}
			}
// check collision with waypoints
			if (i.collisionCourse === false) {
				if (i.wayPoints.length > 0) {
// if zombie can see the player, ignore the waypoint and head right for him
					
					// first check whether the player is within range/eyesight 
										
					if (i.distanceToPlayer < 200) {
						i.canSeePlayer = true;
						var alreadyFoundPlayer = false;
						buildingsOnScreen.forEach(function(k, l) {
							if (!alreadyFoundPlayer) {
								for (var line in theBuildings[k].walls) {
									if (theBuildings[k].walls.hasOwnProperty(line)) {
										if (checkIfZombieCanSeePlayer(i, Player1, k, line)) {
											// do something if the zombie CAN see the player
										} else {
											i.canSeePlayer = false;
											alreadyFoundPlayer = true;
										}
									}	
								}
							}
						});
					}
					
					if (i.canSeePlayer === true) {
						i.wayPoints.splice(0);
						i.byOrderOf = -1
						i.collisionCourse = false;
						setNPCdirection(i, Player1);
					} else {				
						if (collidesSpecify(i.x, i.y, i.w, i.h, i.wayPoints[i.wayPoints.length - 1].x - 20, i.wayPoints[i.wayPoints.length - 1].y - 20, 40, 40)) {
							i.wayPointsHistory.push(i.wayPoints[i.wayPoints.length - 1]);
							i.wayPointGrace = 200;
							i.collisionCourse = false;
							i.collidesWithType = null;
							i.collidesWithID = null;
							i.byOrderOf = -1;
							i.wayPoints.splice(i.wayPoints.length - 1);
							setNPCdirection(i, Player1);			
						}
					}
				}
			}
			
// check collision with other zombies to prevent them standing on top of each other
			// x axis collisions
			if (i.collisionCourse === false) {
				
				i.zombieBlock = false;
				theZombies.forEach(function(k, l) {
					if (j !== l) {
						if (collidesSpecify(
							i.x + ((i.speed * i.stepDistance) * i.xVector), 
							i.y, 
							i.w, 
							i.h, 
							k.x, 
							k.y, 
							k.w, 
							k.h
						)) {
							i.canWalkX = false;
							i.zombieBlock = true;
							i.collidesWithID = l;
							if (i.wayPoints.length > 0 && k.wayPoints.length > 0) {
								let xDifference1 = (Player1.x - i.wayPoints[i.wayPoints.length - 1].x) * (Player1.x - i.wayPoints[i.wayPoints.length - 1].x);
								let yDifference1 = (Player1.y - i.wayPoints[i.wayPoints.length - 1].y) * (Player1.y - i.wayPoints[i.wayPoints.length - 1].y);
								let distanceHolder1 = Math.sqrt(xDifference1 + yDifference1);
								
								let xDifference2 = (Player1.x - k.wayPoints[k.wayPoints.length - 1].x) * (Player1.x - k.wayPoints[k.wayPoints.length - 1].x);
								let yDifference2 = (Player1.y - k.wayPoints[k.wayPoints.length - 1].y) * (Player1.y - k.wayPoints[k.wayPoints.length - 1].y);
								let distanceHolder2 = Math.sqrt(xDifference2 + yDifference2);
								
								if (distanceHolder1 < distanceHolder2) {
									k.wayPoints.splice(0);
									k.wayPoints.push(i.wayPoints[i.wayPoints.length - 1]);
									setNPCdirection(k, i.wayPoints[i.wayPoints.length - 1]);
								} else {
									i.wayPoints.splice(0);
									i.wayPoints.push(k.wayPoints[k.wayPoints.length - 1]);
									setNPCdirection(i, k.wayPoints[k.wayPoints.length - 1]);
								}
							}
							if (i.wayPoints.length > 0 && k.wayPoints.length === 0) {
								if (k.wayPointsGrace === 0) {
									k.wayPoints[k.wayPoints.length - 1] = i.wayPoints[i.wayPoints.length - 1];
									setNPCdirection(k, i.wayPoints[i.wayPoints.length - 1]);
								}
							}
							if (k.wayPoints.length > 0 && i.wayPoints.length === 0) {
								if (i.wayPointsGrace === 0) {
									i.wayPoints[i.wayPoints.length - 1] = k.wayPoints[k.wayPoints.length - 1];
									setNPCdirection(i, k.wayPoints[k.wayPoints.length - 1]);	
								}
							}
						}
					}
				});
				
				theZombies.forEach(function(k, l) {
					if (j !== l) {
						if (collidesSpecify(
							i.x, 
							i.y + ((i.speed * i.stepDistance) * i.yVector), 
							i.w, 
							i.h, 
							k.x, 
							k.y, 
							k.w, 
							k.h
						)) {
							i.canWalkY = false;
							i.zombieBlock = true;
							i.collidesWithID = l;
							if (i.wayPoints.length > 0 && k.wayPoints.length > 0) {
								let xDifference1 = (Player1.x - i.wayPoints[i.wayPoints.length - 1].x) * (Player1.x - i.wayPoints[i.wayPoints.length - 1].x);
								let yDifference1 = (Player1.y - i.wayPoints[i.wayPoints.length - 1].y) * (Player1.y - i.wayPoints[i.wayPoints.length - 1].y);
								let distanceHolder1 = Math.sqrt(xDifference1 + yDifference1);
								
								let xDifference2 = (Player1.x - k.wayPoints[k.wayPoints.length - 1].x) * (Player1.x - k.wayPoints[k.wayPoints.length - 1].x);
								let yDifference2 = (Player1.y - k.wayPoints[k.wayPoints.length - 1].y) * (Player1.y - k.wayPoints[k.wayPoints.length - 1].y);
								let distanceHolder2 = Math.sqrt(xDifference2 + yDifference2);
								
								if (distanceHolder1 < distanceHolder2) {
									k.wayPoints.splice(0);
									k.wayPoints[0] = i.wayPoints[i.wayPoints.length - 1];
									setNPCdirection(k, i.wayPoints[i.wayPoints.length - 1]);
								} else {
									i.wayPoints.splice(0);
									i.wayPoints[0] = k.wayPoints[k.wayPoints.length - 1];
									setNPCdirection(i, k.wayPoints[k.wayPoints.length - 1]);
								}
							}
							if (i.wayPoints.length > 0 && k.wayPoints.length === 0) {
								if (k.wayPointsGrace === 0) {
									k.wayPoints[k.wayPoints.length - 1] = i.wayPoints[i.wayPoints.length - 1];
									setNPCdirection(k, i.wayPoints[i.wayPoints.length - 1]);
								}
							}
							if (k.wayPoints.length > 0 && i.wayPoints.length === 0) {
								if (i.wayPointsGrace === 0) {
									i.wayPoints[i.wayPoints.length - 1] = k.wayPoints[k.wayPoints.length - 1];
									setNPCdirection(i, k.wayPoints[k.wayPoints.length - 1]);
								}
							}
						}
					}
				});
				if (!(i.canWalkX) && !(i.canWalkY) && i.collidesWithType === "zombie") {

				}
			}
		} // if walking
		
// move the zombie if needed
		
			
		if (i.collisionCourse === false) {
			if (i.collidesWithType != null) {
				i.collidesWithType = null;
				i.collidesWithID = null;
			}
			if (i.canWalkX) {
				i.x += i.speed * i.xVector; 
				i.stoodStillTimer = 0;
			}
			if (i.canWalkY) {
				i.y += i.speed * i.yVector;
				i.stoodStillTimer = 0;
			}
			i.onTile = returnTile(i);
			if (i.onTile.y >= 0 && i.onTile.x >= 0) {
				try {
					i.inBuilding = map[i.onTile.y][i.onTile.x].building;
				}
				catch (e) {
					console.log("zombie draw error");
					console.log("i.x: " + i.x + " i.y: " + i.y );
					console.log(i.onTile.x + " " + i.onTile.y);
				}
			}
		} else {
			

			if ( !(i.zombieBlock) || (i.xPrevious === i.x && i.yPrevious === i.y)) {
				
			}
		}
		

		if (Math.floor(i.xPrevious) === Math.floor(i.x) && Math.floor(i.yPrevious) === Math.floor(i.y)) {
			i.stoodStillTimer += 1;
		}



		buildingsOnScreen.forEach(function(k, l) {
			// collision rebound
			//i.x -= ((i.speed * 2) * i.xVector);
			//i.y -= ((i.speed * 2) * i.yVector);
			i.lineStuckOn = "";
			for (var line in theBuildings[k].walls) {
				if (collidesSpecify(
					i.x, 
					i.y, 
					i.w, 
					i.h, 
					k.x, 
					k.y, 
					k.w, 
					k.h
				)) {
					i.lineStuckOn = line;
					if (line === left || line === left2) {
						if (i.inBuilding) {
							i.x += 1; 
						} else {
							i.x -= 1;
						}
					}
					if (line === right || line === right2) {
						if (i.inBuilding) {
							i.x -= 1; 
						} else {
							i.x += 1;
						}
					}
					if (line === top || line === top2) {
						if (i.inBuilding) {
							i.y += 1; 
						} else {
							i.y -= 1;
						}
					}
					if (line === bottom || line === bottom2) {
						if (i.inBuilding) {
							i.y -= 1; 
						} else {
							i.y += 1;
							console.log("shove");
						}
					}
				}

			}
			if (i.lineStuckOn === "") {
				i.collisionCourse = false;
			}
		});














		theZombies.forEach(function(k, l) {
			if (j !== l) {
				if (collidesSpecify(
					i.x, 
					i.y, 
					i.w, 
					i.h, 
					k.x, 
					k.y, 
					k.w, 
					k.h
				)) {
					iCenter = {
						x: i.x + (i.w / 2),
						y: i.y + (i.h / 2),
					};
					kCenter = {
						x: k.x + (k.w / 2),
						y: k.y + (k.h / 2),
					};

					let target = getXandYDirection(iCenter.x, iCenter.y, kCenter.x, kCenter.y);

					let iCanMove = true;
					buildingsOnScreen.forEach(function(m, n) {
						for (var line in theBuildings[m].walls) {
							if (iCanMove === true) {
								if (collidesSpecify(
									i.x - (target.xTarget * i.speed), 
									i.y - (target.yTarget * i.speed), 
									i.w, 
									i.h, 
									m.x, 
									m.y, 
									m.w, 
									m.h
								)) {
									iCanMove = false;
								}
							}
						}
					});
					if (iCanMove) {
						i.x -= (target.xTarget * i.speed);
						i.y -= (target.yTarget * i.speed);
					}
					i.canMove = iCanMove;
					let kCanMove = true;
					buildingsOnScreen.forEach(function(m, n) {
						for (var line in theBuildings[m].walls) {
							if (kCanMove === true) {
								if (collidesSpecify(
									k.x + (target.xTarget * i.speed), 
									k.y + (target.yTarget * i.speed), 
									k.w, 
									k.h, 
									m.x, 
									m.y, 
									m.w, 
									m.h
								)) {
									kCanMove = false;
								}
							}
						}
					});
					if (kCanMove) {
						k.x += (target.xTarget * i.speed);
						k.y += (target.yTarget * i.speed);
					}
					k.canMove = kCanMove;
				}
			}
		});
		//}
		if (i.wayPointGrace > 0) {
			i.wayPointGrace--;
		}
		i.xPrevious = i.x;
		i.yPrevious = i.y;

		// check collision with explosions
		if (theExplosions.length > 0) {
			for (k = 0; k < theExplosions.length; k++ ) {
				if (Math.sqrt((i.x - theExplosions[k].x) * (i.x - theExplosions[k].x) + (i.y - theExplosions[k].y) * (i.y - theExplosions[k].y)) < theExplosions[k].r) {
					i.health -= theExplosions[k].power;
					if (i.health < 0) {
						theSplats.push({x: i.x - (i.w / 2), y: i.y - (i.h / 2), w: i.w, h: i.h });
						theZombies.splice(j, 1);
						break;
					}
				}
			}
		}

	}); //zombies forEach
} // updateZombies

function checkIfZombieCanSeePlayer(i, Player1, k, line) {
	

// create array of corners and check each one, not just the center of the zombie - needs to be a completely clear path
// zombieCorners = [
// 	{ 

// 	}
// ]

	
	if (getLineIntersection(
	i.x, 
	i.y, 
	Player1.x, 
	Player1.y,
	theBuildings[k].walls[line].p1x, 
	theBuildings[k].walls[line].p1y,
	theBuildings[k].walls[line].p2x, 
	theBuildings[k].walls[line].p2y,
	)
	
	
	||

	getLineIntersection(
	i.x + i.w, 
	i.y, 
	Player1.x + Player1.w, 
	Player1.y,
	theBuildings[k].walls[line].p1x, 
	theBuildings[k].walls[line].p1y,
	theBuildings[k].walls[line].p2x, 
	theBuildings[k].walls[line].p2y,
	)

	||

	getLineIntersection(
	i.x, 
	i.y + i.h, 
	Player1.x, 
	Player1.y + Player1.h,
	theBuildings[k].walls[line].p1x, 
	theBuildings[k].walls[line].p1y,
	theBuildings[k].walls[line].p2x, 
	theBuildings[k].walls[line].p2y,
	)

	||

	getLineIntersection(
	i.x + i.w, 
	i.y + i.h, 
	Player1.x + Player1.w, 
	Player1.y + Player1.h,
	theBuildings[k].walls[line].p1x, 
	theBuildings[k].walls[line].p1y,
	theBuildings[k].walls[line].p2x, 
	theBuildings[k].walls[line].p2y,
	)
	){
		return false;
	} else {
		return true;
	}
}


// one that works
// function checkIfZombieCanSeePlayer(i, Player1, k, line) {
	
// 	zombieCorners = [
// 		{ 
	
// 		}
// 	]
	
		
// 		if (getLineIntersection(
// 		i.x, 
// 		i.y, 
// 		Player1.x, 
// 		Player1.y,
// 		theBuildings[k].walls[line].p1x, 
// 		theBuildings[k].walls[line].p1y,
// 		theBuildings[k].walls[line].p2x, 
// 		theBuildings[k].walls[line].p2y,
// 		)
		
		
// 		||
	
// 		getLineIntersection(
// 		i.x + i.w, 
// 		i.y, 
// 		Player1.x + Player1.w, 
// 		Player1.y,
// 		theBuildings[k].walls[line].p1x, 
// 		theBuildings[k].walls[line].p1y,
// 		theBuildings[k].walls[line].p2x, 
// 		theBuildings[k].walls[line].p2y,
// 		)
	
// 		||
	
// 		getLineIntersection(
// 		i.x, 
// 		i.y + i.h, 
// 		Player1.x, 
// 		Player1.y + Player1.h,
// 		theBuildings[k].walls[line].p1x, 
// 		theBuildings[k].walls[line].p1y,
// 		theBuildings[k].walls[line].p2x, 
// 		theBuildings[k].walls[line].p2y,
// 		)
	
// 		||
	
// 		getLineIntersection(
// 		i.x + i.w, 
// 		i.y + i.h, 
// 		Player1.x + Player1.w, 
// 		Player1.y + Player1.h,
// 		theBuildings[k].walls[line].p1x, 
// 		theBuildings[k].walls[line].p1y,
// 		theBuildings[k].walls[line].p2x, 
// 		theBuildings[k].walls[line].p2y,
// 		)
// 		){
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	}



function drawZombies() {
	theZombies.forEach(function(i, j) {
		if (isOnScreen(i)) {
			
		
			// Collision area of the current location and the location the zombie is trying to move into
			// c.beginPath();
			// c.strokeStyle = "blue";
			// c.lineWidth = 1;
			// c.rect(i.x + ((i.speed * i.stepDistance) * i.xVector) - cameraX, i.y + ((i.speed * i.stepDistance) * i.yVector) - cameraY, i.w, i.h);
			// c.stroke();a

			// c.beginPath();
			// c.fillStyle = "black";
			// c.lineWidth = 1;
			// c.rect(i.x - cameraX, i.y - cameraY, i.w, i.h);
			// c.stroke();
		

			c.save();
			c.translate(i.x - cameraX, i.y - cameraY);
			if (i.xTarget - i.x < 0) {
				c.rotate(i.angle);
				c.scale(-1, 1);
			} else {
				c.rotate(i.angle);
			} 
			c.translate(-i.x, -i.y);
			if (i.walking === true ) {
				i.walkTimer += 0.15;	
				if (i.walkTimer >= 15.8) {
					i.walkTimer = 0.1;
				}
				c.drawImage( i.walkAnimations[Math.ceil(i.walkTimer)], i.x - (i.w /2) - 15, i.y - (i.h / 2) - 15, i.w + 30, i.h + 30);
				
				
				// c.rect(i.x- (i.w /2), i.y- (i.h / 2), i.w, i.h);
				// c.strokeStyle = "red";
				// c.stroke();
			} else {
				i.walkTimer = 0;
			}
			c.restore();
		} // if isOnScreen
	}); // theZombies.forEach
} // drawZombies();
