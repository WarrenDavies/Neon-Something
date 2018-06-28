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
var canvas, c;
var WIDTH;
var HEIGHT;
var INTERVAL = 20; 
var mouseX, mouseY;
var mousePos;
var keys = [];
var backradius = 0;

var xtarget, ytarget = 0;
var distanceKeeper = 1000000;
var distanceHolder = 0;
var xDifference = 0;
var yDifference = 0;
var dismountTimer = 0;
var mountTimer = 0;
var cameraX = 0;
var cameraY = 0;
var cameraW = 800;
var cameraH = 600;
var onXTile = 0;
var onYTile = 0;
var upLeftRendY = 0;
var upLeftRendX = 0;
var heightsOnScreen = [];
var theBuildings = [];
var buildingsOnScreen = [];
var theCivilians = [];
var time = 13;
var light = 0;
var lineToTest;
var theWayPoints = 
[ 
{x: 0, y: 0, connections:[1]},
{x: 250, y: 500, connections: [2, 7]},
{x: 250, y: 1950, connections: [1]},
{x: 1350, y: 1950, connections: [2, 5]},
{x: 1350, y: 1400, connections: [3]},
{x: 3650, y: 1950, connections: [3]},
{x: 3650, y: 1400, connections: [5, 4]},
{x: 3650, y: 500, connections: [1]},
{x: 3650, y: 2150, connections: [7,6,5]},
{x: 4850, y: 2150, connections: [8,10,11]},
{x: 4850, y: 1850, connections: [9, 11, 12]},
{x: 4850, y: 2550, connections: [9, 10, 12]},
{x: 5500, y: 1950, connections: [10, 11]},
{x: 5500, y: 2650, connections: [12, 11]},
 ];

var lineColor = "black";
var theSplats = [];
var debugTarget;
var headlightsTimer = 0;
var lineIntersectionForDebug = [];
var lineIntersectionsOnScreen = []; 
var checkWithinHeadlights = [];
var checkLeftLine = [];
var closestLine = {};
closestLine.building = 99999;
var alreadyReachedLeftLine;
var checkMoveAlongRoofLine = { x: 0, y: 0};
var pointWithinHeadlights = { x: 0, y: 0};
var pointOutsideHeadlights = { x: 0, y: 0};
var jjj = 0;
var lineToExtend  = { p1x: 0, p1y: 0, p2x: 0, p2y: 0};
var reachedTargetLine = false;
var checkTopLine = [];
var movedAlong = false;
var connectToTopLine = [];
var extendLine = false;
var breakLoop;
var whiteLine = [];
var noIntersectionOnScreen = [];
var distanceHolder;
var distanceKeeper;
var xDifference;
var yDifference;
var intersectionsDone = [];
var clearPathToTargetLine = true;
var buildingsPassed = [];
var completedHeadlights = false;
var roofLinesOnScreen = [];
var vectorSet = false;
var raceCheckPoints = 
[
{x: 200, y: 800, w: 50, h: 50, colour: "lime", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 200, y: 2150, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 1500, y: 1900, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 4000, y: 2100, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 4800, y: 2100, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 4800, y: 2600, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 5100, y: 2600, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 5100, y: 2100, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 5100, y: 2600, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 5600, y: 2600, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 5800, y: 1500, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 5800, y: 700, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 3600, y: 900, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 2900, y: 900, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 2500, y: 900, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 2050, y: 900, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 2050, y: 600, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 1600, y: 600, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 1600, y: 900, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 1150, y: 900, w: 50, h: 50, colour: "yellow", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} },
{x: 200, y: 800, w: 50, h: 50, colour: "red", lines: { 
	top: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	right: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	bottom: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	left: {p1x: 0, p1y: 0, p2x: 0, p2y: 0},
	} }
]
raceCheckPoints.forEach ( function(i, j) {
	i.lines.top.p1x = i.x; 
	i.lines.top.p1y = i.y;
	i.lines.top.p2x = i.x + i.w;
	i.lines.top.p2y = i.y;
	i.lines.right.p1x = i.x + i.w; 
	i.lines.right.p1y = i.y;
	i.lines.right.p2x = i.x + i.w;
	i.lines.right.p2y = i.y + i.h;
	i.lines.bottom.p1x = i.x + i.w; 
	i.lines.bottom.p1y = i.y + i.h;
	i.lines.bottom.p2x = i.x;
	i.lines.bottom.p2y = i.y + i.h;
	i.lines.left.p1x = i.x; 
	i.lines.left.p1y = i.y + i.h;
	i.lines.left.p2x = i.x;
	i.lines.left.p2y = i.y;
});
var race = {
	on: false,
	currentCheckPoint: 0,
	currentRaceTime: 0,
	bestRaceTime: 0,
	deltaX: 0,
	deltaY: 0,
	angle: 0,
	xVector: 0,
	yVector: 0,
	indicatorX: 0,
	indicatorY: 0,
	distaceToCheckPoint: 0,
	indicatorAdjustor: 0,
	completeTimer: 0,
	collidesCheckPoint: false,
}
var theBullets = [];
var debug = true;
var showWayPoints = false;
var showPlayer = false;
var weaponChangeTimer = 0;
var theZombies = [];


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

