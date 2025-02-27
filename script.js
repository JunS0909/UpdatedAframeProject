let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, lightsources, trees = [],c, birds = [], people = [];
window.onload = function(){
  scene = document.querySelector("a-scene"); 
  lightsources= document.getElementById("lightsources");
  sun = document.getElementById("sun");
  moon = document.getElementById("moon");
  mainCamera = document.getElementById("mainCamera");
  

  for (let i = 0; i < 30; i++) {
	let x = Math.random() * 200 - 50;  
	let z = Math.random() * 200 - 50;  
	let bird = new Bird(x, z);
	birds.push(bird);
}

for (let i = 0; i<20;i++){
	let x = Math.random() 
}

    c = new Car(0, 0, 0);

	
	window.addEventListener("keydown",function(e){
		
		 if(e.key == "e"){
			 console.log(e.key)
			 mainCamera.setAttribute("active",true);
			 c.camera.setAttribute("active",false);
			 mainCamera.object3D.position.x = c.camera.object3D.position.x += 1;
			 mainCamera.object3D.position.z = c.camera.object3D.position.z += 1;
		 }

	  })
	  


	

	loop();
}
function loop(){

	lightsources.object3D.rotation.z += 0.002;
	sun.object3D.rotation.y += 0.001;

	let sky = document.querySelector("a-sky");
	if (sun.object3D.position.y < 0) {
		sky.setAttribute("color", "lightblue"); 
	  } else {
		sky.setAttribute("color", "darkblue"); 
	  }
	  window.requestAnimationFrame(loop);

}