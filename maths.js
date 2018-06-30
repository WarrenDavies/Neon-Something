function getXDirection (x, y, xt, yt) {
	var deltaX = xt - x;
	var deltaY = yt - y;
	var rotation = Math.atan2(deltaY, deltaX);
	var xtarget = Math.cos(rotation);
	var ytarget = Math.sin(rotation);
	return xtarget;
}

function getYDirection (x, y, xt, yt) {
	var deltaX = xt - x;
	var deltaY = yt - y;
	var rotation = Math.atan2(deltaY, deltaX);
	var xtarget = Math.cos(rotation);
	var ytarget = Math.sin(rotation);
	return ytarget;
}

function getAngle (x, y, xt, yt) {
	var deltaX = xt - x;
	var deltaY = yt - y;
	return Math.atan2(deltaY,  deltaX);
}

function setNPCdirection(i, target) {
	i.xTarget = target.x;
	i.yTarget = target.y;
	i.xVector = getXDirection(i.x, i.y, i.xTarget, i.yTarget);
	i.yVector = getYDirection(i.x, i.y, i.xTarget, i.yTarget);

// set the new target angle.
	var deltaX = i.xTarget - i.x;
	var deltaY = i.yTarget - i.y;
	i.targetAngle = Math.atan(deltaY / deltaX);
	i.angle = i.targetAngle;
}