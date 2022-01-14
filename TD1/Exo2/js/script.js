// Get Current Position

let long =document.getElementById('long');
let lat =document.getElementById('lat');
let alt =document.getElementById('alt');
let vit =document.getElementById('vit');
let time =document.getElementById('time');
let pre =document.getElementById('pre');

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

function success(pos) {
    var crd = pos.coords;
console.log(pos);
    long.innerHTML = crd.longitude;
    lat.innerHTML = crd.latitude;
    pre.innerHTML = crd.accuracy;
    vit.innerHTML = crd.speed;
    alt.innerHTML = crd.altitude;
    const timePos = new Date(pos.timestamp)
    time.innerHTML = timePos;
  }
  
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);

//   Watch Position


// let longW =document.getElementById('long-w');
// let latW =document.getElementById('lat-w');
// let altW =document.getElementById('alt-w');
// let vitW =document.getElementById('vit-w');
// let timeW =document.getElementById('time-w');
// let preW =document.getElementById('pre-w');


// var id, target, options;

// function success(pos) {
//   var crd = pos.coords;

//   if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
//     console.log('Bravo, vous avez atteint la cible');
//     navigator.geolocation.clearWatch(id);
//   }
// }

// function error(err) {
//   console.warn('ERROR(' + err.code + '): ' + err.message);
// }

// target = {
//   latitude : 0,
//   longitude: 0
// };

// options = {
//   enableHighAccuracy: false,
//   timeout: 5000,
//   maximumAge: 0
// };

// id = navigator.geolocation.watchPosition(success, error, options);
// console.log(target)

// Exo 3

let x =document.getElementById('x');
let y =document.getElementById('y');
let z =document.getElementById('z');
let alpha =document.getElementById('alpha');
let beta =document.getElementById('beta');
let gamma =document.getElementById('gamma');

window.addEventListener('devicemotion', (eventData) => {

    x.innerHTML = eventData.accelerationIncludingGravity.x;
    y.innerHTML = eventData.accelerationIncludingGravity.Y;
    z.innerHTML = eventData.accelerationIncludingGravity.Z;
    alpha.innerHTML = eventData.rotationRate.alpha ;
    beta.innerHTML = eventData.rotationRate.beta; 
    gamma.innerHTML = eventData.rotationRate.gamma;
}, false);