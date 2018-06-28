// Player coords and initial location
 function Player () {
	 this.x = 400; 
	 this.y = 600;
	 this.w = 20;
	 this.h = 20;
	 this.deltaX = 0;
	 this.deltaY = 0;
	 this.xTarget = 0;
	 this.yTarget = 0;
	 this.tired = false;
	 this.speed = 0;
	 this.topSpeed = 4;
	 this.energy = 150;
	 this.health = 150;
	 this.recovery = 0
	 this.xcenter = 400;
	 this.ycenter = 300;
	 this.fill = '#000000';
	 this.xdirection = 1;
	 this.ydirection = 0;
	 this.acceleration = 1;
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
	 this.activeWeapon = 0;
	 this.weaponsPossessed = [true, true, true];
 } 
 var Player1 = new Player();