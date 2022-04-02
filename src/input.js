
  
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


	if (keys[88]) {
		if (debugTarget) {
			debugTarget = null;
		}
	}

	if (keys[79]) {
		time -= 1;
		if (time < 0) {time = 23;}
	}

	if (keys[80]) {
		time += 1;
	}
	function accelerateVehicle() {
		vehiclesOnScreen[Player1.mot].speed += vehiclesOnScreen[Player1.mot].acceleration / vehiclesOnScreen[Player1.mot].weight;
			Player1.onTile = returnTile(Player1);
			//console.log(map[Player1.onTile.y][Player1.onTile.x]);

			//console.log(map[Player1.onTile.y][Player1.onTile.x].speedModifier);
			
			//console.log(vehiclesOnScreen[Player1.mot].topForwardSpeed - map[Player1.onTile.y][Player1.onTile.x].speedModifier);
			
			if (vehiclesOnScreen[Player1.mot].speed > vehiclesOnScreen[Player1.mot].topForwardSpeed - map[Player1.onTile.y][Player1.onTile.x].speedModifier) {
				if (vehiclesOnScreen[Player1.mot].topForwardSpeed - map[Player1.onTile.y][Player1.onTile.x].speedModifier < 0) {
					vehiclesOnScreen[Player1.mot].speed = 1;
				} else {
					vehiclesOnScreen[Player1.mot].speed = vehiclesOnScreen[Player1.mot].topForwardSpeed - map[Player1.onTile.y][Player1.onTile.x].speedModifier;
				}
			}	
	}
	// vehicle key presses
	if (Player1.mot > 0) { 
		 //accelerating
		 if (keys[87] && !keys[65] && !keys[68] || keys[87] && keys[65] && keys[68]) {
			vehiclesOnScreen[Player1.mot].accelerating = true;
			accelerateVehicle();
		}

		// not accelerating
		if (!keys[87]) {
			vehiclesOnScreen[Player1.mot].accelerating = false;
		}

		//brake
		 if (keys[83]) {
			//console.log(vehiclesOnScreen[Player1.mot].speed);
			vehiclesOnScreen[Player1.mot].reversing = true;
			if (vehiclesOnScreen[Player1.mot].speed > 0) {
				vehiclesOnScreen[Player1.mot].speed -= vehiclesOnScreen[Player1.mot].brakeRate;
			}
			if (vehiclesOnScreen[Player1.mot].speed <= 0) {
				vehiclesOnScreen[Player1.mot].speed -= vehiclesOnScreen[Player1.mot].reverseAcceleration;
				// console.log("Reversing");
			}
			if (vehiclesOnScreen[Player1.mot].speed < vehiclesOnScreen[Player1.mot].reverseTopSpeed) {
				vehiclesOnScreen[Player1.mot].speed = vehiclesOnScreen[Player1.mot].reverseTopSpeed;
			}
		}

		// not braking
		if (!keys[83]) {
			vehiclesOnScreen[Player1.mot].reversing = false;
			if (vehiclesOnScreen[Player1.mot].speed < vehiclesOnScreen[Player1.mot].reverseTopSpeed) {
				vehiclesOnScreen[Player1.mot].speed = vehiclesOnScreen[Player1.mot].reverseTopSpeed;
				// console.log (vehiclesOnScreen[Player1.mot].speed);
				// console.log("Should be clipping speed");
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
			if (keys[87]) {
				vehiclesOnScreen[Player1.mot].accelerating = true;
				accelerateVehicle();
			}
		}
		 
		// forward turn right
		if (keys[68] && vehiclesOnScreen[Player1.mot].speed > 0.3 && !keys[65]) {
				vehiclesOnScreen[Player1.mot].forwardTurnRight = true;
		} else {
				vehiclesOnScreen[Player1.mot].forwardTurnRight = false;
				if (keys[87]) {
					vehiclesOnScreen[Player1.mot].accelerating = true;
					accelerateVehicle();
				}
		}

		//no pedal pressed  -should make this speed * inertia... like weight
		if (!keys[83] && !keys[87] && !keys[70]) {
			vehiclesOnScreen[Player1.mot].reversing = false;
			vehiclesOnScreen[Player1.mot].accelerating = false;
			// console.log("here");
			if (Player1.mot > 0) {
				if (Player1.speed > 0.1) {
					Player1.speed -= vehiclesOnScreen[Player1.mot].weight;
				}
				if (Player1.speed < -0.1) {
					Player1.speed += vehiclesOnScreen[Player1.mot].weight;
				}
				if (Player1.speed < 0.1 && Player1.speed > -0.1) {
					Player1.speed = 0;
				}
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
			if (definitelyOnMap(Player1)) {
				switch (map[Player1.onTile.y][Player1.onTile.x].type) {
					case "sand":
						Player1.speed = Player1.speed / 1.1 ;
						if (!Player1.walkedOn['sand']) {
							passMessage({
								text: "Try to avoid walking on sand. It'll slow you down.",
								priority: 1,
								timeActive: 0,
								removeAfter: 300
							});
							Player1.walkedOn['sand'] = true;
						}
						break;
					case "water":
						Player1.speed = Player1.speed / 1.5;
						if (!Player1.walkedOn['water']) {
							passMessage({
								text: "The water's deep, but you can wade through it... very slowly.",
								priority: 1,
								timeActive: 0,
								removeAfter: 300
							});
							Player1.walkedOn['water'] = true;
						}
						break;
				}
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

	if (keys[70]) { // F action button
		// console.log(Player1.onWeaponIcon + ", " + Player1.interactTimer);

		if (Player1.onWeaponIcon !== -1 && Player1.interactTimer == 0) {
			// console.log("contact: ");
			Player1.points -= theWeaponIcons[Player1.onWeaponIcon].cost;
			
			if (Player1.weaponsPossessed[theWeaponIcons[Player1.onWeaponIcon].id].possess === false) {                    
				Player1.weaponsPossessed[theWeaponIcons[Player1.onWeaponIcon].id].possess = true;
				Player1.activeWeapon = theWeaponIcons[Player1.onWeaponIcon].id;
				messageToPass = {
					text: theWeaponIcons[Player1.onWeaponIcon].firstPurchaseMessage,
					priority: 4,
					timeActive: 0,
					removeAfter: 200
				}
				passMessage(messageToPass);
			}
			Player1.weaponsPossessed[theWeaponIcons[Player1.onWeaponIcon].id].ammo += theWeaponIcons[Player1.onWeaponIcon].a;

			Player1.interactTimer = Player1.interactDebounceTime;
		}

		if (Player1.onPerkIcon !== -1 && Player1.interactTimer == 0) {
			// console.log("contact: ");
			
			
			if (thePerks[Player1.onPerkIcon].id === 1) {   
				if (Player1.health === Player1.maxHealth) {
					// console.log("here");
					passMessage({
						text: "Don't waste your cash, you're already at full health my friend!",
						priority: 4,
						timeActive: 0,
						removeAfter: 100
					});
				} else {
					Player1.points -= thePerks[Player1.onPerkIcon].cost;
					thePerks[Player1.onPerkIcon].purchases += 1;
					passMessage({
						text: "You are back to full health. Yay!",
						priority: 4,
						timeActive: 0,
						removeAfter: 100
					});
					Player1.health = Player1.maxHealth;
				}	
			}

			if (thePerks[Player1.onPerkIcon].id === 2) {   
				
				
				if (Player1.topSpeed == 8) {
					passMessage({
						text: "You're already a speed demon. You can't go any faster.",
						priority: 4,
						timeActive: 0,
						removeAfter: 100
					});
				} else {
					Player1.points -= thePerks[Player1.onPerkIcon].cost;
					Player1.topSpeed += 1;

					thePerks[Player1.onPerkIcon].purchases += 1;
					
					switch(thePerks[Player1.onPerkIcon].purchases) {
						case 1:
							messageToPass = 'You feel like a virile fox.';
							thePerks[Player1.onPerkIcon].cost = thePerks[Player1.onPerkIcon].cost * 4;
							priority = 4;
							break;
						case 2:
							messageToPass = 'You feel the need... the need for speed!';
							thePerks[Player1.onPerkIcon].cost = thePerks[Player1.onPerkIcon].cost * 4;
							priority = 5;
							break;
						case 3:
							messageToPass = 'You are now a full-fledged speed demon.';
							thePerks[Player1.onPerkIcon].cost = thePerks[Player1.onPerkIcon].cost * 4;
							thePerks[Player1.onPerkIcon].collected = true;
							priority = 6;
							break;
					}

					passMessage({
						text: messageToPass,
						priority: priority,
						timeActive: 0,
						removeAfter: 100
					});
				}	
			}


			Player1.interactTimer = 150;
		}

		if (Player1.nearDoor != false) {
			if (Player1.nearDoor.locked === true && Player1.points >= Player1.nearDoor.cost) {
				Player1.nearDoor.locked = false;
				Player1.points -= Player1.nearDoor.cost;
				if (theBuildings[Player1.nearBuilding].southDoor.exists === true) {
					theBuildings[Player1.nearBuilding].southDoor.locked = false;
				}
				if (theBuildings[Player1.nearBuilding].westDoor.exists === true) {
					theBuildings[Player1.nearBuilding].westDoor.locked = false;
				}
				if (theBuildings[Player1.nearBuilding].northDoor.exists === true) {
					theBuildings[Player1.nearBuilding].northDoor.locked = false;
				}
				if (theBuildings[Player1.nearBuilding].eastDoor.exists === true) {
					theBuildings[Player1.nearBuilding].eastDoor.locked = false;
				}
				theBuildings[Player1.nearBuilding].locked = false;
			}
		}

		if (Player1.closestVehicle > 0 && dismountTimer === 0 && Player1.distanceFromVehicle < 100) {
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
			vehiclesOnScreen[Player1.mot].accelerating = false;
			vehiclesOnScreen[Player1.mot].reversing = false;
			Player1.speed = 0;
			dismountTimer = 30;
			Player1.mot = 0;
		}
	} // keys 70
	
	if (!keys[70]) {
		Player1.interactTimer = 0;
	}

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
			if (Player1.activeWeapon === 0 && Player1.weaponsPossessed[Player1.activeWeapon].ammo > 0) {
				firePistol();
			}
			if (Player1.activeWeapon === 2 && Player1.weaponsPossessed[Player1.activeWeapon].ammo > 0) {
				firePlasmaGun();
			}
			if (Player1.activeWeapon === 3 && Player1.weaponsPossessed[Player1.activeWeapon].ammo > 0) {
				fireRocketLauncher();
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
	
	// if (debugTarget) {
	// 	theCivilians[debugTarget.ID].wayPoints.push({
	// 		x: mouseX + cameraX,
	// 		y:  mouseY + cameraY,
	// 		type: "Debug",
	// 	});
	// }	
}

function mousedown(e) {
	mouseDown = true;
}
function mouseup(e) {
	mouseDown = false;
}


function moveEverything(){


};