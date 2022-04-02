function init() {
console.log("start");

// doing


// to do
// add the same from wall function to civs nand zoms that works on vehicles.

// draw closest buildings LAST

// improve HUD
	// narrator
	// weapon selector - add images
	// responsive to screen size changes (is viewport change being looked for every loop?)

// map
	// just head when underwater?
	// day/night time
	// weapon/ammo location
	// move buildings to new placesw


// performance
	// use layered canvases so I'm not drawing elements that haven't moved. At least do a three way split -- Map and buildings / Player / NPCs
	// make looping more efficient

// zombies

	// if way point is border, splice all and head for player
	// if standing still and thing in way is a zombie, add random movement if odd id
	// if large distance from player dont heas directly for him
	// can get in buildings by the corner, especially the big ones

// code
	// make functions smaller
	// Make variables more local

//buildings
	// get the camera out of the drawing functions - for the buildings
	// put the door coordinates etc into the building objects and set it to draw doors automatically
	// doors and neon lines are appearing through other walls/buildings

//bullets
	// bullet collision is a bit off
	// rockets kill zombies through walls
	
	
// BUGS

/// ---- DOORS can be seen through walls -- see building 4
/// 
/// darkess isn't working

canvas = document.getElementById("canvas");
canvas.onselectstart = function () { return false; }
c = canvas.getContext("2d");
canvas.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
});
canvas.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
});
canvas.addEventListener('mouseover',handlefocus,true);  
canvas.addEventListener('mousemove', mouseMove, true);
canvas.addEventListener('mousemove', mouseMove, true);
canvas.addEventListener("click", click, true);
canvas.addEventListener("mousedown", mousedown, true);
canvas.addEventListener("mouseup", mouseup, true);

// Smooth out the animation
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
 window.requestAnimationFrame = requestAnimationFrame;
 
// set the initial canvas background before anything is drawn. If you see the pink background something is amiss and it's no small error.
 c.beginPath();
 c.fillStyle = "pink";
 c.rect(0,0,cameraW,cameraH);
 c.fill();
 c.closePath();

// update vehicle collision lines for all vehicles. At present, this function only runs when a vehicle moves, so it needs to be run once at the start of the game. Later I'll have vehicles set their own lines individually.
calculateAllVehicleLines();

// this function just adds a property to each tile object indicating if a building is on it. It's much easier to run this once at the start of the game than it is to set tiles manually, but it will become obsolete when I've made a map editor. 
addBuildingsToTiles();


// this function loads a civilian onto every waypoint. Later I'll have to develop a better way of having them randomly appear on the map, so that the game is not constanly updating the positions of each player. Like how GTA does it.
loadCivilian();
theCivilians[2].targetWP = 1;

// start the main loop
setInterval(mainDraw, INTERVAL);

if (!keys[37] && !keys[39] && !keys[38] && !keys[40] ) {
	cameraX = (Player1.x + Player1.w / 2) - (cameraW / 2);
	cameraY = (Player1.y + Player1.h / 2) - (cameraH / 2);
}


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
 

firstMessageSelector = Math.floor(Math.random() * 5)
switch(firstMessageSelector) {
	case 0:
		firstMessage = "Kill zombies, get points, spend points."
		break;
	case 1:
		firstMessage = "You know how this works. Better find a gun to start with..."
		break;
	case 2:
		firstMessage = "The neveeerr enndiiing zooooommmbiiiieeee...."
		break;
	case 3:
		firstMessage = "Are these the undead kind or the virus kind?"
		break;
	case 4:
		firstMessage = "OK, let's do it. Find a gun and get shootin'!"
		break;
}

passMessage({
	text: firstMessage,
	priority: 2,
	timeActive: 0,
	removeAfter: 500
});

document.getElementById("canvas").focus();

 // drawing function / game loop
function mainDraw(canvas, message) {
	 

// Start with a clean slate
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

	if (Player1.health > 0) {
		updatePlayer();   
		drawPlayer();
	} 
	 

	updateWeapons();
	updateBullets();
	drawBullets();
	drawExplosions();

	updateWeaponIcons();
	drawWeaponIcons();

	updatePerks();
	drawPerks();

	// Civilians not really needed for zombie mode
	// updateCivilians();
	// drawCivilians(); 
	

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
	// updateTime();

	if (narratorMessage.activeMessage) {
		updateMessage()
	}

// check if player is in car with headlights on, and if so, draw them. Also, don't do this if the player is in a building (buildings are always lit up)
	if (Player1.mot > 0 && vehiclesOnScreen[Player1.mot].headlightsOn === true && Player1.inBuilding === false ) {
		drawHeadlights();
	} // check if player is in car with headlights on

	if (debug) {
		debugHUD();
	}

	updateCamera();

	if (Player1.health <= 0) {
		c.font = 'bold 26pt Calibri'
		c.fillStyle = 'white'
		c.fillText("You died!", 100, 100);
		c.fillText("Refresh page to play again", 100, 200);
	}
	// let wp = 0;
	// theZombies.forEach( (i, j) => {
	// 	wp += i.wayPoints.length;
	// });
	// console.log("Total waypoints = " + wp);
} 
 /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
   /////////////////////////////////////////////////////////
  /////////////////////////end main loop/////////////////////
   /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
   /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////

} // initt
