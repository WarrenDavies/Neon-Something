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

zombieWalk0 = new Image();
zombieWalk0.src = 'images/skeleton-move_0.png';

zombieWalk1 = new Image();
zombieWalk1.src = 'images/skeleton-move_1.png';

zombieWalk2 = new Image();
zombieWalk2.src = 'images/skeleton-move_2.png';

zombieWalk3 = new Image();
zombieWalk3.src = 'images/skeleton-move_3.png';

zombieWalk4 = new Image();
zombieWalk4.src = 'images/skeleton-move_4.png';

zombieWalk5 = new Image();
zombieWalk5.src = 'images/skeleton-move_5.png';

zombieWalk6 = new Image();
zombieWalk6.src = 'images/skeleton-move_6.png';

zombieWalk7 = new Image();
zombieWalk7.src = 'images/skeleton-move_7.png';

zombieWalk8 = new Image();
zombieWalk8.src = 'images/skeleton-move_8.png';

zombieWalk9 = new Image();
zombieWalk9.src = 'images/skeleton-move_9.png';

zombieWalk10 = new Image();
zombieWalk10.src = 'images/skeleton-move_10.png';

zombieWalk11 = new Image();
zombieWalk11.src = 'images/skeleton-move_11.png';

zombieWalk12 = new Image();
zombieWalk12.src = 'images/skeleton-move_12.png';

zombieWalk13 = new Image();
zombieWalk13.src = 'images/skeleton-move_13.png';

zombieWalk14 = new Image();
zombieWalk14.src = 'images/skeleton-move_14.png';

zombieWalk15 = new Image();
zombieWalk15.src = 'images/skeleton-move_15.png';

zombieWalk16 = new Image();
zombieWalk16.src = 'images/skeleton-move_16.png';

zombieStand = new Image();
zombieStand.src = 'images/skeleton-idle_0.png';

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

function updateMouseCoordinates() {
	// get the angle between the player coords and the mouse coords  
	deltaX = mouseX - Player1.x;
	deltaY = mouseY - Player1.y;
	var newAngle = Math.atan(deltaY / deltaX);
}

 // clear canvas function
  function clear(c) {
  c.clearRect(0, 0, WIDTH, HEIGHT);
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

function whichTiles() {
	onXTile = Math.floor((cameraX + (cameraW / 2)) / 50);
	onYTile = Math.floor((cameraY + (cameraH / 2)) / 50);
}

function returnTile(i) {
	let onXTile = Math.floor((i.x + (i.w / 2)) / 50);
	let onYTile = Math.floor((i.y + (i.h / 2)) / 50);
	return {
		x: onXTile,
		y: onYTile,
	}
}

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

function mouseOnInteractiveElement() {
	return false;
}

function addBuildingsToTiles() {
theBuildings.forEach( function(i, j) {
	var upperLeftX = Math.floor(i.upperLeftX / 50);
	var upperLeftY = Math.floor(i.upperLeftY / 50);
	var lowerRightX = Math.floor(i.lowerRightX / 50);
	var lowerRightY = Math.floor(i.lowerRightY / 50);
	i.centerX = i.lowerRightX - i.upperLeftX;
	i.centerY = i.lowerRightY - i.upperLeftY;
	for (k = upperLeftY; k <= lowerRightY; k++) {
		for (l = upperLeftX; l <= lowerRightX; l++) {
			objectifyTile(map[k][l], k, l);
			map[k][l].building = j;
			map[k][l].backgroundImage = i.floor;
		}
	}
});
}