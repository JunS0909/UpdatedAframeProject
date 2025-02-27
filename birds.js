class Bird {
    constructor(x,y, z) {
        this.x = x;
        this.z = z;
        this.y = y;
        this.a = 0;
         this.da = 0.002;

        this.obj = document.createElement("a-gltf-model");
        this.obj.setAttribute("src","#birds");
        this.obj.setAttribute("position", { x: this.x, y: this.y , z: this.z });
        this.obj.setAttribute("scale", { x: 2, y: 2, z: 2 });
        this.obj.setAttribute("animation-mixer", "");

        scene.append(this.obj);
    }

    fly() {
        this.a += this.da
        this.x += (Math.random() * 0.5 - 0.25); 
        this.z += (Math.random() * 0.5 - 0.25); 
        this.y += (Math.random() * 0.5 - 0.25); 

        this.obj.object3D.position.x = this.x;
        this.obj.object3D.position.y = this.y;
        this.obj.object3D.position.z = this.z;
        this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    }
}

