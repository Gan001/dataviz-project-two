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
        .bindPopup("<h5>" + "Zip Code:" + "<a href='https://canvasjs.com/jquery-charts/responsive-chart/'>" + data.zip_code[i].toString() + "</a>" +  
        "</h5><hr><p>" + "Situation:" + data.issue_type[i]  ));
        console.log(data.zip_code[i]);       
    }
//piechart
    // Add our marker cluster layer to the map
    myMap.addLayer(markers);
    
  });

  // Trying to build a pie chart
function piechart(){
  var width = 960,
  height = 500,
  outerRadius = Math.min(width, height) * .5 - 10,
  innerRadius = outerRadius * .6;

  var n = 10,
  data0 = d3.range(n).map(Math.random), // insert data here. original:d3.range(n).map(Math.random),
  data1 = d3.range(n).map(Math.random), // insert data here. d3.range(n).map(Math.random),
  data;

  var color = d3.scale.category20();

  var arc = d3.svg.arc();

  var pie = d3.layout.pie()
  .sort(null);

  var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

  svg.selectAll(".arc")
  .data(arcs(data0, data1))
  .enter().append("g")
  .attr("class", "arc")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
  .append("path")
  .attr("fill", function(d, i) { return color(i); })
  .attr("d", arc);

  transition(1);

  function arcs(data0, data1) {
  var arcs0 = pie(data0),
    arcs1 = pie(data1),
    i = -1,
    arc;
  while (++i < n) {
  arc = arcs0[i];
  arc.innerRadius = innerRadius;
  arc.outerRadius = outerRadius;
  arc.next = arcs1[i];
  }
  return arcs0;
  }

  function transition(state) {
  var path = d3.selectAll(".arc > path")
    .data(state ? arcs(data0, data1) : arcs(data1, data0));

  // Wedges split into two rings.
  var t0 = path.transition()
    .duration(1000)
    .attrTween("d", tweenArc(function(d, i) {
      return {
        innerRadius: i & 1 ? innerRadius : (innerRadius + outerRadius) / 2,
        outerRadius: i & 1 ? (innerRadius + outerRadius) / 2 : outerRadius
      };
    }));

  // Wedges translate to be centered on their final position.
  var t1 = t0.transition()
    .attrTween("d", tweenArc(function(d, i) {
      var a0 = d.next.startAngle + d.next.endAngle,
          a1 = d.startAngle - d.endAngle;
      return {
        startAngle: (a0 + a1) / 2,
        endAngle: (a0 - a1) / 2
      };
    }));

  // Wedges then update their values, changing size.
  var t2 = t1.transition()
      .attrTween("d", tweenArc(function(d, i) {
        return {
          startAngle: d.next.startAngle,
          endAngle: d.next.endAngle
        };
      }));

  // Wedges reunite into a single ring.
  var t3 = t2.transition()
    .attrTween("d", tweenArc(function(d, i) {
      return {
        innerRadius: innerRadius,
        outerRadius: outerRadius
      };
    }));

  setTimeout(function() { transition(!state); }, 5000);
  }

  function tweenArc(b) {
  return function(a, i) {
  var d = b.call(this, a, i), i = d3.interpolate(a, d);
  for (var k in d) a[k] = d[k]; // update data
  return function(t) { return arc(i(t)); };
  };
  }
}
 // End: Trying to build a pie chart