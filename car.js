class Car{
	constructor(x,y,z){
		console.log(3);
		this.x = x;
		this.z = z;
		this.y = y;

	
		
		this.obj = document.createElement("a-gltf-model");
		this.obj.setAttribute("interact","");
		this.obj.setAttribute("src","#car");
		this.obj.setAttribute("scale",{x:8,y:8,z:8});
		this.obj.setAttribute("position",{x:0,y:-9,z:0});


		
		this.camera = document.createElement("a-camera");
		this.camera.setAttribute("active",false);
		this.camera.setAttribute("wasd-controls-enabled",true);
		this.camera.setAttribute("position",{x:0,y:6,z:0});
		this.camera.setAttribute("rotation",{x:0,y:0,z:180});
		
		
		this.obj.addEventListener("click",()=>{
			mainCamera.setAttribute("active",false);
			this.camera.setAttribute("active",true);
			console.log("Car selected");
		});
		this.camera.setAttribute("position",{x:this.x,y:this.y + 4,z:this.z});
		//
		this.camera.append(this.obj);
		scene.append(this.camera);
	}
	
	move(){
		console.log(this.camera.object3D.position.x);
		console.log(this.obj.object3D.position.x);
		this.obj.object3D.position.x = this.camera.object3D.position.x;
		this.obj.object3D.position.z = this.camera.object3D.position.z;
		//this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
		}
}