function test(){
	if(document.getElementById('dev').style.visibility = 'visible'){
		document.getElementById('dev').style.visibility = 'hidden'
	}
}

 function animate() {
var interval = setInterval(test, 1000);
}

animate();