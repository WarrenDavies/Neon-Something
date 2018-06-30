function init() {
console.log("start");

// doing


// to do


//zombie movement updates:

// When two zombies with waypoints collide, have the youngest zombie adopt the waypoint of the older one. This will prevent them getting stuck.
// as soon as zombies detect a collision with a wall, move them in their opposite direction a few pixels. This will prevent them getting stuck on walls, and give the appearance that the dumb zombies are bumping into things
// when zombies bump into each other, move them one pixel in the opposite direction -- but see if this is still needed after the above two fixes
//have zombies target civilians, and turn them into new zombies
// add experience points to zombies -- they get stronger the older they are, and the more civilians they have killed, doing damage to the player etc.





// make save/restore more efficien -- don't need to do this in every loop surely.
// also need to use layered canvases so I'm not drawing elements that haven't moved. At least do a three way split -- Map and buildings / Player / NPCs

// check civilian waypoints don't appear inside buidings

// make functions smaller

// Make variables more local

// Split game into multiple files

// vehicle moves forward on the screen when accelerating
// vehicles maintain their speed when player leaves them

// get the camera out of the drawing functions - for the buildings
// put the door coordinates etc into the building objects and set it to draw doors automatically

// splice bullets when they hit buildings

// BUGS

/// ---- DOORS can be seen through walls -- see building 4
/// 
/// darkess isn't working
// 
// COLLISION
// collission with left door not working on larger doors

// car physics 
// then collision detection

// animation for getting into cars, should enter car by the door?

// get better graphics - make it look more 80s.

// collect other cars with a tow truck

// the fucntion that defintes the building line coordinates takes camera position into account. Therefore every function that uses these variables has to adjust for camera position even when not rendering. eg., when detecting bullet collisions. So need to change so that these variables are flat x and y coordinates, and then change all functions that use these variables to remove the - cameraX etc.

// Need to make a system where the connections are added automatically by drawing lines to other ones and seeing if there are any collisions with obstacles. This needs to happen before the map loads, which will increase load time, OR have some kind of map editor that works this out and hard codes it.

// Need to make a map editor




// define variables





/*
function loadImages() {
cityOutside = new Image();
cityOutside.src = 'LPC_city_outside.png';

grassImage = new Image();
grassImage.src = 'images/grassImage.png';

pavementImage = new Image();
pavementImage.src = 'images/pavementImage.png';

waterImage = new Image();
waterImage.src = 'images/waterImage.png';

brownWall = new Image();
brownWall.src = 'images/brownWall.png';

sandImage = new Image();
sandImage.src = 'images/sandImage.png';

}
loadImages(); 
*/


// set up canvas
canvas = document.getElementById("canvas");
canvas.onselectstart = function () { return false; }
c = canvas.getContext("2d");

var brownWallSouth=c.createPattern(brownWall,"repeat");

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
 window.requestAnimationFrame = requestAnimationFrame;
 





//



// initial canvas background 
 c.beginPath();
 //c.fillStyle = "rgb(45,133,222)";
 c.fillStyle = "pink";
 
 c.rect(0,0,800,600);
 c.fill();
 c.closePath();

 

 
 
 


// update vehicle collision lines for all vehicles. Lines don't update unless a vehicle moves, so this run this at the start of the game
calculateAllVehicleLines();
 

 




 
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
	c.fillText(Player1.activeWeapon, 720, 25);	
	
	
}



   








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
			
			if (isOnCamera(theBuildings[i]) ) {
			 
				drawRectangularBuilding(theBuildings[i].upperLeftX, theBuildings[i].upperLeftY, theBuildings[i].lowerRightX, theBuildings[i].lowerRightY, theBuildings[i].height, theBuildings[i].wallColor, theBuildings[i].roofColor, theBuildings[i].building);
				
				
			 		 } else {
					 // console.log("i splice = " + i);
				 buildingsOnScreen.splice(j, 1);
				
				//console.log("IOnjoin");
			 }
		}
	}
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
	var dx = upperLeftX - cameraX - 400;
	var dy = upperLeftY - cameraY - 300;				
	var roofTopLeftX = 400 + dx * height;
	var roofTopLeftY = 300 + dy * height;
	
	theBuildings[buildingNo].roofTopLeftX = roofTopLeftX;
	theBuildings[buildingNo].roofTopLeftY = roofTopLeftY;
	theBuildings[buildingNo].roofTopLeftXExtend = 400 + dx * 20;
	theBuildings[buildingNo].roofTopLeftYExtend = 400 + dy * 20;
	
	// roof top right
	var dx = upperRightX - cameraX - 400;
	var dy = upperRightY - cameraY - 300;				
	var roofTopRightX = 400 + dx * height;
	var roofTopRightY = 300 + dy * height;
	
	theBuildings[buildingNo].roofTopRightX = roofTopRightX;
	theBuildings[buildingNo].roofTopRightY = roofTopRightY;
	
	// roof bottom right
	var dx = lowerRightX - cameraX - 400;
	var dy = lowerRightY - cameraY - 300;				
	var roofBottomRightX = 400 + dx * height;
	var roofBottomRightY = 300 + dy * height;
	
	theBuildings[buildingNo].roofBottomRightX = roofBottomRightX;
	theBuildings[buildingNo].roofBottomRightY = roofBottomRightY;
	
	// roof bottom left
	var dx = lowerLeftX - cameraX -	400;
	var dy = lowerLeftY - cameraY - 300;				
	var roofBottomLeftX = 400 + dx * height;
	var roofBottomLeftY = 300 + dy * height;
	
	theBuildings[buildingNo].roofBottomLeftX = roofBottomLeftX;
	theBuildings[buildingNo].roofBottomLeftY = roofBottomLeftY;
	theBuildings[buildingNo].roofBottomLeftXExtend = 400 + dx * 20;
	theBuildings[buildingNo].roofBottomLeftYExtend = 400 + dy * 20;
	
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
		theBuildings[buildingNo].northDoor.distanceFromDoor = Math.sqrt( (upperLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeftToMiddle - Player1.x) * (upperLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeftToMiddle - Player1.x) + (upperRightY - Player1.y) * (upperRightY - Player1.y));
				