var rightDoorPosition = 125;
var leftDoorPosition = 125;


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
 

 
function updatePlayer () {


	

if (Player1.gettingInVehicle > 0) {
		var deltaX = vehiclesOnScreen[Player1.gettingInVehicle].x - Player1.x;
		var deltaY = vehiclesOnScreen[Player1.gettingInVehicle].y - Player1.y;
		Player1.angle = Math.atan2(deltaY,  deltaX);
		Player1.xVector = Math.cos(Player1.angle);
		Player1.yVector = Math.sin(Player1.angle);
		
} 

if (Player1.mot === 0) {

//	c.fillStyle = "red";
//c.fillRect (Player1.x - cameraX - (Player1.w / 2) , Player1.y - cameraY - (Player1.h / 2)  , Player1.w, Player1.h);


	if (Player1.speed > 0) {
		//console.log(checkPlayerCollision(Player1.x + (Player1.xVector * Player1.speed), Player1.y + (Player1.yVector * Player1.speed)));
		
		checkPlayerCollision(Player1.xVector * Player1.speed, Player1.yVector * Player1.speed);
		
		
		
		Player1.x += Player1.xVector * Player1.speed;
		Player1.y += Player1.yVector * Player1.speed;
		
		//c.fillRect (Player1.xVector * Player1.speed + Player1.x - cameraX - (Player1.w / 2) , Player1.yVector * Player1.speed
		// + Player1.y - cameraY - (Player1.h / 2)  , Player1.w, Player1.h);
			
	}
} else {
			// we're in a vehicle, so let's update the player and camera to match the vehicles angle and position
			Player1.x = vehiclesOnScreen[Player1.mot].x;
			Player1.y = vehiclesOnScreen[Player1.mot].y;
			Player1.angle = vehiclesOnScreen[Player1.mot].angle;
			Player1.speed = vehiclesOnScreen[Player1.mot].speed;
			
			//cameraX = (Player1.x - Player1.w / 2) - (cameraW / 2);
			//cameraY = (Player1.y - Player1.h / 2) - (cameraH / 2);
			
			
	}	

	
	//c.rect( Player1.x - (Player1.w / 2), Player1.y - (Player1.h / 2), Player1.w, Player1.h);
	theCivilians.forEach( function(i, j) {
		if (collidesSpecify (Player1.x - (Player1.w / 2), Player1.y - (Player1.h / 2), Player1.w, Player1.h, i.x - (i.w / 2), i.y - (i.h / 2), i.w, i.h) ) {
		
			
			
			if (Player1.mot > 0 && vehiclesOnScreen[Player1.mot].speed >5 ) {
			
			theSplats.push({x: i.x - (i.w / 2), y: i.y - (i.h / 2), w: i.w, h: i.h });
			theCivilians.splice(j, 1);
			//console.log("hit");
			
			} else {
			i.x += Player1.xVector * (Player1.speed);
			i.y += Player1.yVector * (Player1.speed);
			}
			
			
		}
	
	});
	
	theZombies.forEach( function(i, j) {
		if (collidesSpecify (Player1.x - (Player1.w / 2), Player1.y - (Player1.h / 2), Player1.w, Player1.h, i.x - (i.w / 2), i.y - (i.h / 2), i.w, i.h) ) {
			if (Player1.mot > 0 && vehiclesOnScreen[Player1.mot].speed >5 ) {
				theSplats.push({x: i.x - (i.w / 2), y: i.y - (i.h / 2), w: i.w, h: i.h });
				theZombies.splice(j, 1);
			//console.log("hit");
			
			} else {
			i.x += Player1.xVector * (Player1.speed);
			i.y += Player1.yVector * (Player1.speed);
			}
			
			
		}
	
	});
	
	
	Player1.inBuilding = false;
	buildingsOnScreen.forEach( function(i, j){
	//delete the below and uncomment the above when the easy building maker is done
	//theBuildings.forEach( function(j, i){
		if (Player1.x > theBuildings[i].upperLeftX && Player1.x < theBuildings[i].lowerRightX && Player1.y > theBuildings[i].upperLeftY && Player1.y < theBuildings[i].lowerRightY) {
			Player1.inBuilding = i;
		}
	});
} 
 
 
function drawPlayer() {
 
 
  //////// BELOW IS TO DEBUG PLAYER AND CIV COLLISION
 
 // to help test civ collision
 
//	Player1.xVector = Math.cos(Player1.angle);
//	Player1.yVector = Math.sin(Player1.angle);
//	c.strokeStyle = "black";
	
//	for (k = 0; k < theCivilians.length - 1; k++) {
			
	//			if (getLineIntersection(Player1.x, Player1.y, Player1.x + (Player1.xVector * 70), Player1.y + (Player1.yVector * 70), theCivilians[k].x - 20, theCivilians[k].y + 20, theCivilians[k].x + 20, theCivilians[k].y - 20)  ||   getLineIntersection(Player1.x, Player1.y, Player1.x + (Player1.xVector * 70), Player1.y + (Player1.yVector * 70), theCivilians[k].x + 20, theCivilians[k].y + 20, theCivilians[k].x - 20, theCivilians[k].y - 20)   ) {
				
					
			//			c.font = 'bold 14pt Calibri';
			//			c.style = 'black';
			//			c.fillText("Player about to collide:" + j + " "  + k, 100, 400);
			//			c.strokeStyle = "red";
					
			//	}
			
	//	}
	
	
	//c.beginPath();
	//	c.save();
	//	c.translate(Player1.x - cameraX, Player1.y - cameraY );
	//	c.translate(-Player1.x , -Player1.y);
		
	//	c.moveTo(Player1.x, Player1.y)
	//	c.lineTo(Player1.x + (Player1.xVector * 70), Player1.y + (Player1.yVector * 70) );
	//	c.lineWidth = 1;
	//	c.stroke();
	//	c.restore();
 
 //////// ABOVE IS TO DEBUG PLAYER AND CIV COLLISION
 
 	//drawing begins
	c.beginPath();
	c.save();

	
	
	
	if (Player1.mot === 0) {
		if (keys[70] && Player1.gettingInVehicle > 0) {
			Player1.deltaX = vehiclesOnScreen[Player1.gettingInVehicle].x - cameraX - Player1.x + cameraX;
			Player1.deltaY = vehiclesOnScreen[Player1.gettingInVehicle].y - cameraY - Player1.y + cameraY;
		} else {
			Player1.deltaX = mouseX - Player1.x + cameraX;
			Player1.deltaY = mouseY - Player1.y + cameraY;
		}
		Player1.angle = Math.atan(Player1.deltaY / Player1.deltaX);
		
		c.translate(Player1.x - cameraX, Player1.y - cameraY); 
		
		if (Player1.deltaX < 0) {
			c.rotate(Player1.angle);
			c.scale(-1,1);
		} else {
			c.rotate(Player1.angle);
		
		}
		c.translate(-Player1.x,-Player1.y);
	
	if (keys[83] || keys[87] || keys[70] || keys[65] || keys[68] ) {
		Player1.walkTimer += 0.15;
		if (Player1.walkTimer >= 3.8) {
			Player1.walkTimer = 0.1;
		}
			
		c.drawImage( Player1.walkAnimations[Math.ceil(Player1.walkTimer)], Player1.x - (Player1.w / 2) - 10, Player1.y - (Player1.h / 2) - 10, Player1.w + 20, Player1.h + 20);
	
	} else {
	
	Player1.walkTimer = 0;
	
	c.drawImage( Player1.standImage, Player1.x - (Player1.w / 2) - 10, Player1.y - (Player1.h / 2) - 10, Player1.w + 20, Player1.h + 20);
	
	}

	} else {
	
	//console.log("89jj");
	c.translate(-Player1.x , -Player1.y);
	//c.rect( Player1.x - (Player1.w / 2), Player1.y - (Player1.h / 2), Player1.w, Player1.h);
	
	}

	c.restore();
	c.closePath();
 
 
	//}
} // draw player




 
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

function whichTiles() {
	//onXTile = Math.floor(Player1.x / 50);
	//onYTile = Math.floor(Player1.y / 50);
	//console.log("onXTime = " + onXTile);

	onXTile = Math.floor((cameraX + (cameraW / 2)) / 50);
	onYTile = Math.floor((cameraY + (cameraH / 2)) / 50);
	
	
}

   
function drawMap() {
var tileCount = 0
	c.beginPath();
	for (j = onYTile - 7; j < onYTile + 8; j++ ) {
		for (l = onXTile - 8; l < onXTile + 10; l++) {
			if (j >= 0  && l >= 0 && j < map.length && l < map[j].length) {
				if (map[j][l].backgroundImage) {
				// spritesheet version
				//				c.drawImage( map[j][l].backgroundImage, map[j][l].sourceX, map[j][l].sourceY, map[j][l].w, map[j][l].h, l * 50 - cameraX, j * 50 - cameraY, 50, 50 );
				
				// with the -1 offsets for tesselation
				
				c.save();
				c.translate(l * 50 - cameraX - 1, j * 50 - cameraY - 1)
				c.drawImage( map[j][l].backgroundImage, 0, 0, 51, 51);
				
				// the below writes the building no on the floor of the building
				//if (map[j][l].building) {
				//	c.font = 'bold 18pt Calibri';
				//	c.fillText(map[j][l].building, 20,30);
					
				//}
				c.restore();
				
				//console.log("after = " + cameraX);
				
				
				
				//... and without				
				//c.drawImage( map[j][l].backgroundImage, l * 50 - cameraX , j * 50 - cameraY, 50, 50)
				
				
				} else {
					c.lineWidth = 1;
					c.beginPath();
					c.fillStyle = map[j][l].color;
					c.strokeStyle = map[j][l].color;
					c.rect(l * 50 - cameraX, j * 50 - cameraY, 50, 50);	
					c.fill();
					c.stroke();
				 }
				
				tileCount +=1;
				
				if (map[j][l].building != 0 && buildingsOnScreen.indexOf(map[j][l].building) === -1) {
					buildingsOnScreen.push(map[j][l].building);
					//console.log(map[j][l].building);
				}
				// uncomment the above and delete the below when building generator is sorted, this just pushes all
				//buildingsOnScreen.splice(0);
				//theBuildings.forEach( function(i, j) {
				//	buildingsOnScreen.push(j);
				//});
				
			}
		}
	c.closePath();
	} 
} // drawMap



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


// define buildings
theBuildings[1] = {
	name: "home",
	upperLeftX: 350,
	upperLeftY: 800,
	lowerRightX: 650 - 1,
	lowerRightY: 950 - 1,
	building: 1,
	height: 1.1,
	wallColor: "#000",
	roofColor: "#000",
	type: "rectangular",
	upperLeftTile: 7,
	lowerRightTile: 16,
	floor: indoorFloorImage,
	
	southDoor: {
		exists: true,
		distanceFromDoor: 0,
		doorwayDistanceFromLeft: 100,
		doorwayDistanceFromLeftToMiddle: 125,
		leftDoorSize: 25,
	
		leftDoorPosition: 25,
		leftDoorTopLeftX: 0,
		leftDoorTopLeftY: 0,
		leftDoorTopRightX: 0,
		leftDoorTopRightY: 0,
	
		rightDoorPosition: 0,
		rightDoorTopLeftX: 0,
		rightDoorTopLeftY: 0,
		rightDoorTopRightX: 0,
		rightDoorTopRightY: 0,
		
		leftDoorColor: "yellow",
		rightDoorColor: "yellow",
	},
	northDoor: {
		exists: true,
		distanceFromDoor: 0,
		doorwayDistanceFromLeft: 150,
		doorwayDistanceFromLeftToMiddle: 175,
		leftDoorSize: 25,
	
		leftDoorPosition: 25,
		leftDoorTopLeftX: 0,
		leftDoorTopLeftY: 0,
		leftDoorTopRightX: 0,
		leftDoorTopRightY: 0,
	
		rightDoorPosition: 0,
		rightDoorTopLeftX: 0,
		rightDoorTopLeftY: 0,
		rightDoorTopRightX: 0,
		rightDoorTopRightY: 0,
		
		leftDoorColor: "yellow",
		rightDoorColor: "yellow",
		
	},
	
	eastDoor: {
		exists: false,
	},
	
	westDoor: {
		exists: false,
	},
	
	neonCorners: true,
	neonColor: "rgb(125,249,255,0.2)",
	neonShadowColor: "rgb(125,249,255)",
	neonRoof: true,
	
};

