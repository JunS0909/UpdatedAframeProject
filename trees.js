
class Tree{
	constructor(x,z){
		this.x = x;
		this.z = z;
		


	this.obj = document.createElement("a-gltf-model");
		this.obj.setAttribute("src","#trees");
		this.obj.setAttribute("position",{x:this.x,y:-5,z:this.z});
		this.obj.setAttribute("scale",{x:40,y:60,z:40});
		scene.append(this.obj);

	this.obj.setAttribute("position",{x:this.x,y:-6.5,z:this.z});
      scene.append(this.obj);
      }
	  
	}
