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

var cdata;

d3.json("/census",function(data) {
  cdata = data;
  console.log(data)});

var MHI = [];
var zip = [];
var poverty = [];

d3.json("/census",function(data) {  
  data.Income.forEach(function (value) {
    MHI.push(value);
  });  
});

d3.json("/census",function(data) {  
  data.Poverty.forEach(function (value) {
    poverty.push(value);
  });  
});

d3.json("/census",function(data) {  
  data.Zipcode.forEach(function (value) {
    zip.push(value);
  });  
});


function MHIfromzip(zipcode) {
  for(var i = 0; i < zip.length; i += 1) {
      if(zip[i] == zipcode) {
          return MHI[i];
      }
  }
  return ' Data not in census';
}

function povertyfromzip(zipcode) {
  for(var i = 0; i < zip.length; i += 1) {
      if(zip[i] == zipcode) {
          return poverty[i] * 100 + '%';
      }
  }
  return ' Data not in census';
}
// console.log(MHI);

// Link to GeoJSON
var APILink = "https://opendata.arcgis.com/datasets/fee863cb3da0417fa8b5aaf6b671f8a7_0.geojson";

var geojson;
var data1;
// Grab data with d3
d3.json(APILink, function(data) {
  data1 = data;
  console.log(data1);
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
      // layer.bindPopup(feature.properties.ZIP + ", " + "<br>Poverty Rate:<br>"+ povertyfromzip(feature.properties.ZIP) + "<br>Median Household Income:<br>" +
      //   "$" + MHIfromzip(feature.properties.ZIP));
      // console.log('feature');
      // console.log(feature);
      // console.log('layer.feature');
      // console.log(layer.feature);
        layer.on('mouseover', function(event) { 
          layer = event.target;
          // console.log('event');
          // console.log(event.target);

          // layer.openPopup();
          layer.setStyle({
            weight: 5,
            color: 'black',
            dashArray: '',
            fillOpacity: 0.7
            });
          // console.log('layer.feature');
          // console.log(layer.feature.properties.ZIP);
          info.update(layer.feature.properties.ZIP);
          svgadd.update(layer.feature.properties.ZIP);
        });
        layer.on('mouseout', function(event) {
          layer = event.target; 
          info.update();
          svgadd.update();

          // layer.closePopup(); 
          layer.setStyle({
            color: "#fff",
            weight: 1,
            fillOpacity: 0.8
          });
          
        });
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

    limits.forEach(function(limits, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;
  };

  // Adding legend to the map
  legend.addTo(myMap);
  
  // Set up the Control
  var info = L.control({ position: "topright" });
  info.onAdd = function() {
    this._div = L.DomUtil.create("div", "control info");
    this.update();
		return this._div;
  };  
  info.update = function (props) {
     this._div.innerHTML = '<h4>Zipcode Information</h4>' +  (props ?
			'<b>' + 'Zipcode :' + props + '<br>' + ' MHI: $' + MHIfromzip(props) + "<br>Poverty Rate:<br>"+ povertyfromzip(props)
			: 'Hover over a zipcode');
  };

  // Adding legend to the map
  info.addTo(myMap);


  // Make SVG For Chart and Text
  var svgadd = L.control({ position: "bottomleft" });  
  
  svgadd.onAdd = function() {
        this._div = L.DomUtil.create("div", "svg info");
        this.update();
      	return this._div;
      };  
  svgadd.update = function (props) {
      var labels = props
      var data = MHIfromzip(props)
      console.log('labels', labels, 'data', data);
      var Information = '<h4>Zipcode Information</h4>' +  (props ?
        '<b>' + 'Zipcode :' + props + '<br>' + ' MHI: $' + MHIfromzip(props) + "<br>Poverty Rate:<br>"+ povertyfromzip(props)
        : 'Hover over a zipcode');
      Information += '<canvas id="myChart" width="10" height="10"></canvas>';
      this._div.innerHTML = Information;
      newChart(labels, data);
      console.log('props', props);
  };
  var newChart = function(labels, data) {
    var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '# of Votes',
                        data: data,
                        backgroundColor: 'blue',
                        borderColor: 'black',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
    };
  // Adding legend to the map
  svgadd.addTo(myMap);






});
// 

