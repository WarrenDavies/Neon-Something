function updateWeapons() {
    console.log("here");
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
    theWeaponIcons.forEach((i, j) => {
        if (i.collected === false) {
            if(isOnScreen(i) ) {
                if (collidesSpecify(Player1.x,Player1.y, Player1.w, Player1.h, i.x, i.y, i.w, i.h)) {
                    Player1.weaponsPossessed[i.id].possess = true;
                    Player1.activeWeapon = i.id;
                    i.collected = true;
                }
            } // is on screen
        } // collected = false
    });
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