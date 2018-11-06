import * as THREE from 'three'
import alphaTexture from '../assets/textures/stripes_gradient.jpg';

export default scene => {    

    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshPhongMaterial({
      ambient: 0x555555,
      color: 0x555555,
      specular: 0xffffff,
      shininess: 50,
      shading: THREE.SmoothShading
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);


    return cube;
    
}