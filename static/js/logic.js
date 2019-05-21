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
  
  
  // Grab the data with d3
  d3.json("/services").then(function(data){
       // Create a new marker cluster group
       //console.log(data.issue_type);
       var markers = L.markerClusterGroup();
       //Object.entries(data).forEach(()=>{
         //console.log(data.latitude);
         
         // Set the data location property to a variable
      //var serviceType = data.issue_type;
      //console.log(data[i].issue_type);
      // Check for location property
      //if (serviceType) {
        //console.log(`test: ${data.longitude}`);
        for(var i = 0; i < data.longitude.length;i++){
        // Add a new marker to the cluster group and bind a pop-up
        markers.addLayer(L.marker([data.latitude[i], data.longitude[i]])
          .bindPopup(data.issue_type[i]));
      //}
        }
      // Add our marker cluster layer to the map
   // myMap.addLayer(markers);
       //}); 
       myMap.addLayer(markers);
    //var markers = L.markerClusterGroup();
  
    // Loop through data
    // for (var i = 0; i < data.length; i++) {
  
    //   // Set the data location property to a variable
    //   var location = data[i].issue_type;
    //   console.log(data[i].issue_type);
    //   // Check for location property
    //   if (location) {
  
    //     // Add a new marker to the cluster group and bind a pop-up
    //     markers.addLayer(L.marker([data.latitude, data.longitude])
    //       .bindPopup(data[i].issue_type));
    //   }
  
    // }
  
    // Add our marker cluster layer to the map
    // myMap.addLayer(markers);

  });