//NORTH LEFT DOOR					

		if (theBuildings[buildingNo].northDoor.distanceFromDoor < 100 && theBuildings[buildingNo].northDoor.leftDoorPosition > 0) {
		theBuildings[buildingNo].northDoor.leftDoorPosition -=1;
		}

		if (theBuildings[buildingNo].northDoor.distanceFromDoor > 100 && theBuildings[buildingNo].northDoor.leftDoorPosition < theBuildings[buildingNo].northDoor.leftDoorSize) {
		theBuildings[buildingNo].northDoor.leftDoorPosition +=1;
		}
					
// define north left door top left
		var dbx = lowerLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeft - cameraX - 400;
		var dby = upperLeftY - cameraY - 300;				
		theBuildings[buildingNo].northDoor.leftDoorTopLeftX = 400 + dbx * 1.1;
		theBuildings[buildingNo].northDoor.leftDoorTopLeftY = 300 + dby * 1.1;
		
// define north left door top right
		var dbx = lowerLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeft + theBuildings[buildingNo].northDoor.leftDoorPosition - cameraX - 400;
		var dby = upperLeftY - cameraY - 300;				
		theBuildings[buildingNo].northDoor.doorTopRightX = 400 + dbx * 1.1;
		theBuildings[buildingNo].northDoor.doorTopRightY = 300 + dby * 1.1;
		
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
		var dbx = upperLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeft + theBuildings[buildingNo].northDoor.leftDoorSize + theBuildings[buildingNo].northDoor.rightDoorPosition - cameraX - 400;
		var dby = upperLeftY - cameraY - 300;				
		theBuildings[buildingNo].northDoor.rightDoorTopLeftX = 400 + dbx * 1.1;
		theBuildings[buildingNo].northDoor.rightDoorTopLeftY = 300 + dby * 1.1;
					
// define north right door top right
		var dbx = upperLeftX + theBuildings[buildingNo].northDoor.doorwayDistanceFromLeftToMiddle + theBuildings[buildingNo].northDoor.leftDoorSize - cameraX - 400;
		var dby = upperLeftY - cameraY - 300;				
		theBuildings[buildingNo].northDoor.rightDoorTopRightX = 400 + dbx * 1.1;
		theBuildings[buildingNo].northDoor.rightDoorTopRightY = 300 + dby * 1.1;
		
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
			var dbx = upperRightX - cameraX - 400;	
			var dby = upperRightY + theBuildings[buildingNo].eastDoor.doorwayDistanceFromTop - cameraY - 300;
			theBuildings[buildingNo].eastDoor.topDoorTopRightX = 400 + dbx * 1.1;
			theBuildings[buildingNo].eastDoor.topDoorTopRightY = 300 + dby * 1.1;
			
			
// define east top door top left
			var dbx = upperRightX - cameraX - 400;	
			var dby = upperRightY + theBuildings[buildingNo].eastDoor.doorwayDistanceFromTop + theBuildings[buildingNo].eastDoor.topDoorPosition - cameraY - 300;
			theBuildings[buildingNo].eastDoor.topDoorTopLeftX = 400 + dbx * 1.1;
			theBuildings[buildingNo].eastDoor.topDoorTopLeftY = 300 + dby * 1.1;
					
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
			var dbx = upperRightX - cameraX - 400;	
			var dby = upperRightY + theBuildings[buildingNo].eastDoor.doorwayDistanceFromTopToMiddle + theBuildings[buildingNo].eastDoor.bottomDoorSize - cameraY - 300;	
			theBuildings[buildingNo].eastDoor.bottomDoorTopLeftX = 400 + dbx * 1.1;
			theBuildings[buildingNo].eastDoor.bottomDoorTopLeftY = 300 + dby * 1.1;
				
