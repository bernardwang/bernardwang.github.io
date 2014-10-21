$(document).ready(function() {

  var w = window.innerWidth,
      h = window.innerHeight,
      start = Date.now();

  var ringRange, 
      ringDensity;

  var i, things = [
        "relaxing in my hammock.",
        "rock climbing.",
        "attending hackathons.",
        "slacklining.",
        "practicing yoga."
      ];

  if(w>1300){
    ringRange = 8;
    ringDensity = 200;
  }
  else if(w>1000){
    ringRange = 4; 
    ringDensity = 150;
  }
  else{
    ringRange = 3; 
    ringDensity = 100;
  }

  setTimeout(function() {
    $(".container").fadeTo(1500, 1);
    $("#cycle").html(things[i=0]);
    setTimeout(function() {
        $("svg").fadeTo(4000, 1);
        $(".content").fadeTo(4000, .7);
        setTimeout(function() { cycleText(); },5000);
      }, 1200);
  }, 0);
      
  // adds rings
  var rings = [];
  for(i = 0; i < ringDensity; i++){
    rings.push({
      radius: 300 * Math.random() * ringRange, 
      width: Math.random()*1.3, 
      speed: ((Math.random()*-15e-4)+(-5e-4)) 
    });
  }

  // svg container
  var svg = d3.select("body").append("svg:svg")
    .attr("width", w)
    .attr("height", h)
    .append("svg:g")
      .attr("class", "sky")
      .attr("transform", "translate("+ 3*w/4 +","+ -h/10 +")scale(1)");
  
  // rings svg
  var ring = svg.selectAll("g")
    .data(rings)
    .enter().append("svg:g")
      .attr("class", "ring")
      .each(ringEnter);
  
  d3.timer(function rotateRing() {
    var elapsed = Date.now() - start,
        rotate = function(d) { return "rotate(" + d.speed * elapsed + ")"; };

    ring
      .attr("transform", rotate)
      .selectAll("circle")
      .attr("transform", rotate);

    var stars = document.getElementsByTagName("star");
    for(var i = 0; i < stars.length; i++){
      
    }
  });
  
  function ringEnter(d, i) {
    var n = Math.floor( Math.PI / ((Math.random()*100)+100) * d.radius * Math.SQRT1_2),
        k = 360/n;
  
    d3.select(this).selectAll("g")
      .data(d3.range(n).map(function() { return d; }))
      .enter().append("svg:g")
        .attr("class", "star")
        .attr("transform", function(_, i) { return "rotate(" + i * ((k-2)+(Math.random()*2)) + ")translate(" + d.radius + ")"; })
      .append("svg:circle")
        .attr("cx", -d.width / 2)
        .attr("cy", -d.width / 2)
        .attr("r", d.width+1)
        .attr("opacity", Math.random())
  }

  function cycleText(){
    $("#cycle").fadeTo(600, 0);
    setTimeout(function() {
        i = (i+1)%things.length;
        $("#cycle").html(things[i]);
        $("#cycle").fadeTo(600, 1);
        setTimeout(function() { cycleText(); }, 5000);
    }, 500);
  }

  $(window).resize(function(){
    w = window.innerWidth;
    h = window.innerHeight;
    $("svg").css("width", w);
    $("svg").css("height", h);
    $(".sky").attr("transform", "translate("+ 3*w/4 +","+ -h/10 +")scale(1)");
  });
});
