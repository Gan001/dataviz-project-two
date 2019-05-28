// // Setup svg using Bostock's margin convention

// var margin = {top: 20, right: 160, bottom: 35, left: 30};

// var width = 960 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;

// var svg = d3.select("body")
//   .append("svg")
//   .attr("width", width + margin.left + margin.right)
//   .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


// /* Data in strings like it would be if imported from a csv */

// var data = [
//   { year: "2006", redDelicious: "10", mcintosh: "15", oranges: "9", pears: "6" },
//   { year: "2007", redDelicious: "12", mcintosh: "18", oranges: "9", pears: "4" },
//   { year: "2008", redDelicious: "05", mcintosh: "20", oranges: "8", pears: "2" },
//   { year: "2009", redDelicious: "01", mcintosh: "15", oranges: "5", pears: "4" },
//   { year: "2010", redDelicious: "02", mcintosh: "10", oranges: "4", pears: "2" },
//   { year: "2011", redDelicious: "03", mcintosh: "12", oranges: "6", pears: "3" },
//   { year: "2012", redDelicious: "04", mcintosh: "15", oranges: "8", pears: "1" },
//   { year: "2013", redDelicious: "06", mcintosh: "11", oranges: "9", pears: "4" },
//   { year: "2014", redDelicious: "10", mcintosh: "13", oranges: "9", pears: "5" },
//   { year: "2015", redDelicious: "16", mcintosh: "19", oranges: "6", pears: "9" },
//   { year: "2016", redDelicious: "19", mcintosh: "17", oranges: "5", pears: "7" },
// ];

// var parse = d3.time.format("%Y").parse;


// // Transpose the data into layers
// var dataset = d3.layout.stack()(["redDelicious", "mcintosh", "oranges", "pears"].map(function(fruit) {
//   return data.map(function(d) {
//     return {x: parse(d.year), y: +d[fruit]};
//   });
// }));


// // Set x, y and colors
// var x = d3.scale.ordinal()
//   .domain(dataset[0].map(function(d) { return d.x; }))
//   .rangeRoundBands([10, width-10], 0.02);

// var y = d3.scale.linear()
//   .domain([0, d3.max(dataset, function(d) {  return d3.max(d, function(d) { return d.y0 + d.y; });  })])
//   .range([height, 0]);

// var colors = ["b33040", "#d25c4d", "#f2b447", "#d9d574"];


// // Define and draw axes
// var yAxis = d3.svg.axis()
//   .scale(y)
//   .orient("left")
//   .ticks(5)
//   .tickSize(-width, 0, 0)
//   .tickFormat( function(d) { return d } );

// var xAxis = d3.svg.axis()
//   .scale(x)
//   .orient("bottom")
//   .tickFormat(d3.time.format("%Y"));

// svg.append("g")
//   .attr("class", "y axis")
//   .call(yAxis);

// svg.append("g")
//   .attr("class", "x axis")
//   .attr("transform", "translate(0," + height + ")")
//   .call(xAxis);


// // Create groups for each series, rects for each segment 
// var groups = svg.selectAll("g.cost")
//   .data(dataset)
//   .enter().append("g")
//   .attr("class", "cost")
//   .style("fill", function(d, i) { return colors[i]; });

// var rect = groups.selectAll("rect")
//   .data(function(d) { return d; })
//   .enter()
//   .append("rect")
//   .attr("x", function(d) { return x(d.x); })
//   .attr("y", function(d) { return y(d.y0 + d.y); })
//   .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
//   .attr("width", x.rangeBand())
//   .on("mouseover", function() { tooltip.style("display", null); })
//   .on("mouseout", function() { tooltip.style("display", "none"); })
//   .on("mousemove", function(d) {
//     var xPosition = d3.mouse(this)[0] - 15;
//     var yPosition = d3.mouse(this)[1] - 25;
//     tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
//     tooltip.select("text").text(d.y);
//   });


// // Draw legend
// var legend = svg.selectAll(".legend")
//   .data(colors)
//   .enter().append("g")
//   .attr("class", "legend")
//   .attr("transform", function(d, i) { return "translate(30," + i * 19 + ")"; });
 
// legend.append("rect")
//   .attr("x", width - 18)
//   .attr("width", 18)
//   .attr("height", 18)
//   .style("fill", function(d, i) {return colors.slice().reverse()[i];});
 
// legend.append("text")
//   .attr("x", width + 5)
//   .attr("y", 9)
//   .attr("dy", ".35em")
//   .style("text-anchor", "start")
//   .text(function(d, i) { 
//     switch (i) {
//       case 0: return "Anjou pears";
//       case 1: return "Naval oranges";
//       case 2: return "McIntosh apples";
//       case 3: return "Red Delicious apples";
//     }
//   });


// // Prep the tooltip bits, initial display is hidden
// var tooltip = svg.append("g")
//   .attr("class", "tooltip")
//   .style("display", "none");
    
// tooltip.append("rect")
//   .attr("width", 30)
//   .attr("height", 20)
//   .attr("fill", "white")
//   .style("opacity", 0.5);

