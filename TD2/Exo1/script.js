
// Positions


var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

function success(pos) {

    var map = L.map('map').setView([51, -0.09], 5);
    
    

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
        [lat, long],
        [43.70313, 7.26608],
        [43.296482, 5.36978],
        
    ],{
        color: 'red',
        fillOpacity: 0.2
    }).addTo(map);

    var segment = L.polygon([
        [43.70313, 7.26608],
        [43.296482, 5.36978],
        
    ],{
        color: 'yellow'
    }).addTo(map);


  }
  
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);





