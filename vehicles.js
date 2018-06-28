// define the vehicles

var vehiclesOnScreen = [];

vehicleAudi = new Image();
vehicleAudi.src = 'images/Audi.png';

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
	topForwardSpeed: 12,
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

function calculateVehicleLines(j) {
	// VEHICLE COLLISION TESTING
	// Add X and Y coordinates to each equation here
	//c.translate(vehiclesOnScreen[j].x - cameraX, vehiclesOnScreen[j].y - cameraY);
	vehiclesOnScreen[j].lines.frontLine.p1x = vehiclesOnScreen[j].x - (vehiclesOnScreen[j].l/2) * Math.cos(vehiclesOnScreen[j].angle) - (vehiclesOnScreen[j].w/2) * Math.sin(vehiclesOnScreen[j].angle);
	vehiclesOnScreen[j].lines.frontLine.p1y = vehiclesOnScreen[j].y - (vehiclesOnScreen[j].l/2) * Math.sin(vehiclesOnScreen[j].angle) + (vehiclesOnScreen[j].w/2) * Math.cos(vehiclesOnScreen[j].angle);
	vehiclesOnScreen[j].lines.frontLine.p2x = vehiclesOnScreen[j].x - (vehiclesOnScreen[j].l/2) * Math.cos(vehiclesOnScreen[j].angle) - -(vehiclesOnScreen[j].w/2) * Math.sin(vehiclesOnScreen[j].angle);
	vehiclesOnScreen[j].lines.frontLine.p2y = vehiclesOnScreen[j].y - (vehiclesOnScreen[j].l/2) * Math.sin(vehiclesOnScreen[j].angle) + -(vehiclesOnScreen[j].w/2) * Math.cos(vehiclesOnScreen[j].angle);
	
	vehiclesOnScreen[j].lines.rightLine.p1x = vehiclesOnScreen[j].x - (vehiclesOnScreen[j].l/2) * Math.cos(vehiclesOnScreen[j].angle) - -(vehiclesOnScreen[j].w/2) * Math.sin(vehiclesOnScreen[j].angle);
	vehiclesOnScreen[j].lines.rightLine.p1y = vehiclesOnScreen[j].y - (vehiclesOnScreen[j].l/2) * Math.sin(vehiclesOnScreen[j].angle) + -(vehiclesOnScreen[j].w/2) * Math.cos(vehiclesOnScreen[j].angle);
	vehiclesOnScreen[j].lines.rightLine.p2x = vehiclesOnScreen[j].x + (vehiclesOnScreen[j].l/2) * Math.cos(vehiclesOnScreen[j].angle) - -(vehiclesOnScreen[j].w/2) * Math.sin(vehiclesOnScreen[j].angle);
	vehiclesOnScreen[j].lines.rightLine.p2y = vehiclesOnScreen[j].y + (vehiclesOnScreen[j].l/2) * Math.sin(vehiclesOnScreen[j].angle) + -(vehiclesOnScreen[j].w/2) * Math.cos(vehiclesOnScreen[j].angle);
	
	vehiclesOnScreen[j].lines.backLine.p1x = vehiclesOnScreen[j].x + (vehiclesOnScreen[j].l/2) * Math.cos(vehiclesOnScreen[j].angle) - -(vehiclesOnScreen[j].w/2) * Math.sin(vehiclesOnScreen[j].angle);
	vehiclesOnScreen[j].lines.backLine.p1y = vehiclesOnScreen[j].y + (vehiclesOnScreen[j].l/2) * Math.sin(vehiclesOnScreen[j].angle) + -(vehiclesOnScreen[j].w/2) * Math.cos(vehiclesOnScreen[j].angle);
	vehiclesOnScreen[j].lines.backLine.p2x = vehiclesOnScreen[j].x + (vehiclesOnScreen[j].l/2) * Math.cos(vehiclesOnScreen[j].angle) - (vehiclesOnScreen[j].w/2) * Math.sin(vehiclesOnScreen[j].angle);
	vehiclesOnScreen[j].lines.backLine.p2y = vehiclesOnScreen[j].y + (vehiclesOnScreen[j].l/2) * Math.sin(vehiclesOnScreen[j].angle) + (vehiclesOnScreen[j].w/2) * Math.cos(vehiclesOnScreen[j].angle);
	
	vehiclesOnScreen[j].lines.leftLine.p1x = vehiclesOnScreen[j].x + (vehiclesOnScreen[j].l/2) * Math.cos(vehiclesOnScreen[j].angle) - (vehiclesOnScreen[j].w/2) * Math.sin(vehiclesOnScreen[j].angle);
	vehiclesOnScreen[j].lines.leftLine.p1y = vehiclesOnScreen[j].y + (vehiclesOnScreen[j].l/2) * Math.sin(vehiclesOnScreen[j].angle) + (vehiclesOnScreen[j].w/2) * Math.cos(vehiclesOnScreen[j].angle);
	vehiclesOnScreen[j].lines.leftLine.p2x = vehiclesOnScreen[j].x -(vehiclesOnScreen[j].l/2) * Math.cos(vehiclesOnScreen[j].angle) - (vehiclesOnScreen[j].w/2) * Math.sin(vehiclesOnScreen[j].angle);
	vehiclesOnScreen[j].lines.leftLine.p2y = vehiclesOnScreen[j].y -(vehiclesOnScreen[j].l/2) * Math.sin(vehiclesOnScreen[j].angle) + (vehiclesOnScreen[j].w/2) * Math.cos(vehiclesOnScreen[j].angle);
}
	
