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

indoorFloorImage = new Image();
indoorFloorImage.src = 'images/indoorFloorImage.png';

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

playerWalk1 = new Image();
playerWalk1.src = 'images/playerWalk1.png';

playerWalk2 = new Image();
playerWalk2.src = 'images/playerWalk2.png';

playerWalk3 = new Image();
playerWalk3.src = 'images/playerWalk3.png';

playerWalk4 = new Image();
playerWalk4.src = 'images/playerWalk4.png';

playerStand = new Image();
playerStand.src = 'images/playerStand.png';

civWalk1 = new Image();
civWalk1.src = 'images/civWalk1.png';

civWalk2 = new Image();
civWalk2.src = 'images/civWalk2.png';

civWalk3 = new Image();
civWalk3.src = 'images/civWalk3.png';

civWalk4 = new Image();
civWalk4.src = 'images/civWalk4.png';

civStand = new Image();
civStand.src = 'images/civStand.png';



}
loadImages(); 






water = { 
type: "water",
color: "blue",
building: 0,
building: false,
northWall: false,
eastWall: false,
southWall: false,
westWall: false,
roof: false,
height: false,
backgroundImage: waterImage,
sourceX: 319,
sourceY: 447,
w: 32,
h: 32
};

grass = { 
type: "grass",
color: "green",
building: 0,
building: false,
northWall: false,
eastWall: false,
southWall: false,
westWall: false,
roof: false,
height: false,
backgroundImage: grassImage,
sourceX: 128,
sourceY: 96,
w: 32,
h: 32
};

pavement = { 
type: "road",
color: "grey",
building: 0,
building: false,
northWall: false,
eastWall: false,
southWall: false,
westWall: false,
roof: false,
height: false,
backgroundImage: pavementImage,
sourceX: 64,
sourceY: 32,
w: 32,
h: 32
};


sand = { 
type: "sand",
color: "yellow",
building: 0,
building: false,
northWall: false,
eastWall: false,
southWall: false,
westWall: false,
roof: false,
height: false,
backgroundImage: sandImage,
sourceX: 0,
sourceY: 0,
w: 32,
h: 32
};

grey = { 
color: "grey",
building: false,
northWall: false,
eastWall: false,
southWall: false,
westWall: false,
roof: false,
height: false
};

building13 = { 
color: "brown",
structure: true,
northWall: "#990000",
eastWall: "#990000",
southWall: "#990000",
westWall: "#990000",
roof: "brown",
height: 1.3
};

//building18 = { 
//color: "brown",
//structure: true,
//northWall: "#990000",
//eastWall: "#990000",
//southWall: "#990000",
//westWall: "#990000",
//roof: "brown",
//height: 1.8
//};

building18 = { 
color: "brown",
structure: true,
northWall: "#990000",
eastWall: "#990000",
southWall: "#990000",
westWall: "#990000",
roof: "brown",
height: 1.8
};

building21 = { 
color: "brown",
structure: true,
northWall: "#990000",
eastWall: "#990000",
southWall: "#990000",
westWall: "#990000",
roof: "brown",
height: 2.1
};

building23 = { 
color: "brown",
structure: true,
northWall: "#990000",
eastWall: "#990000",
southWall: "#990000",
westWall: "#990000",
roof: "brown",
height: 2.3
};

building25 = { 
color: "brown",
structure: true,
northWall: "#990000",
eastWall: "#990000",
southWall: "#990000",
westWall: "#990000",
roof: "brown",
height: 2.5
};


grassFenceNorth = { 
color: "green",
structure: true,
fence: true,
northWall: "#404040",
eastWall: false,
southWall: false,
westWall: false,
roof: false,
height: 1.1
};

grassFenceNorthEast = { 
color: "green",
structure: true,
fence: true,
northWall: "#404040",
eastWall: "#404040",
southWall: false,
westWall: false,
roof: false,
height: 1.1
};

grassFenceEast = { 
color: "green",
structure: true,
fence: true,
northWall: false,
eastWall: "#404040",
southWall: false,
westWall: false,
roof: false,
height: 1.1
};

grassFenceSouth = { 
color: "green",
structure: true,
fence: true,
northWall: false,
eastWall: false,
southWall: "#404040",
westWall: false,
roof: false,
height: 1.1
};

