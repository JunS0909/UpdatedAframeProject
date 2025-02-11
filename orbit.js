class Car{
	constructor(x,y,z){
		console.log(3);
		this.x = x;
		this.z = z;
		this.y = y;
		this.a = 0;
		this.da = 0.05;
	
		
		this.obj = document.createElement("a-box");
		this.obj.setAttribute("interact","");
		//this.obj.setAttribute("dynamic-body","");
		this.obj.setAttribute("height",5);
		this.obj.setAttribute("depth",10);
		this.obj.setAttribute("width",6);
		this.obj.setAttribute("rotation",{x:0,y:0,z:0});
		this.obj.setAttribute("color","red");
		let wheela = document.createElement("a-cylinder");
		wheela.setAttribute("height",6.2);
		wheela.setAttribute("radius",1.25);
		wheela.setAttribute("rotation",{x:0,y:0,z:90});
		wheela.setAttribute("position",{x:0,y:-3,z:3});
		this.obj.append(wheela);
		let wheelb = document.createElement("a-cylinder");
		wheelb.setAttribute("height",6.2);
		wheelb.setAttribute("radius",1.25);
		wheelb.setAttribute("rotation",{x:0,y:0,z:90});
		wheelb.setAttribute("position",{x:0,y:-3,z:-3});
		this.obj.append(wheelb);
		this.obj.setAttribute("position",{x:0,y:-5,z:0});
		
		this.camera = document.createElement("a-camera");
		this.camera.setAttribute("active",false);
		this.camera.setAttribute("wasd-controls-enabled",true);
		this.camera.setAttribute("position",{x:0,y:10,z:0});
		this.camera.setAttribute("rotation",{x:0,y:0,z:0});
		
		
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