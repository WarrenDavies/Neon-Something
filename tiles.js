function loadImages() {
// cityOutside = new Image();
// cityOutside.src = 'LPC_city_outside.png';

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



zombieAttack0 = new Image();
zombieAttack0.src = 'images/skeleton-attack_0.png';

zombieAttack1 = new Image();
zombieAttack1.src = 'images/skeleton-attack_1.png';

zombieAttack2 = new Image();
zombieAttack2.src = 'images/skeleton-attack_2.png';

zombieAttack3 = new Image();
zombieAttack3.src = 'images/skeleton-attack_3.png';

zombieAttack4 = new Image();
zombieAttack4.src = 'images/skeleton-attack_4.png';

zombieAttack5 = new Image();
zombieAttack5.src = 'images/skeleton-attack_5.png';

zombieAttack6 = new Image();
zombieAttack6.src = 'images/skeleton-attack_6.png';

zombieAttack7 = new Image();
zombieAttack7.src = 'images/skeleton-attack_7.png';

zombieAttack8 = new Image();
zombieAttack8.src = 'images/skeleton-attack_8.png';

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
h: 32,
speedModifier: 9,
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
h: 32,
speedModifier: 3,
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
h: 32,
speedModifier: 0,
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
h: 32,
speedModifier: 5,
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
	[ "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water" ],
	[ "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water" ],
	[ "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water" ],
	[ "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water" ],
	[ "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water" ,"water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water" ],
	[ "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water" ],
	[ "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water" ],
	[ "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water" ],
	[ "water", "water", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "water", "water" ],
	[ "water", "water", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "water", "water" ],
	[ "water", "water", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "water", "water" ],
	[ "water", "water", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "water", "water" ],
	[ "water", "water", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "water", "water" ],
	[ "water", "water", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "grass", "grass", "pavement", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "grass", "grass", "pavement", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "water", "water", "water", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "water", "water", "water", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "water", "water", "water", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "water", "water", "water", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "water", "water", "water", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "water", "water", "water", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "water", "grass", "pavement", "grass", "water", "grass", "pavement", "grass", "water", "water", "water", "water", "water", "grass", "pavement", "grass", "water", "water", "water", "water", "grass", "grass", "pavement", "grass", "water", "water", "water", "water", "water", "grass", "pavement", "grass", "grass", "grass", "pavement", "grass", "water", "grass", "pavement", "grass", "water", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "water", "water", "water", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "pavement", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "sand", "water", "water" ],
	[ "water", "water", "sand", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "pavement", "pavement", "pavement", "pavement", "pavement", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "sand", "water", "water" ],
	[ "water", "water", "sand", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "pavement", "sand", "water", "water" ],
	[ "water", "water", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "water", "water" ],
	[ "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water" ],
	[ "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water" ],
	[ "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water" ]
];
	







function objectifyMap() {
	map.forEach( function(i, j) {
		i.forEach( function(k, l) {
			// console.log(k);
			if (k === "water") {
				map[j][l] = { 
					type: "water",
					color: "blue",
					building: 0,
					nearWalls: [],
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
					h: 32,
					speedModifier: 10,
				};
			}
			
			if (k === "grass") {
				map[j][l] = {
					type: "grass",
					color: "green",
					building: 0,
					nearWalls: [],
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
					h: 32,
					speedModifier: 3,
				};
			}
			
			if (k === "pavement") {
				map[j][l] = {
					type: "road",
					color: "grey",
					building: 0,
					nearWalls: [],
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
					h: 32,
					speedModifier: 0,
				};
			}
				

			if (k === "sand") { 
				map[j][l] = {
					type: "sand",
					color: "yellow",
					building: 0,
					nearWalls: [],
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
					h: 32,
					speedModifier: 7,
				};
			}
		});
	});
}

objectifyMap();




function objectifyTile(k, j, l) {
	// console.log(k)
		if (k.type === "water") {
				map[j][l] = { 
					type: "water",
					color: "blue",
					building: 0,
					nearWall: [],
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
					h: 32,
					speedModifier: 8,
				};
			}
			
			if (k.type === "grass") {
				map[j][l] = {
					type: "grass",
					color: "green",
					building: 0,
					nearWall: [],
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
					h: 32,
					speedModifier: 2,
				};
			}
			
			if (k.type === "road") {
				map[j][l] = {
					type: "road",
					color: "grey",
					building: 0,
					nearWall: [],
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
					h: 32,
					speedModifier: 0,
				};
			}
				

			if (k.type === "sand") { 
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
					h: 32,
					speedModifier: 5,
		};
	}
}