grassFenceSouthWest = { 
color: "green",
structure: true,
fence: true,
northWall: false,
eastWall: false,
southWall: "#404040",
westWall: "#404040",
roof: false,
height: 1.1
};

grassFenceWest = { 
color: "green",
structure: true,
fence: true,
northWall: false,
eastWall: false,
southWall: false,
westWall: "#404040",
roof: false,
height: 1.1
};

grassFenceWestNorth = { 
color: "green",
structure: true,
fence: true,
northWall: "#404040",
eastWall: false,
southWall: false,
westWall: "#404040",
roof: false,
height: 1.1
};



grassFenceEastSouth = { 
color: "green",
structure: true,
fence: true,
northWall: false,
eastWall: "#404040",
southWall: "#404040",
westWall: false,
roof: false,
height: 1.1
};

grassFenceSouthWest = { 
color: "green",
structure: true,
fence: true,
northWall: false,
eastWall: false,
southWall: "#404040",
westWall: "#404040",
roof: false,
height: 1.1
};



var map = [
[ water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water ],
[ water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water ],
[ water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water ],
[ water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water ],
[ water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water ,water, water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water ],
[ water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water ],
[ water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water ],
[ water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water ],
[ sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand ],
[ sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand ],
[ sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand ],
[ sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand ],
[ sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand ],
[ sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand , sand ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , {color:"green", type:"grass",building:1,backgroundImage: indoorFloorImage} , {color:"green", type:"grass",building:1,backgroundImage: indoorFloorImage} , {color:"green", type:"grass",building:1,backgroundImage: indoorFloorImage} , {color:"green", type:"grass",building:1,backgroundImage: indoorFloorImage} , {color:"green", type:"grass",building:1,backgroundImage: indoorFloorImage} , {color:"green", type:"grass",building:1,backgroundImage: indoorFloorImage} , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , grass , grass , pavement , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , grass , grass , pavement, grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , water , water , water , water , water , water , water , water , water , water , water , water , water , water , pavement , pavement , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , water , water , water , water , water , water , water , water , water , water , water , water , water , water , pavement , pavement , pavement , pavement , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , water , water , water , water , water , water , water , water , water , water , water , water , water , water , pavement , pavement , pavement , pavement , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , pavement , grass , grass , grass , grass , grass , grass , pavement , grass , grass , grass , grass , grass , pavement , pavement , pavement , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , pavement , grass , grass , grass , grass , grass , grass , pavement , grass , grass , grass , grass , grass , pavement , pavement , pavement , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , water , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , pavement , grass , grass , grass , grass , grass , grass , pavement , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , grass , grass , grass , grass , pavement , pavement , pavement , grass , water , water , water , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , grass , grass , grass , grass , pavement , pavement , pavement , grass , water , water , water , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , pavement , grass , grass , grass , pavement , grass , grass , grass , grass , grass , grass , grass , pavement , grass , grass , grass , grass , grass , grass , grass , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , grass , grass , grass , grass , pavement , pavement , pavement , grass , water , water , water , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , pavement , grass , grass , grass , pavement , grass , grass , grass , grass , grass , grass , grass , pavement , grass , grass , grass , grass , grass , grass , grass , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , grass , grass , grass , grass , pavement , pavement , pavement , grass , water , water , water , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , pavement , grass , grass , grass , pavement , grass , grass , grass , grass , grass , grass , grass , pavement , grass , grass , grass , grass , grass , grass , grass , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , water , water , water , water , water , water , water , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , grass , grass , grass , grass , pavement , pavement , pavement , grass , water , water , water , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , pavement , grass , grass , grass , pavement , grass , grass , grass , grass , grass , grass , grass , pavement , grass , grass , grass , grass , grass , grass , grass , pavement , grass , grass , grass , grass , grass , grass , grass , pavement , grass , grass , grass , pavement , grass , grass , grass , pavement , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , water , water , water , water , water , water , water , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , grass , grass , grass , grass , pavement , pavement , pavement , grass , water , water , water , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , water , grass , pavement , grass , water , grass , pavement , grass , water , water , water , water , water , grass , pavement , grass , water , water , water , water , grass , grass , pavement , grass , water , water , water , water , water , grass , pavement , grass , grass , grass , pavement , grass , water , grass , pavement , grass , water , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , water , water , water , water , water , water , water , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , grass , grass , grass , grass , pavement , pavement , pavement , grass , water , water , water , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , pavement , grass , grass , grass , pavement , grass , grass , grass , grass , grass , grass , grass , pavement , grass , grass , grass , grass , grass , grass , grass , pavement , grass , grass , grass , grass , grass , grass , grass , pavement , grass , grass , grass , pavement , grass , grass , grass , pavement , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , water , water , water , water , water , water , water , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , water , water , water , water , water , water , water , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass ],
[ grass , pavement , pavement , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , water , water , water , water , water , water , water , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass ],
[ grass , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , water , water , water , water , water , water , water , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass ],
[ grass , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass ],
[ grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass ],
[ grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass ],
[ grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass ],
[ grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass ],
[ pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass ],
[ pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass ],
[ pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass ],
[ grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass ],
[ grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , grass , grass , grass , grass ],
[ pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass ],
[ pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass ],
[ pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass ],
[ pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass ],
[ pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass ],
[ pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass ],
[ pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , pavement , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass , grass ]

,
];







