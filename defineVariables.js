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
var cameraW = window.innerWidth;
var cameraH = window.innerHeight;
var tileSize = 50;
console.log(cameraW);
console.log(cameraH);

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
var debugZero = 0;
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
var weaponsBar = [
	{fill: "red", border: "#FF2626", x: 440, y: 590},
	{fill: "black", border: "grey", x: 480, y: 590},
	{fill: "blue", border: "#4747FF", x: 520, y: 590},
	{fill: "purple", border: "#932693", x: 560, y: 590},
	]



// Player coords and initial location
 function Player () {
	 this.x = 500; 
	 this.y = 500;
	 this.w = 20;
	 this.h = 20;
	 this.deltaX = 0;
	 this.deltaY = 0;
	 this.xTarget = 0;
	 this.yTarget = 0;
	 this.tired = false;
	 this.speed = 0;
	 this.topSpeed = 5;
	 this.energy = 150;
	 this.maxEnergy = 150;
	 this.maxHealth = 150;
	 this.health = 0;
	 this.recovery = 0
	 this.xcenter = 400;
	 this.ycenter = 300;
	 this.fill = '#000000';
	 this.xdirection = 1;
	 this.ydirection = 0;
	 this.acceleration = 0.3;
	 this.radius = 0;
	 this.angle = 1.7;
	 this.mot = 0;
	 this.closestVehicle = 0;
	 this.gettingInVehicle = 0;
	 this.inBuilding = 0;
	 this.walkTimer = 0;
	 this.xVector = 0;
	 this.yVector = 0;
	 this.standImage = playerStand;
	 this.walkAnimations = ["", playerWalk1, playerWalk2, playerWalk3, playerWalk4];
	 this.activeWeapon = -1;
	 this.weaponsPossessed = [
		{name: "Pistol", img: "", possess: false, ammo: 10000, notHaveColor: '#783a3a', haveColor: 'red'},
		{name: "Machine Gun", img: "", possess: false, ammo: 1500, notHaveColor: '#595c38', haveColor: '#fffb00'},
		{name: "Plasma Gun", img: "", possess: false, ammo: 50, notHaveColor: '#388994', haveColor: '#05e2ff'},
		{name: "Rocket Launcher", img: "", possess: false, ammo: 30, notHaveColor: '#661b61', haveColor: '#ff00ee'}
	 ];
	 this.weaponCount = 0;
	 this.nearDoor = false;
	 this.nearBuilding = false;
	 this.ammo = [1000, 1500, 2000, 50, 30]
	 this.kills = 0;
	 this.points = 10000;
	 this.onTile = {x: 0, y: 0};
	 this.inBounds = {

	 }
} 
var Player1 = new Player();
Player1.onTile = returnTile(Player1);
var nearDoor = false;




var rightDoorPosition = 125;
var leftDoorPosition = 125;
var mouseDown = false;
var plasmaCharge = 0;
var rocketReload = 0;
var vehiclesOnScreen = [];
var theExplosions = [];






vehicleAudi = new Image();
vehicleAudi.src = 'images/audi.png';

vehicleCar = new Image();
vehicleCar.src = 'images/Car.png';

vehicleTruck = new Image();
vehicleTruck.src = 'images/Mini_truck.png';

vehicleTJF_Car_Ambulance = new Image();
vehicleTJF_Car_Ambulance.src = 'images/TJF_Car_Ambulance.png';

vehicleTJF_Car_Blue = new Image();
vehicleTJF_Car_Blue.src = 'images/TJF_Car_Blue.png';

vehicleTJF_Car_Military = new Image();
vehicleTJF_Car_Military.src = 'images/TJF_Car_Military.png';

vehicleTJF_Car_Truck = new Image();
vehicleTJF_Car_Truck.src = 'images/TJF_Car_Truck.png';

vehicleTJF_Car_Green = new Image();
vehicleTJF_Car_Green.src = 'images/TJF_Car_Green.png';

vehicleTJF_Car_Limo = new Image();
vehicleTJF_Car_Limo.src = 'images/TJF_Car_Limo.png';

vehiclesOnScreen[0] = {
	acceleration: 2.5,
	brakeRate: 1,
	reverseAcceleration: 2.5,
	reverseTopSpeed: -0.5,
	radius: 0,
	topForwardSpeed: 1.5,
	weight: 0.1
 };
 
