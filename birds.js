class Birds{
    constructor(x,y,z){
     x = this.x;
     y = this.y;
     z = this.z;   

     this.obj = document.createElement("a-gltf-model");
        this.obj.setAttribute("src","#birds");
        this.obj.setAttribute("position",{x:this.x,y:15,z:this.z});
        this.obj.setAttribute("scale",{x:2,y:2,z:2});
    }
}