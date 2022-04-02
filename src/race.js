function updateRace() {
	////race

	if (
		Player1.mot == 0 
		& 
		collidesSpecify (
			Player1.x,
			Player1.y,
			Player1.w,
			Player1.h,
			raceCheckPoints[0].x,
			raceCheckPoints[0].y,
			raceCheckPoints[0].w,
			raceCheckPoints[0].h
	)) {
		passMessage({
			text: "You need to be in a vehicle to start the race. Wonder where one could be...",
			priority: 3,
			timeActive: 0,
			removeAfter: 300
		});
	}

	if (race.completeTimer < 0.1) {
	c.fillStyle = raceCheckPoints[race.currentCheckPoint].colour;
	c.beginPath();
	c.save();
	c.fillRect(
		raceCheckPoints[race.currentCheckPoint].x - cameraX, 
		raceCheckPoints[race.currentCheckPoint].y - cameraY, 
		raceCheckPoints[race.currentCheckPoint].w, 
		raceCheckPoints[race.currentCheckPoint].h
	);
	c.fill();
	
	race.collidesCheckPoint = false;
	if (race.distaceToCheckPoint < 200) {

		

		for (var vehicleLine in vehiclesOnScreen[Player1.mot].lines) {
			for (var checkPointLine in raceCheckPoints[race.currentCheckPoint].lines) {			
				if (testLines(
					vehiclesOnScreen[Player1.mot].lines[vehicleLine].p1x, 
					vehiclesOnScreen[Player1.mot].lines[vehicleLine].p1y, 
					vehiclesOnScreen[Player1.mot].lines[vehicleLine].p2x, 
					vehiclesOnScreen[Player1.mot].lines[vehicleLine].p2y, 
					
					raceCheckPoints[race.currentCheckPoint].lines[checkPointLine].p1x, 
					raceCheckPoints[race.currentCheckPoint].lines[checkPointLine].p1y, 
					raceCheckPoints[race.currentCheckPoint].lines[checkPointLine].p2x, 
					raceCheckPoints[race.currentCheckPoint].lines[checkPointLine].p2y)) {
					
					race.collidesCheckPoint = true;
				}
			}	
		}
	}	

	//if (collidesSpecify( Player1.x, Player1.y, Player1.w, Player1.h, raceCheckPoints[race.currentCheckPoint].x, raceCheckPoints[race.currentCheckPoint].y, raceCheckPoints[race.currentCheckPoint].w, raceCheckPoints[race.currentCheckPoint].h ) && race.completeTimer < 1 ) {

	if (race.collidesCheckPoint === true) {	
		
		if (race.currentCheckPoint === 0) {
			race.on = true;
		}
		console.log("checkpoint");
		if (raceCheckPoints[race.currentCheckPoint].colour === "red") {
			race.on = false;
			race.currentCheckPoint = 0;
			
			
			race.completeTimer = 60;
		} else {
			race.currentCheckPoint++;
		}
		
		
	}

	//console.log(race.on);

	if (race.on === true) {
		
		race.deltaX = (raceCheckPoints[race.currentCheckPoint].x + (raceCheckPoints[race.currentCheckPoint].w / 2)) - Player1.x;
		race.deltaY = (raceCheckPoints[race.currentCheckPoint].y + (raceCheckPoints[race.currentCheckPoint].h / 2)) - Player1.y;
		race.angle = Math.atan2(race.deltaY,  race.deltaX);
		race.xVector = Math.cos(race.angle);
		race.yVector = Math.sin(race.angle);
		
		
		//race.distaceToCheckPoint = Math.sqrt(Math.pow(race.xVector * 100, 2) + Math.pow(race.yVector * 100, 2) )
		
		race.distaceToCheckPoint = Math.sqrt(Math.pow(race.deltaX, 2) + Math.pow(race.deltaY, 2) )
		
		// console.log (race.distaceToCheckPoint);
		
		if (race.distaceToCheckPoint < 150) {
			race.indicatorAdjustor = 150 - race.distaceToCheckPoint;
		} else {
			race.indicatorAdjustor = 0;
		}
		
		race.indicatorX = race.xVector * (150 - race.indicatorAdjustor);
		race.indicatorY = race.yVector * (150 - race.indicatorAdjustor);
		
		
		
		c.beginPath();
		c.save();
		c.fillStyle = raceCheckPoints[race.currentCheckPoint].colour;
		c.translate(Player1.x, Player1.y);
		c.arc(race.indicatorX - 5 - cameraX, race.indicatorY - 5 - cameraY, 5, 0, 2*Math.PI);
		c.lineWidth = 2;
		c.stroke();
		c.fill();
		c.restore();
		
		race.currentRaceTime += 0.02; 
	}

	}
} // updateRace	