// define east bottom door top right
			var dbx = upperRightX - cameraX - 400;	
			var dby = upperRightY + theBuildings[buildingNo].eastDoor.doorwayDistanceFromTopToMiddle + theBuildings[buildingNo].eastDoor.bottomDoorPosition - cameraY - 300;
			theBuildings[buildingNo].eastDoor.bottomDoorTopRightX = 400 + dbx * 1.1;
			theBuildings[buildingNo].eastDoor.bottomDoorTopRightY = 300 + dby * 1.1;

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
			var dbx = upperLeftX - cameraX - 400;	
			var dby = upperLeftY + theBuildings[buildingNo].westDoor.doorwayDistanceFromTop - cameraY - 300;
			theBuildings[buildingNo].westDoor.topDoorTopRightX = 400 + dbx * 1.1;
			theBuildings[buildingNo].westDoor.topDoorTopRightY = 300 + dby * 1.1;
			
			
// define west top door top left
			var dbx = upperLeftX - cameraX - 400;	
			var dby = upperLeftY + theBuildings[buildingNo].westDoor.doorwayDistanceFromTop + theBuildings[buildingNo].westDoor.topDoorPosition - cameraY - 300;
			theBuildings[buildingNo].westDoor.topDoorTopLeftX = 400 + dbx * 1.1;
			theBuildings[buildingNo].westDoor.topDoorTopLeftY = 300 + dby * 1.1;
					
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
			var dbx = upperLeftX - cameraX - 400;	
			var dby = upperLeftY + theBuildings[buildingNo].westDoor.doorwayDistanceFromTopToMiddle + theBuildings[buildingNo].westDoor.bottomDoorSize - cameraY - 300;	
			theBuildings[buildingNo].westDoor.bottomDoorTopLeftX = 400 + dbx * 1.1;
			theBuildings[buildingNo].westDoor.bottomDoorTopLeftY = 300 + dby * 1.1;
					
// define west bottom door top right
			var dbx = upperLeftX - cameraX - 400;	
			var dby = upperLeftY + theBuildings[buildingNo].westDoor.doorwayDistanceFromTopToMiddle + theBuildings[buildingNo].westDoor.bottomDoorPosition - cameraY - 300;
			theBuildings[buildingNo].westDoor.bottomDoorTopRightX = 400 + dbx * 1.1;
			theBuildings[buildingNo].westDoor.bottomDoorTopRightY = 300 + dby * 1.1;

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
		var dbx = lowerLeftX + theBuildings[buildingNo].southDoor.doorwayDistanceFromLeft - cameraX - 400;
		var dby = lowerLeftY - cameraY - 300;				
		theBuildings[buildingNo].southDoor.leftDoorTopLeftX = 400 + dbx * 1.1;
		theBuildings[buildingNo].southDoor.leftDoorTopLeftY = 300 + dby * 1.1;
	
// define south left door top right
		var dbx = lowerLeftX + theBuildings[buildingNo].southDoor.doorwayDistanceFromLeft + theBuildings[buildingNo].southDoor.leftDoorPosition - cameraX - 400;
		var dby = lowerLeftY - cameraY - 300;				
		theBuildings[buildingNo].southDoor.doorTopRightX = 400 + dbx * 1.1;
		theBuildings[buildingNo].southDoor.doorTopRightY = 300 + dby * 1.1;
			
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
		var dbx = lowerLeftX + theBuildings[buildingNo].southDoor.doorwayDistanceFromLeft + theBuildings[buildingNo].southDoor.leftDoorSize + theBuildings[buildingNo].southDoor.rightDoorPosition - cameraX - 400;
		var dby = lowerLeftY - cameraY - 300;				
		theBuildings[buildingNo].southDoor.rightDoorTopLeftX = 400 + dbx * 1.1;
		theBuildings[buildingNo].southDoor.rightDoorTopLeftY = 300 + dby * 1.1;
				
// define south right door top right
		var dbx = lowerLeftX + theBuildings[buildingNo].southDoor.doorwayDistanceFromLeftToMiddle + theBuildings[buildingNo].southDoor.leftDoorSize - cameraX - 400;
		var dby = lowerLeftY - cameraY - 300;				
		theBuildings[buildingNo].southDoor.rightDoorTopRightX = 400 + dbx * 1.1;
		theBuildings[buildingNo].southDoor.rightDoorTopRightY = 300 + dby * 1.1;
		
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



