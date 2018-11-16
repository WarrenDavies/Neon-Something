function updateWeapons() {
    if (mouseDown) {
		if (Player1.mot === 0) {
			if (Player1.activeWeapon === 2 && Player1.ammo[Player1.activeWeapon] > 0) {
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