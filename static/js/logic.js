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
  d3.json("/services", function(data){
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

// Link to GeoJSON
var APILink = "https://opendata.arcgis.com/datasets/fee863cb3da0417fa8b5aaf6b671f8a7_0.geojson";

var geojson;

// Grab data with d3
d3.json(APILink, function(data) {

  // Create a new choropleth layer
  geojson = L.choropleth(data, {

    // Define what  property in the features to use
    valueProperty: "Shape__Area",

    // Set color scale
    scale: ["#ffffb2", "#b10026"],

    // Number of breaks in step range
    steps: 10,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },

    // Binding a pop-up to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.ZIP + ", " + feature.properties.State + "<br>Median Household Income:<br>" +
        "$" + feature.properties.MHI);
    }
  }).addTo(myMap);

  // Set up the legend
  var legend = L.control({ position: "bottomright" });
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    var limits = geojson.options.limits;
    var colors = geojson.options.colors;
    var labels = [];

    // Add min & max
    var legendInfo = "<h1>Median Income</h1>" +
      "<div class=\"labels\">" +
        "<div class=\"min\">" + limits[0] + "</div>" +
        "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
      "</div>";

    div.innerHTML = legendInfo;

    limits.forEach(function(limit, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;
  };

  // Adding legend to the map
  legend.addTo(myMap);

});
