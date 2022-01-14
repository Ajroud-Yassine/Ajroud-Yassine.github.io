
// Positions


var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

function success(pos) {

   // calcul distance Nice Marseille
   var R = 6371e3;
   var lat1 = 43.7101728;
   var lat2 = 43.299999; 
   var lon1 = 7.2619532; 
   var lon2 = 5.4;       
   var lat1radians = toRadians(lat1);
   var lat2radians = toRadians(lat2);
   var latRadians = toRadians(lat2-lat1);
   var lonRadians = toRadians(lon2-lon1);
   var a = Math.sin(latRadians/2) * Math.sin(latRadians/2) +
        Math.cos(lat1radians) * Math.cos(lat2radians) *
        Math.sin(lonRadians/2) * Math.sin(lonRadians/2);
   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
   var distanceMetres = R * c;

   function toRadians(val){
    var PI = 3.1415926535;
    return val / 180.0 * PI;
}


// 
    var map = L.map('map').setView([51, -0.09], 5);
    var dist = document.getElementById("dist");
    

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

    segment.bindPopup("Distance Nice > Marseille = "+Math.round(distanceMetres/1000)+" mètres");
    dist.innerHTML = Math.round(distanceMetres/1000);





        
  }
  
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);


  function toRadian(degree) {
    return degree*Math.PI/180;
}