function objectifyMap() {
	map.forEach( function(i, j) {
		i.forEach( function(k, l) {
			if (k === "water") {
				map[j][l] = { 
					type: "water",
					color: "blue",
					building: 0,
					building: false,
					northWall: false,
					eastWall: false,
					southWall: false,
					westWall: false,
					roof: false,
					height: false,
					backgroundImage: waterImage,
					sourceX: 319,
					sourceY: 447,
					w: 32,
					h: 32
				};
			}
			
			if (k === "grass") {
				map[j][l] = {
					type: "grass",
					color: "green",
					building: 0,
					building: false,
					northWall: false,
					eastWall: false,
					southWall: false,
					westWall: false,
					roof: false,
					height: false,
					backgroundImage: grassImage,
					sourceX: 128,
					sourceY: 96,
					w: 32,
					h: 32
				};
			}
			
			if (k === "pavement") {
				map[j][l] = {
					type: "road",
					color: "grey",
					building: 0,
					building: false,
					northWall: false,
					eastWall: false,
					southWall: false,
					westWall: false,
					roof: false,
					height: false,
					backgroundImage: pavementImage,
					sourceX: 64,
					sourceY: 32,
					w: 32,
					h: 32
				};
			}
				

			if (k === "sand") { 
				map[j][l] = {
					type: "sand",
					color: "yellow",
					building: 0,
					building: false,
					northWall: false,
					eastWall: false,
					southWall: false,
					westWall: false,
					roof: false,
					height: false,
					backgroundImage: sandImage,
					sourceX: 0,
					sourceY: 0,
					w: 32,
					h: 32
				};
			}
		});
	});
}
//objectifyMap();
console.log(map[5][5]);



function objectifyTile(k, j, l) {
		if (k === water) {
				map[j][l] = { 
					type: "water",
					color: "blue",
					building: 0,
					building: false,
					northWall: false,
					eastWall: false,
					southWall: false,
					westWall: false,
					roof: false,
					height: false,
					backgroundImage: waterImage,
					sourceX: 319,
					sourceY: 447,
					w: 32,
					h: 32
				};
			}
			
			if (k === grass) {
				map[j][l] = {
					type: "grass",
					color: "green",
					building: 0,
					building: false,
					northWall: false,
					eastWall: false,
					southWall: false,
					westWall: false,
					roof: false,
					height: false,
					backgroundImage: grassImage,
					sourceX: 128,
					sourceY: 96,
					w: 32,
					h: 32
				};
			}
			
			if (k === pavement) {
				map[j][l] = {
					type: "road",
					color: "grey",
					building: 0,
					building: false,
					northWall: false,
					eastWall: false,
					southWall: false,
					westWall: false,
					roof: false,
					height: false,
					backgroundImage: pavementImage,
					sourceX: 64,
					sourceY: 32,
					w: 32,
					h: 32
				};
			}
				

			if (k === sand) { 
				map[j][l] = {
					type: "sand",
					color: "yellow",
					building: 0,
					building: false,
					northWall: false,
					eastWall: false,
					southWall: false,
					westWall: false,
					roof: false,
					height: false,
					backgroundImage: sandImage,
					sourceX: 0,
					sourceY: 0,
					w: 32,
					h: 32
		};
	}
}

