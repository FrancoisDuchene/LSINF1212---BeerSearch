let PDVmap = L.map('leafletmap', {
  center: [[50.6682012,4.6128839]],
  inertia: true,
  inertiaDeceleration: 2000
}).setView([50.6682012,4.6128839], 15);

let mapTile = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 18
}).addTo(PDVmap);

if('geolocation' in navigator) {

  //SI la géolocalisation est supportée
  /**
  getCurrentPosition() accepts 3 arguments:
  a success callback (required), an error callback (optional), and a set of options (optional)
  **/
  var options = {
    // enableHighAccuracy = should the device take extra time or power to return a really accurate result, or should it give you the quick (but less accurate) answer?
    enableHighAccuracy: false,
    // timeout = how long does the device have, in milliseconds to return a result?
    timeout: 5000,
    // maximumAge = maximum age for a possible previously-cached position. 0 = must return the current position, not a prior cached position
    maximumAge: 0
  };

  // call getCurrentPosition()
  el('track').addEventListener('change', function() {
    navigator.geolocation.getCurrentPosition(success, error, options);
  });

  // upon success, do this
  function success(pos){
    // get longitude and latitude from the position object passed in
    let lng = pos.coords.longitude;
    let lat = pos.coords.latitude;
    el('position').innerText = "latitude: " + lat + " ,longitude: " + lng;
    PDVmap.setView([lat,lng],14);
    let userPos = L.marker([lat,lng]).addTo(PDVmap);
    userPos.bindPopup('Vous vous trouvez ici').openPopup();
    loadGeoJSON();
  }

  // upon error, do this
  function error(err){
    alert('Error: ' + err + ' :('); // alert the error message
  }

  function el(id) {
    return document.getElementById(id);
  }

  function loadGeoJSON() {
    let geojsonLayer = new L.GeoJSON.AJAX("res/pub.geojson", {onEachFeature:popUp});
    geojsonLayer.addTo(PDVmap);
  }

  function popUp(feature, layer) {
    layer.bindPopup(feature.properties.name);
  }
}
