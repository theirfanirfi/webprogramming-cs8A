var area = document.getElementById("battlefield");
var plan = document.getElementById("plane");

var left = 110;
var areaLength = 700;
var movingLeft = true;
var top = 20;
function moveThePlan(event){
	if(event.key == 'ArrowLeft'){
		if(left >= 110){
		left-=20;
	}else {
		left = 680;
	}

		plan.style.left = `${left}px`;



	}else if(event.key == "ArrowRight"){

		if(left <= 680){
		left+=20;
	}else {
		left = 110;
	}


		plan.style.left = `${left}px`;


	}else if(event.key == "ArrowUp") {
		///
	}else {
		//
	}
}


function selfAdaptivePlane(){
	if(left == 110){
			movingLeft = true;
	}else if(left >= 680) {
		movingLeft = false;
	}
	
	if(movingLeft){
	left+=20;
	}else {
		left -= 20;
	}

	plan.style.left = `${left}px`;


}

function createEnemyPlanes () {
	var enemyPlane = document.createElement('img');
	enemyPlane.setAttribute('src','icons/plane.jpeg');
	enemyPlane.setAttribute('class', 'enemyplane');
	enemyPlane.style.position = "absolute";




	enemyPlane.style.top = 20+'px';

	area.appendChild(enemyPlane);


}

var enemyPlanesInterval = setInterval(createEnemyPlanes, 500);


var planeInterval = setInterval(selfAdaptivePlane, 100);




// document.addEventListener('keyup', moveThePlan);


function enemeyPlanesAppearing(){
let enemyPlanes = document.getElementsByClassName('enemyplane');
for(let i = 0; i<enemyPlanes.length; i++){
	console.log(top);
	if(top <= 1000){
	top += 10;
}else {
	top = 20;
}


	enemyPlanes[i].style.top = `${top}px`;

}
}

var enemyPlanesInterval = setInterval(enemeyPlanesAppearing, 1000);




