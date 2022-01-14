
// Positions


var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

function success(pos) {
    // calcul distance Nice Marseille
    
    // return distance in meters
    var lon1 = toRadian(43.70313),
    lat1 = toRadian(7.26608),
    lon2 = toRadian(43.296482),
    lat2 = toRadian(5.36978);

    var deltaLat = lat2 - lat1;
    var deltaLon = lon2 - lon1;

    var a = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon/2), 2);
    var c = 2 * Math.asin(Math.sqrt(a));
    var EARTH_RADIUS = 6371;
    var distanceMetres = c * EARTH_RADIUS * 1000;



// 
    var map = L.map('map').setView([51, -0.09], 5);
    var dist = document.getElementById("dist");
    var distNiceMars = 'as';
    

    L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
        attribution: '&copy; <a href="https://stamen-tiles-{S}.a.ssl.fastly.net">OpenStreetMap</a> contributors'
    }).addTo(map);

    var crd = pos.coords;
    
    var long = crd.longitude;
    var lat = crd.latitude;
    map.setView([lat,long ], 10);
 
    L.marker([lat, long]).addTo(map)
    .bindPopup('IUT')
    .openPopup();

    L.marker([43.70313, 7.26608]).addTo(map)
    .bindPopup('Nice')
    .openPopup();

    L.marker([43.296482, 5.36978]).addTo(map)
    .bindPopup('Marseille')
    .openPopup();

    // Cercle
    var circle = L.circle([lat, long], {
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.3,
        radius: 1500
    }).addTo(map);

    //Triangle

    var polygon = L.polygon([
        [32.29930, -64.83635],
        [25.76446, -80.07912],
        [18.49466, -66.13278],
        
    ],{
        color: 'red',
        fillOpacity: 0.2
    }).addTo(map);

    polygon.bindPopup("Triangle des Bermudes");

    var segment = L.polygon([
        [43.70313, 7.26608],
        [43.296482, 5.36978],
        
    ],{
        color: 'yellow'
    }).addTo(map);

    segment.bindPopup("Distance Nice > Marseille = "+distanceMetres+" mètres");
    dist.innerHTML = distanceMetres





        
  }
  
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);


  function toRadian(degree) {
    return degree*Math.PI/180;
}