function calculateVehicleStepLines(j) {
	
	vehiclesOnScreen[j].lines.frontLine.p1xr = vehiclesOnScreen[j].x - (vehiclesOnScreen[j].l/2) * Math.cos(vehiclesOnScreen[j].angleTarget) - (vehiclesOnScreen[j].w/2) * Math.sin(vehiclesOnScreen[j].angleTarget);
	vehiclesOnScreen[j].lines.frontLine.p1yr = vehiclesOnScreen[j].y - (vehiclesOnScreen[j].l/2) * Math.sin(vehiclesOnScreen[j].angleTarget) + (vehiclesOnScreen[j].w/2) * Math.cos(vehiclesOnScreen[j].angleTarget);
	vehiclesOnScreen[j].lines.frontLine.p2xr = vehiclesOnScreen[j].x - (vehiclesOnScreen[j].l/2) * Math.cos(vehiclesOnScreen[j].angleTarget) - -(vehiclesOnScreen[j].w/2) * Math.sin(vehiclesOnScreen[j].angleTarget);
	vehiclesOnScreen[j].lines.frontLine.p2yr = vehiclesOnScreen[j].y - (vehiclesOnScreen[j].l/2) * Math.sin(vehiclesOnScreen[j].angleTarget) + -(vehiclesOnScreen[j].w/2) * Math.cos(vehiclesOnScreen[j].angleTarget);
	
	vehiclesOnScreen[j].lines.rightLine.p1xr = vehiclesOnScreen[j].x - (vehiclesOnScreen[j].l/2) * Math.cos(vehiclesOnScreen[j].angleTarget) - -(vehiclesOnScreen[j].w/2) * Math.sin(vehiclesOnScreen[j].angleTarget);
	vehiclesOnScreen[j].lines.rightLine.p1yr = vehiclesOnScreen[j].y - (vehiclesOnScreen[j].l/2) * Math.sin(vehiclesOnScreen[j].angleTarget) + -(vehiclesOnScreen[j].w/2) * Math.cos(vehiclesOnScreen[j].angleTarget);
	vehiclesOnScreen[j].lines.rightLine.p2xr = vehiclesOnScreen[j].x + (vehiclesOnScreen[j].l/2) * Math.cos(vehiclesOnScreen[j].angleTarget) - -(vehiclesOnScreen[j].w/2) * Math.sin(vehiclesOnScreen[j].angleTarget);
	vehiclesOnScreen[j].lines.rightLine.p2yr = vehiclesOnScreen[j].y + (vehiclesOnScreen[j].l/2) * Math.sin(vehiclesOnScreen[j].angleTarget) + -(vehiclesOnScreen[j].w/2) * Math.cos(vehiclesOnScreen[j].angleTarget);
	
	vehiclesOnScreen[j].lines.backLine.p1xr = vehiclesOnScreen[j].x + (vehiclesOnScreen[j].l/2) * Math.cos(vehiclesOnScreen[j].angleTarget) - -(vehiclesOnScreen[j].w/2) * Math.sin(vehiclesOnScreen[j].angleTarget);
	vehiclesOnScreen[j].lines.backLine.p1yr = vehiclesOnScreen[j].y + (vehiclesOnScreen[j].l/2) * Math.sin(vehiclesOnScreen[j].angleTarget) + -(vehiclesOnScreen[j].w/2) * Math.cos(vehiclesOnScreen[j].angleTarget);
	vehiclesOnScreen[j].lines.backLine.p2xr = vehiclesOnScreen[j].x + (vehiclesOnScreen[j].l/2) * Math.cos(vehiclesOnScreen[j].angleTarget) - (vehiclesOnScreen[j].w/2) * Math.sin(vehiclesOnScreen[j].angleTarget);
	vehiclesOnScreen[j].lines.backLine.p2yr = vehiclesOnScreen[j].y + (vehiclesOnScreen[j].l/2) * Math.sin(vehiclesOnScreen[j].angleTarget) + (vehiclesOnScreen[j].w/2) * Math.cos(vehiclesOnScreen[j].angleTarget);
	
	vehiclesOnScreen[j].lines.leftLine.p1xr = vehiclesOnScreen[j].x + (vehiclesOnScreen[j].l/2) * Math.cos(vehiclesOnScreen[j].angleTarget) - (vehiclesOnScreen[j].w/2) * Math.sin(vehiclesOnScreen[j].angleTarget);
	vehiclesOnScreen[j].lines.leftLine.p1yr = vehiclesOnScreen[j].y + (vehiclesOnScreen[j].l/2) * Math.sin(vehiclesOnScreen[j].angleTarget) + (vehiclesOnScreen[j].w/2) * Math.cos(vehiclesOnScreen[j].angleTarget);
	vehiclesOnScreen[j].lines.leftLine.p2xr = vehiclesOnScreen[j].x - (vehiclesOnScreen[j].l/2) * Math.cos(vehiclesOnScreen[j].angleTarget) - (vehiclesOnScreen[j].w/2) * Math.sin(vehiclesOnScreen[j].angleTarget);
	vehiclesOnScreen[j].lines.leftLine.p2yr = vehiclesOnScreen[j].y - (vehiclesOnScreen[j].l/2) * Math.sin(vehiclesOnScreen[j].angleTarget) + (vehiclesOnScreen[j].w/2) * Math.cos(vehiclesOnScreen[j].angleTarget);
	
	
	var speedHolder = vehiclesOnScreen[j].speed;
	//vehiclesOnScreen[j].speed = 100;
	
	vehiclesOnScreen[j].lines.frontLine.p1xStep = vehiclesOnScreen[j].lines.frontLine.p1xr - (vehiclesOnScreen[j].xtarget * vehiclesOnScreen[j].speed) - vehiclesOnScreen[j].xTurnTarget;
	vehiclesOnScreen[j].lines.frontLine.p1yStep = vehiclesOnScreen[j].lines.frontLine.p1yr - (vehiclesOnScreen[j].ytarget * vehiclesOnScreen[j].speed) - vehiclesOnScreen[j].yTurnTarget;
	vehiclesOnScreen[j].lines.frontLine.p2xStep = vehiclesOnScreen[j].lines.frontLine.p2xr - (vehiclesOnScreen[j].xtarget * vehiclesOnScreen[j].speed) - vehiclesOnScreen[j].xTurnTarget;
	vehiclesOnScreen[j].lines.frontLine.p2yStep = vehiclesOnScreen[j].lines.frontLine.p2yr - (vehiclesOnScreen[j].ytarget * vehiclesOnScreen[j].speed) - vehiclesOnScreen[j].yTurnTarget;
	
	vehiclesOnScreen[j].lines.rightLine.p1xStep = vehiclesOnScreen[j].lines.rightLine.p1xr - (vehiclesOnScreen[j].xtarget * vehiclesOnScreen[j].speed) - vehiclesOnScreen[j].xTurnTarget;
	vehiclesOnScreen[j].lines.rightLine.p1yStep = vehiclesOnScreen[j].lines.rightLine.p1yr - (vehiclesOnScreen[j].ytarget * vehiclesOnScreen[j].speed) - vehiclesOnScreen[j].yTurnTarget;
	vehiclesOnScreen[j].lines.rightLine.p2xStep = vehiclesOnScreen[j].lines.rightLine.p2xr - (vehiclesOnScreen[j].xtarget * vehiclesOnScreen[j].speed) - vehiclesOnScreen[j].xTurnTarget;
	vehiclesOnScreen[j].lines.rightLine.p2yStep = vehiclesOnScreen[j].lines.rightLine.p2yr - (vehiclesOnScreen[j].ytarget * vehiclesOnScreen[j].speed) - vehiclesOnScreen[j].yTurnTarget;
	
	vehiclesOnScreen[j].lines.backLine.p1xStep = vehiclesOnScreen[j].lines.backLine.p1xr - (vehiclesOnScreen[j].xtarget * vehiclesOnScreen[j].speed) - vehiclesOnScreen[j].xTurnTarget;
	vehiclesOnScreen[j].lines.backLine.p1yStep = vehiclesOnScreen[j].lines.backLine.p1yr - (vehiclesOnScreen[j].ytarget * vehiclesOnScreen[j].speed) - vehiclesOnScreen[j].yTurnTarget;
	vehiclesOnScreen[j].lines.backLine.p2xStep = vehiclesOnScreen[j].lines.backLine.p2xr - (vehiclesOnScreen[j].xtarget * vehiclesOnScreen[j].speed) - vehiclesOnScreen[j].xTurnTarget;
	vehiclesOnScreen[j].lines.backLine.p2yStep = vehiclesOnScreen[j].lines.backLine.p2yr - (vehiclesOnScreen[j].ytarget * vehiclesOnScreen[j].speed) - vehiclesOnScreen[j].yTurnTarget;
	
	vehiclesOnScreen[j].lines.leftLine.p1xStep = vehiclesOnScreen[j].lines.leftLine.p1xr - (vehiclesOnScreen[j].xtarget * vehiclesOnScreen[j].speed) - vehiclesOnScreen[j].xTurnTarget;
	vehiclesOnScreen[j].lines.leftLine.p1yStep = vehiclesOnScreen[j].lines.leftLine.p1yr - (vehiclesOnScreen[j].ytarget * vehiclesOnScreen[j].speed) - vehiclesOnScreen[j].yTurnTarget;
	vehiclesOnScreen[j].lines.leftLine.p2xStep = vehiclesOnScreen[j].lines.leftLine.p2xr - (vehiclesOnScreen[j].xtarget * vehiclesOnScreen[j].speed) - vehiclesOnScreen[j].xTurnTarget;
	vehiclesOnScreen[j].lines.leftLine.p2yStep = vehiclesOnScreen[j].lines.leftLine.p2yr - (vehiclesOnScreen[j].ytarget * vehiclesOnScreen[j].speed) - vehiclesOnScreen[j].yTurnTarget;
}