vehiclesOnScreen[1] = {
	x: Player1.x,
	y: Player1.y,
	xPrevious: 0,
	yPrevious: 0,
	xtarget: 0,
	ytarget: 0,
	xTurnTarget: 0,
	yTurnTarget: 0,
	w: 40,
	l: 80,
	type: "normalCar",
	acceleration: 5,
	topForwardSpeed: 15,
	brakeRate: 0.005,
	reverseAcceleration: 0.005,
	reverseTopSpeed: -2,
	radius: 70,
	angle: -1.7,
	angleTarget: 1.8,
	speed: 0,
	weight: 20,
	color: "red",
	distanceFromPlayer: 10000,
	accelerating: false,
	reversing: false,
	track: null,
	image: vehicleCar,
	headlightsOn: false,
	collision: false,
	forwardTurnLeft: false,
	forwardTurnRight: false,
	lines: {
		frontLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
		rightLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
		backLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
		leftLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
	}
 };
 
 vehiclesOnScreen[2] = {
	x: Player1.x + 300,
	y: Player1.y + 100,
	
	xPrevious: 0,
	yPrevious: 0,
	xtarget: 0,
	ytarget: 0,
	xTurnTarget: 0,
	yTurnTarget: 0,
	w: 65,
	l: 180,
	type: "normalCar",
	acceleration: 1,
	topForwardSpeed: 3,
	brakeRate: 0.2,
	reverseAcceleration: 0.5,
	reverseTopSpeed: -2.6,
	radius: 20,
	angle: 1.58,
	angleTarget: 1.8,
	speed: 0,
	weight: 100,
	color: "pink",
	distanceFromPlayer: 10000,
	track: null,
	image: vehicleTJF_Car_Truck,
	headlightsOn: false,
	lines: {
		frontLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
		rightLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
		backLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
		leftLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
	},
	collision: false,
	forwardTurnLeft: false,
	forwardTurnRight: false,
};
 
 vehiclesOnScreen[3] = {
	x: 375,
	y: 2580,
	xPrevious: 0,
	yPrevious: 0,
	xtarget: 0,
	ytarget: 0,
	xTurnTarget: 0,
	yTurnTarget: 0,
	w: 45,
	l: 130,
	type: "normalCar",
	acceleration: 1,
	topForwardSpeed: 3,
	brakeRate: 0.2,
	reverseAcceleration: 0.9,
	reverseTopSpeed: -2,
	radius: 40,
	angle: 3.15,
	angleTarget: 1.8,
	speed: 0,
	weight: 15,
	color: "blue",
	distanceFromPlayer: 10000,
	track: null,
	image: vehicleTJF_Car_Limo,
	headlightsOn: false,
	lines: {
		frontLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
		rightLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
		backLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
		leftLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
	},
	collision: false,
	forwardTurnLeft: false,
	forwardTurnRight: false,
 };
 
 vehiclesOnScreen[4] = {
	x: 1650,
	y: 950,
	xtarget: 0,
	ytarget: 0,
	xPrevious: 0,
	yPrevious: 0,
	xTurnTarget: 0,
	yTurnTarget: 0,
	w: 40,
	l: 80,
	type: "normalCar",
	acceleration: 2,
	topForwardSpeed: 8,
	brakeRate: 0.005,
	reverseAcceleration: 0.11,
	reverseTopSpeed: -1,
	radius: 70,
	angle: 4.7,
	angleTarget: 1.8,
	speed: 0,
	weight: 20,
	color: "red",
	distanceFromPlayer: 10000,
	accelerating: false,
	reversing: false,
	track: null,
	image: vehicleTJF_Car_Blue,
	headlightsOn: false,
	lines: {
		frontLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
		rightLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
		backLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
		leftLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
	},
	collision: false,
	forwardTurnLeft: false,
	forwardTurnRight: false,
 };
 
 vehiclesOnScreen[5] = {
	x: 2930,
	y: 850,
	xtarget: 0,
	ytarget: 0,
	xPrevious: 0,
	yPrevious: 0,
	xTurnTarget: 0,
	yTurnTarget: 0,
	w: 40,
	l: 80,
	type: "normalCar",
	acceleration: 2,
	topForwardSpeed: 8,
	brakeRate: 0.005,
	reverseAcceleration: 0.11,
	reverseTopSpeed: -1,
	radius: 70,
	angle: 4.7,
	angleTarget: 1.8,
	speed: 0,
	weight: 20,
	color: "red",
	distanceFromPlayer: 10000,
	accelerating: false,
	reversing: false,
	track: null,
	image: vehicleTJF_Car_Military,
	headlightsOn: false,
	lines: {
		frontLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
		rightLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
		backLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
		leftLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
	},
	collision: false,
	forwardTurnLeft: false,
	forwardTurnRight: false,
 };

  vehiclesOnScreen[6] = {
	x: 1875,
	y: 1820,
	xtarget: 0,
	ytarget: 0,
	xPrevious: 0,
	yPrevious: 0,
	xTurnTarget: 0,
	yTurnTarget: 0,
	w: 40,
	l: 80,
	type: "normalCar",
	acceleration: 2,
	topForwardSpeed: 8,
	brakeRate: 0.005,
	reverseAcceleration: 0.11,
	reverseTopSpeed: -1,
	radius: 70,
	angle: 4.7,
	angleTarget: 1.8,
	speed: 0,
	weight: 20,
	color: "red",
	distanceFromPlayer: 10000,
	accelerating: false,
	reversing: false,
	track: null,
	image: vehicleTJF_Car_Green,
	headlightsOn: false,
	lines: {
		frontLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
		rightLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
		backLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
		leftLine: {p1x: 0, p1y: 0, p2x: 0, p2y: 0, p1xr: 0, p1yr: 0, p2xr: 0, p2yr: 0, p1xStep: 0, p1yStep: 0, p2xStep: 0, p2yStep: 0},
	},
	collision: false,
	forwardTurnLeft: false,
	forwardTurnRight: false,
 };
 
 
