var w = window.innerWidth,
    h = window.innerHeight,
    start = Date.now();
    
var rings = [];
for(i = 0; i<50; i++){
  rings.push({
    radius: 300 * (Math.random()*4), 
    width: (Math.random()*1)+1, 
    speed: ((Math.random()*-2e-3)+(-1e-3)) 
  });
}

// svg container
var svg = d3.select("body").append("svg:svg")
    .attr("width", w)
    .attr("height", h)
    .append("svg:g")
    .attr("transform", "translate(" + 5*w/6 + "," + 0 + ")scale(1)");

// rings
var ring = svg.selectAll("g")
    .data(rings)
    .enter().append("svg:g")
    .attr("class", "ring")
    .each(ringEnter);


d3.timer(function rotateRing() {
  var elapsed = Date.now() - start,
      rotate = function(d) { return "rotate(" + d.speed * elapsed + ")"; };
  // rotates ring
  ring
    .attr("transform", rotate)
    .selectAll("circle")
    .attr("transform", rotate);
});

function ringEnter(d, i) {
  var n = Math.floor( Math.PI / ((Math.random()*50)+50) * d.radius / d.width * Math.SQRT1_2),
      k = 360/n;

  d3.select(this).selectAll("g")
      .data(d3.range(n).map(function() { return d; }))
    .enter().append("svg:g")
      .attr("class", "square")
      .attr("transform", function(_, i) { return "rotate(" + i * ((k-2)+(Math.random()*2)) + ")translate(" + d.radius + ")"; })
    .append("svg:circle")
      .attr("cx", -d.width / 2)
      .attr("cy", -d.width / 2)
      .attr("r", d.width)
      .attr("opacity", Math.random());
}