theBuildings[2] = {
	name: "home",
	upperLeftX: 800,
	upperLeftY: 800,
	lowerRightX: 1099,
	lowerRightY: 949,
	building: 2,
	height: 1.1,
	wallColor: "#040311",
	roofColor: "#0f0b44",
	
	type: "rectangular",
	upperLeftTile: 7,
	lowerRightTile: 16,
	floor: indoorFloorImage,
	southDoor: {
		exists: true,
		distanceFromDoor: 0,
		doorwayDistanceFromLeft: 100,
		doorwayDistanceFromLeftToMiddle: 125,
		leftDoorSize: 25,
	
		leftDoorPosition: 25,
		leftDoorTopLeftX: 0,
		leftDoorTopLeftY: 0,
		leftDoorTopRightX: 0,
		leftDoorTopRightY: 0,
	
		rightDoorPosition: 0,
		rightDoorTopLeftX: 0,
		rightDoorTopLeftY: 0,
		rightDoorTopRightX: 0,
		rightDoorTopRightY: 0,
		
		leftDoorColor: "yellow",
		rightDoorColor: "yellow",
	},
	northDoor: {
		exists: false,
	},
	eastDoor: {
		exists: false,
	},
	westDoor: {
		exists: false,
	},
	neonCorners: true,
	neonColor: "rgb(255,105,180,0.2)",
	neonShadowColor: "rgb(255,105,180)",	
	neonRoof: true,
};


theBuildings[4] = {
	name: "home",
	upperLeftX: 1250,
	upperLeftY: 800,
	lowerRightX: 1550 - 1,
	lowerRightY: 950 - 1,
	building: 4,
	height: 1.5,
	wallColor: "#040311",
	roofColor: "#0f0b44",
	wallColor: "#000",
	roofColor: "#000",
	type: "rectangular",
	upperLeftTile: 7,
	lowerRightTile: 16,
	floor: indoorFloorImage,
	neonCorners: true,
	neonRoof: true,
	neonColor: "rgb(255,105,180,0.2)",
	neonShadowColor: "rgb(255,105,180)",
	southDoor: {
		exists: true,
		distanceFromDoor: 0,
		doorwayDistanceFromLeft: 100,
		doorwayDistanceFromLeftToMiddle: 125,
		leftDoorSize: 25,
	
		leftDoorPosition: 25,
		leftDoorTopLeftX: 0,
		leftDoorTopLeftY: 0,
		leftDoorTopRightX: 0,
		leftDoorTopRightY: 0,
	
		rightDoorPosition: 0,
		rightDoorTopLeftX: 0,
		rightDoorTopLeftY: 0,
		rightDoorTopRightX: 0,
		rightDoorTopRightY: 0,
		
		leftDoorColor: "yellow",
		rightDoorColor: "yellow",
	},
	northDoor: {
		exists: false,
	},
	eastDoor: {
		exists: false,
	},
	westDoor: {
		exists: false,
	},

};

theBuildings[5] = {
	name: "home",
	upperLeftX: 1700,
	upperLeftY: 800,
	lowerRightX: 1950 - 1,
	lowerRightY: 850 - 1,
	building: 5,
	height: 1.1,
	wallColor: "#990000",
	roofColor: "brown",
	type: "rectangular",
	upperLeftTile: 7,
	lowerRightTile: 16,
	floor: indoorFloorImage,
	southDoor: {
		exists: false,
	},
	northDoor: {
		exists: false,
	},
	eastDoor: {
		exists: false,
	},
	westDoor: {
		exists: false,
	},
};

theBuildings[20] = {
	name: "home",
	upperLeftX: 1700,
	upperLeftY: 700,
	lowerRightX: 1950 - 1,
	lowerRightY: 750 - 1,
	building: 20,
	height: 1.1,
	wallColor: "#040311",
	roofColor: "#0f0b44",
	wallColor: "#990000",
	roofColor: "brown",
	type: "rectangular",
	upperLeftTile: 7,
	lowerRightTile: 16,
	floor: indoorFloorImage,
	neonColor: "rgb(255,105,180,0.2)",
	neonShadowColor: "rgb(255,105,180)",
	southDoor: {
		exists: false,
	},
	northDoor: {
		exists: false,
	},
	eastDoor: {
		exists: false,
	},
	westDoor: {
		exists: false,
	},
};

theBuildings[21] = {
	name: "home",
	upperLeftX: 1700,
	upperLeftY: 600,
	lowerRightX: 1950 - 1,
	lowerRightY: 650 - 1,
	building: 21,
	height: 1.1,
	wallColor: "#040311",
	roofColor: "#0f0b44",
	wallColor: "#990000",
	roofColor: "brown",
	type: "rectangular",
	upperLeftTile: 7,
	lowerRightTile: 16,
	floor: indoorFloorImage,
	//neonCorners: true,
	southDoor: {
		exists: false,
	},
	northDoor: {
		exists: false,
	},
	eastDoor: {
		exists: false,
	},
	westDoor: {
		exists: false,
	},
};

theBuildings[22] = {
	name: "home",
	upperLeftX: 1500,
	upperLeftY: 575,
	lowerRightX: 1600 - 1,
	lowerRightY: 625 - 1,
	building: 22,
	height: 1.1,
	wallColor: "#040311",
	roofColor: "#0f0b44",
	wallColor: "#990000",
	roofColor: "brown",
	type: "rectangular",
	upperLeftTile: 7,
	lowerRightTile: 16,
	floor: indoorFloorImage,
	//neonCorners: true,
	southDoor: {
		exists: false,
	},
	northDoor: {
		exists: false,
	},
	eastDoor: {
		exists: false,
	},
	westDoor: {
		exists: false,
	},
};



theBuildings[6] = {
	name: "home",
	upperLeftX: 2200,
	upperLeftY: 800,
	lowerRightX: 2400 - 1,
	lowerRightY: 950 - 1,
	building: 6,
	height: 1.3,
	wallColor: "#990000",
	roofColor: "brown",
	type: "rectangular",
	upperLeftTile: 7,
	lowerRightTile: 16,
	floor: indoorFloorImage,
	southDoor: {
		exists: false,
	},
	northDoor: {
		exists: false,
	},
	eastDoor: {
		exists: false,
	},
	westDoor: {
		exists: false,
	},
};

theBuildings[7] = {
	name: "home",
	upperLeftX: 2650,
	upperLeftY: 850,
	lowerRightX: 2750 - 1,
	lowerRightY: 1000 - 1,
	building: 7,
	height: 1.3,
	wallColor: "#990000",
	roofColor: "brown",
	type: "rectangular",
	upperLeftTile: 7,
	lowerRightTile: 16,
	floor: indoorFloorImage,
	southDoor: {
		exists: false,
	},
	northDoor: {
		exists: false,
	},
	eastDoor: {
		exists: false,
	},
	westDoor: {
		exists: false,
	},
};

theBuildings[8] = {
	name: "home",
	upperLeftX: 3100,
	upperLeftY: 800,
	lowerRightX: 3400 - 1,
	lowerRightY: 1050 - 1,
	building: 8,
	height: 1.3,
	wallColor: "#990000",
	roofColor: "brown",
	type: "rectangular",
	upperLeftTile: 7,
	lowerRightTile: 16,
	floor: indoorFloorImage,
	southDoor: {
		exists: false,
	},
	northDoor: {
		exists: false,
	},
	eastDoor: {
		exists: false,
	},
	westDoor: {
		exists: false,
	},
};

