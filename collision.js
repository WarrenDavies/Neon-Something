
function testLines(pLine1x1, pLine1y1, pLine1x2, pLine1y2, pLine2x1, pLine2y1, pLine2x2, pLine2y2, testing, buildingNo) {

    var s1_x = pLine1x2 - pLine1x1;
    var s1_y = pLine1y2 - pLine1y1;
    var s2_x = pLine2x2 - pLine2x1;
    var s2_y = pLine2y2 - pLine2y1;

    var    s = (-s1_y * (pLine1x1 - pLine2x1) + s1_x * (pLine1y1 - pLine2y1)) / (-s2_x * s1_y + s1_x * s2_y);
    var   t = ( s2_x * (pLine1y1 - pLine2y1) - s2_y * (pLine1x1 - pLine2x1)) / (-s2_x * s1_y + s1_x * s2_y);
	if (testing === "vehicle") {
	
	}
	if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
	
	if (testing === "withinHeadlights"){
		checkWithinHeadlights.push(
				[(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y)) ]);

		return [(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y))];
	} else if (testing === "leftLineTest"){
		checkLeftLine.push(
				[(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y)) ]);

		return [(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y))];
	} else if (testing === "topLine"){
		checkTopLine.push(
				[(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y)) ]);
	
		return [(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y))];
	} else if (testing === "connectToTopLine"){

		connectToTopLine.push(
				[(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y))]);
	
		return [(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y))];
	} else if (testing === "vehicle"){

		return [(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y))];
	
	} else  {

		lineIntersectionsOnScreen.push(
				[(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y)),
				{p1x: pLine1x1, 
				 p1y: pLine1y1, 
				 p2x: pLine1x2, 
				 p2y: pLine1y2,
				 buildingNo: buildingNo
				}
				]);

		return [(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y))];
		}   // end if
	}
	//var theResult = s >= 0 && s <= 1 && t >= 0 && t <= 1
   return false;
}
 
 function getLineIntersection(pLine1x1, pLine1y1, pLine1x2, pLine1y2, pLine2x1, pLine2y1, pLine2x2, pLine2y2) {

    var s1_x = pLine1x2 - pLine1x1;
    var s1_y = pLine1y2 - pLine1y1;
    var s2_x = pLine2x2 - pLine2x1;
    var s2_y = pLine2y2 - pLine2y1;

    var    s = (-s1_y * (pLine1x1 - pLine2x1) + s1_x * (pLine1y1 - pLine2y1)) / (-s2_x * s1_y + s1_x * s2_y);
    var   t = ( s2_x * (pLine1y1 - pLine2y1) - s2_y * (pLine1x1 - pLine2x1)) / (-s2_x * s1_y + s1_x * s2_y);
	
	
	
    if (s >= 0 && s <= 1 && t >= 0 && t <= 1)
    {

	return true;
        // Collision detected
        //result = new Point(
          //  (int) (pLine1.x1 + (t * s1_x)),
            //(int) (pLine1.y1 + (t * s1_y)));
    }   // end if

	//var theResult = s >= 0 && s <= 1 && t >= 0 && t <= 1
   return false;
}

function collidesSpecify(ax, ay, aw, ah, bx, by, bw, bh) {
	return  ax < bx + bw &&
			ax + aw > bx &&
			ay < by + bh &&
			ay + ah > by;
}

function isOnCamera(a) {
	var bx = cameraX - 200;
	var by = cameraY - 200;
	var bw = cameraW + 400;
	var bh = cameraH + 400;

	var ax = a.upperLeftX;
	var ay = a.upperLeftY;
	var aw = a.lowerRightX - a.upperLeftX;
	var ah = a.lowerRightY - a.upperLeftY;
	
return  ax < bx + bw &&
		ax + aw > bx &&
		ay < by + bh &&
		ay + ah > by;
}

