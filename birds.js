class Bird{
    constructor(x,z){
     x = this.x;
     y = this.y;
     z = this.z;   
    h = 40;
     this.obj = document.createElement("a-gltf-model");
        this.obj.setAttribute("src","#birds");
        this.obj.setAttribute("position",{x:this.x,y:this.y + h,z:this.z});
        this.obj.setAttribute("scale",{x:2,y:2,z:2});
        this.obj.setAttribute("animation-mixer","");
        scene.append(this.obj);
    }
}