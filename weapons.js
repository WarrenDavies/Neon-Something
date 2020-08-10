function updateWeapons() {
    if (mouseDown) {
		if (Player1.mot === 0) {
			if (Player1.activeWeapon === 1 && Player1.ammo[Player1.activeWeapon] > 0) {
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