theBuildings[9] = {
	name: "home",
	upperLeftX: 1500,
	upperLeftY: 1600,
	lowerRightX: 3650 - 1,
	lowerRightY: 1750 - 1,
	building: 9,
	height: 1.3,
	wallColor: "#990000",
	roofColor: "brown",
	type: "rectangular",
	upperLeftTile: 7,
	lowerRightTile: 16,
	floor: indoorFloorImage,
	
	northDoor: {
		exists: true,
		distanceFromDoor: 0,
		doorwayDistanceFromLeft: 150,
		doorwayDistanceFromLeftToMiddle: 200,
		leftDoorSize: 50,
	
		leftDoorPosition: 50,
		leftDoorTopLeftX: 0,
		leftDoorTopLeftY: 0,
		leftDoorTopRightX: 0,
		leftDoorTopRightY: 0,
	
		rightDoorPosition: 0,
		rightDoorTopLeftX: 0,
		rightDoorTopLeftY: 0,
		rightDoorTopRightX: 0,
		rightDoorTopRightY: 0,
		
		leftDoorColor: "yellow",
		rightDoorColor: "yellow",
	},
	southDoor: {
		exists: true,
		distanceFromDoor: 0,
		doorwayDistanceFromLeft: 1900,
		doorwayDistanceFromLeftToMiddle: 1950,
		leftDoorSize: 50,
	
		leftDoorPosition: 50,
		leftDoorTopLeftX: 0,
		leftDoorTopLeftY: 0,
		leftDoorTopRightX: 0,
		leftDoorTopRightY: 0,
	
		rightDoorPosition: 0,
		rightDoorTopLeftX: 0,
		rightDoorTopLeftY: 0,
		rightDoorTopRightX: 0,
		rightDoorTopRightY: 0,
		
		leftDoorColor: "yellow",
		rightDoorColor: "yellow",
	},
	eastDoor: {
		exists: false,
	},
	westDoor: {
		exists: false,
	},
};
//b10
theBuildings[10] = {
	name: "home",
	upperLeftX: 4950,
	upperLeftY: 800,
	lowerRightX: 5700 - 1,
	lowerRightY: 1450 - 1,
	building: 10,
	height: 1.3,
	wallColor: "#040111",
	roofColor: "#0f0b44",
	type: "rectangular",
	upperLeftTile: 7,
	lowerRightTile: 16,
	floor: indoorFloorImage,
	neonCorners: true,
	neonColor: "rgb(255,105,180,0.2)",
	neonShadowColor: "rgb(255,105,180)",
	southDoor: {
		exists: false,
	},
	northDoor: {
		exists: false,
	},
	eastDoor: {
		exists: true,
		distanceFromDoor: 0,
		doorwayDistanceFromTop: 300,
		doorwayDistanceFromTopToMiddle: 400,
		topDoorSize: 100,
		bottomDoorSize: 100,
		
		topDoorPosition: 100,
		topDoorTopLeftX: 0,
		topDoorTopLeftY: 0,
		topDoorTopRightX: 0,
		topDoorTopRightY: 0,
	
		bottomDoorPosition: 0,
		bottomDoorTopLeftX: 0,
		bottomDoorTopLeftY: 0,
		bottomDoorTopRightX: 0,
		bottomDoorTopRightY: 0,
		
		leftDoorColor: "yellow",
		rightDoorColor: "yellow",
	},
	
	westDoor: {
		exists: true,	
		distanceFromDoor: 0,
		doorwayDistanceFromTop: 250,
		doorwayDistanceFromTopToMiddle: 300,
		topDoorSize: 50,
		bottomDoorSize: 50,
		
		topDoorPosition: 50,
		topDoorTopLeftX: 0,
		topDoorTopLeftY: 0,
		topDoorTopRightX: 0,
		topDoorTopRightY: 0,
	
		bottomDoorPosition: 0,
		bottomDoorTopLeftX: 0,
		bottomDoorTopLeftY: 0,
		bottomDoorTopRightX: 0,
		bottomDoorTopRightY: 0,
		
		leftDoorColor: "yellow",
		rightDoorColor: "yellow",
	},
	neonCorners: true,
	neonColor: "rgb(255,105,180,0.2)",
	neonShadowColor: "rgb(255,105,180)",
	neonRoof: true,
};

theBuildings[11] = {
	name: "home",
	upperLeftX: 5000,
	upperLeftY: 2050,
	lowerRightX: 5500 - 1,
	lowerRightY: 2500 - 1,
	building: 11,
	height: 1.3,
	wallColor: "#990000",
	roofColor: "brown",
	type: "rectangular",
	upperLeftTile: 7,
	lowerRightTile: 16,
	floor: indoorFloorImage,
	southDoor: {
		exists: true,
		distanceFromDoor: 0,
		doorwayDistanceFromLeft: 150,
		doorwayDistanceFromLeftToMiddle: 250,
		leftDoorSize: 100,
	
		leftDoorPosition: 25,
		leftDoorTopLeftX: 0,
		leftDoorTopLeftY: 0,
		leftDoorTopRightX: 0,
		leftDoorTopRightY: 0,
	
		rightDoorPosition: 0,
		rightDoorTopLeftX: 0,
		rightDoorTopLeftY: 0,
		rightDoorTopRightX: 0,
		rightDoorTopRightY: 0,
		
		leftDoorColor: "yellow",
		rightDoorColor: "yellow",
	},
	northDoor: {
		exists: false,
	},
	eastDoor: {
		exists: false,
	},
	westDoor: {
		exists: false,
	},
	
	
	
};

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