function checkPlayerCollision(xStep, yStep) {
//c.fillRect (xStep * 2 + Player1.x - cameraX - (Player1.w / 2) , yStep * 2 + Player1.y - cameraY - (Player1.h / 2)  , Player1.w, Player1.h);

//c.fillStyle = "blue";
//c.fillRect (Player1.x - cameraX - (Player1.w / 2) + xStep , 
//Player1.y - cameraY - (Player1.h / 2) + yStep , 
//Player1.w, Player1.h);

var wallCollision = {};
wallCollision.top = false;
wallCollision.left = false;
wallCollision.right = false;
wallCollision.bottom = false;
var wallCollisionCounter = 0;
	buildingsOnScreen.forEach( function(i, j) {
		for (var line in theBuildings[i].walls) {
			if (theBuildings[i].walls.hasOwnProperty(line)) {
				//  .fillRect(theBuildings[i].walls[line].p1x, 
				//	theBuildings[i].walls[line].p1y, 
				//	theBuildings[i].walls[line].w, 
				//	theBuildings[i].walls[line].h);
				
				// test y vector
				if (collidesSpecify(
						Player1.x - (Player1.w / 2),
						(yStep * 2) + Player1.y - (Player1.h / 2), 
						Player1.w, 
						Player1.h, 
						theBuildings[i].walls[line].p1x, 
						theBuildings[i].walls[line].p1y, 
						theBuildings[i].walls[line].w, 
						theBuildings[i].walls[line].h )) {
						wallCollision[line] = true;
						wallCollisionCounter++;
						Player1.yVector = 0;
				}
			}
		}
		for (var line in theBuildings[i].walls) {
			if (theBuildings[i].walls.hasOwnProperty(line)) {
				
				if (line === "left2") {

				}
				//  .fillRect(theBuildings[i].walls[line].p1x, 
				//	theBuildings[i].walls[line].p1y, 
				//	theBuildings[i].walls[line].w, 
				//	theBuildings[i].walls[line].h);
				
				// test y vector
				if (collidesSpecify(
						Player1.x + (xStep * 2) - (Player1.w / 2),
						Player1.y - (Player1.h / 2), 
						Player1.w, 
						Player1.h, 
						theBuildings[i].walls[line].p1x, 
						theBuildings[i].walls[line].p1y, 
						theBuildings[i].walls[line].w, 
						theBuildings[i].walls[line].h )) {
						wallCollision[line] = true;
						wallCollisionCounter++;
						Player1.xVector = 0;
				}
			}
		}
	});
	
	//if (wallCollisionCounter === 1) {
		if (wallCollision.left || wallCollision.right) {
			//Player1.xVector = 0;

		}
		if (wallCollision.top || wallCollision.bottom) {
			//Player1.yVector = 0;

		}
	
	//} 
							
						
	if (wallCollisionCounter > 0) {
		return true;	
	} else {
		return false;
	}
}

