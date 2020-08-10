function drawBuildings() {
 //console.log("buildingsOnScreen " + buildingsOnScreen);
	
	for (j = buildingsOnScreen.length - 1; j 
	> -1; j--) {
		var i = buildingsOnScreen[j];
		//console.log("i " + i);
		if (theBuildings[i].type === "rectangular") {
		//if (i.type === "rectangular") {
				//console.log("theBuildings[i] " + theBuildings[i].upperLeftX);
				
			// console.log(isOnCamera(theBuildings[i]));
			
			if (isOnCamera(theBuildings[i])) {
			 
				drawRectangularBuilding(theBuildings[i].upperLeftX, theBuildings[i].upperLeftY, theBuildings[i].lowerRightX, theBuildings[i].lowerRightY, theBuildings[i].height, theBuildings[i].wallColor, theBuildings[i].roofColor, theBuildings[i].building);
				
				
			 		 } else {
					 // console.log("i splice = " + i);
				 buildingsOnScreen.splice(j, 1);
				
				//console.log("IOnjoin");
			 }
		}
	}
	buildingsOnScreen.forEach((i, j) => {
		//console.log(i);
		if (i > 99) {
			let i = buildingsOnScreen[j];
			justDrawRoof(theBuildings[i].upperLeftX, theBuildings[i].upperLeftY, theBuildings[i].lowerRightX, theBuildings[i].lowerRightY, theBuildings[i].height, theBuildings[i].wallColor, theBuildings[i].roofColor, theBuildings[i].building);
		}
	});
}

function justDrawRoof(upperLeftX, upperLeftY, lowerRightX, lowerRightY, height, wallColor, roofColor, buildingNo) { 

	var upperRightX = lowerRightX;
	var upperRightY = upperLeftY;
	var lowerLeftX = upperLeftX;
	var lowerLeftY = lowerRightY;

	c.beginPath();
	c.lineWidth = 1;
	c.strokeStyle = wallColor;
	// roof top left
	var dx = upperLeftX - cameraX - (cameraW / 2);
	var dy = upperLeftY - cameraY - (cameraH / 2);				
	var roofTopLeftX = (cameraW / 2) + dx * height;
	var roofTopLeftY = (cameraH / 2) + dy * height;
	
	theBuildings[buildingNo].roofTopLeftX = roofTopLeftX;
	theBuildings[buildingNo].roofTopLeftY = roofTopLeftY;
	theBuildings[buildingNo].roofTopLeftXExtend = (cameraW / 2) + dx * 20;
	theBuildings[buildingNo].roofTopLeftYExtend = (cameraW / 2) + dy * 20;
	
	// roof top right
	var dx = upperRightX - cameraX - (cameraW / 2);
	var dy = upperRightY - cameraY - (cameraH / 2);				
	var roofTopRightX = (cameraW / 2) + dx * height;
	var roofTopRightY = (cameraH / 2) + dy * height;
	
	theBuildings[buildingNo].roofTopRightX = roofTopRightX;
	theBuildings[buildingNo].roofTopRightY = roofTopRightY;
	
	// roof bottom right
	var dx = lowerRightX - cameraX - (cameraW / 2);
	var dy = lowerRightY - cameraY - (cameraH / 2);				
	var roofBottomRightX = (cameraW / 2) + dx * height;
	var roofBottomRightY = (cameraH / 2) + dy * height;
	
	theBuildings[buildingNo].roofBottomRightX = roofBottomRightX;
	theBuildings[buildingNo].roofBottomRightY = roofBottomRightY;
	
	// roof bottom left
	var dx = lowerLeftX - cameraX -	(cameraW / 2);
	var dy = lowerLeftY - cameraY - (cameraH / 2);				
	var roofBottomLeftX = (cameraW / 2) + dx * height;
	var roofBottomLeftY = (cameraH / 2) + dy * height;
	
	theBuildings[buildingNo].roofBottomLeftX = roofBottomLeftX;
	theBuildings[buildingNo].roofBottomLeftY = roofBottomLeftY;
	theBuildings[buildingNo].roofBottomLeftXExtend = (cameraW / 2) + dx * 20;
	theBuildings[buildingNo].roofBottomLeftYExtend = (cameraW / 2) + dy * 20;

	c.beginPath();
	c.fillStyle = roofColor;
	c.strokeStyle = wallColor;
	c.beginPath();	
	c.moveTo(roofTopLeftX, roofTopLeftY);
	c.lineTo(roofTopRightX, roofTopRightY);
	c.lineTo(roofBottomRightX, roofBottomRightY);
	c.lineTo(roofBottomLeftX, roofBottomLeftY);
	c.lineTo(roofTopLeftX, roofTopLeftY);
	c.fillStyle = roofColor;
	c.stroke();
	c.fill();
	c.closePath();

}

function getDistanceFromDoor(person, buildingNo, door, leftEdge, distanceFromLeftEdgeToMiddle, frontEdge, distanceFromFrontEdgeToMiddle) {
	theBuildings[buildingNo][door].distanceFromDoor = Math.sqrt( 
	(leftEdge + distanceFromLeftEdgeToMiddle - person.x) * (leftEdge + distanceFromLeftEdgeToMiddle - person.x) 
	+ 
	(frontEdge + distanceFromFrontEdgeToMiddle - person.y) * (frontEdge + distanceFromFrontEdgeToMiddle - person.y));
}
function getDistance(sx, sy, tx, ty) {
	return Math.sqrt( 
	(sx - tx) * (sx - tx) 
	+ 
	(sy - ty) * (sy - ty));
}

function drawRectangularBuildingDoor() {

}

function spliceBuildings() {

// the idea here was to check each loop whether the building was outside the camera, and if so, splice it. But surely it's cheaper to just empty buildingsOnScreen each loop - it's being populated in every cycle of draw map anyway, so why not just splice the whole array and re populate each loop, that way if the tile containing the building has moved off camera it will automatically not get drawn.

	buildingsOnScreen.forEach( function(i, j){
		if (!collidesSpecify(theBuildings[i].upperLeftX, theBuildings[i].upperLeftY, theBuildings[i].lowerRightX - theBuildings[i].lowerLeftX, theBuildings[i].lowerRightY - theBuildings[i].upperRightY, cameraX - 50, cameraY - 50, cameraX + cameraW + 50, cameraY + cameraH + 50) ) {
			buildingsOnScreen.splice(j, 1);
		}	
	});
}

