var mp = getMP();
var tp = getTP();

// We take the pistol
if(getWeapon() != WEAPON_PISTOL)
	setWeapon(WEAPON_PISTOL);

// We get the nearest enemy
var enemy = getNearestEnemy();

var cellto = getCellToUseWeapon(enemy);
var dist = getDistance(getCell(), cellto);
if(dist>0){
	mp-=dist;
	moveTowardCell(cellto, dist);
}

while(tp-->0)
	useWeapon(enemy);

if(mp>0)
	moveAwayFrom(enemy, mp);
