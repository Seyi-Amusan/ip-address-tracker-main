
const ip = document.getElementById('ip-address')
const domainLocation = document.getElementById('location')
const timezone = document.getElementById('timezone')
const region = document.getElementById('region')
const country = document.getElementById('country')
const isp = document.getElementById('isp')
const btn = document.querySelector('button')
const input = document.querySelector('input')


const apiKey = import.meta.env.VITE_API_KEY;


btn.addEventListener('click', e => {
    e.preventDefault()

    const domain = input.value
    const url = `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&domain=${domain}`
    console.log(url);
    
    fetch(url)
    .then(result => result.json())
    .then(data => {
      displayDomainInfo(data);
      return data;
    })
    .then(data => getLocationCoordinates(data.location.region))
    .then(coordinates => showLocationOnMap(coordinates))
})




function displayDomainInfo(data) {
    ip.innerText = data.ip
    region.innerText = data.location.region
    country.innerText = data.location.country
    timezone.innerText = data.location.timezone
    isp.innerText = data.isp
}


let map;

function showLocationOnMap(arr) {
    console.log(arr);
    const key = '8A8gg771CO0aHUJydnCP';

    // Check if the map is already initialized
    if (map) {
        map.setView(arr, 6); // Update the view to the new coordinates
    } else {
        // Initialize the map if it does not exist
        map = L.map('map', {
          center: arr,
            zoom: 6,
            dragging: true,
            scrollWheelZoom: true
        });

        // Add a tile layer to the map
        L.tileLayer(`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`, {
            tileSize: 512,
            zoomOffset: -1,
            minZoom: 1,
            attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
            crossOrigin: true
        }).addTo(map);
    }
  

    // Clear existing layers (if any)
    map.eachLayer((layer) => {
        if (layer instanceof L.Marker || layer instanceof L.Circle) {
            map.removeLayer(layer);
        }
    });

    // Add a new marker to the map
    const marker = L.marker(arr).addTo(map);

    // Add a circle around the marker
    const circle = L.circle(arr, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 800
    }).addTo(map);
}

async function getLocationCoordinates(location) {
  console.log(location);
  const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`)
  const data = await response.json()
  return [data[0].lat, data[0].lon]
}
