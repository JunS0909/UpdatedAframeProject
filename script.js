let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, lightsources, trees = [],c, birds = [], people = [];
window.onload = function(){
  scene = document.querySelector("a-scene"); 
  lightsources= document.getElementById("lightsources");
  sun = document.getElementById("sun");
  moon = document.getElementById("moon");
  mainCamera = document.getElementById("mainCamera");
  tp = document.getElementById("teleport");
  school = document.getElementById("school");
  nCamera = document.getElementById("nCamera");
  randoma = document.getElementById("randoma");
  randomb = document.getElementById("randomb");
  randomc = document.getElementById("randomc");
  randomd = document.getElementById("randomd");
  randome = document.getElementById("randome");
  randomf = document.getElementById("randomf");
  randomg = document.getElementById("randomg");
  randomh = document.getElementById("randomh");
  randomi = document.getElementById("randomi");
  randomj = document.getElementById("randomj");
  randomk = document.getElementById("randomk");
  randoml = document.getElementById("randoml");
  randomm = document.getElementById("randomm");
  randomn = document.getElementById("randomn");
  randomo = document.getElementById("randomo");
  randomp = document.getElementById("randomp");
  randomq = document.getElementById("randomq");
  randomr = document.getElementById("randomr");

  for (let i = 0; i < 30; i++) {
	let x = Math.random() * (200 - (-200)) + (-200);  
	let z = Math.random() * 200 - 50;  
	let y = Math.random() * (100-80) + 80;
	let bird = new Bird(x,y, z);
	birds.push(bird);
}

for (let i = 0; i<10;i++){
	let x = Math.random() * (135 - 115) + 115;
	let z = Math.random() * (115 - (-115)) + (-115);
	let person = new Person(x,z);
	people.push(person);
}

    c = new Car(0, 0, 0);
	tp.addEventListener("click",function(){
		console.log("q");
		nCamera.setAttribute("active",true);
		mainCamera.setAttribute("active",false);
		c.camera.setAttribute("active",false);
	})
	
	randoma.addEventlistener("click",function(){
		school.setAttribute("kinema-body","");
	})

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
	sun.object3D.rotation.y += .02;
	
	for(let Bird of birds){
		Bird.fly();
	}

	let sky = document.querySelector("a-sky");
	if (sun.object3D.rotation.y > Math.PI / 2) {
		sky.setAttribute("color", "lightblue"); 
	  } else {
		sky.setAttribute("color", "darkblue"); 
	  }
	if(collision(c,person)<1){
		console.log(collide);
	}

	  window.requestAnimationFrame(loop);

}
function collision(obj1, obj2){
	let x1 = obj1.object3D.position.x;
	let z1 = obj1.object3D.position.z;
	let x2 = obj2.object3D.position.x;
	let z2 = obj2.object3D.position.z;

	let distance=Math.sqrt((x2-x1)**2 + (z2-z1)**2);

	return distance;
}