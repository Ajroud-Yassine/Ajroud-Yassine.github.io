
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

    long.innerHTML = crd.longitude;
    lat.innerHTML = crd.latitude;
    pre.innerHTML = crd.accuracy;
    vit.innerHTML = crd.speed;
    alt.innerHTML = crd.altitude;
  }
  
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);