function checkThisVehicleCollision(j) {
// check collision with buildings
	vehiclesOnScreen[j].collision = false;
	if (vehiclesOnScreen[j].speed != 0) {
		// check for collision with buildings
		for (var vehicleLine in vehiclesOnScreen[j].lines) {
			if (vehiclesOnScreen[j].lines.hasOwnProperty(vehicleLine)) {
				
				buildingsOnScreen.forEach( function(k, l) {
					for (var wallLine in theBuildings[k].walls) {
						if (theBuildings[k].walls.hasOwnProperty(wallLine)) {
							var loopChecker = 1;
							c.beginPath();
							var checkCollision = false;
							if (testLines(
							vehiclesOnScreen[j].lines[vehicleLine].p1xStep,
							vehiclesOnScreen[j].lines[vehicleLine].p1yStep,
							vehiclesOnScreen[j].lines[vehicleLine].p2xStep,
							vehiclesOnScreen[j].lines[vehicleLine].p2yStep,
							
							theBuildings[k].walls[wallLine].p1x,
							theBuildings[k].walls[wallLine].p1y,
							theBuildings[k].walls[wallLine].p2x,
							theBuildings[k].walls[wallLine].p2y)) {
								vehiclesOnScreen[j].x = vehiclesOnScreen[j].xPrevious;
								vehiclesOnScreen[j].y = vehiclesOnScreen[j].yPrevious;
								calculateVehicleLines(j);
								vehiclesOnScreen[j].speed = 0;
								console.log("vehicle-wall collision! Vehicle Line: " + vehicleLine + ", Building: " + k + ", buildingLine: " + wallLine);
								vehiclesOnScreen[j].collision = true;
								checkCollision = true;
							} else {
								checkCollision = false;
								vehiclesOnScreen[j].collision = false;
							}
							loopChecker++;
							if (loopChecker === 10) {console.log("Stuck in loop");}
						} // if this wall line exists
						
						checkCollision = false;
						/// check if the vehicle is stuck in a wall, and untick it if so
						do { 
							if (testLines(
							vehiclesOnScreen[j].lines[vehicleLine].p1x, 
							vehiclesOnScreen[j].lines[vehicleLine].p1y, 
							vehiclesOnScreen[j].lines[vehicleLine].p2x, 
							vehiclesOnScreen[j].lines[vehicleLine].p2y,
							theBuildings[k].walls[wallLine].p1x, 
							theBuildings[k].walls[wallLine].p1y, 
							theBuildings[k].walls[wallLine].p2x, 
							theBuildings[k].walls[wallLine].p2y)) {
								console.log("Stuck on " + wallLine);
								//console.log(vehiclesOnScreen[j].x + ", " + vehiclesOnScreen[j].y);
								
								var adjusterX = 0;
								var adjusterY = 0;
								if (wallLine === "top" || wallLine === "top2") {
									if (Player1.inBuilding > 0) {									
										adjusterY += 1;
									} else {
										adjusterY -= 1;
									}
								}
								if (wallLine === "right" || wallLine === "right2") {
									if (Player1.inBuilding > 0) {									
										adjusterX -= 1;
									} else {
										adjusterX += 1;
									}
								}
								if (wallLine === "bottom" || wallLine === "bottom2" ) {
									if (vehicleLine === "frontLine" && wallLine === "bottom"){
										adjusterX += 1;
									}
									if (vehicleLine === "frontLine" && wallLine === "bottom"){
										adjusterX += 1;
									}
									if (vehicleLine === "frontLine" && wallLine === "top"){
										adjusterX -= 1;
									}
									if (Player1.inBuilding > 0) {	
										adjusterY -= 1;
									} else {
										adjusterY += 1;
									}
								}
								
								if (wallLine === "left" || wallLine === "left2") {
									if (Player1.inBuilding > 0) {
										adjusterX += 1;
									} else {
										adjusterX -= 1;
									}
								}
								if (adjusterX != 0 || adjusterY != 0) {
									unstickVehicleFromWall(j, wallLine, adjusterX, adjusterY);
								}
							} else {
								checkCollision = false;
							}
						} while (checkCollision === true);
					} // for loop cycling through wall lines
				}); // buildings on screen for each
					
				vehiclesOnScreen.forEach ( function(k, l) {
					// only checking 2 vehicles to limit slow-down while testing
					if (l === 2 && j === 1) {
						for (var vehicleLineTargetVehicle in k.lines) {
							if (k.lines.hasOwnProperty(vehicleLineTargetVehicle)) {
								// values for debugging
								//console.log(vehiclesOnScreen[j].lines[vehicleLine].p1xStep);
								//console.log(k.lines[vehicleLine].p1x);
								//console.log(vehiclesOnScreen[j].lines[vehicleLine].p1yStep);
								//console.log(k.lines[vehicleLine].p1y);
								//console.log(l + " " + j); 
								
								// draw the target vehicle collision lines for debugging									
								c.lineWidth = 3;
								c.strokeStyle ="blue";
								c.beginPath();
								c.moveTo(k.lines[vehicleLine].p1x - cameraX, k.lines[vehicleLine].p1y - cameraY );
								c.lineTo(k.lines[vehicleLine].p2x - cameraX, k.lines[vehicleLine].p2y - cameraY);
								c.stroke();
								c.closePath()
									
								//console.log ("testing vehicle collision line " + vehicleLineTargetVehicle);
								
								// check for a collision
								var testingVehicleCollision = testLines(
								vehiclesOnScreen[j].lines[vehicleLine].p1xStep, 
								vehiclesOnScreen[j].lines[vehicleLine].p1yStep, 
								vehiclesOnScreen[j].lines[vehicleLine].p2xStep, 
								vehiclesOnScreen[j].lines[vehicleLine].p2yStep,
								k.lines[vehicleLineTargetVehicle].p1x, 
								k.lines[vehicleLineTargetVehicle].p1y, 
								k.lines[vehicleLineTargetVehicle].p2x, 
								k.lines[vehicleLineTargetVehicle].p2y, 
								"vehicle",)
								if (testingVehicleCollision) {
									// just indicate we have one for now
									c.fillText ("VEHICLE COLLISION", 200,200);
									
									// save the vehicles current position, in case the collision causes it to hit a wall or other object and it cannot move
									k.xPrevious = k.x;
									k.yPrevious = k.y;
									
									
									// get the distance between the impact point and the center of the vehicle
									xDifference = (k.x - testingVehicleCollision[0]) * (k.x - testingVehicleCollision[0]);
									yDifference = (k.y - testingVehicleCollision[1]) * (k.y - testingVehicleCollision[1]);
									var distanceFromVehicleCenter = Math.sqrt(xDifference + yDifference);
									
									// need to figure out what is the half way point of the line that was impaceted
									
									//determine where the impact occurred relative to the center of the vehicle, which will tell us which way to rotate it -- this method does not work, need a new way of figuring out which way to rotate the impacted vehicle
									if (testingVehicleCollision[0] < k.x) {
										if ( testingVehicleCollision[1] < k.y) {
											k.angleTarget += 0.1;
										} else {
											k.angleTarget -= 0.1;
										}
									} else {
										if ( testingVehicleCollision[1] < k.y) {
											k.angleTarget -= 0.1;
										} else {
											k.angleTarget += 0.1;
										}
									}
									
																
									//k.angleTarget += distanceFromVehicleCenter;
									
									
									
									
									c.fillText (distanceFromVehicleCenter, 200,225);
									c.fillText (k.angle, 200,250);
									
									k.x -= (vehiclesOnScreen[j].xtarget * vehiclesOnScreen[j].speed) - vehiclesOnScreen[j].xTurnTarget;
									k.y -= (vehiclesOnScreen[j].ytarget * vehiclesOnScreen[j].speed) - vehiclesOnScreen[j].yTurnTarget;
									updateVehicleLines(l, );
								}
							} // second if this vehicle line exists
						} // second for loop cycling through vehicle lines
					} // check vehicle is not testing collision with itself
				}); // second vehicles on screen for each (k, l)
				
				// draw collision lines for the moving vehicle
				c.strokeStyle ="red";
				c.lineWidth = 1;
				c.beginPath();
				c.moveTo(vehiclesOnScreen[j].lines[vehicleLine].p1xStep - cameraX, vehiclesOnScreen[j].lines[vehicleLine].p1yStep - cameraY);
				c.lineTo(vehiclesOnScreen[j].lines[vehicleLine].p2xStep - cameraX, vehiclesOnScreen[j].lines[vehicleLine].p2yStep - cameraY );
				c.stroke();
				c.closePath()
			} // if this vehicle line exists
		} // for loop cycling through vehicle lines
	} // if this vehicles speed is > 0 
} //checkThisVehicleCollision



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

function updateTime() {
	//time += .01;
	if (time > 24) {time = 0;}

	switch(Math.floor(time)) {
		case 17:
			light = 0.1;
			break;
		case 18:
			light = 0.2;
			break;
		case 19:
			light = 0.3;
			break;
		case 20:
			light = 0.4;
			break;
		case 21:
			light = 0.5;
			break;
		case 22:
			light = 0.6;
			break;
		case 23:
			light = 0.7;
			break;
		case 0:
			light = 0.7;
			break;
		case 1:
			light = 0.7;
			break;
		case 2:
			light = 0.7;
			break;
		case 3:
			light = 0.6;
			break;
		case 4:
			light = 0.5;
			break;
		case 5:
			light = 0.4;
			break;
		case 6:
			light = 0.3;
			break;
		case 7:
			light = 0.2;
			break;
		case 8:
			light = 0.1;
			break;
		default:
			light = 0.0;
	} 

	if (light != 0 && light != 0.7) {
		if (time < 12) {
			light += (0.1 - ((time % 1) / 10));
		} else {
			light += ((time % 1) / 10)
		}
	}
		
	c.fillStyle = "rgba(0, 0, 0," + light + ")";
	c.beginPath();
	c.moveTo(0, 0);
	c.lineTo(800, 0);
	c.lineTo(800, 600);
	c.lineTo(0, 600);
	c.lineTo(0, 0);
	//c.fill();
}

function updateTimers() {
	//Timers
	if (dismountTimer > 0) {
		dismountTimer -= 1;
	} 
	if (mountTimer > 0) {
		mountTimer -= 1;
	}
	if (headlightsTimer > 0) {
		headlightsTimer -= 1;
	}
}

