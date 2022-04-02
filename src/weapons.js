function updateWeapons() {
    if (mouseDown) {
		if (Player1.mot === 0) {
			if (Player1.activeWeapon === 1 && Player1.weaponsPossessed[Player1.activeWeapon].ammo > 0) {
                fireMachineGun();
			}
		}
    }
    if (plasmaCharge > 0) {
        plasmaCharge--;
    }
    if (rocketReload > 0) {
        rocketReload--;
    }
}


function changeWeapon(change) {
    
    var checkWeapon = Player1.activeWeapon;
    for (j = Player1.weaponsPossessed.length; j >= 0; j--) {
        keys[81] = false;
        keys[69] = false;
        checkWeapon += change;
        if (checkWeapon < 0) {
            checkWeapon = Player1.weaponsPossessed.length - 1;
        }
        if (checkWeapon > Player1.weaponsPossessed.length - 1) {
            checkWeapon = 0;
        }
        if (Player1.weaponsPossessed[checkWeapon].possess === true) {
            Player1.activeWeapon = checkWeapon;
            keys[81] = false;
            keys[69] = false;
            break;
        }
    }
}

function updateWeaponIcons() {
    for (i = theWeaponIcons.length - 1; i >= 0; i--) {
        if (collidesSpecify(Player1.x - 5,Player1.y -5, Player1.w + 10, Player1.h + 10, theWeaponIcons[i].x, theWeaponIcons[i].y, theWeaponIcons[i].w, theWeaponIcons[i].h)) {

            Player1.onWeaponIcon = i; 
            // console.log(Player1.onWeaponIcon)

            if (Player1.points < theWeaponIcons[i].cost) {
                
                message = "You can't afford the " + theWeaponIcons[i].name + " (cost: " + theWeaponIcons[i].cost + ")";
                Player1.onWeaponIcon = -1;

            } else {
                if (Player1.weaponsPossessed[theWeaponIcons[i].id].possess == true) {
                    message = "Press F to buy " + theWeaponIcons[i].name + " ammo (cost: " + theWeaponIcons[i].cost + ")"
                } else {
                    // console.log(theWeaponIcons[i]);
                    message = "Press F to buy the " + theWeaponIcons[i].name + " (cost: " + theWeaponIcons[i].cost + ")"
                }
                messageToPass = {
                    text: message,
                    priority: 2,
                    timeActive: 0,
                    removeAfter: 5
                }
            }
            passMessage(messageToPass);
            break;
        } else {
            Player1.onWeaponIcon = -1;
        }
    }
}

function drawWeaponIcons() {
    theWeaponIcons.forEach((i, j) => {
        if(i.collected === false) {
            if(isOnScreen(i) ) {
                c.beginPath();
                c.save();
                c.translate(i.x - cameraX, i.y - cameraY);
                //c.translate(-i.x, -i.y);
                c.fillStyle = i.color;
                c.fillRect(0, 0, i.w, i.h);
                c.restore();
                c.closePath();
            }
        }
    });
}


function updatePerks() {
    for (i = thePerks.length - 1; i >= 0; i--) {
        // console.log('perk loop')
        if (thePerks[i].collected == false) {
            // console.log('not collected')
            if (collidesSpecify(Player1.x - 5,Player1.y -5, Player1.w + 10, Player1.h + 10, thePerks[i].x, thePerks[i].y, thePerks[i].w, thePerks[i].h)) {
                // console.log('perk collision')
                Player1.onPerkIcon = i; 

                if (Player1.points < thePerks[i].cost) {
                    message = "You can't afford the " + thePerks[i].name + " (cost: " + thePerks[i].cost + ")";
                    Player1.onPerkIcon = -1;
                } else {
                    message = "Press F to buy the " + thePerks[i].name + " (cost: " + thePerks[i].cost + ")";
                }
                messageToPass = {
                    text: message,
                    priority: 2,
                    timeActive: 0,
                    removeAfter: 5
                }
                passMessage(messageToPass);
                break;
            } else {
                Player1.onPerkIcon = -1;
            } // if collides
        } // if collected
    } //  for the perks
}

function drawPerks() {
    thePerks.forEach((i, j) => {
        if(i.collected === false) {
            if(isOnScreen(i) ) {
                c.beginPath();
                c.save();
                c.translate(i.x - cameraX, i.y - cameraY);
                //c.translate(-i.x, -i.y);
                c.fillStyle = i.color;
                c.fillRect(0, 0, i.w, i.h);
                c.restore();
                c.closePath();
            }
        }
    });
}