function checkVehicleCollision() {
// check collision with buildings
	vehiclesOnScreen.forEach ( function(i, j) {
		i.collision = false;
		if (i.speed > 0) {
			// check for collision with buildings
			for (var vehicleLine in i.lines) {
				if (i.lines.hasOwnProperty(vehicleLine)) {
					buildingsOnScreen.forEach( function(k, l) {
						for (var wallLine in theBuildings[k].walls) {
							if (vehicleLine === "frontLine" && wallLine === "right2" && j === 1 && k === 1) {
								
								}
								c.stroke();
								c.beginPath();
								
								if (theBuildings[k].walls.hasOwnProperty(wallLine)) {
								if (testLines(
								i.lines[vehicleLine].p1x -(i.xtarget * i.speed ) - i.xTurnTarget, 
								i.lines[vehicleLine].p1y -(i.ytarget * i.speed ) - i.yTurnTarget, 
								i.lines[vehicleLine].p2x -(i.xtarget * i.speed ) - i.xTurnTarget, 
								i.lines[vehicleLine].p2y -(i.ytarget * i.speed ) - i.yTurnTarget, 
								theBuildings[k].walls[wallLine].p1x-Player1.x + cameraX, 
								theBuildings[k].walls[wallLine].p1y-Player1.y + cameraY, 
								theBuildings[k].walls[wallLine].p2x-Player1.x + cameraX, 
								theBuildings[k].walls[wallLine].p2y-Player1.y + cameraY)) {
									
									if (i.speed > 0) {
										i.speed = 0;
										i.x += i.xtarget * i.speed;
										i.y += i.ytarget * i.speed;
									} else if (i.speed === 0) {
										i.x += i.xtarget * 1;
										i.y += i.ytarget * 1;
									}
									
									i.speed = 0;
									

									i.collision = true;
								} // check collision in these two walls
							} // if this wall line exists
						} // for loop cycling through wall lines
					}); // buildings on screen for each

					vehiclesOnScreen.forEach ( function(k, l) {

						if (l !== j) {

							for (var vehicleLine in k.lines) {
								if (k.lines.hasOwnProperty(vehicleLine)) {
									if (testLines(
										i.lines[vehicleLine].p1x -(i.xtarget * i.speed ) - i.xTurnTarget, 
										i.lines[vehicleLine].p1y -(i.ytarget * i.speed ) - i.yTurnTarget, 
										i.lines[vehicleLine].p2x -(i.xtarget * i.speed ) - i.xTurnTarget, 
										i.lines[vehicleLine].p2y -(i.ytarget * i.speed ) - i.yTurnTarget, 
										k.lines[vehicleLine].p1x-Player1.x + cameraX, 
										k.lines[vehicleLine].p1y-Player1.y + cameraY, 
										k.lines[vehicleLine].p2x-Player1.x + cameraX, 
										k.lines[vehicleLine].p2y-Player1.y + cameraY,)) {

										}
								} // second if this vehicle line exists
							} // second for loop cycling through vehicle lines
						} // check vehicle is not testing collision with itself
					}); // second vehicles on screen for each (k, l)
					
					
					
				} // if this vehicle line exists
			} // for loop cycling through vehicle lines
		} // if this vehicles speed is > 0 
	});// vehicles on screen for each
} //checkVehicleCollision

function isOnScreen(i) {
	if (i.x > cameraX - 100 && i.x < (cameraX + cameraW + 100) && i.y > cameraY - 100 && i.y < (cameraY + cameraH + 100)) {
		return true;
	} else {
		return false;
	}
}

