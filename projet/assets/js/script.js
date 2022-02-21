// map

var map = L.map('map').setView([51, -0.09], 5);
var dist = document.getElementById("dist");
    

L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
    attribution: '&copy; <a href="https://stamen-tiles-{S}.a.ssl.fastly.net">OpenStreetMap</a> contributors'
}).addTo(map);


// search
// api meteo

let weather = {
    apiKey:"2b18542034179d81715467ec99b36ff6",
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    fetchWeather: function (city) {
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
          .then((response) => {
            if (!response.ok) {
              alert("No weather found.");
              throw new Error("No weather found.");
            }
            return response.json();
          })
          .then((data) => this.displayWeather(data));
      },
      displayWeather: function (data) {
        const { name } = data;
        const { icon,description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { lon ,lat } = data.coord;
        document.querySelector(".city").innerText = name;
        document.querySelector(".lon").innerText = "Longitude: "+ lon;
        document.querySelector(".lat").innerText = "Latitude:" + lat;
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
        
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
          "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
          "Speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");

        // Set Map
        map.setView([lat,lon ], 5);

        // Marker map
        
        
        let baliseHTML = 
        '<h2>'+ name +'</h2><p>'+temp+'C°</p>'+
        '<img src="https://openweathermap.org/img/wn/' + icon + '.png" alt="temps"/>';



        L.marker([lat, lon]).addTo(map)
        .bindPopup(baliseHTML)
        .openPopup();
        
      },
      search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
      },
    };
    
    document.querySelector(".search button").addEventListener("click", function () {
      weather.search();
    });
    
    document
      .querySelector(".search-bar")
      .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
          weather.search();
        }
      });
    
    weather.fetchWeather("France");


    
    