function drawHeadlights() {
	
	c.save();
	c.strokeStyle="black";
	c.translate(Player1.x - cameraX, Player1.y - cameraY); 
	
	// draw headlights
	
	linesOfHeadlights = {
		right: {
			p1x: ( ( -40) * Math.cos(vehiclesOnScreen[Player1.mot].angle) ) - ( ( -20) * Math.sin(vehiclesOnScreen[Player1.mot].angle) ),
			p1y: ( ( -40) * Math.sin(vehiclesOnScreen[Player1.mot].angle) + ( ( -20) * Math.cos(vehiclesOnScreen[Player1.mot].angle) ) ),
			p2x: ( ( -400) * Math.cos(vehiclesOnScreen[Player1.mot].angle) ) - ( ( -200) * Math.sin(vehiclesOnScreen[Player1.mot].angle) ), 
			p2y: ( ( -400) * Math.sin(vehiclesOnScreen[Player1.mot].angle) + ( ( -200) * Math.cos(vehiclesOnScreen[Player1.mot].angle) ) ) 
		},
		top: {
			p1x: ( ( -400) * Math.cos(vehiclesOnScreen[Player1.mot].angle) ) - ( ( -200) * Math.sin(vehiclesOnScreen[Player1.mot].angle) ), 
			p1y: ( ( -400) * Math.sin(vehiclesOnScreen[Player1.mot].angle) + ( ( -200) * Math.cos(vehiclesOnScreen[Player1.mot].angle) ) ) ,
			p2x: ( ( -400) * Math.cos(vehiclesOnScreen[Player1.mot].angle) ) - ( ( 200) * Math.sin(vehiclesOnScreen[Player1.mot].angle) ),
			p2y: ( ( -400) * Math.sin(vehiclesOnScreen[Player1.mot].angle) + ( ( 200) * Math.cos(vehiclesOnScreen[Player1.mot].angle) ) )
		},
		left: {
			p1x: ( ( -400) * Math.cos(vehiclesOnScreen[Player1.mot].angle) ) - ( ( 200) * Math.sin(vehiclesOnScreen[Player1.mot].angle) ),
			p1y: ( ( -400) * Math.sin(vehiclesOnScreen[Player1.mot].angle) + ( ( 200) * Math.cos(vehiclesOnScreen[Player1.mot].angle) ) ),
			p2x: ( ( -40) * Math.cos(vehiclesOnScreen[Player1.mot].angle) ) - ( ( 20) * Math.sin(vehiclesOnScreen[Player1.mot].angle) ),
			p2y: ( ( -40) * Math.sin(vehiclesOnScreen[Player1.mot].angle) + ( ( 20) * Math.cos(vehiclesOnScreen[Player1.mot].angle) ) )
		},
		bottom: {
			p1x: ( ( -40) * Math.cos(vehiclesOnScreen[Player1.mot].angle) ) - ( ( 20) * Math.sin(vehiclesOnScreen[Player1.mot].angle) ),
			p1y: ( ( -40) * Math.sin(vehiclesOnScreen[Player1.mot].angle) + ( ( 20) * Math.cos(vehiclesOnScreen[Player1.mot].angle) ) ),
			p2x: ( ( -40) * Math.cos(vehiclesOnScreen[Player1.mot].angle) ) - ( ( -20) * Math.sin(vehiclesOnScreen[Player1.mot].angle) ),
			p2y: ( ( -40) * Math.sin(vehiclesOnScreen[Player1.mot].angle) + ( ( -20) * Math.cos(vehiclesOnScreen[Player1.mot].angle) ) )
		}

	
	
	};
	
	
	
	
	//starting point
	c.moveTo( linesOfHeadlights.right.p1x, linesOfHeadlights.right.p1y  ) ;
	
	//test for line intersection
	
	pointOutsidePolygon = {
		x: ( ( -50) * Math.cos(vehiclesOnScreen[Player1.mot].angle) ) - ( ( -30) * Math.sin(vehiclesOnScreen[Player1.mot].angle) ),
		y: ( ( -50) * Math.sin(vehiclesOnScreen[Player1.mot].angle) + ( ( -30) * Math.cos(vehiclesOnScreen[Player1.mot].angle) ) ),
	}
	lineToTest = {
		p1x: linesOfHeadlights.right.p1x,
		p1y: linesOfHeadlights.right.p1y,
		p2x: linesOfHeadlights.right.p2x, 
		p2y: linesOfHeadlights.right.p2y,
		side: "right"
	}
	
	targetLine = {
		p1x: linesOfHeadlights.top.p1x,
		p1y: linesOfHeadlights.top.p1y,
		p2x: linesOfHeadlights.top.p2x, 
		p2y: linesOfHeadlights.top.p2y
	}
	
	//console.log(lineIntersectionsOnScreen[0]);
	
	jjj = 1;
	lineIntersectionsOnScreen.splice(0);
	intersectionsDone.splice(0);
	alreadyReachedLeftLine = false;
	reachedTargetLine = false;
	movedAlong = false;
	extendLine = false;
	breakLoop = false;
	closestLine.building = 9999;
	buildingsPassed.splice(0);
	
	// make a linesOnScreen array
	// use this to ignore intersection checks with lines already intersected with and/or moved along
	

do {
	console.log("jjj = " + jjj);
	checkWithinHeadlights.splice(0); 
	checkLeftLine.splice(0); 
	connectToTopLine.splice(0);
	intersectionsDone.splice(0);
	
	console.log("buildingsPassed " + buildingsPassed[buildingsPassed.length - 1]);

	
	clearPathToTargetLine = true;
	// cycle through lines on screen looking for an intersection
	buildingsOnScreen.forEach(function(i, j) {
		if(buildingsPassed.indexOf(i) === -1) {
			for (var line in theBuildings[i].roofLines) {
				if (theBuildings[i].roofLines.hasOwnProperty(line)) {
					if ( testLines(
						theBuildings[i].roofLines[line].p1x-Player1.x + cameraX, 
						theBuildings[i].roofLines[line].p1y-Player1.y + cameraY, 
						theBuildings[i].roofLines[line].p2x-Player1.x + cameraX, 
						theBuildings[i].roofLines[line].p2y-Player1.y + cameraY, 
						lineToTest.p1x, 
						lineToTest.p1y, 
						lineToTest.p2x, 
						lineToTest.p2y,
						"intersectionTest",
						i) ) {
							clearPathToTargetLine = false;
					}
				}
			}
		}
	});
	
	///draw to that intersection.
	if (lineIntersectionsOnScreen.length > 0) {
	
	// now check which intersection is closest, this gives you the closest line and the closest intersection.
	distanceKeeper = 1000000;
	lineIntersectionsOnScreen.forEach ( function (k, l) {
	
		xDifference = (k[0]) * (k[0]);
		yDifference = (k[1]) * (k[1]);
		distanceHolder = Math.sqrt(xDifference + yDifference);
		if (distanceHolder < distanceKeeper)  {
			// save this line as the closest line
			closestLine = {
				p1x: k[2].p1x, 
				p1y: k[2].p1y, 
				p2x: k[2].p2x, 
				p2y: k[2].p2y,
				building: k[2].buildingNo,
				intersectionX: k[0],
				intersectionY: k[1],
				intersectionNo: l,
			}
			distanceKeeper = distanceHolder;
			//console.log(closestLine);
			
		}
		
		//}
	});
	
	c.lineTo(closestLine.intersectionX, closestLine.intersectionY);
	intersectionsDone.push(closestLine.intersectionNo);
	
	// if this is the right side, check whether the left side intersects with the same line
	checkLeftLine.splice(0);
	if (lineIntersectionsOnScreen) {
		if ( testLines(
			closestLine.p1x, 
			closestLine.p1y, 
			closestLine.p2x, 
			closestLine.p2y,  
			linesOfHeadlights.left.p1x,
			linesOfHeadlights.left.p1y,
			linesOfHeadlights.left.p2x, 
			linesOfHeadlights.left.p2y,
			"leftLineTest") ) {
				c.lineTo(checkLeftLine[0][0], checkLeftLine[0][1]);
				alreadyReachedLeftLine = true;
		}
	}
	
	checkTopLine.splice(0);
	/// also check whether the top line intersects with the same line	
	if (testLines (
		closestLine.p1x, 
		closestLine.p1y, 
		closestLine.p2x, 
		closestLine.p2y, 
		targetLine.p1x,
		targetLine.p1y,
		targetLine.p2x,
		targetLine.p2y,
		
		"topLine") ) {
				c.lineTo(checkTopLine[0][0], checkTopLine[0][1]);
				reachedTargetLine = true;					
			}
	if (!alreadyReachedLeftLine && !reachedTargetLine) {
	
	// now check which point on the line is within the headlight polygon
	checkWithinHeadlights.splice(0);
	console.log("checking if inside headlights area");
	
	for (var line in linesOfHeadlights) {
		if (linesOfHeadlights.hasOwnProperty(line)) {
			testLines(
				pointOutsidePolygon.x, 
				pointOutsidePolygon.y, 
				closestLine.p1x, 
				closestLine.p1y, 
				linesOfHeadlights[line].p1x,
				linesOfHeadlights[line].p1y,
				linesOfHeadlights[line].p2x,
				linesOfHeadlights[line].p2y,
				"withinHeadlights"
			);
		}
	}
	if (checkWithinHeadlights.length === 0 || checkWithinHeadlights.length % 2 === 0) {
		pointWithinHeadlights = {x: closestLine.p2x, y: closestLine.p2y}
		pointOutsideHeadlights = {x: closestLine.p1x, y: closestLine.p1y}
	} else {
		pointWithinHeadlights = {x: closestLine.p1x, y: closestLine.p1y}
		pointOutsideHeadlights = {x: closestLine.p2x, y: closestLine.p2y}
	}
	
	// now lineto that point
	c.lineTo (pointWithinHeadlights.x, pointWithinHeadlights.y);
	//c.fillRect (pointWithinHeadlights.x, pointWithinHeadlights.y, 5, 5);
	
	// check if need to follow the roof line along
	
	// create a box extended from that point to check whether it's inside the roof
	if (pointWithinHeadlights.x > 0) {
		checkMoveAlongRoofLine.x = pointWithinHeadlights.x + 25;
		} else {
		checkMoveAlongRoofLine.x = pointWithinHeadlights.x - 25;
	}
	if (pointWithinHeadlights.y > 0) {
		checkMoveAlongRoofLine.y = pointWithinHeadlights.y + 25;
		} else {
		checkMoveAlongRoofLine.y = pointWithinHeadlights.y - 25;
	}
	
	//c.fillRect (checkMoveAlongRoofLine.x, checkMoveAlongRoofLine.y, 5, 5);
	var moveAlongRoof = false;
	if (collidesSpecify (
		checkMoveAlongRoofLine.x + Player1.x - cameraX,
		checkMoveAlongRoofLine.y + Player1.y - cameraY,
		1,
		1,
		theBuildings[closestLine.building].roofTopLeftX,
		theBuildings[closestLine.building].roofTopLeftY,
		theBuildings[closestLine.building].roofBottomRightX - theBuildings[closestLine.building].roofBottomLeftX,
		theBuildings[closestLine.building].roofBottomRightY - theBuildings[closestLine.building].roofTopLeftY
		
		)
	) { // It's inside, need to move along roof"
	
	console.log("Need to move along the roof to the next corner");	
	moveAlongRoof = true;
	// find which line it is
	
	for (var line in theBuildings[closestLine.building].roofLines) {
		if (theBuildings[closestLine.building].roofLines.hasOwnProperty(line)) {
			if ( 
				Math.floor(theBuildings[closestLine.building].roofLines[line].p1x) === Math.floor(pointWithinHeadlights.x + Player1.x - cameraX) &&
				Math.floor(theBuildings[closestLine.building].roofLines[line].p1y) === Math.floor(pointWithinHeadlights.y + Player1.y - cameraY) &&
				Math.floor(theBuildings[closestLine.building].roofLines[line].p2x) != Math.floor(pointOutsideHeadlights.x + Player1.x - cameraX) &&
				Math.floor(theBuildings[closestLine.building].roofLines[line].p2y) != Math.floor(pointOutsideHeadlights.y + Player1.y - cameraY)
			) {
						
			lineToTest.p1x = theBuildings[closestLine.building].roofLines[line].p1x - Player1.x + cameraX;
			lineToTest.p1y = theBuildings[closestLine.building].roofLines[line].p1y - Player1.y + cameraY;
			lineToTest.p2x = theBuildings[closestLine.building].roofLines[line].p2x - Player1.x + cameraX;
			lineToTest.p2y = theBuildings[closestLine.building].roofLines[line].p2y - Player1.y + cameraY;
			lineToTest.line = line;
			}
			
			if ( 
			Math.floor(theBuildings[closestLine.building].roofLines[line].p2x) === Math.floor(pointWithinHeadlights.x + Player1.x - cameraX) &&
			Math.floor(theBuildings[closestLine.building].roofLines[line].p2y) === Math.floor(pointWithinHeadlights.y + Player1.y - cameraY) &&
			Math.floor(theBuildings[closestLine.building].roofLines[line].p1x) != Math.floor(pointOutsideHeadlights.x + Player1.x - cameraX) &&
			Math.floor(theBuildings[closestLine.building].roofLines[line].p1y) != Math.floor(pointOutsideHeadlights.y + Player1.y - cameraY)
			) {
				lineToTest.p1x = theBuildings[closestLine.building].roofLines[line].p2x - Player1.x + cameraX;
				lineToTest.p1y = theBuildings[closestLine.building].roofLines[line].p2y - Player1.y + cameraY;
				lineToTest.p2x = theBuildings[closestLine.building].roofLines[line].p1x - Player1.x + cameraX;
				lineToTest.p2y = theBuildings[closestLine.building].roofLines[line].p1y - Player1.y + cameraY;
				lineToTest.line = line;
				
			} // got new roof line to follow on
		} // has own property in line
	} // for line in the buildings (closest line)
	
	
	// get building corner
	if (
	Math.floor( theBuildings[closestLine.building].roofTopLeftX - Player1.x + cameraX) === Math.floor(lineToTest.p2x) 
	&& 
	Math.floor(theBuildings[closestLine.building].roofTopLeftY  - Player1.y + cameraY ) === 
	Math.floor(lineToTest.p2y)) {
		//console.log ("Top left roof corner identified")
		lineToTest.roofCorner = "upperLeft";
		
	}
	
	} else {
	
		//extendLine = true;
		
		console.log("extending line");
		// it's always checking upper left corner. Need to figure out which corner you're on and extend line from there.
		lineToExtend  = { 
					p1x: theBuildings[closestLine.building].upperLeftX - Player1.x + cameraX, 
					p1y: theBuildings[closestLine.building].lowerRightY - Player1.y + cameraY, 
					p2x: theBuildings[closestLine.building].roofLines.bottom.p1x - Player1.x + cameraX, 
					p2y: theBuildings[closestLine.building].roofLines.bottom.p1y - Player1.y + cameraY
				};  
				var dx = theBuildings[closestLine.building].upperLeftX - cameraX;
				var dy = theBuildings[closestLine.building].lowerRightY - cameraY;
				
				var lineToX = dx * 20;
				var lineToY = dy * 20;
				lineToTest.p1x = lineToExtend.p2x;
				lineToTest.p1y = lineToExtend.p2y;
				lineToTest.p2x = theBuildings[closestLine.building].roofBottomLeftXExtend;
				lineToTest.p2y = theBuildings[closestLine.building].roofBottomLeftYExtend;
				
				if (clearPathToTargetLine) {							
					if ( 
					testLines(lineToTest.p1x, lineToTest.p1y, lineToTest.p2x, lineToTest.p2y, linesOfHeadlights.top.p1x, linesOfHeadlights.top.p1y, linesOfHeadlights.top.p2x, linesOfHeadlights.top.p2y, "connectToTopLine") ) {
					reachedTargetLine = true;
					}
				}
				buildingsPassed.push(closestLine.building);
				lineIntersectionsOnScreen.splice(0);
	} // (else) it's inside, need to move along roof.
	
	if (moveAlongRoof) {
	
	checkLeftLine.splice(0);
		if ( testLines(
			lineToTest.p1x, 
			lineToTest.p1y, 
			lineToTest.p2x, 
			lineToTest.p2y,  
			linesOfHeadlights.left.p1x,
			linesOfHeadlights.left.p1y,
			linesOfHeadlights.left.p2x, 
			linesOfHeadlights.left.p2y,
			"leftLineTest") ) {
				c.lineTo(checkLeftLine[0][0], checkLeftLine[0][1]);
				alreadyReachedLeftLine = true;
				console.log("HEeeeeeRE   left");
		}  
	
	checkTopLine.splice(0);
	/// also check whether the top line intersects with the same line	
	if (testLines (
		lineToTest.p1x, 
		lineToTest.p1y, 
		lineToTest.p2x, 
		lineToTest.p2y, 
		targetLine.p1x,
		targetLine.p1y,
		targetLine.p2x,
		targetLine.p2y,
		"topLine") ) {
				c.lineTo(checkTopLine[0][0], checkTopLine[0][1]);
				console.log("HEeeeeeRE   top");
				reachedTargetLine = true;					
			}
		
	if (!alreadyReachedLeftLine && !reachedTargetLine) {
		c.lineTo(lineToTest.p2x, lineToTest.p2y);
		extendLine = true;

	}
			
	} // if  moveAlongRoof

		if (extendLine === true) {

				lineToExtend  = { 
					p1x: theBuildings[closestLine.building].upperLeftX - Player1.x + cameraX, 
					p1y: theBuildings[closestLine.building].upperLeftY - Player1.y + cameraY, 
					p2x: theBuildings[closestLine.building].roofLines.left.p1x - Player1.x + cameraX, 
					p2y: theBuildings[closestLine.building].roofLines.left.p1y - Player1.y + cameraY
				};  

				var dx = theBuildings[closestLine.building].upperLeftX - cameraX;
				var dy = theBuildings[closestLine.building].upperLeftY - cameraY;
				
				var lineToX = dx * 20;
				var lineToY = dy * 20;

				lineToTest.p1x = lineToTest.p2x;
				lineToTest.p1y = lineToTest.p2y;

				lineToTest.p2x = theBuildings[closestLine.building].roofTopLeftXExtend;
				lineToTest.p2y = theBuildings[closestLine.building].roofTopLeftYExtend;

				
				movedAlong = true;
				//console.log("extending line");
				
				
				if (clearPathToTargetLine) {
				if ( 
				testLines(lineToTest.p1x, lineToTest.p1y, lineToTest.p2x, lineToTest.p2y, linesOfHeadlights.top.p1x, linesOfHeadlights.top.p1y, linesOfHeadlights.top.p2x, linesOfHeadlights.top.p2y, "connectToTopLine") ) {
				//console.log("intersect with top line");
				reachedTargetLine = true;

				}
				}
				
				buildingsPassed.push(closestLine.building);
				lineIntersectionsOnScreen.splice(0);
				
			}
	
	} // if !already reached left line
	
	} else {
	//console.log("No intersection on screen");
	testLines (
		lineToTest.p1x, 
		lineToTest.p1y, 
		lineToTest.p2x, 
		lineToTest.p2y, 
		targetLine.p1x,
		targetLine.p1y,
		targetLine.p2x,
		targetLine.p2y,
		"connectToTopLine"
		);
		
	reachedTargetLine = true;
	console.log("Get to this bit");
	}
	jjj += 1;
	
	if (jjj === 5){console.log("STUCK IN LOOP"); breakLoop = true;}
	
	} while (alreadyReachedLeftLine === false && reachedTargetLine === false && breakLoop === false && completedHeadlights === false);
	

	if (!alreadyReachedLeftLine) {
	
		if(reachedTargetLine){
		
		//console.log(connectToTopLine[0]);
		//console.log(checkTopLine[0]);
		if (lineIntersectionsOnScreen.length === 0) {
			//c.lineTo(linesOfHeadlights.top.p1x, linesOfHeadlights.top.p1y )
			//console.log("No intersection");
		}
			
		if (connectToTopLine[0]){
				
				//c.lineTo(connectToTopLine[0][0] + Player1.x - cameraX, connectToTopLine[0][1] + Player1.y - cameraY);
				
				//console.log("drawing extended line off end of roof");
				//console.log(connectToTopLine[0][0] + Player1.x - cameraX);
				//console.log(connectToTopLine[0][1] + Player1.y - cameraY );
				c.lineTo(connectToTopLine[0][0], connectToTopLine[0][1] );
				
				//c.fillRect(connectToTopLine[0][0], connectToTopLine[0][1],15,15);
				console.log("got yo this drawing bit");
			} 
		if (checkTopLine[0]){
			//console.log("check top line drawing");
				c.lineTo(checkTopLine[0][0], checkTopLine[0][1] );
			}
			
		} else {
			c.lineTo( linesOfHeadlights.right.p2x, linesOfHeadlights.right.p2y );
			console.log("did not reach target line");
		}
		
		
	//	console.log(lineToTest.p1x);
	//	console.log(targetLine.p1x);
	//	console.log(lineToTest.p1y);
	//	console.log(targetLine.p1y);
		
		
			
		
			
		//c.lineTo( linesOfHeadlights.top.p2x, linesOfHeadlights.top.p2y );
		//;
		
		
		c.lineTo( linesOfHeadlights.top.p2x, linesOfHeadlights.top.p2y);
	
	}
	c.lineTo( linesOfHeadlights.left.p2x, linesOfHeadlights.left.p2y );
	c.lineTo( linesOfHeadlights.bottom.p2x, linesOfHeadlights.bottom.p2y );
	c.lineWidth = 1;
	//c.stroke();
	
	
	
	
	
	//c.moveTo(Player1.x + -40, Player1.y + -20);
	//c.lineTo(Player1.x + -400, Player1.y + -200);
	//c.lineTo(Player1.x + -400, Player1.y + 200);
	//c.lineTo(Player1.x + -40, Player1.y + 20);
	//c.lineTo(Player1.x + -40, Player1.y + -20);
	c.restore();
	c.closePath();
	
	
	for (j = buildingsOnScreen.length - 1; j 
	> -1; j--) {
	var i = buildingsOnScreen[j];
	
	// make sure roofs are dark
	if (i != Player1.inBuilding){ 
	//	c.moveTo(theBuildings[i].roofTopLeftX, theBuildings[i].roofTopLeftY);
	//	c.lineTo(theBuildings[i].roofTopRightX, theBuildings[i].roofTopRightY);
	//	c.lineTo(theBuildings[i].roofBottomRightX, theBuildings[i].roofBottomRightY);
	//	c.lineTo(theBuildings[i].roofBottomLeftX, theBuildings[i].roofBottomLeftY);
	//	c.lineTo(theBuildings[i].roofTopLeftX, theBuildings[i].roofTopLeftY);
	}
}

if (Player1.inBuilding != false) {
	var i = Player1.inBuilding;	
	c.moveTo(theBuildings[i].roofTopLeftX, theBuildings[i].roofTopLeftY);
	c.lineTo(theBuildings[i].roofBottomLeftX, theBuildings[i].roofBottomLeftY);
	c.lineTo(theBuildings[i].roofBottomRightX, theBuildings[i].roofBottomRightY);
	c.lineTo(theBuildings[i].roofTopRightX, theBuildings[i].roofTopRightY);
	c.lineTo(theBuildings[i].roofTopLeftX, theBuildings[i].roofTopLeftY);

}
c.fill();
	
}	//draw headlights
	
	
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
	
