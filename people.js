class Person{
	constructor(x,z){
	this.x = x;
	this.z = z;
	
	this.obj = document.createElement("a-gltf-model");
		this.obj.setAttribute("src","#person");
		this.obj.setAttribute("position",{x:this.x,y:-5,z:this.z});
		this.obj.setAttribute("scale",{x:0.2,y:0.2,z:0.2});
		
	}
}