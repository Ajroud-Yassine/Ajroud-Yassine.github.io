// création de la scene et camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Texture

var loader = new THREE.TextureLoader();
var texture = loader.load("./map.jpg");

// cube
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshToonMaterial({map:texture
});

var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 2;

// Light 1

const light = new THREE.DirectionalLight( 0xff0000, 40 );
light.position.set( 7, 10, 5 );
light.target = cube;
scene.add(light );

// Light 2

const light2 = new THREE.DirectionalLight( 0xff0000, 25 );
light2.position.set( -7, 10, 0 );
light2.target = cube;
scene.add(light2 );

var render = function () {
    requestAnimationFrame( render );
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    renderer.render( scene, camera );
  };
  
  render();