function updateVehicleLines(j) {
	vehiclesOnScreen[j].lines.frontLine.p1x = vehiclesOnScreen[j].lines.frontLine.p1xStep;
	vehiclesOnScreen[j].lines.frontLine.p1y = vehiclesOnScreen[j].lines.frontLine.p1yStep;
	vehiclesOnScreen[j].lines.frontLine.p2x = vehiclesOnScreen[j].lines.frontLine.p2xStep;
	vehiclesOnScreen[j].lines.frontLine.p2y = vehiclesOnScreen[j].lines.frontLine.p2yStep;
	
	vehiclesOnScreen[j].lines.rightLine.p1x = vehiclesOnScreen[j].lines.rightLine.p1xStep;
	vehiclesOnScreen[j].lines.rightLine.p1y = vehiclesOnScreen[j].lines.rightLine.p1yStep;
	vehiclesOnScreen[j].lines.rightLine.p2x = vehiclesOnScreen[j].lines.rightLine.p2xStep;
	vehiclesOnScreen[j].lines.rightLine.p2y = vehiclesOnScreen[j].lines.rightLine.p2yStep;
	
	vehiclesOnScreen[j].lines.backLine.p1x = vehiclesOnScreen[j].lines.backLine.p1xStep;
	vehiclesOnScreen[j].lines.backLine.p1y = vehiclesOnScreen[j].lines.backLine.p1yStep;
	vehiclesOnScreen[j].lines.backLine.p2x = vehiclesOnScreen[j].lines.backLine.p2xStep;
	vehiclesOnScreen[j].lines.backLine.p2y = vehiclesOnScreen[j].lines.backLine.p2yStep;
	
	vehiclesOnScreen[j].lines.leftLine.p1x = vehiclesOnScreen[j].lines.leftLine.p1xStep;
	vehiclesOnScreen[j].lines.leftLine.p1y = vehiclesOnScreen[j].lines.leftLine.p1yStep;
	vehiclesOnScreen[j].lines.leftLine.p2x = vehiclesOnScreen[j].lines.leftLine.p2xStep;
	vehiclesOnScreen[j].lines.leftLine.p2y = vehiclesOnScreen[j].lines.leftLine.p2yStep;
	
	vehiclesOnScreen[j].angle = vehiclesOnScreen[j].angleTarget;
}




