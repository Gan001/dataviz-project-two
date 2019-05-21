// Creating map object
var myMap = L.map("map", {
    center: [25.7617, -80.1918],
    zoom: 11
  });
  
  // Adding tile layer to the map
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);
  
  
  // Grab the data with d3 to make markers for issue types
  d3.json("/services").then(function(data){
    // Create a new marker cluster group
    var markers = L.markerClusterGroup();
       
    for(var i = 0; i < data.longitude.length;i++){

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([data.latitude[i], data.longitude[i]])
        .bindPopup(data.issue_type[i]));
    }

    // Add our marker cluster layer to the map
    myMap.addLayer(markers);
    
  });