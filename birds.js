class Bird {
    constructor(x, z) {
        this.x = x;
        this.z = z;
        this.y = Math.random() * 10 + 30; 

        this.obj = document.createElement("a-gltf-model");
        this.obj.setAttribute("src","#birds");
        this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
        this.obj.setAttribute("scale", { x: 2, y: 2, z: 2 });
        this.obj.setAttribute("animation-mixer", "");

        scene.append(this.obj);
    }

    moveRandomly() {
        this.x += (Math.random() * 2 - 1); 
        this.z += (Math.random() * 2 - 1); 
        this.y += (Math.random() * 0.5 - 0.25); 

        this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    }
}


function animateBirds() {
    birds.forEach(bird => bird.moveRandomly());
    requestAnimationFrame(animateBirds);
}