import * as THREE from 'three';
import SceneSubject from './SceneSubject';
import GeneralLights from './GeneralLights';
import THREEx from '../threex/THREEx.KeyboardState';
export default canvas => {

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }
    const keyboard = new THREEx.KeyboardState();
    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneLight = new GeneralLights(scene,[20, 20, 20]);
    const cube =  new SceneSubject(scene);
    const rotSpeed = .02;

    function buildScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#000");

        return scene;
    }

    function buildRender({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 
        const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);

        renderer.gammaInput = true;
        renderer.gammaOutput = true;

        return renderer;
    }

    function buildCamera({ width, height }) {
        const aspectRatio = width / height;
        const fieldOfView = 25;
        const nearPlane = 0.1;
        const farPlane = 1000; 
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        camera.position.z = 5;

        return camera;
    }

    function checkRotation(){
    
        var x = camera.position.x,
          y = camera.position.y,
          z = camera.position.z;
      
        if (keyboard.pressed("left")){
          camera.position.x = x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
          camera.position.z = z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed);
        } else if (keyboard.pressed("right")){
          camera.position.x = x * Math.cos(rotSpeed) - z * Math.sin(rotSpeed);
          camera.position.z = z * Math.cos(rotSpeed) + x * Math.sin(rotSpeed);
        }
      
        camera.lookAt(scene.position);
      
      }


    function update() {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        checkRotation();
        renderer.render(scene, camera);
    }


    return {
        update

    }
}