import * as THREE from "./three.js";

class Maquette
{
    constructor (canvas)
    {
        this.canvas = document.getElementById (canvas);

        this.scene = new THREE.Scene ();

        const geometry = new THREE.PlaneGeometry (1, 1);
        const material = new THREE.MeshBasicMaterial ({color: '#fff'});
        this.scene.add (new THREE.Mesh (geometry, material));

        this.camera = new THREE.OrthographicCamera (-1, +1, +1, -1, +1, -1);

        const settings = {canvas: this.canvas, antialias: true, alpha: true};
        this.renderer = new THREE.WebGLRenderer (settings);
        this.renderer.setClearColor (0x00ff00, 1);

        this.animate ();
    }

    animate ()
    {
        this.renderer.render (this.scene, this.camera);
        requestAnimationFrame (() => this.animate ());
    }
}

export default Maquette;