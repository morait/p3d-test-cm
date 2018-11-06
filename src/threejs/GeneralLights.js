import * as THREE from 'three'

export default (scene, position) => {
    const light = new THREE.PointLight(0xffffff, 6, 40);
    light.position.set(...position);
    scene.add( new THREE.AmbientLight(0xff0040) );
    scene.add(light);

    return light;
}