// tooltip.append("text")
//   .attr("x", 15)
//   .attr("dy", "1.2em")
//   .style("text-anchor", "middle")
//   .attr("font-size", "12px")
//   .attr("font-weight", "bold");

  // const svg = d3.select(DOM.svg(width, height));

  // const rect = svg.selectAll("g")
  //   .data(y01z)
  //   .enter().append("g")
  //     .attr("fill", (d, i) => z(i))
  //   .selectAll("rect")
  //   .data(d => d)
  //   .join("rect")
  //     .attr("x", (d, i) => x(i))
  //     .attr("y", height - margin.bottom)
  //     .attr("width", x.bandwidth())
  //     .attr("height", 0);

  // svg.append("g")
  //     .call(xAxis);

  // function transitionGrouped() {
  //   y.domain([0, yMax]);

  //   rect.transition()
  //       .duration(500)
  //       .delay((d, i) => i * 20)
  //       .attr("x", (d, i) => x(i) + x.bandwidth() / n * d[2])
  //       .attr("width", x.bandwidth() / n)
  //     .transition()
  //       .attr("y", d => y(d[1] - d[0]))
  //       .attr("height", d => y(0) - y(d[1] - d[0]));
  // }

  // function transitionStacked() {
  //   y.domain([0, y1Max]);

  //   rect.transition()
  //       .duration(500)
  //       .delay((d, i) => i * 20)
  //       .attr("y", d => y(d[1]))
  //       .attr("height", d => y(d[0]) - y(d[1]))
  //     .transition()
  //       .attr("x", (d, i) => x(i))
  //       .attr("width", x.bandwidth());
  // }

  // function update(layout) {
  //   if (layout === "stacked") transitionStacked();
  //   else transitionGrouped();
  // }

  // return Object.assign(svg.node(), {update});
  // function draw(data) {
  //     console.log("Data");
  //     console.log(data);
  //   /*
  //     D3.js setup code
  //   */

  //       //"use strict";
  //       var margin = 75,
  //           width = 1400 - margin,
  //           height = 600 - margin;

  //       var svg = d3.select("body")
  //         .append("svg")
  //           .attr("width", width + margin)
  //           .attr("height", height + margin)
  //         .append('g')
  //             .attr('class','chart');

  //   /*
  //     Dimple.js Chart construction code
  //   */

  //       var myChart = new dimple.chart(svg, data);
  //       var x = myChart.addMeasureAxis("x", "case_owner"); 
  //       myChart.addMeasureAxis("y", "efficiency");
  //       myChart.addSeries(null, dimple.plot.bar);
  //       myChart.draw();
  //     };
  //   //d3.tsv("static/js/world_cup.tsv", draw);
  //   d3.json("/efficiency-data", draw);

  /////////////////////////////////////////
  // stacked bar
  ////////////////////////
    //      var margin = 75,
    //         width = 1400 - margin,
    //         height = 600 - margin;

    //     var svg = d3.select("body")
    //       .append("svg")
    //         .attr("width", width + margin)
    //         .attr("height", height + margin)
    //       .append('g')
    //           .attr('class','chart');

    // //var svg = dimple.newSvg("#chartContainer", 590, 400);
    // d3.json("efficiency-data", function (data) {
    //   //console.log(data);
    //  data.forEach(d =>{
    //    console.log(d.case_owner);
    //    data2 = dimple.filterData(data, "case_owner", d.case_owner)
    //   var myChart = new dimple.chart(svg, data2);
    //   myChart.setBounds(60, 30, 350, 330)
    //   var x = myChart.addCategoryAxis("x", ["case_owner", "issue_type"]);
    //   x.addGroupOrderRule("issue_type");
    //   myChart.addMeasureAxis("y", "efficiency");
    //   var s = myChart.addSeries("case_owner", dimple.plot.area);
    //   s.interpolation = "step";
    //   s.lineWeight = 1;
    //   s.barGap = 0.05;
    //   myChart.addLegend(430, 20, 100, 300, "left");
    //   myChart.draw();
    //  });
    //   // data = dimple.filterData(data, "case_owner", ["Citations_and_Tags", "Public_Works_Road_And_Bridges-16-60"])
    //   // var myChart = new dimple.chart(svg, data);
    //   // myChart.setBounds(60, 30, 350, 330)
    //   // var x = myChart.addCategoryAxis("x", ["case_owner", "issue_type"]);
    //   // x.addGroupOrderRule("Date");
    //   // myChart.addMeasureAxis("y", "efficiency");
    //   // var s = myChart.addSeries("SKU", dimple.plot.area);
    //   // s.interpolation = "step";
    //   // s.lineWeight = 1;
    //   // s.barGap = 0.05;
    //   // myChart.addLegend(430, 20, 100, 300, "left");
    //   // myChart.draw();
    // });

    ////////////////BAR
    function draw(data) {
      
      /*
        D3.js setup code
      */
      console.log('DATA');
      console.log(data);
      // data.forEach(d =>{
      //   console.log(d.issue_type);
      // });
          "use strict";
          var margin = 75,
              width = 1400 - margin,
              height = 600 - margin;

          var svg = d3.select("body")
            .append("svg")
              .attr("width", width + margin)
              .attr("height", height + margin)
            .append('g')
                .attr('class','chart');

      /*
        Dimple.js Chart construction code
      */

          var myChart = new dimple.chart(svg, data);
          var x = myChart.addCategoryAxis("x", ["city", "case_owner"]); 
          myChart.addMeasureAxis("y", "efficiency");
          myChart.addSeries("issue_type", dimple.plot.bar);
          myChart.draw();
        };

        d3.json("/efficiency-data", draw);