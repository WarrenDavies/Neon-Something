
function testLines(pLine1x1, pLine1y1, pLine1x2, pLine1y2, pLine2x1, pLine2y1, pLine2x2, pLine2y2, testing, buildingNo) {

    var s1_x = pLine1x2 - pLine1x1;
    var s1_y = pLine1y2 - pLine1y1;
    var s2_x = pLine2x2 - pLine2x1;
    var s2_y = pLine2y2 - pLine2y1;

    var    s = (-s1_y * (pLine1x1 - pLine2x1) + s1_x * (pLine1y1 - pLine2y1)) / (-s2_x * s1_y + s1_x * s2_y);
    var   t = ( s2_x * (pLine1y1 - pLine2y1) - s2_y * (pLine1x1 - pLine2x1)) / (-s2_x * s1_y + s1_x * s2_y);
	if (testing === "vehicle") {
	
	//console.log(pLine1x1 + ", " + pLine1y1 + ", " + pLine1x2 + ", " + pLine1y2 + ", " + pLine2x1 + ", " + pLine2y1 + ", " + pLine2x2 + ", " + pLine2y2 + ", " + testing)
	}
	if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
	//console.log ("iohoih");
	
	if (testing === "withinHeadlights"){
		checkWithinHeadlights.push(
				[(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y)) ]);
		//console.log("Cgrfghregheh");
		return [(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y))];
	} else if (testing === "leftLineTest"){
		checkLeftLine.push(
				[(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y)) ]);
		//console.log("CLL: " + checkLeftLine[0][0]);
		return [(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y))];
	} else if (testing === "topLine"){
		checkTopLine.push(
				[(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y)) ]);
		//console.log("CLL: " + checkLeftLine[0][0]);
		return [(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y))];
	} else if (testing === "connectToTopLine"){
		console.log("Get to this bit first");
		connectToTopLine.push(
				[(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y))]);
		//console.log("CLL: " + checkLeftLine[0][0]);
		return [(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y))];
	} else if (testing === "vehicle"){
		console.log("vehicle coll testlines");
		return [(pLine1x1 + (t * s1_x)),
				(pLine1y1 + (t * s1_y))];
	
	} else  {
		//console.log("building Number Pushed to Line Test: " + buildingNo)
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
		//console.log(lineIntersectionsOnScreen[0][0]);
		//console.log(lineIntersectionsOnScreen[0]);
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
	//console.log ("iohoih");
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
						console.log("vertical collision");
						wallCollision[line] = true;
						wallCollisionCounter++;
						Player1.yVector = 0;
						console.log(line);	
				}
			}
		}
		for (var line in theBuildings[i].walls) {
			if (theBuildings[i].walls.hasOwnProperty(line)) {
				
				if (line === "left2") {
					console.log(theBuildings[i].walls[line].h);
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
						console.log("horizontal collision");
						wallCollision[line] = true;
						wallCollisionCounter++;
						Player1.xVector = 0;
						console.log(line);	
				}
			}
		}
	});
	
	//if (wallCollisionCounter === 1) {
		if (wallCollision.left || wallCollision.right) {
			//Player1.xVector = 0;
			//console.log("collision horizontal");
		}
		if (wallCollision.top || wallCollision.bottom) {
			//Player1.yVector = 0;
			//console.log("collision vertical");
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
								console.log ("vehicleLine.p1x-Player1.x + cameraX = " + (vehiclesOnScreen[j].lines[vehicleLine].p1x - Player1.x + cameraX));
								
								console.log ("theBuildings[k].walls[wallLine].p1x-Player1.x + cameraX = " + (theBuildings[k].walls[wallLine].p1x-Player1.x + cameraX));
								
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
									
									console.log("vehicle-wall collision -" + vehicleLine);
									i.collision = true;
								} // check collision in these two walls
							} // if this wall line exists
						} // for loop cycling through wall lines
					}); // buildings on screen for each
					console.log ("Looping vehicles");
					vehiclesOnScreen.forEach ( function(k, l) {
						console.log ("Looping vehicles");
						if (l !== j) {
						console.log ("not testing coll with itself");
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
											console.log ("VEHICLE COLLISION");
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