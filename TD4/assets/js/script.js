// calcul cordSphere

var cordSphere = 1 /Math.sqrt(1-Math.exp(Math.pow())*Math.sin(Math.pow())*1 );

function latLon(lat,lon, R){

    lat= -lat*Math.pi/180;
    lon= -lon*Math.pi/180;
    var x= R*Math.cos(lat)*Math.cos(lon);
    var y= R*Math.cos(lat)*Math.sin(lon);
    var z= R*Math.sin(lat);
    console.log(x,y,z);
}


// Api REST ---->   https://restcountries.com/v2/all


function apiRestCountries()
{
    function reqListener () {
        console.log(this.responseText);
        // parse 
        var obj = JSON.parse(this.responseText);


        // Récupération des countries 

        for (var countries in obj) {
            
            var countrie = obj[countries];
            var nameCountrie = countrie.name;
            var flagCountrie = countrie.flags.png;
            var latLong = countrie.latlng;

            // textureCountries

            var loader =new THREE.TextureLoader();
            var textureCountries = loader.load(flagCountrie);
            // meshCountries

            const geometryCountries = new THREE.SphereGeometry(1,24,16);
            const materialCountires = new THREE.MeshBasicMaterial({map:textureCountries});
            const sphereCountries = new THREE.Mesh( geometryCountries, materialCountires);
            scene.add( sphereCountries );

            // latLon(latLong[0],latLong[1],1);

            //  update ---->sphere.position.set(2, 2, 2);
         }

    }


    var req = new XMLHttpRequest();
    req.onload = reqListener;
    req.open("GET","https://restcountries.com/v2/all");
    req.send();
}

apiRestCountries();


// recupe position lat/Long

var options = {
    enableHighAccuracy:true,
    timeout:5000,
    maximumAge:0
};

function success(pos)
{
    var crd = pos.coords;
    var long = crd.longitude;
    var lat = crd.latitude;
    console.log(long,lat)
}
  
function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
}
  
  navigator.geolocation.getCurrentPosition(success, error, options);



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

// meshTerre

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