var hhh = 0;
function updateThisVehicle(i, j) {
	
hhh++;
		//inertia	
		if (i.accelerating === false) {
		if (i.speed > 0.1) {i.speed -= i.speed / i.weight;}
		}
		if (i.reversing === false){
		if (i.speed < -0.1) {i.speed += i.speed / i.weight;}
		}
		//if (i.speed < 0.1 && i.speed > -0.1) {i.speed === 0;}

		// adjust turning circle to match speed
			if (i.speed > 1 && i.speed < -1) { i.radius = i.speed / 2; }
			else { i.radius = i.radius * .75; }
		
		
		// Update Target Position
		
		if (i.forwardTurnLeft) {
			i.angleTarget -= 3 * Math.PI / 180;
			i.xTurnTarget = -(i.radius * Math.cos(i.angleTarget));
			i.yTurnTarget = -(i.radius * Math.sin(i.angleTarget));
			
			i.xtarget = Math.cos(i.angleTarget);
			i.ytarget = Math.sin(i.angleTarget);
		} 
		
		if (i.forwardTurnRight) {
			i.angleTarget += 3 * Math.PI / 180;
			i.xTurnTarget = -(i.radius * Math.cos(i.angleTarget));
			i.yTurnTarget = -(i.radius * Math.sin(i.angleTarget));
			
			i.xtarget = Math.cos(i.angleTarget);
			i.ytarget = Math.sin(i.angleTarget);
		}
		
		if (i.forwardTurnLeft === false && i.forwardTurnRight === false) {
			i.xTurnTarget = 0;
			i.yTurnTarget = 0;
			
			i.angleTarget = i.angle;
			
			i.xtarget = Math.cos(i.angleTarget);
			i.ytarget = Math.sin(i.angleTarget);
		}
		
		
		
		calculateVehicleStepLines(j);
		
		c.beginPath();
		c.save();
		c.translate(i.x - cameraX, i.y - cameraY);
		
		//c.moveTo(i.lines.frontLine.p1xStep, i.lines.frontLine.p1yStep);
		//c.lineTo(i.lines.frontLine.p2xStep, i.lines.frontLine.p2yStep);
		//c.lineTo(i.lines.rightLine.p2xStep, i.lines.rightLine.p2yStep);
		//c.lineTo(i.lines.backLine.p2xStep, i.lines.backLine.p2yStep);
		//c.lineTo(i.lines.frontLine.p1xStep, i.lines.frontLine.p1yStep);
		
		c.lineWidth = 1;
		c.strokeStyle = 'blue';
		c.stroke();
		c.restore();
		// check for collision
		if (i.speed != 0) { 			
			
			
			checkThisVehicleCollision(j) };
			
			
			if (i.speed != 0 && i.collision === false){
				i.xPrevious = i.x;
				i.yPrevious = i.y;
				i.x -= (i.xtarget * i.speed) - i.xTurnTarget;
				i.y -= (i.ytarget * i.speed) - i.yTurnTarget;
				updateVehicleLines(j);
			
			if (Player1.mot === j ) {
					Player1.x = vehiclesOnScreen[Player1.mot].x;
					Player1.y = vehiclesOnScreen[Player1.mot].y;
					Player1.angle = vehiclesOnScreen[Player1.mot].angle;
					Player1.speed = vehiclesOnScreen[Player1.mot].speed;
					//cameraX = (Player1.x - Player1.w / 2) - (cameraW / 2);
					//cameraY = (Player1.y - Player1.h / 2) - (cameraH / 2);
				}
			}
			
			
}

