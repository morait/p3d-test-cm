var width = 960;
var height = 500;
var keyboard = new THREEx.KeyboardState();
var scene = new THREE.Scene();
var plane;
var camera = new THREE.PerspectiveCamera(25, width/height, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

// create the cube
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshPhongMaterial({
  ambient: 0x555555,
  color: 0x555555,
  specular: 0xffffff,
  shininess: 50,
  shading: THREE.SmoothShading
});
var cube = new THREE.Mesh(geometry, material);
         //ground

scene.add(cube);

// create lights
scene.add( new THREE.AmbientLight(0xff0040) );

var light = new THREE.PointLight(0xffffff, 6, 40);
light.position.set(20, 20, 20);
scene.add(light);

// set the camera
camera.position.z = 5;

// camera.position.set(0,20,35);
var rotSpeed = .02;

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
var texture = THREE.ImageUtils.loadTexture('grasslight-big.jpg')
var planeMaterial = new THREE.MeshPhongMaterial({
    map: texture,
    side: THREE.DoubleSide
});
/*
plane = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), planeMaterial);
plane.rotation.x = 90 * (Math.PI / 180);
plane.position.y = -10;
plane.name = "plane";
scene.add(plane);
*/

// define an animation loop
var render = function () {
  requestAnimationFrame(render);
  
  // rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  checkRotation();
  renderer.render(scene, camera);
};

render();