function updateTime() {
	time += .01;
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
	c.lineTo(cameraW, 0);
	c.lineTo(cameraW, cameraH);
	c.lineTo(0, cameraH);
	c.lineTo(0, 0);
	c.fill();

	//c.fillStyle = "rgba(0, 0, 0," + light + ")";
	// c.beginPath();
	// c.moveTo(500, 500);
	// c.lineTo(500, 100);
	// c.lineTo(100, 100);
	// c.lineTo(100, 500);
	// c.lineTo(500, 500);
	// c.strokeStyle = "yellow";
	// c.lineWidth = "20px";
	// c.fill();


	// c.beginPath();
	// c.moveTo(1100, 500);
	// c.lineTo(600, 500);
	// c.lineTo(600, 100);
	// c.lineTo(1100, 100);
	// c.lineTo(1100, 500);
	// c.strokeStyle = "yellow";
	// c.lineWidth = "20px";
	// c.fill();

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
	if (Player1.interactTimer > 0) {
		Player1.interactTimer -= 1;

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
	c.fillStyle = "darkblue";
	c.rect(0,0,cameraW,cameraH);
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
			cameraX = (Player1.x + Player1.w / 2) - (cameraW / 2);
			cameraY = (Player1.y + Player1.h / 2) - (cameraH / 2);
		} else {
// if we are in a vehicle, center the camera on the vehice. However, the third part of this expression adds on the speed of the vehicle to the camera position -- otherwise the vehicle image moves forward on the screen a little, in line with its acceleration. 
			cameraX = (Player1.x - Player1.w / 2) - (cameraW / 2) - (((vehiclesOnScreen[Player1.mot].xtarget * vehiclesOnScreen[Player1.mot].speed) - vehiclesOnScreen[Player1.mot].xTurnTarget));
			cameraY = (Player1.y - Player1.h / 2) - (cameraH / 2) - (((vehiclesOnScreen[Player1.mot].ytarget * vehiclesOnScreen[Player1.mot].speed) - vehiclesOnScreen[Player1.mot].yTurnTarget));
		}
	}
}

