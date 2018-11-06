import * as THREE from 'three'

    class Light {
        constructor (scene, position) {
            const light = new THREE.PointLight(0xffffff, 6, 40);
            this._scene = scene;
            light.position.set(...position);
            this._scene.add( new THREE.AmbientLight(0xff0040) );
            this._scene.add(light)

            return light;
        }

      }

export default Light;