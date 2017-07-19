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
  let options = {
    // enableHighAccuracy = should the device take extra time or power to return a really accurate result, or should it give you the quick (but less accurate) answer?
    enableHighAccuracy: false,
    // timeout = how long does the device have, in milliseconds to return a result?
    timeout: 5000,
    // maximumAge = maximum age for a possible previously-cached position. 0 = must return the current position, not a prior cached position
    maximumAge: 0
  };
  var LeafIcon = L.Icon.extend({
    options: {
      iconSize: [32, 32],
    }
  });

  let beerIcon = new LeafIcon({iconUrl: '../res/beer.png'});

  // call getCurrentPosition()
  el('track').addEventListener('change', function() {
    /**
    getCurrentPosition() accepts 3 arguments:
    a success callback (required), an error callback (optional), and a set of options (optional)
    **/
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
    let geojsonLayer = new L.GeoJSON.AJAX("res/pub.geojson", {
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon:beerIcon});
      },
      onEachFeature:popUp
    });
    geojsonLayer.addTo(PDVmap);
  }

  function popUp(feature, layer) {
    let popupContent = "<h2><img src='../res/beer.png'>&nbsp;"+feature.properties.name+"</h2>";

    //On construit l'adresse
    if(feature.properties.street || feature.properties.housenumber || feature.properties.postcode
      || feature.properties.city || feature.properties.country) {
      if (feature.properties.street)
        popupContent += feature.properties.street + " ";
      if(feature.properties.housenumber) {
        popupContent += feature.properties.housenumber;
        if(!feature.properties.housenumberannexe) {
          popupContent += ", ";
        }
      }
      if(feature.properties.housenumberannexe)
        popupContent += feature.properties.housenumberannexe + ", ";
      if(feature.properties.postcode)
        popupContent += feature.properties.postcode + " ";
      if(feature.properties.city) {
        popupContent += feature.properties.city;
        if(feature.properties.country)
          popupContent += ","
      }
      if(feature.properties.country)
        popupContent += " " + feature.properties.country
    }

    if(feature.properties.opening_hours)
      popupContent += "<br>Horaire d'ouverture: " + feature.properties.opening_hours;

    if(feature.properties.outdoor_seating) {
      popupContent += "<br>Tables exterieures: ";
      if(feature.properties.outdoor_seating === 'yes') {
        popupContent += "oui";
      }else {
        popupContent += "non";
      }
    }

    if(feature.properties.wheelchair) {
      popupContent += "<br>Accès handicapé: ";
      if(feature.properties.wheelchair === 'yes') {
        popupContent += "oui";
      }else{
        popupContent += "non";
      }
    }

    if (feature.properties.phone)
      popupContent += "<br><i>"+feature.properties.phone+"</i>";

    if (feature.properties.site)
      popupContent += "<br><a href='"+feature.properties.site+"' target='_blank'>"+feature.properties.site+"</a>";

    layer.bindPopup(popupContent);
  }
}