function drawVehicles() {

	hhh = 0;


				
				
	if (Player1.mot > 0) {
		
	c.beginPath();
	c.save();
	c.translate(vehiclesOnScreen[Player1.mot].x - cameraX, vehiclesOnScreen[Player1.mot].y - cameraY);
	
	// draw vehicle collision lines for debugging
	c.moveTo(vehiclesOnScreen[Player1.mot].lines.frontLine.p1x, vehiclesOnScreen[Player1.mot].lines.frontLine.p1y);
	c.lineTo(vehiclesOnScreen[Player1.mot].lines.frontLine.p2x, vehiclesOnScreen[Player1.mot].lines.frontLine.p2y);
	c.lineTo(vehiclesOnScreen[Player1.mot].lines.rightLine.p2x, vehiclesOnScreen[Player1.mot].lines.rightLine.p2y);
	c.lineTo(vehiclesOnScreen[Player1.mot].lines.backLine.p2x, vehiclesOnScreen[Player1.mot].lines.backLine.p2y);
	c.lineTo(vehiclesOnScreen[Player1.mot].lines.leftLine.p2x, vehiclesOnScreen[Player1.mot].lines.leftLine.p2y);
	
	c.lineWidth = 1;
	c.strokeStyle = 'red';
	c.stroke();
	c.restore();
		
		
	updateThisVehicle(vehiclesOnScreen[Player1.mot], Player1.mot);
}		

		//player movement offset
	/*	if (Player1.mot > 0 && vehiclesOnScreen[Player1.mot].speed != 0) {
				cameraX += (vehiclesOnScreen[Player1.mot].xtarget * vehiclesOnScreen[Player1.mot].speed) - vehiclesOnScreen[Player1.mot].xTurnTarget;
				cameraY += (vehiclesOnScreen[Player1.mot].ytarget * vehiclesOnScreen[Player1.mot].speed) - vehiclesOnScreen[Player1.mot].yTurnTarget;
				}	
	*/

distanceKeeper = 1000000;
vehiclesOnScreen.forEach ( function(i, j) {
	
	if (i != 0 && i.x > cameraX - 100 && i.x < cameraX + cameraW + 100 && i.y > cameraY - 100 && i.y < cameraY + cameraH + 100 ) {
	
	c.beginPath();
	c.save();
	c.translate(i.x - cameraX, i.y - cameraY);
	//c.moveTo(i.lines.frontLine.p1x, i.lines.frontLine.p1y);
	//c.lineTo(i.lines.frontLine.p2x, i.lines.frontLine.p2y);
	//c.lineTo(i.lines.rightLine.p2x, i.lines.rightLine.p2y);
	//c.lineTo(i.lines.backLine.p2x, i.lines.backLine.p2y);
	//c.lineTo(i.lines.leftLine.p2x, i.lines.leftLine.p2y);
	
	c.lineWidth = 1;
	c.strokeStyle = 'red';
	c.stroke();
	c.restore();
	
	
	//X = x*cos(θ) - y*sin(θ)
	//Y = x*sin(θ) + y*cos(θ)
	
	// check if this is the closest vehicle to the player
	if (Player1.mot === 0) {
		xDifference = (i.x - Player1.x) * (i.x - Player1.x);
		yDifference = (i.y - Player1.y) * (i.y - Player1.y);
		i.distanceFromPlayer = Math.sqrt(xDifference + yDifference);
		
		if (i.distanceFromPlayer < distanceKeeper) {
			distanceKeeper = i.distanceFromPlayer;
			Player1.closestVehicle = j;
		} 
		
	} else if (Player1.mot != j) {
	
		updateThisVehicle(vehiclesOnScreen[j], j);
	}

	
// drawing begins	
	if (Player1.mot === j) {
	
	}

	c.beginPath();
	c.save();
	c.translate(i.x - cameraX, i.y - cameraY);
	c.beginPath();
		//c.save();
		//c.translate(Player1.x - cameraX, Player1.y - cameraY);
		
		//c.moveTo(i.lines.frontLine.p1xStep, i.lines.frontLine.p1yStep);
	//	c.lineTo(i.lines.frontLine.p2xStep, i.lines.frontLine.p2yStep);
		//c.lineTo(i.lines.rightLine.p2xStep, i.lines.rightLine.p2yStep);
	//	c.lineTo(i.lines.backLine.p2xStep, i.lines.backLine.p2yStep);
	//	c.lineTo(i.lines.leftLine.p2xStep, i.lines.leftLine.p2yStep);
		
		//c.lineWidth = 2;
		//c.strokeStyle = 'blue';
		//c.stroke();
		//c.restore();
		
	
	c.rotate(i.angle);
	c.translate(-i.x,-i.y);
	
//	c.moveTo(i.x - (i.l/2), i.y + (i.w/2));
//	c.lineTo(i.x + (i.l/2), i.y + (i.w/2));
//	c.lineTo(i.x + (i.l/2), i.y - (i.w/2));
//	c.lineTo(i.x - (i.l/2), i.y - (i.w/2));
//	c.fillStyle = i.color;


	
	
	c.drawImage(i.image, i.x - (i.l/2), i.y - (i.w/2), i.l, i.w);
	
	
	
	
	c.restore();
	c.closePath();
	
	
	c.beginPath();
	c.save();
	//c.translate(i.x - cameraX, i.y - cameraY);
	//c.moveTo(i.lines.frontLine.p1x, i.lines.frontLine.p1y);
	//c.lineTo(i.lines.frontLine.p2x, i.lines.frontLine.p2y);
	//c.lineTo(i.lines.rightLine.p2x, i.lines.rightLine.p2y);
	//c.lineTo(i.lines.backLine.p2x, i.lines.backLine.p2y);
	//c.lineTo(i.lines.leftLine.p2x, i.lines.leftLine.p2y);
	
	//c.lineWidth = 1;
	//c.strokeStyle = 'pink';
	c.stroke();
	c.restore();
	
	
	c.beginPath();
	c.save();
	c.translate(i.x - cameraX, i.y - cameraY);
	//c.moveTo(i.lines.frontLine.p1xStep, i.lines.frontLine.p1yStep);
	//c.lineTo(i.lines.frontLine.p2xStep, i.lines.frontLine.p2yStep);
	//c.lineTo(i.lines.rightLine.p2xStep, i.lines.rightLine.p2yStep);
	//c.lineTo(i.lines.backLine.p2xStep, i.lines.backLine.p2yStep);
	//c.lineTo(i.lines.leftLine.p2xStep, i.lines.leftLine.p2yStep);
	
	c.lineWidth = 1;
	c.strokeStyle = 'yellow';
	c.stroke();
	c.restore();

}
});



//console.log(hhh);



// indicate to player that they can enter a vehicle
if (vehiclesOnScreen[Player1.closestVehicle].distanceFromPlayer < 100 && Player1.mot === 0) {
	c.beginPath();
	c.save();
	c.translate(vehiclesOnScreen[Player1.closestVehicle].x - cameraX, vehiclesOnScreen[Player1.closestVehicle].y - cameraY);
	c.rotate(vehiclesOnScreen[Player1.closestVehicle].angle);
	c.translate(-vehiclesOnScreen[Player1.closestVehicle].x,-vehiclesOnScreen[Player1.closestVehicle].y);
	
	c.rect(
	(vehiclesOnScreen[Player1.closestVehicle].x - (vehiclesOnScreen[Player1.closestVehicle].l / 2)) - 5,
	(vehiclesOnScreen[Player1.closestVehicle].y - (vehiclesOnScreen[Player1.closestVehicle].w / 2)) - 8,
	vehiclesOnScreen[Player1.closestVehicle].l + 10,
	vehiclesOnScreen[Player1.closestVehicle].w + 16);
	
	
	c.lineWidth = 2;
	c.strokeStyle = "yellow";
	c.stroke();
	c.restore();
	c.closePath();
}


}

 
 
 
// update vehicle collision lines for all vehicles. Lines don't update unless a vehicle moves, so this run this at the start of the game
function calculateAllVehicleLines(single) {
	vehiclesOnScreen.forEach ( function(i, j) {
		if (j != 0) {
			calculateVehicleLines(j);		
		}
	});
}
 