theBuildings.forEach( function(i, j) {
	
//if (j === 2) {
	var upperLeftX = Math.floor(i.upperLeftX / 50);
	var upperLeftY = Math.floor(i.upperLeftY / 50);
	var lowerRightX = Math.floor(i.lowerRightX / 50);
	var lowerRightY = Math.floor(i.lowerRightY / 50);
	i.centerX = i.lowerRightX - i.upperLeftX;
	i.centerY = i.lowerRightY - i.upperLeftY;
	//console.log("upperLeftY " + upperLeftY);
	//console.log("lowerRightY " + lowerRightY);
	
		for (k = upperLeftY; k <= lowerRightY; k++) {
			for (l = upperLeftX; l <= lowerRightX; l++) {
			
				objectifyTile(map[k][l], k, l);
				//console.log("k " + k);
				//console.log("l " + l);
				//console.log("...");
				map[k][l].building = j;
				map[k][l].backgroundImage = i.floor;
				
			}
		}
		
//} // j ==2 
	
});

 // Player coords and initial location
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
loadCivilian();
theCivilians[2].targetWP = 1;

function getXDirection (x, y, xt, yt) {
	var deltaX = xt - x;
	var deltaY = yt - y;
	var rotation = Math.atan2(deltaY, deltaX);
	var xtarget = Math.cos(rotation);
	var ytarget = Math.sin(rotation);
	return xtarget;
}

function getYDirection (x, y, xt, yt) {
	var deltaX = xt - x;
	var deltaY = yt - y;
	var rotation = Math.atan2(deltaY, deltaX);
	var xtarget = Math.cos(rotation);
	var ytarget = Math.sin(rotation);
	return ytarget;
}

function getAngle (x, y, xt, yt) {
	var deltaX = xt - x;
	var deltaY = yt - y;
	return Math.atan2(deltaY,  deltaX);
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

function checkNPCCollisionWithBuilding(i) {
	let xPushTarget = null;
	let yPushTarget = null;
	//check collisions with buildings
	i.collidesWithType = null;
	i.horizontalBuildingCollision = false;
	i.verticalBuildingCollision = false;
	c.fillStyle = "blue";
	c.lineWidth = 1;
	c.rect(i.x + ((i.speed * 5) * i.xVector) - cameraX, i.y + ((i.speed * 5) * i.yVector) - cameraY, i.w, i.h);
	
	c.fillStyle = "black";
	c.lineWidth = 1;
	c.rect(i.x - cameraX, i.y - cameraY, i.w, i.h);
	c.stroke();
	theBuildings.forEach( function(k, l) {
		for (var line in theBuildings[l].walls) {
			if (theBuildings[l].walls.hasOwnProperty(line)) {
				if (collidesSpecify(
				i.x,
				i.y + ((i.speed * 5) * i.yVector), 
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
							i.x += (xtarget * 2);
							i.y += (ytarget * 2);
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
							i.x += (xtarget * 2);
							i.y += (ytarget * 2);
						}
					}
				}
			}
		}
		for (var line in theBuildings[l].walls) {
			if (theBuildings[l].walls.hasOwnProperty(line)) {
				if (collidesSpecify(
				i.x + ((i.speed * 5) * i.xVector),
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
								i.x += (xtarget * 2);
								i.y += (ytarget * 2);
							}	
						}
						if (i.collidesWithWall === "right" ||
						i.collidesWithWall === "right2") {
							if (i.yVector >= 0) {
								xPushTarget = theBuildings[i.collidesWithID].lowerRightX + 30;
								yPushTarget = theBuildings[i.collidesWithID].lowerRightY + 60;
							}
							if (i.yVector < 0) {
								xPushTarget = theBuildings[i.collidesWithID].lowerRightX + 30;
								yPushTarget = theBuildings[i.collidesWithID].upperLeftY - 60;
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
								let ydirection = getYDirection(theBuildings[l].centerX, theBuildings[l].centerY, i.x, i.y);
								i.x += (xdirection * 5);
								i.y += (ydirection * 5);
							}
						}
					}
					i.stuck = false;
				}
			}
		}
	if (xPushTarget != null && yPushTarget != null) {
		
		if (i.wayPoints.length > 0) {
			if (xPushTarget != i.wayPoints[i.wayPoints.length - 1].x && yPushTarget != i.wayPoints[i.wayPoints.length - 1].y) {
				i.wayPoints.push({
					x: xPushTarget,
					y: yPushTarget,
					type: "Avoid Building",
				});
			}
		} else {		
			i.wayPoints.push({
				x: xPushTarget,
				y: yPushTarget,
				type: "Avoid Building",
			});
		}
	}
	});
	if (i.collidesWithType === "Building") {
		return true;
	}
}


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














function mouseOnInteractiveElement() {
	return false;
}

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