function checkNPCCollisionWithBuilding(i, wallNear) {
	//console.log (k);
	let xPushTarget = null;
	let yPushTarget = null;
	//check collisions with buildings
	i.collidesWithType = null;
	i.collidesWithWall = "";
	i.collidesWithWalls = [];
	i.horizontalBuildingCollision = false;
	i.verticalBuildingCollision = false;
	// c.beginPath();
	// c.strokeStyle = "blue";
	// c.lineWidth = 1;
	// //c.rect(i.x + ((i.speed * 8) * i.xVector) - cameraX, i.y + ((i.speed * 8) * i.yVector) - cameraY, i.w, i.h);
	// c.stroke();

	// c.beginPath();
	// c.fillStyle = "black";
	// c.lineWidth = 1;
	// //c.rect(i.x - cameraX, i.y - cameraY, i.w, i.h);
	// c.stroke();
	let l = wallNear.building;
	let line = wallNear.wall;
	// console.log("l = " + l + ", line = " + line);
	// console.log(theBuildings[l]);
	// console.log(theBuildings[l].walls);
	//theBuildings.forEach( function(k, l) {
	// wallsNear.forEach( (l, line) => {

		
		//VERTICAL COLLISION
		if (line === "top" || line === "top2" || line === "bottom" || line === "bottom2") {
			if (theBuildings[l].walls && theBuildings[l].walls.hasOwnProperty(line)) {
				if (collidesSpecify(
				i.x,
				i.y + ((i.speed * 8) * i.yVector), 
				i.w, 
				i.h, 
				theBuildings[l].walls[line].p1x, 
				theBuildings[l].walls[line].p1y, 
				theBuildings[l].walls[line].w, 
				theBuildings[l].walls[line].h )) {
					i.collisionCourse = true;

					i.collidesWithID = l;
					i.collidesWithType = "Building";
					i.collidesWithWall = line;

					// to make an array of each wall colliding with. Could be two (eg top, left)
					i.collidesWithWalls.push(line);

					i.verticalBuildingCollision = true;
					if (i.collidesWithWall === "top" ||
					i.collidesWithWall === "top2") {
						if (i.xVector >= 0) {
							xPushTarget = theBuildings[i.collidesWithID].lowerRightX + 60;
							yPushTarget = theBuildings[i.collidesWithID].upperLeftY - 30;
						}
						if (i.xVector < 0) {
							xPushTarget = theBuildings[i.collidesWithID].upperLeftX - 60
							yPushTarget = theBuildings[i.collidesWithID].upperLeftY - 30;
						}
						if (i.inBuilding) {
							i.y += 1;
						} else {
							i.y -= 1;
						}
						if (collidesSpecify(
						i.x,
						i.y, 
						i.w, 
						i.h, 
						theBuildings[l].walls[line].p1x, 
						theBuildings[l].walls[line].p1y, 
						theBuildings[l].walls[line].w, 
						theBuildings[l].walls[line].h )) {
							let xDirection = i.x - theBuildings[l].centerX;
							let yDirection = i.y - theBuildings[l].centerY;
							let rotation = Math.atan2(deltaY, deltaX);
							let xtarget = Math.cos(rotation);
							let ytarget = Math.sin(rotation);
							//i.x += (xtarget * 2);
							//i.y += (ytarget * 2);
							if (i.inBuilding) {
								i.y += 1;
							} else {
								i.y -= 1;
							}
						}
					}
					if (i.collidesWithWall === "bottom" ||
					i.collidesWithWall === "bottom2") {
						if (i.xVector >= 0) {
							xPushTarget = theBuildings[i.collidesWithID].lowerRightX + 60;
							yPushTarget = theBuildings[i.collidesWithID].lowerRightY + 30;
						}
						if (i.xVector < 0) {
							xPushTarget = theBuildings[i.collidesWithID].upperLeftX - 60;
							yPushTarget = theBuildings[i.collidesWithID].lowerRightY + 30;
						}
						if (i.inBuilding) {
							i.y -= 1;
						} else {
							i.y += 1;
						}
						if (collidesSpecify(
						i.x,
						i.y, 
						i.w, 
						i.h, 
						theBuildings[l].walls[line].p1x, 
						theBuildings[l].walls[line].p1y, 
						theBuildings[l].walls[line].w, 
						theBuildings[l].walls[line].h )) {
							let xDirection = i.x - theBuildings[l].centerX;
							let yDirection = i.y - theBuildings[l].centerY;
							let rotation = Math.atan2(deltaY, deltaX);
							let xtarget = Math.cos(rotation);
							let ytarget = Math.sin(rotation);
						//	i.x += (xtarget * 2);
						//	i.y += (ytarget * 2);
							if (i.inBuilding) {
								i.y -= 1;
							} else {
								i.y += 1;
							}
						}
					}
				}
			}
		}


		// HORIZONTAL COLLISION
		if (line === "left" || line === "left2" || line === "right" || line === "right2") {
			if (theBuildings[l].walls && theBuildings[l].walls.hasOwnProperty(line)) {
				if (collidesSpecify(
				i.x + ((i.speed * 8) * i.xVector),
				i.y, 
				i.w, 
				i.h, 
				theBuildings[l].walls[line].p1x, 
				theBuildings[l].walls[line].p1y, 
				theBuildings[l].walls[line].w, 
				theBuildings[l].walls[line].h )) {
					i.collisionCourse = true;

					i.collidesWithID = l;
					i.collidesWithType = "Building";
					i.collidesWithWall = line;

					// to make an array of each wall colliding with. Could be two (eg top, left)
					i.collidesWithWalls.push(line);

					i.horizontalBuildingCollision = true;
					if (!i.stuck) {
						if (i.collidesWithWall === "left" ||
						i.collidesWithWall === "left2") {
							

								if (i.yVector >= 0) {
									xPushTarget = theBuildings[i.collidesWithID].upperLeftX - 30;
									yPushTarget = theBuildings[i.collidesWithID].lowerRightY + 60;
								}
								if (i.yVector < 0) {
									xPushTarget = theBuildings[i.collidesWithID].upperLeftX - 30;
									yPushTarget = theBuildings[i.collidesWithID].upperLeftY - 60;
								}
								if (i.inBuilding) {
									i.x += 1;
								} else {
									i.x -= 1;
								}
								if (collidesSpecify(
								i.x,
								i.y, 
								i.w, 
								i.h, 
								theBuildings[l].walls[line].p1x, 
								theBuildings[l].walls[line].p1y, 
								theBuildings[l].walls[line].w, 
								theBuildings[l].walls[line].h )) {

									
								//	i.x = i.xPrevious;
								//	i.y = i.yPrevious;

									/* let xDirection = i.x - theBuildings[l].centerX;
									let yDirection = i.y - theBuildings[l].centerY;
									let rotation = Math.atan2(deltaY, deltaX);
									let xtarget = Math.cos(rotation);
									let ytarget = Math.sin(rotation);
									i.x += (xtarget * 2);
									i.y += (ytarget * 2); */
									if (i.inBuilding) {
										i.x += 1;
									} else {
										i.x -= 1;
									}
								}	
							
						}
						if (i.collidesWithWall === "right" ||
							i.collidesWithWall === "right2") {
							
								if (i.x > theBuildings[i.collidesWithID].lowerRightX ) {	
									if (i.yVector >= 0) {
										xPushTarget = theBuildings[i.collidesWithID].lowerRightX + 30;
										yPushTarget = theBuildings[i.collidesWithID].lowerRightY + 60;
									}
									if (i.yVector < 0) {
										xPushTarget = theBuildings[i.collidesWithID].lowerRightX + 30;
										yPushTarget = theBuildings[i.collidesWithID].upperLeftY - 60;
									}
									if (i.inBuilding) {
										i.x -= 1;
									} else {
										i.x += 1;
									}
									if (collidesSpecify(
									i.x,
									i.y, 
									i.w, 
									i.h, 
									theBuildings[l].walls[line].p1x, 
									theBuildings[l].walls[line].p1y, 
									theBuildings[l].walls[line].w, 
									theBuildings[l].walls[line].h )) {
										let xdirection = getXDirection(theBuildings[l].centerX, theBuildings[l].centerY, i.x, i.y);
										let ydirection = getYDirection(theBuildings[l].centerY, theBuildings[l].centerY, i.x, i.y);
										//i.x += (xdirection * 5);
										//i.y += (ydirection * 5);
										if (i.inBuilding) {
											i.x -= 1;
										} else {
											i.x += 1;
										}
									}
								}
							
						}
					}
					i.stuck = false;
				}
			}
		}
	if ((xPushTarget != null || xPushTarget != undefined)  && (yPushTarget != null || yPushTarget != undefined) && i.inBuilding === false  ) {
		//console.log("inside waypoint function");
		if (i.wayPoints.length > 0) {
			if (xPushTarget != i.wayPoints[i.wayPoints.length - 1].x && yPushTarget != i.wayPoints[i.wayPoints.length - 1].y) {
				i.wayPoints.push({
					x: xPushTarget,
					y: yPushTarget,
					type: "Avoid Building",
				});
				i.collisionCourse = false;
			}
		} else {
			// console.log("pushing waypoint");
			i.wayPoints.push({
				x: xPushTarget,
				y: yPushTarget,
				type: "Avoid Building",
			});
			// console.log("i.wayPoints.length: " + i.wayPoints.lengtha )
			i.collisionCourse = false;
		}
	}
	// });
	if (i.collidesWithType === "Building") {
		return true;
	}
}