// define buildings
theBuildings[1] = {
	locked: false,
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
		locked: false,
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
		locked: false,
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
	locked: true,
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
		locked: true,
		cost: 100,
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
	locked: true,
	upperLeftX: 1250,
	upperLeftY: 800,
	lowerRightX: 1550 - 1,
	lowerRightY: 950 - 1,
	building: 4,
	height: 1.2,
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
		locked: true,
		cost: 100,
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
	neonColor: "rgb(125,249,255,0.2)",
	neonShadowColor: "rgb(125,249,255)",
	neonRoof: true,
};

theBuildings[5] = {
	name: "home",
	locked: true,
	upperLeftX: 1700,
	upperLeftY: 800,
	lowerRightX: 1950 - 1,
	lowerRightY: 850 - 1,
	building: 5,
	height: 1.1,
	wallColor: "#040311",
	roofColor: "#0f0b44",
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
	locked: true,
	upperLeftX: 1700,
	upperLeftY: 700,
	lowerRightX: 1950 - 1,
	lowerRightY: 750 - 1,
	building: 20,
	height: 1.1,
	wallColor: "#040311",
	roofColor: "#0f0b44",
	wallColor: "#040311",
	roofColor: "#0f0b44",
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
	locked: true,
	upperLeftX: 1700,
	upperLeftY: 600,
	lowerRightX: 1950 - 1,
	lowerRightY: 650 - 1,
	building: 21,
	height: 1.1,
	wallColor: "#040311",
	roofColor: "#0f0b44",
	wallColor: "#040311",
	roofColor: "#0f0b44",
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
	locked: true,
	upperLeftX: 1500,
	upperLeftY: 575,
	lowerRightX: 1600 - 1,
	lowerRightY: 625 - 1,
	building: 22,
	height: 1.1,
	wallColor: "#040311",
	roofColor: "#0f0b44",
	wallColor: "#040311",
	roofColor: "#0f0b44",
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
	locked: true,
	upperLeftX: 2200,
	upperLeftY: 800,
	lowerRightX: 2400 - 1,
	lowerRightY: 950 - 1,
	building: 6,
	height: 1.3,
	wallColor: "#040311",
	roofColor: "#0f0b44",
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
	locked: true,
	upperLeftX: 2650,
	upperLeftY: 850,
	lowerRightX: 2750 - 1,
	lowerRightY: 1000 - 1,
	building: 7,
	height: 1.3,
	wallColor: "#040311",
	roofColor: "#0f0b44",
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
	locked: true,
	upperLeftX: 3100,
	upperLeftY: 800,
	lowerRightX: 3400 - 1,
	lowerRightY: 1050 - 1,
	building: 8,
	height: 1.3,
	wallColor: "#040311",
	roofColor: "#0f0b44",
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
	locked: true,
	upperLeftX: 1500,
	upperLeftY: 1600,
	lowerRightX: 3650 - 1,
	lowerRightY: 1750 - 1,
	building: 9,
	height: 1.3,
	wallColor: "#040311",
	roofColor: "#0f0b44",
	type: "rectangular",
	upperLeftTile: 7,
	lowerRightTile: 16,
	floor: indoorFloorImage,
	
	northDoor: {
		exists: true,
		locked: true,
		cost: 100,
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
		locked: true,
		cost: 100,
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
	neonCorners: true,
	neonColor: "rgb(125,249,255,0.2)",
	neonShadowColor: "rgb(125,249,255)",
	neonRoof: true,
};
//b10
theBuildings[10] = {
	name: "home",
	locked: true,
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
		locked: true,
		cost: 100,
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
		locked: true,
		cost: 100,
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
	locked: true,
	upperLeftX: 5000,
	upperLeftY: 2050,
	lowerRightX: 5500 - 1,
	lowerRightY: 2500 - 1,
	building: 11,
	height: 1.3,
	wallColor: "#040311",
	roofColor: "#0f0b44",
	type: "rectangular",
	upperLeftTile: 7,
	lowerRightTile: 16,
	floor: indoorFloorImage,
	southDoor: {
		exists: true,
		locked: true,
		cost: 100,
		distanceFromDoor: 0,
		doorwayDistanceFromLeft: 150,
		doorwayDistanceFromLeftToMiddle: 250,
		leftDoorSize: 100,
	
		leftDoorPosition: 100,
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
	neonColor: "rgb(125,249,255,0.2)",
	neonShadowColor: "rgb(125,249,255)",
	neonRoof: true,
};


theBuildings[100] = {
	name: "topBounds",
	upperLeftX: 0,
	upperLeftY: 0,
	lowerRightX: map[0].length * 50 - 1,
	lowerRightY: 49,
	building: 100,
	height: 1.5,
	wallColor: "#040311",
	roofColor: "#0f0b44",
	type: "rectangular",
	upperLeftTile: 0,
	lowerRightTile: map[0].length,
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

theBuildings[101] = {
	name: "rightBounds",
	upperLeftX: map[0].length * 50 - 50,
	upperLeftY: 50,
	lowerRightX: map[0].length * 50 - 1,
	lowerRightY: map.length * 50 - 50,
	building: 101,
	height: 1.5,
	wallColor: "#040311",
	roofColor: "#0f0b44",
	type: "rectangular",
	upperLeftTile: map[0].length,
	lowerRightTile: map.length,
	floor: grassImage,
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

theBuildings[102] = {
	name: "bottomBounds",
	upperLeftX: 0,
	upperLeftY: map.length * 50 - 50,
	lowerRightX: map[0].length * 50 - 1,
	lowerRightY: map.length * 50 - 1,
	building: 102,
	height: 1.5,
	wallColor: "#040311",
	roofColor: "#0f0b44",
	type: "rectangular",
	upperLeftTile: map.length,
	lowerRightTile: map[0].length,
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

theBuildings[103] = {
	name: "leftBounds",
	upperLeftX: 0,
	upperLeftY: 50,
	lowerRightX: 49,
	lowerRightY: map.length * 50 - 51,
	building: 103,
	height: 1.5,
	wallColor: "#040311",
	roofColor: "#0f0b44",
	type: "rectangular",
	upperLeftTile: map.length,
	lowerRightTile: map[0].length,
	floor: grassImage,
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


theWeaponIcons = [
	{id: 0, x: 300, y: 300, w: 30, h: 30, color: 'red', collected: false },
	{id: 1, x: 500, y: 300, w: 30, h: 30, color: '#fffb00', collected: false },
	{id: 2, x: 700, y: 300, w: 30, h: 30, color: '#05e2ff', collected: false },
	{id: 3, x: 900, y: 300, w: 30, h: 30, color: '#ff00ee', collected: false }
];



theBuildings.forEach(function(i, j) {
	if (i.northDoor) {
		i.northDoor.doorwayDistanceFromRightToMiddle = i.lowerRightX - i.upperLeftX - i.northDoor.doorwayDistanceFromLeftToMiddle;
	}
});