function updateCamera() {
//if arrow keys are not being pressed, continue	
	if ( !keys[37] && !keys[39] && !keys[38] && !keys[40]  ) {
		if (Player1.mot === 0) {
// if not in a vehicle center the camera on the player
			cameraX = (Player1.x - Player1.w / 2) - (cameraW / 2);
			cameraY = (Player1.y - Player1.h / 2) - (cameraH / 2);
		} else {
// if we are in a vehicle, center the camera on the vehice. However, the third part of this expression adds on the speed of the vehicle to the camera position -- otherwise the vehicle image moves forward on the screen a little, in line with its acceleration. 
			cameraX = (Player1.x - Player1.w / 2) - (cameraW / 2) - (((vehiclesOnScreen[Player1.mot].xtarget * vehiclesOnScreen[Player1.mot].speed) - vehiclesOnScreen[Player1.mot].xTurnTarget));
			cameraY = (Player1.y - Player1.h / 2) - (cameraH / 2) - (((vehiclesOnScreen[Player1.mot].ytarget * vehiclesOnScreen[Player1.mot].speed) - vehiclesOnScreen[Player1.mot].yTurnTarget));
		}
	}
}
	
function updateMouseCoordinates() {
	// get the angle between the player coords and the mouse coords  
	deltaX = mouseX - Player1.x;
	deltaY = mouseY - Player1.y;
	var newAngle = Math.atan(deltaY / deltaX);
}	

function clearCanvas() {
	// clear the canvas and draw the default green background again
	clear(c);
	c.beginPath();
	//c.fillStyle = "rgb(45,133,22)";
	c.fillStyle = "green";
	c.rect(0,0,800,600);
	c.fill();
	c.closePath();
}

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

function isOnScreen(i) {
	if (i.x > cameraX - 100 && i.x < (cameraX + cameraW + 100) && i.y > cameraY - 100 && i.y < (cameraY + cameraH + 100)) {
		return true;
	} else {
		return false;
	}
}


 // game loop interval
 setInterval(mainDraw, INTERVAL);

 // clear canvas function
  function clear(c) {
  c.clearRect(0, 0, WIDTH, HEIGHT);
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