function drawMap() {
	
	//make this only happen on resize
	let canvasElem = document.getElementById('canvas');
	canvasElem.width = window.innerWidth;
	canvasElem.height = window.innerHeight;
	cameraW = canvasElem.width;
	cameraH = canvasElem.height;
	let screenWidthInTiles = Math.ceil(cameraW / tileSize);
	let screenHeightInTiles = Math.ceil(cameraH / tileSize);
	clearCanvas();
	var tileCount = 0
	c.beginPath();
	for (j = Math.floor((cameraY + (cameraH / 2)) / 50) - Math.ceil(screenHeightInTiles / 2) - 1; j < onYTile + Math.ceil(screenHeightInTiles / 2) + 1; j++ ) {
		for (l = Math.floor((cameraX + (cameraW / 2)) / 50) - Math.ceil(screenWidthInTiles / 2) - 1; l < onXTile + Math.ceil(screenWidthInTiles / 2) + 2; l++) {
			if (j >= 0  && l >= 0 && j < map.length && l < map[j].length) {

				if (map[j][l].backgroundImage) {
				// spritesheet version
				//				c.drawImage( map[j][l].backgroundImage, map[j][l].sourceX, map[j][l].sourceY, map[j][l].w, map[j][l].h, l * 50 - cameraX, j * 50 - cameraY, 50, 50 );
				
				// with the -1 offsets for tesselation
				
					c.save();
					c.translate(l * tileSize - cameraX - 1, j * tileSize - cameraY - 1)
					c.drawImage( map[j][l].backgroundImage, 0, 0, tileSize + 1, tileSize + 1);
				
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
					c.rect(l * tileSize - cameraX, j * tileSize - cameraY, tileSize, tileSize);	
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
				if (debug) {
					// shows how many walls this tile is adjacent to
					if (map[j][l].nearWalls.length > 0) {
						c.fillText("NW", l * tileSize - cameraX + 20, j * tileSize - cameraY + 17);
						c.fillText(map[j][l].nearWalls.length, l * tileSize - cameraX + (tileSize / 2), j * tileSize - cameraY + (tileSize / 2) + 5);
					}
				}	
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
	var upperLeftX = Math.floor(i.upperLeftX / tileSize);
	var upperLeftY = Math.floor(i.upperLeftY / tileSize);
	var lowerRightX = Math.floor(i.lowerRightX / tileSize);
	var lowerRightY = Math.floor(i.lowerRightY / tileSize);
	
	i.centerX = i.lowerRightX - i.upperLeftX;
	i.centerY = i.lowerRightY - i.upperLeftY;

	// add building tile image
	for (k = upperLeftY; k <= lowerRightY; k++) {
		for (l = upperLeftX; l <= lowerRightX; l++) {
			map[k][l].building = j;
			map[k][l].backgroundImage = i.floor;
		}
	}
	
	// indicate in the tiles around the wall that they are near to the wall, and which one/s
	//Top Wall

	// top
	let upperLeftXModifier = 1;
	let upperLeftYModifier = 1;
	let lowerRightXModifier = 1;
	let lowerRightYModifier = 1;
	if (upperLeftX === 0) { upperLeftXModifier = 0}
	if (upperLeftY === 0) { upperleftYModifier = 0}
	if (lowerRightX === map[0].length) {lowerRightXModifier = 1}
	if (lowerRightY === map.length) {lowerRightYModifier = 1}


	for (k = upperLeftY - upperLeftYModifier; k <= upperLeftY; k++) {
		for (l = upperLeftX - upperLeftXModifier; l <= lowerRightX + lowerRightXModifier; l++) {
			// if (k >= 0 && l < map[0].length - 1) {	
			if (k > 0 && k < map.length && l > 0 && l < map[0].length) {	
				if (!i.northDoor.exists) {
					// console.log(k + ", " + l);
					// console.log(map[k][l]);
					// console.log(typeof map[k][l])
					map[k][l].nearWalls.push({
						building: j,
						wall: "top",
					})
				} else {
					if (i.northDoor.exists && (l * 50) + 26 > (upperLeftX * 50) + i.northDoor.doorwayDistanceFromLeftToMiddle) {
						map[k][l].nearWalls.push({
							building: j,
							wall: "top2",
						})
					}
					if (i.northDoor.exists && l * 50 < (upperLeftX * 50) + i.northDoor.doorwayDistanceFromLeftToMiddle) {
						map[k][l].nearWalls.push({
							building: j,
							wall: "top",
						})
					}
				}
			}
		}
	}
	//left
	for (k = upperLeftY - upperLeftYModifier; k <= lowerRightY + lowerRightYModifier; k++) {
		for (l = upperLeftX - upperLeftXModifier; l <= upperLeftX; l++) {
				if (k > 0 && k < map.length && l > 0 && l < map[0].length) {	
				if (!i.westDoor.exists && k <= map.length && l <= map[0].length) {
					map[k][l].nearWalls.push({
						building: j,
						wall: "left",
					})
				} else {
					if (i.westDoor.exists && (k * 50) + 26 > (upperLeftY * 50) + i.westDoor.doorwayDistanceFromTopToMiddle) {
						map[k][l].nearWalls.push({
							building: j,
							wall: "left2",
						})
					}
					if (i.westDoor.exists && k * 50 < (upperLeftY * 50) + i.westDoor.doorwayDistanceFromTopToMiddle) {
						map[k][l].nearWalls.push({
							building: j,
							wall: "left",
						})
					}
				}
			}
		}
	}
	// bottom
	for (k = lowerRightY; k <= lowerRightY + lowerRightYModifier; k++) {
		for (l = upperLeftX - upperLeftXModifier; l <= lowerRightX + lowerRightXModifier; l++) {
				if (k > 0 && k < map.length && l > 0 && l < map[0].length) {	
				if(!i.southDoor.exists) {
					map[k][l].nearWalls.push({
						building: j,
						wall: "bottom",
					})
				} else {
					if (i.southDoor.exists && (l * 50) + 26 > (upperLeftX * 50) + i.southDoor.doorwayDistanceFromLeftToMiddle) {
						map[k][l].nearWalls.push({
							building: j,
							wall: "bottom2",
						})
					}
					if (i.southDoor.exists && l * 50 < (upperLeftX * 50) + i.southDoor.doorwayDistanceFromLeftToMiddle) {
						map[k][l].nearWalls.push({
							building: j,
							wall: "bottom",
						})
					}
				}
			}
		}
	}
	// right
	for (k = upperLeftY - upperLeftYModifier; k <= lowerRightY + lowerRightYModifier; k++) {
		for (l = lowerRightX; l <= lowerRightX + lowerRightXModifier; l++) {
				if (k > 0 && k < map.length && l > 0 && l < map[0].length) {	
				if (!i.eastDoor.exists) {
					map[k][l].nearWalls.push({
						building: j,
						wall: "right",
					})
				} else {
					if (i.eastDoor.exists && (k * 50) + 26 > (upperLeftY * 50) + i.eastDoor.doorwayDistanceFromTopToMiddle) {
						map[k][l].nearWalls.push({
							building: j,
							wall: "right2",
						})
					}
					if (i.eastDoor.exists && k * 50 < (upperLeftY * 50) + i.eastDoor.doorwayDistanceFromTopToMiddle) {
						map[k][l].nearWalls.push({
							building: j,
							wall: "right",
						})
					}
				}
			}
		}
	}
});
}