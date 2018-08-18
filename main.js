function init() {
console.log("start");

// doing


// to do
// add the same  from wall function to civs nand zoms that works on vehicles.

// draw closest buildings LAST

//zombie movement updates:


// improve HUD
	// narrator
	// weapon selector
	// responsive to screen size changes

// map
	// luxury house with cars in it
	// keys and point open doors
	// terrain type affects movement
	// just head when underwater
	// day/night time
	// design the new mapa

// add experience points to zombies -- they get stronger the older they are, and the more civilians they have killed, doing damage to the player etc.

// performance
	// use layered canvases so I'm not drawing elements that haven't moved. At least do a three way split -- Map and buildings / Player / NPCs
	// make looping more efficient

// civilians 
	// check civilian waypoints don't appear inside buidings

// code
	//make functions smaller
	// Make variables more local

//vehivles
	// vehicle moves forward on the screen when accelerating
	// vehicles maintain their speed when player leaves them

//buildings
	// get the camera out of the drawing functions - for the buildings
	// put the door coordinates etc into the building objects and set it to draw doors automatically
	// doors and neon lines are appearing through other walls/buildings

// weapons
	// add different weapons and ammo
	// add to HUD

//bullets
	// splice bullets when they hit buildings
	// bullet collision is a bit off
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

// set up canvas and attach functions to event listeners. These functions are in input.js.
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