function unstickVehicleFromWall(j, wallLine, adjusterX, adjusterY) {
	vehiclesOnScreen[j].x += adjusterX;
	vehiclesOnScreen[j].y += adjusterY;
	for (var lineToEdit in vehiclesOnScreen[j].lines) {
		if (vehiclesOnScreen[j].lines.hasOwnProperty(lineToEdit)) {	
			vehiclesOnScreen[j].lines[lineToEdit].p1x += adjusterX; 
			vehiclesOnScreen[j].lines[lineToEdit].p1y += adjusterY; 
			vehiclesOnScreen[j].lines[lineToEdit].p2x += adjusterX; 
			vehiclesOnScreen[j].lines[lineToEdit].p2y += adjusterY;
			vehiclesOnScreen[j].lines[lineToEdit].p1xr += adjusterX; 
			vehiclesOnScreen[j].lines[lineToEdit].p1yr += adjusterY;
			vehiclesOnScreen[j].lines[lineToEdit].p2xr += adjusterX; 
			vehiclesOnScreen[j].lines[lineToEdit].p2yr += adjusterY;
			vehiclesOnScreen[j].lines[lineToEdit].p1xStep += adjusterX; 
			vehiclesOnScreen[j].lines[lineToEdit].p1yStep += adjusterY;
			vehiclesOnScreen[j].lines[lineToEdit].p2xStep += adjusterX; 
			vehiclesOnScreen[j].lines[lineToEdit].p2yStep += adjusterY;
		}
	}
}