function checkBulletWallCollision(i, j) {
	// buildings
	var collisionDetected = false;
	buildingsOnScreen.forEach( function(k, l) {
		for (var line in theBuildings[k].walls) {
			if (theBuildings[k].walls.hasOwnProperty(line)) {
				if (testLines(
						i.x - cameraX,
						i.y - cameraY,
						(i.x + i.xtarget * i.xVelocity) - cameraX,
						(i.y + i.ytarget * i.yVelocity) - cameraY,			
						theBuildings[k].walls[line].p1x , 
						theBuildings[k].walls[line].p1y , 
						theBuildings[k].walls[line].p2x , 
						theBuildings[k].walls[line].p2y ,
						"bullet/wall"
						)) {
						console.log("bullet / wall collision");
						console.log(line);	
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

function checkBulletCivilianCollision(i, j) {
	let collisionDetected = false;
	theZombies.forEach( function(k, l) {
		if (collidesSpecify (i.x + i.xtarget * i.xVelocity, i.y + i.ytarget * i.yVelocity, i.w, i.h, k.x - (k.w / 2), k.y - (k.h / 2), k.w, k.h) ) {
			if (collisionDetected === false) {
				theSplats.push({x: k.x - (k.w / 2), y: k.y - (k.h / 2), w: k.w, h: k.h });
				theZombies.splice(l, 1);
				collisionDetected = true;
			}
		}
	});
	if (collisionDetected) {
		return true 
	} else {
		return false;
	}
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




	
	
function updateRace() {
	////race
	if (race.completeTimer < 0.1) {
	c.fillStyle = raceCheckPoints[race.currentCheckPoint].colour;
	c.beginPath();
	c.save();
	c.fillRect(
	raceCheckPoints[race.currentCheckPoint].x - cameraX, 
	raceCheckPoints[race.currentCheckPoint].y - cameraY, 
	raceCheckPoints[race.currentCheckPoint].w, 
	raceCheckPoints[race.currentCheckPoint].h);
	c.fill();
	
	race.collidesCheckPoint = false;
	if (race.distaceToCheckPoint < 200) {
		for (var vehicleLine in vehiclesOnScreen[Player1.mot].lines) {
			for (var checkPointLine in raceCheckPoints[race.currentCheckPoint].lines) {			
				if (testLines(
					vehiclesOnScreen[Player1.mot].lines[vehicleLine].p1x, 
					vehiclesOnScreen[Player1.mot].lines[vehicleLine].p1y, 
					vehiclesOnScreen[Player1.mot].lines[vehicleLine].p2x, 
					vehiclesOnScreen[Player1.mot].lines[vehicleLine].p2y, 
					
					raceCheckPoints[race.currentCheckPoint].lines[checkPointLine].p1x, 
					raceCheckPoints[race.currentCheckPoint].lines[checkPointLine].p1y, 
					raceCheckPoints[race.currentCheckPoint].lines[checkPointLine].p2x, 
					raceCheckPoints[race.currentCheckPoint].lines[checkPointLine].p2y)) {
					
					race.collidesCheckPoint = true;
				}
			}	
		}
	}	

	//if (collidesSpecify( Player1.x, Player1.y, Player1.w, Player1.h, raceCheckPoints[race.currentCheckPoint].x, raceCheckPoints[race.currentCheckPoint].y, raceCheckPoints[race.currentCheckPoint].w, raceCheckPoints[race.currentCheckPoint].h ) && race.completeTimer < 1 ) {

	if (race.collidesCheckPoint === true) {	
		
		if (race.currentCheckPoint === 0) {
			race.on = true;
		}
		console.log("checkpoint");
		if (raceCheckPoints[race.currentCheckPoint].colour === "red") {
			race.on = false;
			race.currentCheckPoint = 0;
			
			
			race.completeTimer = 60;
		} else {
			race.currentCheckPoint++;
		}
		
		
	}

	//console.log(race.on);

	if (race.on === true) {
		
		race.deltaX = (raceCheckPoints[race.currentCheckPoint].x + (raceCheckPoints[race.currentCheckPoint].w / 2)) - Player1.x;
		race.deltaY = (raceCheckPoints[race.currentCheckPoint].y + (raceCheckPoints[race.currentCheckPoint].h / 2)) - Player1.y;
		race.angle = Math.atan2(race.deltaY,  race.deltaX);
		race.xVector = Math.cos(race.angle);
		race.yVector = Math.sin(race.angle);
		
		
		//race.distaceToCheckPoint = Math.sqrt(Math.pow(race.xVector * 100, 2) + Math.pow(race.yVector * 100, 2) )
		
		race.distaceToCheckPoint = Math.sqrt(Math.pow(race.deltaX, 2) + Math.pow(race.deltaY, 2) )
		
		console.log (race.distaceToCheckPoint);
		
		if (race.distaceToCheckPoint < 150) {
			race.indicatorAdjustor = 150 - race.distaceToCheckPoint;
		} else {
			race.indicatorAdjustor = 0;
		}
		
		race.indicatorX = race.xVector * (150 - race.indicatorAdjustor);
		race.indicatorY = race.yVector * (150 - race.indicatorAdjustor);
		
		
		
		c.beginPath();
		c.save();
		c.fillStyle = raceCheckPoints[race.currentCheckPoint].colour;
		c.translate(Player1.x, Player1.y);
		c.arc(race.indicatorX - 5 - cameraX, race.indicatorY - 5 - cameraY, 5, 0, 2*Math.PI);
		c.lineWidth = 2;
		c.stroke();
		c.fill();
		c.restore();
		
		race.currentRaceTime += 0.02; 
	}

	}
} // updateRace	
	

	
	



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

function setNPCdirection(i, target) {
	i.xTarget = target.x;
	i.yTarget = target.y;
	i.xVector = getXDirection(i.x, i.y, i.xTarget, i.yTarget);
	i.yVector = getYDirection(i.x, i.y, i.xTarget, i.yTarget);

// set the new target angle.
	var deltaX = i.xTarget - i.x;
	var deltaY = i.yTarget - i.y;
	i.targetAngle = Math.atan(deltaY / deltaX);
	i.angle = i.targetAngle;
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




 // game loop interval
 setInterval(mainDraw, INTERVAL);


 /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
   /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
   /////////////////////////////////////////////////////////
  ///////////////mainDraw Starts///////////////////////////////
  /////////////////////////////////////////////////////////
   /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
   /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
 
 if (!keys[37] && !keys[39] && !keys[38] && !keys[40] ) {
cameraX = (Player1.x + Player1.w / 2) - (cameraW / 2);
cameraY = (Player1.y + Player1.h / 2) - (cameraH / 2);
}
 // drawing function / game loop
function mainDraw(canvas, message) {
	//console.log(theZombies.length);
	clearCanvas();
	
// work out which tiles to draw based on player position
	whichTiles();
	
// then draw the map 
	drawMap();
 
// detect player's keyboard input
	detectKeys();   

	drawSplats(); 
	
//update and draw everything	
	//updateVehicles();
	//checkVehicleCollision();
	drawVehicles(); 

	updatePlayer();   
	drawPlayer(); 

	updateBullets();
	drawBullets();

	updateCivilians();
	drawCivilians(); 
	

	spawnZombie();
	updateZombies();
	drawZombies();
	
// draw buildings last to ensure other objects don't appear on top of them
	drawBuildings();

	drawHUD(); 

	updateMouseCoordinates();

// increment debouncing timers for key presses (getting in cars etc)
	updateTimers();

// If the player is in a time trial race, that is updated here. This function needs to be split out into smaller functions, and also set up to accept multiple races -- at the moment there is only one possible race and hence just this one function that controls it.	
	updateRace();

// slightly confusing name but updateTime refers to updating the time of day, and making the game area darker at night. This can be activated by uncommenting the first line which increments the time of day timer. 
	updateTime();

// check if player is in car with headlights on, and if so, draw them. Also, don't do this if the player is in a building (buildings are always lit up)
	if (Player1.mot > 0 && vehiclesOnScreen[Player1.mot].headlightsOn === true && Player1.inBuilding === false ) {
		drawHeadlights();
	} // check if player is in car with headlights on


	if (debug) {
		debugHUD();
	}

	updateCamera();

	//testLines();
} // main looop
 /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
   /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
   /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
   /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////

  

  
  
// focus on the canvas on mouseover to detect key input
var handlefocus=function(e){ 
 if(e.type=='mouseover') 
 { 
 canvas.focus(); return false;
 } 
 else if (e.type=='mouseout')
 { 
 canvas.blur(); return false; 
 } 
 return true; 
}; 
canvas.addEventListener('mouseover',handlefocus,true);  


 // Detect mouse movement and assign to mouseX, mouseY
function mouseMove(e)
{
    if(e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    }
    else if(e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }
}
canvas.addEventListener('mousemove', mouseMove, true);



// Detect key press for movement
function detectKeys(){
	if (keys) {
		Player1.gettingInVehicle = 0;
	}

	if (keys[79]) {
		time -= 1;
		if (time < 0) {time = 23;}
	}

	if (keys[80]) {
		time += 1;
	}

	// vehicle key presses
	if (Player1.mot > 0) { 
		 //accelerating
		 if (keys[87] && !keys[65] && !keys[68] && Player1.speed < vehiclesOnScreen[Player1.mot].topForwardSpeed || keys[87] && keys[65] && keys[68] && Player1.speed < vehiclesOnScreen[Player1.mot].topForwardSpeed) {
			vehiclesOnScreen[Player1.mot].accelerating = true;
			vehiclesOnScreen[Player1.mot].speed += vehiclesOnScreen[Player1.mot].acceleration / vehiclesOnScreen[Player1.mot].weight;
			if (vehiclesOnScreen[Player1.mot].speed > vehiclesOnScreen[Player1.mot].topForwardSpeed) {
				vehiclesOnScreen[Player1.mot].speed = vehiclesOnScreen[Player1.mot].topForwardSpeed;
			}	
		}

		// not accelerating
		if (!keys[87]) {
			vehiclesOnScreen[Player1.mot].accelerating = false;
		}

		//brake
		 if (keys[83]) {
			//console.log(vehiclesOnScreen[Player1.mot].speed);
			vehiclesOnScreen[Player1.mot].reversing === true;
			if (vehiclesOnScreen[Player1.mot].speed > 0) {
				vehiclesOnScreen[Player1.mot].speed -= vehiclesOnScreen[Player1.mot].brakeRate;
			}
			if (vehiclesOnScreen[Player1.mot].speed <= 0) {
				vehiclesOnScreen[Player1.mot].speed -= vehiclesOnScreen[Player1.mot].reverseAcceleration;
				console.log("Reversing");
			}
			if (vehiclesOnScreen[Player1.mot].speed < vehiclesOnScreen[Player1.mot].reverseTopSpeed) {
				vehiclesOnScreen[Player1.mot].speed = vehiclesOnScreen[Player1.mot].reverseTopSpeed;
			}
		}

		// not braking
		if (!keys[83]) {
			vehiclesOnScreen[Player1.mot].reversing === false;
			if (vehiclesOnScreen[Player1.mot].speed < vehiclesOnScreen[Player1.mot].reverseTopSpeed) {
				vehiclesOnScreen[Player1.mot].speed = vehiclesOnScreen[Player1.mot].reverseTopSpeed;
				console.log (vehiclesOnScreen[Player1.mot].speed);
				console.log("Should be clipping speed");
			}
		}
		 
		// backward turn left
		if (keys[65] && Player1.speed < -0.3 && !keys[68] || keys[65] && vehiclesOnScreen[Player1.mot].speed < -0.3 && !keys[68]) {
			vehiclesOnScreen[Player1.mot].angle += 3 * Math.PI / 180;
			vehiclesOnScreen[Player1.mot].x = vehiclesOnScreen[Player1.mot].x + vehiclesOnScreen[Player1.mot].radius * Math.cos(vehiclesOnScreen[Player1.mot].angle);
			vehiclesOnScreen[Player1.mot].y = vehiclesOnScreen[Player1.mot].y + vehiclesOnScreen[Player1.mot].radius * Math.sin(vehiclesOnScreen[Player1.mot].angle);
		}

		// backward turn right
		 if (keys[68] && Player1.speed < -0.3 && !keys[65] || keys[68] && vehiclesOnScreen[Player1.mot].speed < -0.3 && !keys[65] ) {
				vehiclesOnScreen[Player1.mot].angle -= 3 * Math.PI / 180;
				vehiclesOnScreen[Player1.mot].x = vehiclesOnScreen[Player1.mot].x + vehiclesOnScreen[Player1.mot].radius * Math.cos(vehiclesOnScreen[Player1.mot].angle);
				vehiclesOnScreen[Player1.mot].y = vehiclesOnScreen[Player1.mot].y + vehiclesOnScreen[Player1.mot].radius * Math.sin(vehiclesOnScreen[Player1.mot].angle);
		}

		// forward turn left
		 if (keys[65] && vehiclesOnScreen[Player1.mot].speed > 0.3 && !keys[68]) {
			vehiclesOnScreen[Player1.mot].forwardTurnLeft = true;
		} else {
			vehiclesOnScreen[Player1.mot].forwardTurnLeft = false;
		}
		 
		// forward turn right
		if (keys[68] && vehiclesOnScreen[Player1.mot].speed > 0.3 && !keys[65]) {
				vehiclesOnScreen[Player1.mot].forwardTurnRight = true;
		} else {
				vehiclesOnScreen[Player1.mot].forwardTurnRight = false;
		}

		//no pedal pressed  -should make this speed * inertia... like weight
		if (!keys[83] && !keys[87] && !keys[70]) {
			if (Player1.mot > 0) {
				if (Player1.speed > 0.1) {Player1.speed -= vehiclesOnScreen[Player1.mot].weight;}
				if (Player1.speed < -0.1) {Player1.speed += vehiclesOnScreen[Player1.mot].weight;}
				if (Player1.speed < 0.1 && Player1.speed > -0.1) {Player1.speed == 0;}
			}
		}
		
		if (keys[72] && headlightsTimer === 0  ) {
			if (vehiclesOnScreen[Player1.mot].headlightsOn === true) {
				vehiclesOnScreen[Player1.mot].headlightsOn = false;
			} else {
				vehiclesOnScreen[Player1.mot].headlightsOn = true;
			}
			headlightsTimer = 10;
		}
	} // end of vehicle key presses

	// "flat" player movement (w is up, a is left, etc)
	if (Player1.mot === 0) {
		
		if (keys[87] || keys[83] || keys[65] || keys[68]) {
			Player1.speed += Player1.acceleration;
			if (Player1.speed > Player1.topSpeed) {
				Player1.speed = Player1.topSpeed;
		
			}
		} else {
			Player1.speed = 0;
		}
		
		Player1.xVector = 0;
		Player1.yVector = 0;
		if (keys[87]) {
			Player1.yVector -= 1;
		}
		if (keys[83] ) {
			Player1.yVector += 1;
		}
		if (keys[65] ) {
			Player1.xVector -= 1;
		}
		if (keys[68] ) {
			Player1.xVector += 1;
		}
	} 

	if (keys[70]) { // F for getting in the vehicle
		if (Player1.closestVehicle > 0 && dismountTimer === 0) {
			Player1.gettingInVehicle = Player1.closestVehicle;
		}
	
		if (Player1.gettingInVehicle > 0) {
			Player1.speed = 3;
		}
		
		if (distanceKeeper < 5) {
			Player1.mot = Player1.gettingInVehicle;
			/*if (vehiclesOnScreen[Player1.gettingInVehicle].track) {
				vehiclesOnScreen[Player1.gettingInVehicle].track.play();
			}*/
			// Play music associated with this vehicle
			Player1.gettingInVehicle = 0;
			mountTimer = 30;
		}
		if (Player1.mot > 0 && mountTimer === 0){
			/*if (vehiclesOnScreen[Player1.mot].track) { 
				vehiclesOnScreen[Player1.mot].track.pause();
			}*/ // pause music
			Player1.speed = 0;
			dismountTimer = 30;
			Player1.mot = 0;
		}
	} // keys 70
	 
	 if (Player1.speed != 0){
	 moveEverything();
	 }
	
	// MOVE THE CAMERA
	if (keys[37]) {
		cameraX -=15;
	}

	if (keys[39]) {
		cameraX += 15;
	}

	if (keys[38]) {
		cameraY -= 15;
	}

	if (keys[40]) {
		cameraY += 15;
	} 
	
	if (keys[81]) {
		changeWeapon(-1);
	}
	
	if (keys[69]) {
		changeWeapon(1);
	}
	
	 // 70 = f
	 // 65 = left  / a
	 // 68	 = right / d
	 // 87 = forward / w
	 // 83 = backwards / s
	 // 81 = q
	 // 69 = e
	 return false;
} // detect keys


function eventListenersSection(){
 // just so this appears on the function list
}

canvas.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
});
canvas.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
});

// Detect mouse movement and assign to mouseX, mouseY
function mouseMove(e) {
    if(e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    }
    else if (e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }
}
canvas.addEventListener('mousemove', mouseMove, true); 

canvas.addEventListener("click", function() {
		
	if (mouseOnInteractiveElement()) {
		
	} else {
		if (Player1.mot === 0) {
			if (Player1.activeWeapon === 1) {
				createBullet(mouseX + cameraX, mouseY + cameraY, Player1.x, Player1.y, Player1.activeWeapon);
			}
		}
	}

	theCivilians.forEach( function(i, j) {
		if (collidesSpecify(i.x, i.y, i.w, i.h, mouseX + cameraX, mouseY + cameraY, 5, 5) ) {
			debugTarget = theCivilians[j];
			debugTarget.ID = j;
	 
		}
	});
	
	theZombies.forEach( function(i, j) {
		if (collidesSpecify(i.x, i.y, i.w, i.h, mouseX + cameraX, mouseY + cameraY, 5, 5) ) {
			debugTarget = theZombies[j];
			debugTarget.ID = j;
	 
		}
	});
	
	if (debugTarget) {
		theCivilians[debugTarget.ID].wayPoints.push({
			x: mouseX + cameraX,
			y:  mouseY + cameraY,
			type: "Debug",
		});
	}
	
});



function moveEverything(){


};




function debugHUD(){
		// draw way points
	c.font = '18pt Calibri';
	c.fillStyle = 'black';
	c.strokeStyle = "black";
		var showWayPoints = false;
		var showPlayer = false;
		if (showWayPoints) {
		
		theWayPoints.forEach( function(i,j) {
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
			
			c.fillText("stuck: " +
			debugTarget.stuck,500, 575);
			
			c.save();
			c.translate(debugTarget.x - cameraX, debugTarget.y - cameraY );
			c.translate(-debugTarget.x , -debugTarget.y);
			
			c.strokeStyle = "red";
			c.moveTo(debugTarget.x, debugTarget.y)
			c.lineTo(debugTarget.x + (debugTarget.xVector * 5000), debugTarget.y + (debugTarget.yVector * 5000) );
			c.lineWidth = 1;
			c.stroke();
			
			
			c.restore();
			
			}
			
			// intersection
			c.font = 'bold 14pt Calibri';
			c.strokeStyle = "white";
			//c.fillText("x: " + lineIntersectionForDebug[0], 200, 45);
			//c.fillText("y: " + lineIntersectionForDebug[1], 300, 45);
		
}



} // initt