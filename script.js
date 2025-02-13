let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, lightsources, trees = [],c, birds = [];
window.onload = function(){
  scene = document.querySelector("a-scene"); 
  lightsources= document.getElementById("lightsources");
  sun = document.getElementById("sun");
  moon = document.getElementById("moon");
  mainCamera = document.getElementById("mainCamera");
  


  

	
	c = new Car(0, 0, 0);

	for (let i=0;i<=5;i++){
	let x = rnd(-50,50);
    let z = rnd(-50,50);
	let y = rnd(40,50);
	birds.push(new Bird(x,y,z));

	}
	
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
	console.log(mainCamera.object3D.position.x);
	console.log(mainCamera.object3D.position.z);
	console.log(c.camera.object3D.position.x);
	console.log(c.camera.object3D.position.z);
	console.log(lightsources.object3D.rotation.y);
	//c.move();
	//lightsources.object3D.rotation.z += 0.002;
	window.requestAnimationFrame(loop);

}