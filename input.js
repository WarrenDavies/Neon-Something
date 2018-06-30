
  
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

function click(e) {

		
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
}


function moveEverything(){


};


