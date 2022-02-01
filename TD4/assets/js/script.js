
// Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Light & AmbientLight

    // AmbientLight

    const AmbientLight = new THREE.AmbientLight("#041C32" );
    scene.add(AmbientLight);

    //Light
    
    const light = new THREE.PointLight("#FFCB74", 0.6, 70);
    light.position.set(10,10,10);
    scene.add(light);


//Texture

var loader =new THREE.TextureLoader();
var texture = loader.load("assets/textures/map.jpg");

// mesh

const geometry = new THREE.SphereGeometry(1,24,16);
const material = new THREE.MeshBasicMaterial({map: texture});
const sphere = new THREE.Mesh( geometry, material);
scene.add( sphere );

camera.position.z = 3;

// animation de la sphere

var render = function()
{
    requestAnimationFrame(render);
    sphere.rotation.x +=0.001;
    sphere.rotation.y +=0.001;

    // affichage de la scene et cam
    renderer.render(scene,camera);
};

render();