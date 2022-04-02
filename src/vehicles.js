// define the vehicles

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
			if (i.speed > 0.1) {
				i.speed -= i.speed / i.weight;
			}
		}
		if (i.reversing === false){
			if (i.speed < -0.1) {
				i.speed += Math.abs(i.speed) / i.weight;
				if (i.speed > 0) {
					i.speed = 0;
				}
			}
		}
		if (i.speed < 0.1 && i.speed > -0.1 && Player1.mot != j) {i.speed = 0;}

		// adjust turning circle to match speed
			if (i.speed > 1 && i.speed < -1) { i.radius = i.speed / 2; }
			else { i.radius = i.radius * .75; }
		
		
		// Update Target Position
		
		if (i.forwardTurnLeft && i.speed > 0.3) {
			i.angleTarget -= 3 * Math.PI / 180;
			i.xTurnTarget = -(i.radius * Math.cos(i.angleTarget));
			i.yTurnTarget = -(i.radius * Math.sin(i.angleTarget));
			
			i.xtarget = Math.cos(i.angleTarget);
			i.ytarget = Math.sin(i.angleTarget);
		} 
		
		if (i.forwardTurnRight && i.speed > 0.3) {
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
			Player1.distanceFromVehicle = i.distanceFromPlayer;
		} 
	}	
	//} else
	 if (Player1.mot != j) {
	
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
			
				
				// don't need this, added walls around the game area
				// let mapBoundaryLines = [
				// 	{
				// 		p1x: 0,
				// 		p1y: 0,
				// 		p2x: map[0].length * tileSize,
				// 		p2y: 1,	
				// 	},
				// 	{
				// 		p1x: 0,
				// 		p1y: 0,
				// 		p2x: 1,
				// 		p2y: map.length * tileSize,	
				// 	},
				// 	{
				// 		p1x: map[0].length * tileSize - 1,
				// 		p1y: 0,
				// 		p2x: map[0].length * tileSize,
				// 		p2y: map.length * tileSize,	
				// 	},
				// 	{
				// 		p1x: 0,
				// 		p1y: map.length * tileSize,
				// 		p2x: map[0].length * tileSize,
				// 		p2y: map.length * tileSize,	
				// 	},
				// ]
				// mapBoundaryLines.forEach((m, n) => {
				// 	// boundary collision
				// 	if (testLines(
				// 		vehiclesOnScreen[j].lines[vehicleLine].p1xStep, 
				// 		vehiclesOnScreen[j].lines[vehicleLine].p1yStep, 
				// 		vehiclesOnScreen[j].lines[vehicleLine].p2xStep, 
				// 		vehiclesOnScreen[j].lines[vehicleLine].p2yStep,
				// 		m.p1x, 
				// 		m.p1y, 
				// 		m.p2x, 
				// 		m.p2y)) {
				// 			vehiclesOnScreen[j].collision = true;
				// 	}

				// });
				
				// draw collision lines for the moving vehicle
				if (debug) {
					c.strokeStyle ="red";
					c.lineWidth = 1;
					c.beginPath();
					c.moveTo(vehiclesOnScreen[j].lines[vehicleLine].p1xStep - cameraX, vehiclesOnScreen[j].lines[vehicleLine].p1yStep - cameraY);
					c.lineTo(vehiclesOnScreen[j].lines[vehicleLine].p2xStep - cameraX, vehiclesOnScreen[j].lines[vehicleLine].p2yStep - cameraY );
					c.stroke();
					c.closePath()
				}
			} // if this vehicle line exists
		} // for loop cycling through vehicle lines
	} // if this vehicles speed is > 0 
} //checkThisVehicleCollision

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