function checkNPCCollisionWithBuilding_old(i) {
	let xPushTarget = null;
	let yPushTarget = null;
	//check collisions with buildings
	i.collidesWithType = null;
	i.collidesWithWall = "";
	i.collidesWithWalls = [];
	i.horizontalBuildingCollision = false;
	i.verticalBuildingCollision = false;
	c.beginPath();
	c.strokeStyle = "blue";
	c.lineWidth = 1;
	//c.rect(i.x + ((i.speed * 8) * i.xVector) - cameraX, i.y + ((i.speed * 8) * i.yVector) - cameraY, i.w, i.h);
	c.stroke();

	c.beginPath();
	c.fillStyle = "black";
	c.lineWidth = 1;
	//c.rect(i.x - cameraX, i.y - cameraY, i.w, i.h);
	c.stroke();

	//VERTICAL COLLISION
	theBuildings.forEach( function(k, l) {
		console.log("civ version: " + l);
		console.log(theBuildings[l].walls);
		for (var line in theBuildings[l].walls) {
			if (theBuildings[l].walls.hasOwnProperty(line)) {
				if (collidesSpecify(
				i.x,
				i.y + ((i.speed * 8) * i.yVector), 
				i.w, 
				i.h, 
				theBuildings[l].walls[line].p1x, 
				theBuildings[l].walls[line].p1y, 
				theBuildings[l].walls[line].w, 
				theBuildings[l].walls[line].h )) {
					i.collisionCourse = true;

					i.collidesWithID = l;
					i.collidesWithType = "Building";
					i.collidesWithWall = line;

					// to make an array of each wall colliding with. Could be two (eg top, left)
					i.collidesWithWalls.push(line);

					i.verticalBuildingCollision = true;
					if (i.collidesWithWall === "top" ||
					i.collidesWithWall === "top2") {
						if (i.xVector >= 0) {
							xPushTarget = theBuildings[i.collidesWithID].lowerRightX + 60;
							yPushTarget = theBuildings[i.collidesWithID].upperLeftY - 30;
						}
						if (i.xVector < 0) {
							xPushTarget = theBuildings[i.collidesWithID].upperLeftX - 60
							yPushTarget = theBuildings[i.collidesWithID].upperLeftY - 30;
						}
						if (i.inBuilding) {
							i.y += 1;
						} else {
							i.y -= 1;
						}
						if (collidesSpecify(
						i.x,
						i.y, 
						i.w, 
						i.h, 
						theBuildings[l].walls[line].p1x, 
						theBuildings[l].walls[line].p1y, 
						theBuildings[l].walls[line].w, 
						theBuildings[l].walls[line].h )) {
							let xDirection = i.x - theBuildings[l].centerX;
							let yDirection = i.y - theBuildings[l].centerY;
							let rotation = Math.atan2(deltaY, deltaX);
							let xtarget = Math.cos(rotation);
							let ytarget = Math.sin(rotation);
							//i.x += (xtarget * 2);
							//i.y += (ytarget * 2);
							if (i.inBuilding) {
								i.y += 1;
							} else {
								i.y -= 1;
							}
						}
					}
					if (i.collidesWithWall === "bottom" ||
					i.collidesWithWall === "bottom2") {
						if (i.xVector >= 0) {
							xPushTarget = theBuildings[i.collidesWithID].lowerRightX + 60;
							yPushTarget = theBuildings[i.collidesWithID].lowerRightY + 30;
						}
						if (i.xVector < 0) {
							xPushTarget = theBuildings[i.collidesWithID].upperLeftX - 60;
							yPushTarget = theBuildings[i.collidesWithID].lowerRightY + 30;
						}
						if (i.inBuilding) {
							i.y -= 1;
						} else {
							i.y += 1;
						}
						if (collidesSpecify(
						i.x,
						i.y, 
						i.w, 
						i.h, 
						theBuildings[l].walls[line].p1x, 
						theBuildings[l].walls[line].p1y, 
						theBuildings[l].walls[line].w, 
						theBuildings[l].walls[line].h )) {
							let xDirection = i.x - theBuildings[l].centerX;
							let yDirection = i.y - theBuildings[l].centerY;
							let rotation = Math.atan2(deltaY, deltaX);
							let xtarget = Math.cos(rotation);
							let ytarget = Math.sin(rotation);
						//	i.x += (xtarget * 2);
						//	i.y += (ytarget * 2);
							if (i.inBuilding) {
								i.y -= 1;
							} else {
								i.y += 1;
							}
						}
					}
				}
			}
		}


		// HORIZONTAL COLLISION
		for (var line in theBuildings[l].walls) {
			if (theBuildings[l].walls.hasOwnProperty(line)) {
				if (collidesSpecify(
				i.x + ((i.speed * 8) * i.xVector),
				i.y, 
				i.w, 
				i.h, 
				theBuildings[l].walls[line].p1x, 
				theBuildings[l].walls[line].p1y, 
				theBuildings[l].walls[line].w, 
				theBuildings[l].walls[line].h )) {
					i.collisionCourse = true;

					i.collidesWithID = l;
					i.collidesWithType = "Building";
					i.collidesWithWall = line;

					// to make an array of each wall colliding with. Could be two (eg top, left)
					i.collidesWithWalls.push(line);

					i.horizontalBuildingCollision = true;
					if (!i.stuck) {
						if (i.collidesWithWall === "left" ||
						i.collidesWithWall === "left2") {
							

								if (i.yVector >= 0) {
									xPushTarget = theBuildings[i.collidesWithID].upperLeftX - 30;
									yPushTarget = theBuildings[i.collidesWithID].lowerRightY + 60;
								}
								if (i.yVector < 0) {
									xPushTarget = theBuildings[i.collidesWithID].upperLeftX - 30;
									yPushTarget = theBuildings[i.collidesWithID].upperLeftY - 60;
								}
								if (i.inBuilding) {
									i.x += 1;
								} else {
									i.x -= 1;
								}
								if (collidesSpecify(
								i.x,
								i.y, 
								i.w, 
								i.h, 
								theBuildings[l].walls[line].p1x, 
								theBuildings[l].walls[line].p1y, 
								theBuildings[l].walls[line].w, 
								theBuildings[l].walls[line].h )) {

									
								//	i.x = i.xPrevious;
								//	i.y = i.yPrevious;

									/* let xDirection = i.x - theBuildings[l].centerX;
									let yDirection = i.y - theBuildings[l].centerY;
									let rotation = Math.atan2(deltaY, deltaX);
									let xtarget = Math.cos(rotation);
									let ytarget = Math.sin(rotation);
									i.x += (xtarget * 2);
									i.y += (ytarget * 2); */
									if (i.inBuilding) {
										i.x += 1;
									} else {
										i.x -= 1;
									}
								}	
							
						}
						if (i.collidesWithWall === "right" ||
							i.collidesWithWall === "right2") {
							
								if (i.x > theBuildings[i.collidesWithID].lowerRightX ) {	
									if (i.yVector >= 0) {
										xPushTarget = theBuildings[i.collidesWithID].lowerRightX + 30;
										yPushTarget = theBuildings[i.collidesWithID].lowerRightY + 60;
									}
									if (i.yVector < 0) {
										xPushTarget = theBuildings[i.collidesWithID].lowerRightX + 30;
										yPushTarget = theBuildings[i.collidesWithID].upperLeftY - 60;
									}
									if (i.inBuilding) {
										i.x -= 1;
									} else {
										i.x += 1;
									}
									if (collidesSpecify(
									i.x,
									i.y, 
									i.w, 
									i.h, 
									theBuildings[l].walls[line].p1x, 
									theBuildings[l].walls[line].p1y, 
									theBuildings[l].walls[line].w, 
									theBuildings[l].walls[line].h )) {
										let xdirection = getXDirection(theBuildings[l].centerX, theBuildings[l].centerY, i.x, i.y);
										let ydirection = getYDirection(theBuildings[l].centerY, theBuildings[l].centerY, i.x, i.y);
										//i.x += (xdirection * 5);
										//i.y += (ydirection * 5);
										if (i.inBuilding) {
											i.x -= 1;
										} else {
											i.x += 1;
										}
									}
								}
							
						}
					}
					i.stuck = false;
				}
			}
		}
	if ((xPushTarget != null || xPushTarget != undefined)  && (yPushTarget != null || yPushTarget != undefined)) {
		
		if (i.wayPoints.length > 0) {
			if (xPushTarget != i.wayPoints[i.wayPoints.length - 1].x && yPushTarget != i.wayPoints[i.wayPoints.length - 1].y) {
				i.wayPoints.push({
					x: xPushTarget,
					y: yPushTarget,
					type: "Avoid Building",
				});
				i.collisionCourse = false;
			}
		} else {
			i.wayPoints.push({
				x: xPushTarget,
				y: yPushTarget,
				type: "Avoid Building",
			});
			i.collisionCourse = false;
		}
	}
	});
	if (i.collidesWithType === "Building") {
		return true;
	}
}