function drawIrregularlyShapedBuilding(upperLeftX, upperLeftY, lowerRightX, lowerRightY, height, wallColor, roofColor, buildingNo, ) {
	// get roof coordinates
	// forEach loop through array holding wall coordinates
		// each item is an object with p1x, p1y, p2x, p2y, door: {all door properties}
		// if door, 
			// get door coordinates and position
			// draw door
		// draw wall
			// if door
				// draw around doorframe
		
	
}

function drawRectangularBuilding(upperLeftX, upperLeftY, lowerRightX, lowerRightY, height, wallColor, roofColor, buildingNo) {
	
	var upperRightX = lowerRightX;
	var upperRightY = upperLeftY;
	var lowerLeftX = upperLeftX;
	var lowerLeftY = lowerRightY;

	c.beginPath();
	c.lineWidth = 1;
	c.strokeStyle = wallColor;
	// roof top left
	var dx = upperLeftX - cameraX - (cameraW / 2);
	var dy = upperLeftY - cameraY - (cameraH / 2);				
	var roofTopLeftX = (cameraW / 2) + dx * height;
	var roofTopLeftY = (cameraH / 2) + dy * height;
	
	theBuildings[buildingNo].roofTopLeftX = roofTopLeftX;
	theBuildings[buildingNo].roofTopLeftY = roofTopLeftY;
	theBuildings[buildingNo].roofTopLeftXExtend = (cameraW / 2) + dx * 20;
	theBuildings[buildingNo].roofTopLeftYExtend = (cameraW / 2) + dy * 20;
	
	// roof top right
	var dx = upperRightX - cameraX - (cameraW / 2);
	var dy = upperRightY - cameraY - (cameraH / 2);				
	var roofTopRightX = (cameraW / 2) + dx * height;
	var roofTopRightY = (cameraH / 2) + dy * height;
	
	theBuildings[buildingNo].roofTopRightX = roofTopRightX;
	theBuildings[buildingNo].roofTopRightY = roofTopRightY;
	
	// roof bottom right
	var dx = lowerRightX - cameraX - (cameraW / 2);
	var dy = lowerRightY - cameraY - (cameraH / 2);				
	var roofBottomRightX = (cameraW / 2) + dx * height;
	var roofBottomRightY = (cameraH / 2) + dy * height;
	
	theBuildings[buildingNo].roofBottomRightX = roofBottomRightX;
	theBuildings[buildingNo].roofBottomRightY = roofBottomRightY;
	
	// roof bottom left
	var dx = lowerLeftX - cameraX -	(cameraW / 2);
	var dy = lowerLeftY - cameraY - (cameraH / 2);				
	var roofBottomLeftX = (cameraW / 2) + dx * height;
	var roofBottomLeftY = (cameraH / 2) + dy * height;
	
	theBuildings[buildingNo].roofBottomLeftX = roofBottomLeftX;
	theBuildings[buildingNo].roofBottomLeftY = roofBottomLeftY;
	theBuildings[buildingNo].roofBottomLeftXExtend = (cameraW / 2) + dx * 20;
	theBuildings[buildingNo].roofBottomLeftYExtend = (cameraW / 2) + dy * 20;
	
	theBuildings[buildingNo].roofLines = {
		left: {
			p1x: roofTopLeftX, 
			p1y: roofTopLeftY,
			p2x: roofBottomLeftX,
			p2y: roofBottomLeftY,				
		},
		top: {
			p1x: roofTopLeftX, 
			p1y: roofTopLeftY,
			p2x: roofTopRightX,
			p2y: roofTopRightY,				
		},
		bottom: {
			p1x: roofBottomLeftX, 
			p1y: roofBottomLeftY,
			p2x: roofBottomRightX,
			p2y: roofBottomRightY,				
		},
		right: {
			p1x: roofTopRightX, 
			p1y: roofTopRightY,
			p2x: roofBottomRightX,
			p2y: roofBottomRightY,				
		}
	}	
		
	theBuildings[buildingNo].walls = {
		left: {
			p1x: upperLeftX, 
			p1y: upperLeftY,
			p2x: lowerLeftX,
			p2y: lowerLeftY,
			w: 1,
			h: lowerLeftY - upperLeftY
		},
		top: {
			p1x: upperLeftX, 
			p1y: upperLeftY,
			p2x: upperRightX,
			p2y: upperRightY,	
			w: upperRightX - upperLeftX,
			h: 1
		},
		bottom: {
			p1x: lowerLeftX, 
			p1y: lowerLeftY,
			p2x: lowerRightX,
			p2y: lowerRightY,
			w: lowerRightX - lowerLeftX,
			h: 1
		},
		right: {
			p1x: upperRightX, 
			p1y: upperRightY,
			p2x: lowerRightX,
			p2y: lowerRightY,	
			w: 1,
			h: lowerRightY - upperRightY,
		}
	}	
	
	if (theBuildings[buildingNo].southDoor.exists === true) {
		theBuildings[buildingNo].walls.bottom = {
			p1x: lowerLeftX, 
			p1y: lowerLeftY,
			p2x: lowerLeftX + theBuildings[buildingNo].southDoor.doorwayDistanceFromLeft + theBuildings[buildingNo].southDoor.leftDoorPosition,
			p2y: lowerRightY,
			w: theBuildings[buildingNo].southDoor.doorwayDistanceFromLeft + theBuildings[buildingNo].southDoor.leftDoorPosition,
			h: 1	
		}
		
		theBuildings[buildingNo].walls.bottom2 = {
			p1x: lowerLeftX + theBuildings[buildingNo].southDoor.doorwayDistanceFromLeftToMiddle + theBuildings[buildingNo].southDoor.rightDoorPosition, 
			p1y: lowerLeftY,
			p2x: lowerRightX,
			p2y: lowerRightY,
			w: ((lowerRightX - lowerLeftX) - theBuildings[buildingNo].southDoor.doorwayDistanceFromLeftToMiddle) - theBuildings[buildingNo].southDoor.rightDoorPosition,
			
			h: 1	
		}
	} // if south door exists
	
	if (theBuildings[buildingNo].northDoor.exists === true) {
		theBuildings[buildingNo].walls.top = {
			p1x: upperLeftX, 
			p1y: upperLeftY,
			p2x: upperLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeft + theBuildings[buildingNo].northDoor.leftDoorPosition,
			p2y: upperRightY,
			w: theBuildings[buildingNo].northDoor.doorwayDistanceFromLeft + theBuildings[buildingNo].northDoor.leftDoorPosition,
			h: 1	
		}
		
		theBuildings[buildingNo].walls.top2 = {
			p1x: upperLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeftToMiddle + theBuildings[buildingNo].northDoor.rightDoorPosition, 
			p1y: upperLeftY,
			p2x: upperRightX,
			p2y: upperRightY,
			w: ((lowerRightX - lowerLeftX) - theBuildings[buildingNo].northDoor.doorwayDistanceFromLeftToMiddle) - theBuildings[buildingNo].northDoor.rightDoorPosition,
			
			h: 1	
		}
	} // if north door exists
	
	
	if (theBuildings[buildingNo].eastDoor.exists === true) {
		theBuildings[buildingNo].walls.right = {
			p1x: upperRightX, 
			p1y: upperRightY,
			p2x: upperRightX,
			p2y: upperRightY + theBuildings[buildingNo].eastDoor.doorwayDistanceFromTop + theBuildings[buildingNo].eastDoor.topDoorPosition,
			w: 1,
			h: theBuildings[buildingNo].eastDoor.doorwayDistanceFromTop + theBuildings[buildingNo].eastDoor.topDoorPosition	
		}
		
		theBuildings[buildingNo].walls.right2 = {
			p1x: upperRightX,
			p1y: upperRightY + theBuildings[buildingNo].eastDoor.doorwayDistanceFromTopToMiddle + theBuildings[buildingNo].eastDoor.bottomDoorPosition, 
			p2x: lowerRightX,
			p2y: lowerRightY,
			w: 1,
			h: 	lowerRightY - (upperRightY + theBuildings[buildingNo].eastDoor.doorwayDistanceFromTopToMiddle + theBuildings[buildingNo].eastDoor.bottomDoorPosition) ,
				
		}
	} // if east door exists
	
	if (theBuildings[buildingNo].westDoor.exists === true) {
		theBuildings[buildingNo].walls.left = {
			p1x: upperLeftX, 
			p1y: upperLeftY,
			p2x: upperLeftX,
			p2y: upperLeftY + theBuildings[buildingNo].westDoor.doorwayDistanceFromTop + theBuildings[buildingNo].westDoor.topDoorPosition,
			w: 1,
			h: theBuildings[buildingNo].westDoor.doorwayDistanceFromTop + theBuildings[buildingNo].westDoor.topDoorPosition	
		}
		
		theBuildings[buildingNo].walls.left2 = {
			p1x: upperLeftX,
			p1y: upperLeftY + theBuildings[buildingNo].westDoor.doorwayDistanceFromTopToMiddle + theBuildings[buildingNo].westDoor.bottomDoorPosition, 
			p2x: lowerLeftX,
			p2y: lowerLeftY,
			w: 1,
			h: 	lowerLeftY - (upperLeftY + theBuildings[buildingNo].westDoor.doorwayDistanceFromTopToMiddle + theBuildings[buildingNo].westDoor.bottomDoorPosition) ,
		}
	} // if west door exists
	
	
	
	
//// NORTH DOOR
///////////////
	if (theBuildings[buildingNo].northDoor.exists){
		c.beginPath();
		//  theBuildings[buildingNo].northDoor.distanceFromDoor = Math.sqrt( (upperLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeftToMiddle - Player1.x) * (upperLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeftToMiddle - Player1.x) + (upperRightY - Player1.y) * (upperRightY - Player1.y));
		
		theBuildings[buildingNo].northDoor.distanceFromDoor = getDistance(Player1.x, Player1.y, 
		upperRightX - theBuildings[buildingNo].northDoor.doorwayDistanceFromRightToMiddle,
		upperRightY
		);

		// getDistanceFromDoor(Player1, buildingNo, "northDoor", upperRightX, -theBuildings[buildingNo].northDoor.doorwayDistanceFromRightToMiddle, upperRightY, 0);

//NORTH LEFT DOOR					

		if (theBuildings[buildingNo].northDoor.distanceFromDoor < 100 && theBuildings[buildingNo].northDoor.leftDoorPosition > 0) {
		theBuildings[buildingNo].northDoor.leftDoorPosition -=1;
		}

		if (theBuildings[buildingNo].northDoor.distanceFromDoor > 100 && theBuildings[buildingNo].northDoor.leftDoorPosition < theBuildings[buildingNo].northDoor.leftDoorSize) {
		theBuildings[buildingNo].northDoor.leftDoorPosition +=1;
		}
					
// define north left door top left
		var dbx = lowerLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeft - cameraX - (cameraW / 2);
		var dby = upperLeftY - cameraY - (cameraH / 2);				
		theBuildings[buildingNo].northDoor.leftDoorTopLeftX = (cameraW / 2) + dbx * 1.1;
		theBuildings[buildingNo].northDoor.leftDoorTopLeftY = (cameraH / 2) + dby * 1.1;
		
// define north left door top right
		var dbx = lowerLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeft + theBuildings[buildingNo].northDoor.leftDoorPosition - cameraX - (cameraW / 2);
		var dby = upperLeftY - cameraY - (cameraH / 2);				
		theBuildings[buildingNo].northDoor.doorTopRightX = (cameraW / 2) + dbx * 1.1;
		theBuildings[buildingNo].northDoor.doorTopRightY = (cameraH / 2) + dby * 1.1;
		
// draw north left door
		c.moveTo(lowerLeftX + (theBuildings[buildingNo].northDoor.doorwayDistanceFromLeft+theBuildings[buildingNo].northDoor.leftDoorPosition) - cameraX, upperRightY - cameraY);
		c.lineTo(lowerLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeft - cameraX, upperRightY - cameraY);
		c.lineTo(theBuildings[buildingNo].northDoor.leftDoorTopLeftX, theBuildings[buildingNo].northDoor.leftDoorTopLeftY);
		c.lineTo(theBuildings[buildingNo].northDoor.doorTopRightX, theBuildings[buildingNo].northDoor.doorTopRightY);
		
		c.fillStyle = wallColor;
		c.fill();
		c.strokeStyle = wallColor;
		c.stroke();
		c.fillStyle = "black";
		c.fill();
		c.strokeStyle = "black";
		c.stroke();
		c.closePath();
		
// NORTH RIGHT DOOR
		
		if (theBuildings[buildingNo].northDoor.distanceFromDoor < 100 && theBuildings[buildingNo].northDoor.rightDoorPosition < theBuildings[buildingNo].northDoor.leftDoorSize){
			theBuildings[buildingNo].northDoor.rightDoorPosition +=1;
		}

		if (theBuildings[buildingNo].northDoor.distanceFromDoor > 100 && theBuildings[buildingNo].northDoor.rightDoorPosition > 0) {
			theBuildings[buildingNo].northDoor.rightDoorPosition -=1;
		}
		
// define north right door top left
		var dbx = upperLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeft + theBuildings[buildingNo].northDoor.leftDoorSize + theBuildings[buildingNo].northDoor.rightDoorPosition - cameraX - (cameraW / 2);
		var dby = upperLeftY - cameraY - (cameraH / 2);				
		theBuildings[buildingNo].northDoor.rightDoorTopLeftX = (cameraW / 2) + dbx * 1.1;
		theBuildings[buildingNo].northDoor.rightDoorTopLeftY = (cameraH / 2) + dby * 1.1;
					
// define north right door top right
		var dbx = upperLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeftToMiddle + theBuildings[buildingNo].northDoor.leftDoorSize - cameraX - (cameraW / 2);
		var dby = upperLeftY - cameraY - (cameraH / 2);				
		theBuildings[buildingNo].northDoor.rightDoorTopRightX = (cameraW / 2) + dbx * 1.1;
		theBuildings[buildingNo].northDoor.rightDoorTopRightY = (cameraH / 2) + dby * 1.1;
		
// draw north right door
		c.beginPath();
		c.moveTo(lowerLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeftToMiddle + theBuildings[buildingNo].northDoor.leftDoorSize - cameraX, upperRightY - cameraY);
		c.lineTo(lowerLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeftToMiddle + theBuildings[buildingNo].northDoor.rightDoorPosition - cameraX, upperRightY - cameraY);
		c.lineTo(theBuildings[buildingNo].northDoor.rightDoorTopLeftX, theBuildings[buildingNo].northDoor.rightDoorTopLeftY);
		c.lineTo(theBuildings[buildingNo].northDoor.rightDoorTopRightX, theBuildings[buildingNo].northDoor.rightDoorTopRightY);
		c.closePath();
		
		c.fillStyle = "blue";
		c.fill();
		c.strokeStyle = "blue";
		c.stroke();
	} // define and draw north door
	
// DRAW NORTH WALL
	if (Player1.y - 2 < upperRightY || Player1.inBuilding === buildingNo) {
		c.beginPath();
		c.moveTo(upperRightX - cameraX, upperRightY - cameraY);
// if door exists, draw around it
		if (theBuildings[buildingNo].northDoor.exists) {
			c.lineTo(upperLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeftToMiddle + theBuildings[buildingNo].northDoor.leftDoorSize - cameraX, upperRightY - cameraY);
			c.lineTo(theBuildings[buildingNo].northDoor.rightDoorTopRightX, theBuildings[buildingNo].northDoor.rightDoorTopRightY);
			c.lineTo(theBuildings[buildingNo].northDoor.leftDoorTopLeftX, theBuildings[buildingNo].northDoor.leftDoorTopLeftY);
			c.lineTo(upperLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeft - cameraX, upperRightY - cameraY);
		} 
		c.lineTo(upperLeftX - cameraX, upperLeftY - cameraY);
		c.lineTo(roofTopLeftX, roofTopLeftY);
		c.lineTo(roofTopRightX, roofTopRightY);
		c.lineTo(upperRightX - cameraX, upperRightY - cameraY);
		c.fillStyle = wallColor;
		c.fill();
		c.strokeStyle = wallColor;
		c.stroke();
	} // draw north wall
	
	
	
//// EAST DOOR
//////////////
		if (theBuildings[buildingNo].eastDoor.exists) {
			c.beginPath();
			theBuildings[buildingNo].eastDoor.distanceFromDoor = Math.sqrt( (upperRightY + theBuildings[buildingNo].eastDoor.doorwayDistanceFromTopToMiddle - Player1.y) 
			* (upperRightY + theBuildings[buildingNo].eastDoor.doorwayDistanceFromTopToMiddle - Player1.y) + (upperRightX - Player1.x) * (upperRightX - Player1.x));
		
// EAST TOP DOOR	
				
			if (theBuildings[buildingNo].eastDoor.distanceFromDoor < 100 && theBuildings[buildingNo].eastDoor.topDoorPosition > 0){
				theBuildings[buildingNo].eastDoor.topDoorPosition -= 1;
			}

			if (theBuildings[buildingNo].eastDoor.distanceFromDoor > 100 && theBuildings[buildingNo].eastDoor.topDoorPosition < theBuildings[buildingNo].eastDoor.topDoorSize) {
				theBuildings[buildingNo].eastDoor.topDoorPosition += 1;
			}
							
// define east top door top right
			var dbx = upperRightX - cameraX - (cameraW / 2);	
			var dby = upperRightY + theBuildings[buildingNo].eastDoor.doorwayDistanceFromTop - cameraY - (cameraH / 2);
			theBuildings[buildingNo].eastDoor.topDoorTopRightX = (cameraW / 2) + dbx * 1.1;
			theBuildings[buildingNo].eastDoor.topDoorTopRightY = (cameraH / 2) + dby * 1.1;
			
			
// define east top door top left
			var dbx = upperRightX - cameraX - (cameraW / 2);	
			var dby = upperRightY + theBuildings[buildingNo].eastDoor.doorwayDistanceFromTop + theBuildings[buildingNo].eastDoor.topDoorPosition - cameraY - (cameraH / 2);
			theBuildings[buildingNo].eastDoor.topDoorTopLeftX = (cameraW / 2) + dbx * 1.1;
			theBuildings[buildingNo].eastDoor.topDoorTopLeftY = (cameraH / 2) + dby * 1.1;
					
// draw east top door		
			c.moveTo(upperRightX - cameraX, upperRightY + (theBuildings[buildingNo].eastDoor.doorwayDistanceFromTop + theBuildings[buildingNo].eastDoor.topDoorPosition) - cameraY);
			c.lineTo(upperRightX - cameraX, upperRightY + theBuildings[buildingNo].eastDoor.doorwayDistanceFromTop - cameraY);
			c.lineTo(theBuildings[buildingNo].eastDoor.topDoorTopRightX, theBuildings[buildingNo].eastDoor.topDoorTopRightY);
			c.lineTo(theBuildings[buildingNo].eastDoor.topDoorTopLeftX, theBuildings[buildingNo].eastDoor.topDoorTopLeftY);
			
			c.fillStyle = "black";
			c.fill();
			c.strokeStyle = "black";
			c.stroke();
			c.closePath();

// EAST BOTTOM DOOR

			if (theBuildings[buildingNo].eastDoor.distanceFromDoor < 100 && theBuildings[buildingNo].eastDoor.bottomDoorPosition < theBuildings[buildingNo].eastDoor.bottomDoorSize) {
				theBuildings[buildingNo].eastDoor.bottomDoorPosition +=1;
			}
			if (theBuildings[buildingNo].eastDoor.distanceFromDoor > 100 && theBuildings[buildingNo].eastDoor.bottomDoorPosition > 0) {
				theBuildings[buildingNo].eastDoor.bottomDoorPosition -=1;
			}
	
// define east bottom door top left
			var dbx = upperRightX - cameraX - (cameraW / 2);	
			var dby = upperRightY + theBuildings[buildingNo].eastDoor.doorwayDistanceFromTopToMiddle + theBuildings[buildingNo].eastDoor.bottomDoorSize - cameraY - (cameraH / 2);	
			theBuildings[buildingNo].eastDoor.bottomDoorTopLeftX = (cameraW / 2) + dbx * 1.1;
			theBuildings[buildingNo].eastDoor.bottomDoorTopLeftY = (cameraH / 2) + dby * 1.1;
				
// define east bottom door top right
			var dbx = upperRightX - cameraX - (cameraW / 2);	
			var dby = upperRightY + theBuildings[buildingNo].eastDoor.doorwayDistanceFromTopToMiddle + theBuildings[buildingNo].eastDoor.bottomDoorPosition - cameraY - (cameraH / 2);
			theBuildings[buildingNo].eastDoor.bottomDoorTopRightX = (cameraW / 2) + dbx * 1.1;
			theBuildings[buildingNo].eastDoor.bottomDoorTopRightY = (cameraH / 2) + dby * 1.1;

// draw east bottom door			
			c.beginPath();
			c.moveTo(upperRightX - cameraX, upperRightY + (theBuildings[buildingNo].eastDoor.doorwayDistanceFromTopToMiddle + theBuildings[buildingNo].eastDoor.bottomDoorPosition) - cameraY);
			c.lineTo(upperRightX - cameraX, upperRightY + theBuildings[buildingNo].eastDoor.doorwayDistanceFromTopToMiddle + theBuildings[buildingNo].eastDoor.bottomDoorSize - cameraY);
			c.lineTo(theBuildings[buildingNo].eastDoor.bottomDoorTopLeftX, theBuildings[buildingNo].eastDoor.bottomDoorTopLeftY);
			c.lineTo(theBuildings[buildingNo].eastDoor.bottomDoorTopRightX, theBuildings[buildingNo].eastDoor.bottomDoorTopRightY);
			
			c.fillStyle = "blue";
			c.fill();
			c.strokeStyle = "blue";
			c.stroke();
			c.closePath();
		} // east door
	
//DRAW EAST WALL
		if (Player1.x   > upperRightX || Player1.inBuilding === buildingNo) {
			c.beginPath();
			c.moveTo(upperRightX - cameraX, upperRightY - cameraY);
// if door exists, draw around it		
			if (theBuildings[buildingNo].eastDoor.exists) {
				c.lineTo(upperRightX - cameraX, upperRightY + theBuildings[buildingNo].eastDoor.doorwayDistanceFromTop - cameraY);
				c.lineTo(theBuildings[buildingNo].eastDoor.topDoorTopRightX, theBuildings[buildingNo].eastDoor.topDoorTopRightY);
				c.lineTo(theBuildings[buildingNo].eastDoor.bottomDoorTopLeftX, theBuildings[buildingNo].eastDoor.bottomDoorTopLeftY);
				c.lineTo(upperRightX - cameraX, upperRightY + theBuildings[buildingNo].eastDoor.doorwayDistanceFromTopToMiddle + theBuildings[buildingNo].eastDoor.topDoorSize - cameraY);
			} 
			c.lineTo(lowerRightX - cameraX, lowerRightY - cameraY);
			c.lineTo(roofBottomRightX, roofBottomRightY);
			c.lineTo(roofTopRightX, roofTopRightY);
			c.lineTo(upperRightX - cameraX, upperRightY - cameraY);
			
			c.fillStyle = wallColor;
			c.fill();
			c.strokeStyle = wallColor;
			c.stroke();
			c.closePath();
		}



//// WEST DOOR



		if (theBuildings[buildingNo].westDoor.exists) {
			c.beginPath();
			theBuildings[buildingNo].westDoor.distanceFromDoor = Math.sqrt( (upperLeftY + theBuildings[buildingNo].westDoor.doorwayDistanceFromTopToMiddle - Player1.y) 
			* (upperLeftY + theBuildings[buildingNo].westDoor.doorwayDistanceFromTopToMiddle - Player1.y) + (upperLeftX - Player1.x) * (upperLeftX - Player1.x));
				
		
//WEST TOP DOOR		
			
			if (theBuildings[buildingNo].westDoor.distanceFromDoor < 100 && theBuildings[buildingNo].westDoor.topDoorPosition > 0){
				theBuildings[buildingNo].westDoor.topDoorPosition -= 1;
			}

			if (theBuildings[buildingNo].westDoor.distanceFromDoor > 100 && theBuildings[buildingNo].westDoor.topDoorPosition < theBuildings[buildingNo].westDoor.topDoorSize) {
				theBuildings[buildingNo].westDoor.topDoorPosition += 1;
			}
							
// define west top door top right
			var dbx = upperLeftX - cameraX - (cameraW / 2);	
			var dby = upperLeftY + theBuildings[buildingNo].westDoor.doorwayDistanceFromTop - cameraY - (cameraH / 2);
			theBuildings[buildingNo].westDoor.topDoorTopRightX = (cameraW / 2) + dbx * 1.1;
			theBuildings[buildingNo].westDoor.topDoorTopRightY = (cameraH / 2) + dby * 1.1;
			
			
// define west top door top left
			var dbx = upperLeftX - cameraX - (cameraW / 2);	
			var dby = upperLeftY + theBuildings[buildingNo].westDoor.doorwayDistanceFromTop + theBuildings[buildingNo].westDoor.topDoorPosition - cameraY - (cameraH / 2);
			theBuildings[buildingNo].westDoor.topDoorTopLeftX = (cameraW / 2) + dbx * 1.1;
			theBuildings[buildingNo].westDoor.topDoorTopLeftY = (cameraH / 2) + dby * 1.1;
					
// draw west top door					
			c.moveTo(upperLeftX - cameraX, upperLeftY + (theBuildings[buildingNo].westDoor.doorwayDistanceFromTop + theBuildings[buildingNo].westDoor.topDoorPosition) - cameraY);
			c.lineTo(upperLeftX - cameraX, upperLeftY + theBuildings[buildingNo].westDoor.doorwayDistanceFromTop - cameraY);
			c.lineTo(theBuildings[buildingNo].westDoor.topDoorTopRightX, theBuildings[buildingNo].westDoor.topDoorTopRightY);
			c.lineTo(theBuildings[buildingNo].westDoor.topDoorTopLeftX, theBuildings[buildingNo].westDoor.topDoorTopLeftY);
		
			c.fillStyle = "black";
			c.fill();
			c.strokeStyle = "black";
			c.stroke();
			c.closePath();

// WEST BOTTOM DOOR

			if (theBuildings[buildingNo].westDoor.distanceFromDoor < 100 && theBuildings[buildingNo].westDoor.bottomDoorPosition < theBuildings[buildingNo].westDoor.bottomDoorSize){
				theBuildings[buildingNo].westDoor.bottomDoorPosition +=1;
			}

			if (theBuildings[buildingNo].westDoor.distanceFromDoor > 100 && theBuildings[buildingNo].westDoor.bottomDoorPosition > 0) {
				theBuildings[buildingNo].westDoor.bottomDoorPosition -=1;
			}
		
// define west bottom door top left
			var dbx = upperLeftX - cameraX - (cameraW / 2);	
			var dby = upperLeftY + theBuildings[buildingNo].westDoor.doorwayDistanceFromTopToMiddle + theBuildings[buildingNo].westDoor.bottomDoorSize - cameraY - (cameraH / 2);	
			theBuildings[buildingNo].westDoor.bottomDoorTopLeftX = (cameraW / 2) + dbx * 1.1;
			theBuildings[buildingNo].westDoor.bottomDoorTopLeftY = (cameraH / 2) + dby * 1.1;
					
// define west bottom door top right
			var dbx = upperLeftX - cameraX - (cameraW / 2);	
			var dby = upperLeftY + theBuildings[buildingNo].westDoor.doorwayDistanceFromTopToMiddle + theBuildings[buildingNo].westDoor.bottomDoorPosition - cameraY - (cameraH / 2);
			theBuildings[buildingNo].westDoor.bottomDoorTopRightX = (cameraW / 2) + dbx * 1.1;
			theBuildings[buildingNo].westDoor.bottomDoorTopRightY = (cameraH / 2) + dby * 1.1;

// draw west bottom door	
			c.beginPath();
			c.moveTo(upperLeftX - cameraX, upperLeftY + (theBuildings[buildingNo].westDoor.doorwayDistanceFromTopToMiddle + theBuildings[buildingNo].westDoor.bottomDoorPosition) - cameraY);
			c.lineTo(upperLeftX - cameraX, upperLeftY + theBuildings[buildingNo].westDoor.doorwayDistanceFromTopToMiddle + theBuildings[buildingNo].westDoor.bottomDoorSize - cameraY);
			c.lineTo(theBuildings[buildingNo].westDoor.bottomDoorTopLeftX, theBuildings[buildingNo].westDoor.bottomDoorTopLeftY);
			c.lineTo(theBuildings[buildingNo].westDoor.bottomDoorTopRightX, theBuildings[buildingNo].westDoor.bottomDoorTopRightY);
			
			c.fillStyle = "blue";
			c.fill();
			c.strokeStyle = "blue";
			c.stroke();
			c.closePath();
		} // west door
	
// DRAW WEST WALL

		if (Player1.x < upperLeftX || Player1.inBuilding === buildingNo) {
			c.beginPath();
			c.moveTo(upperLeftX - cameraX, upperLeftY - cameraY);
// if door exists, draw around it			
			if (theBuildings[buildingNo].westDoor.exists) {
			c.lineTo(upperLeftX - cameraX, upperLeftY + theBuildings[buildingNo].westDoor.doorwayDistanceFromTop - cameraY);
			c.lineTo(theBuildings[buildingNo].westDoor.topDoorTopRightX, theBuildings[buildingNo].westDoor.topDoorTopRightY);
			c.lineTo(theBuildings[buildingNo].westDoor.bottomDoorTopLeftX, theBuildings[buildingNo].westDoor.bottomDoorTopLeftY);
			c.lineTo(upperLeftX - cameraX, upperLeftY + theBuildings[buildingNo].westDoor.doorwayDistanceFromTopToMiddle + theBuildings[buildingNo].westDoor.topDoorSize - cameraY);
		} 
		c.lineTo(lowerLeftX - cameraX, lowerLeftY - cameraY);
		c.lineTo(roofBottomLeftX, roofBottomLeftY);
		c.lineTo(roofTopLeftX, roofTopLeftY);
		c.lineTo(upperLeftX - cameraX, upperLeftY - cameraY);
		
		c.fillStyle = wallColor;
		c.fill();
		c.strokeStyle = wallColor;
		c.stroke();
		c.closePath();
	} // west wall


	
// SOUTH DOOR



	if (theBuildings[buildingNo].southDoor.exists){
		c.beginPath();
		theBuildings[buildingNo].southDoor.distanceFromDoor = Math.sqrt( (lowerLeftX + theBuildings[buildingNo].southDoor.doorwayDistanceFromLeftToMiddle - Player1.x) * (lowerLeftX + theBuildings[buildingNo].southDoor.doorwayDistanceFromLeftToMiddle - Player1.x) + (lowerRightY - Player1.y) * (lowerRightY - Player1.y));
				
// SOUTH LEFT DOOR					

		if (theBuildings[buildingNo].southDoor.distanceFromDoor < 100 && theBuildings[buildingNo].southDoor.leftDoorPosition > 0){
			theBuildings[buildingNo].southDoor.leftDoorPosition -=1;
		}
		if (theBuildings[buildingNo].southDoor.distanceFromDoor > 100 && theBuildings[buildingNo].southDoor.leftDoorPosition < theBuildings[buildingNo].southDoor.leftDoorSize) {
			theBuildings[buildingNo].southDoor.leftDoorPosition +=1;
		}
					
// define south left door top left
		var dbx = lowerLeftX + theBuildings[buildingNo].southDoor.doorwayDistanceFromLeft - cameraX - (cameraW / 2);
		var dby = lowerLeftY - cameraY - (cameraH / 2);				
		theBuildings[buildingNo].southDoor.leftDoorTopLeftX = (cameraW / 2) + dbx * 1.075;
		theBuildings[buildingNo].southDoor.leftDoorTopLeftY = (cameraH / 2) + dby * 1.075;
	
// define south left door top right
		var dbx = lowerLeftX + theBuildings[buildingNo].southDoor.doorwayDistanceFromLeft + theBuildings[buildingNo].southDoor.leftDoorPosition - cameraX - (cameraW / 2);
		var dby = lowerLeftY - cameraY - (cameraH / 2);				
		theBuildings[buildingNo].southDoor.doorTopRightX = (cameraW / 2) + dbx * 1.075;
		theBuildings[buildingNo].southDoor.doorTopRightY = (cameraH / 2) + dby * 1.075;
			
// draw south left door		
		c.moveTo(lowerLeftX + (theBuildings[buildingNo].southDoor.doorwayDistanceFromLeft+theBuildings[buildingNo].southDoor.leftDoorPosition) - cameraX, lowerRightY - cameraY);
		c.lineTo(lowerLeftX + theBuildings[buildingNo].southDoor.doorwayDistanceFromLeft - cameraX, lowerRightY - cameraY);
		c.lineTo(theBuildings[buildingNo].southDoor.leftDoorTopLeftX, theBuildings[buildingNo].southDoor.leftDoorTopLeftY);
		c.lineTo(theBuildings[buildingNo].southDoor.doorTopRightX, theBuildings[buildingNo].southDoor.doorTopRightY);
		
		c.fillStyle = theBuildings[buildingNo].southDoor.leftDoorColor;
		c.fill();
		c.strokeStyle = "black";
		c.stroke();
		c.closePath();

// RIGHT DOOR

		if (theBuildings[buildingNo].southDoor.distanceFromDoor < 100 && theBuildings[buildingNo].southDoor.rightDoorPosition < theBuildings[buildingNo].southDoor.leftDoorSize){
			theBuildings[buildingNo].southDoor.rightDoorPosition +=1;
		}

		if (theBuildings[buildingNo].southDoor.distanceFromDoor > 100 && theBuildings[buildingNo].southDoor.rightDoorPosition > 0) {
			theBuildings[buildingNo].southDoor.rightDoorPosition -=1;
		}
	
	
// define south right door top left
		var dbx = lowerLeftX + theBuildings[buildingNo].southDoor.doorwayDistanceFromLeft + theBuildings[buildingNo].southDoor.leftDoorSize + theBuildings[buildingNo].southDoor.rightDoorPosition - cameraX - (cameraW / 2);
		var dby = lowerLeftY - cameraY - (cameraH / 2);				
		theBuildings[buildingNo].southDoor.rightDoorTopLeftX = (cameraW / 2) + dbx * 1.075;
		theBuildings[buildingNo].southDoor.rightDoorTopLeftY = (cameraH / 2) + dby * 1.075;
				
// define south right door top right
		var dbx = lowerLeftX + theBuildings[buildingNo].southDoor.doorwayDistanceFromLeftToMiddle + theBuildings[buildingNo].southDoor.leftDoorSize - cameraX - (cameraW / 2);
		var dby = lowerLeftY - cameraY - (cameraH / 2);				
		theBuildings[buildingNo].southDoor.rightDoorTopRightX = (cameraW / 2) + dbx * 1.075;
		theBuildings[buildingNo].southDoor.rightDoorTopRightY = (cameraH / 2) + dby * 1.075;
		
// draw south right door
		c.beginPath();
		c.moveTo(lowerLeftX + theBuildings[buildingNo].southDoor.doorwayDistanceFromLeftToMiddle + theBuildings[buildingNo].southDoor.leftDoorSize - cameraX, lowerRightY - cameraY);
		
		c.lineTo(lowerLeftX + theBuildings[buildingNo].southDoor.doorwayDistanceFromLeftToMiddle + theBuildings[buildingNo].southDoor.rightDoorPosition - cameraX, lowerRightY - cameraY);
		c.lineTo(theBuildings[buildingNo].southDoor.rightDoorTopLeftX, theBuildings[buildingNo].southDoor.rightDoorTopLeftY);
		c.lineTo(theBuildings[buildingNo].southDoor.rightDoorTopRightX, theBuildings[buildingNo].southDoor.rightDoorTopRightY);
		
		c.fillStyle = theBuildings[buildingNo].southDoor.rightDoorColor;
		c.fill();
		c.strokeStyle = "blue";
		c.stroke();
		c.closePath();
	}

// DRAW SOUTH WALL

	if (Player1.y + 2   > lowerRightY || Player1.inBuilding === buildingNo) {
		c.beginPath();
		c.moveTo(lowerRightX - cameraX, lowerRightY - cameraY);
// if door exists, draw around it	
		if (theBuildings[buildingNo].southDoor) {
			c.lineTo(lowerLeftX + theBuildings[buildingNo].southDoor.doorwayDistanceFromLeftToMiddle + theBuildings[buildingNo].southDoor.leftDoorSize - cameraX, lowerRightY - cameraY);
			c.lineTo(theBuildings[buildingNo].southDoor.rightDoorTopRightX, theBuildings[buildingNo].southDoor.rightDoorTopRightY);
			c.lineTo(theBuildings[buildingNo].southDoor.leftDoorTopLeftX, theBuildings[buildingNo].southDoor.leftDoorTopLeftY);
			c.lineTo(lowerLeftX + theBuildings[buildingNo].southDoor.doorwayDistanceFromLeft - cameraX, lowerRightY - cameraY);
		} 
		c.lineTo(lowerLeftX - cameraX, lowerLeftY - cameraY);
		c.lineTo(roofBottomLeftX, roofBottomLeftY);
		c.lineTo(roofBottomRightX, roofBottomRightY);
		c.lineTo(lowerRightX - cameraX, lowerRightY - cameraY);
		c.fillStyle = wallColor;
		c.fill();
		c.strokeStyle = wallColor;
		c.stroke();
	}
	
// draw NEON corners
// Credit to a pen by Giovanny for how to make this neon effect: https://codepen.io/agar3s/pen/pJpoya
	if (theBuildings[buildingNo].neonCorners === true && Player1.inBuilding != buildingNo ) {	
		c.strokeStyle = theBuildings[buildingNo].neonColor;
		c.shadowColor = theBuildings[buildingNo].neonShadowColor;
		c.globalCompositeOperation = "lighter";
		//c.shadowBlur = 4;
		c.lineCap = "round";
		c.beginPath();	
		for (i = 12; i > 0; i -= 3) {
			
			c.lineWidth = i;
			c.moveTo(lowerLeftX - cameraX, lowerLeftY - cameraY);
			c.lineTo(roofBottomLeftX, roofBottomLeftY);
			c.stroke();
			
		}
		for (i = 12; i > 0; i -= 3) {
			c.beginPath();	
			c.lineWidth = i;
			c.moveTo(upperLeftX - cameraX, upperLeftY - cameraY);
			c.lineTo(roofTopLeftX, roofTopLeftY);
			c.stroke();
		}
		for (i = 12; i > 0; i -= 3) {
			c.beginPath();	
			c.lineWidth = i;
			c.moveTo(lowerRightX - cameraX, lowerRightY - cameraY);
			c.lineTo(roofBottomRightX, roofBottomRightY);
			c.stroke();
		}
		for (i = 12; i > 0; i -= 3) {
			c.beginPath();	
			c.lineWidth = i;
			c.moveTo(upperRightX - cameraX, upperRightY - cameraY);
			c.lineTo(roofTopRightX, roofTopRightY);
			c.stroke();
		}
		c.closePath();	
		c.lineCap = "butt";
		c.shadowBlur = 0;
		c.lineWidth = 1;
		c.globalCompositeOperation = "source-over";		
	}	// draw neon corners	
				
// DRAW ROOF
	if (Player1.inBuilding != buildingNo) {
		c.beginPath();
		c.fillStyle = roofColor;
		c.strokeStyle = wallColor;
		c.beginPath();	
		c.moveTo(roofTopLeftX, roofTopLeftY);
		c.lineTo(roofTopRightX, roofTopRightY);
		c.lineTo(roofBottomRightX, roofBottomRightY);
		c.lineTo(roofBottomLeftX, roofBottomLeftY);
		c.lineTo(roofTopLeftX, roofTopLeftY);
		c.fillStyle = roofColor;
		c.stroke();
		c.fill();
		c.closePath();

		// draw neon effect on roof
		if (theBuildings[buildingNo].neonRoof === true) {
			c.strokeStyle = theBuildings[buildingNo].neonColor;
			c.shadowColor = theBuildings[buildingNo].neonShadowColor;
			c.globalCompositeOperation = "lighter";
			//c.shadowBlur = 4;
			c.lineCap = "round";
			c.beginPath();	
			for (i = 13; i > 0; i = i - 3) {
				c.lineWidth = i;
				c.rect(roofTopLeftX, roofTopLeftY, roofTopRightX - roofTopLeftX, roofBottomRightY - roofTopLeftY );
				c.stroke();
			}
			c.closePath(); 
		} // draw neon edges to roof	
		c.lineCap = "butt";
		c.shadowBlur = 0;
		c.lineWidth = 1;
		c.globalCompositeOperation = "source-over";
	} // draw roof
} // drawRectangularBuilding
// 754