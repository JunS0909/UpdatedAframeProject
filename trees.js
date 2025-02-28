
class Tree{
	constructor(x,y,z){
		this.x = x;
		this.z = z;
		this.y = y;


	this.obj = document.createElement("a-sphere");
		this.obj.setAttribute("radius",4);
		this.obj.setAttribute("position",{x:this.x,y:100,z:this.z});
		this.obj.setAttribute("scale",{x:40,y:60,z:40});
		scene.append(this.obj);

	this.obj.setAttribute("position",{x:this.x,y:-6.5,z:this.z});
      scene.append(this.obj);
      }
	  
	}