function checkBulletWallCollision(i, j) {
	// buildings
	var collisionDetected = false;
	buildingsOnScreen.forEach( function(k, l) {
		for (var line in theBuildings[k].walls) {
			if (theBuildings[k].walls.hasOwnProperty(line)) {
				// if (testLines(
				// 	i.x - cameraX,
				// 	i.y - cameraY,
				// 	(i.x + i.xtarget * i.xVelocity) - cameraX,
				// 	(i.y + i.ytarget * i.yVelocity) - cameraY,			
				// 	theBuildings[k].walls[line].p1x , 
				// 	theBuildings[k].walls[line].p1y , 
				// 	theBuildings[k].walls[line].p2x , 
				// 	theBuildings[k].walls[line].p2y ,
				// 	"bullet/wall"
				// 	)) {
				// 	collisionDetected = true;
				// 	return true;
				// }
				if (testLines(
						i.x,
						i.y,
						(i.x + i.xtarget * i.xVelocity),
						(i.y + i.ytarget * i.yVelocity),			
						theBuildings[k].walls[line].p1x , 
						theBuildings[k].walls[line].p1y , 
						theBuildings[k].walls[line].p2x , 
						theBuildings[k].walls[line].p2y ,
						"bullet/wall"
						)) {
						collisionDetected = true;
						return true;
				}
			}
		}
	});
	if (collisionDetected) {
		return true 
	} else {
		return false;
	}
}

function checkBulletCivilianCollision(i, j) {
	let collisionDetected = false;
	theCivilians.forEach( function(k, l) {
		if (collidesSpecify (i.x + i.xtarget * i.xVelocity, i.y + i.ytarget * i.yVelocity, i.w, i.h, k.x - (k.w / 2), k.y - (k.h / 2), k.w, k.h) ) {
			collisionDetected = true;
			theSplats.push({x: k.x - (k.w / 2), y: k.y - (k.h / 2), w: k.w, h: k.h });
			theCivilians.splice(l, 1);
		}
	});
	if (collisionDetected) {
		return true 
	} else {
		return false;
	}
}

function checkBulletZombieCollision(i, j) {
	let collisionDetected = false;
	theZombies.forEach( function(k, l) {
		let hit = false;
		// yes yes hacky blah blah will fix later
		if (i.type == 1 || i.type == 2 || i.type == 3) {
			if (getDistance(i.x, i.y, k.x, k.y) < (i.w + 2) + (k.w)) {
				hit = true;
			}
		} else {
			if (collidesSpecify (i.x + i.xtarget * i.xVelocity, i.y + i.ytarget * i.yVelocity, i.w, i.h, k.x - (k.w / 2), k.y - (k.h / 2), k.w, k.h) ) {
				hit = true;
			}
		}
		if (hit) {
			if (collisionDetected === false) {
				k.health -= i.power;
				collisionDetected = true;
				if (k.health <= 0) {
					theSplats.push({x: k.x - (k.w / 2), y: k.y - (k.h / 2), w: k.w, h: k.h });
					theZombies.splice(l, 1);
					Player1.kills += 1;
				}
			}
		}
	});
	if (collisionDetected) {
		return true 
	} else {
		return false;
	}
}

function checkWeaponIconCollision() {

}