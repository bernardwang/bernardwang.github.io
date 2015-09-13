"use strict";
/*
function initD3() {
    var ringRange, 
        ringNum,
        starDensity;

    var twinkleStar = function(d){
      var star = d3.select(d);
      star.attr("r",0.5); 
      setTimeout(function(){
        star.attr("r",Math.random()*1.2+1);
      },100);
    };

    var ringInit = function(d){
      var starNum = Math.floor( Math.PI / ((Math.random()*100)+starDensity) * d.radius * Math.SQRT1_2);
      var starPosition = 360/starNum;
      d3.select(this).selectAll("g")
        .data(d3.range(starNum).map(function() { return d; }))
        .enter().append("svg:g")
          .attr("transform", function(_, i) { return "rotate(" + i * ((starPosition-2)+(Math.random()*2)) + ")translate(" + d.radius + ")"; })
          .append("svg:circle")
            .attr("r", Math.random()*1.2+1)
            .attr("opacity", Math.random())
            .attr("fill", function(){
              if(Math.random()*100 > 99.5) { return "#ffff9b"; }
              return "white";
            });
    };

    var large = (w>1300);
    ringRange = large ? 8 : 4; // smaller num, smaller range
    ringNum = large ? 170 : 110; // smaller num, less rings
    starDensity = large ? 100 : 75; // smaller num, more stars

    var rings = [];
    for(i = 0; i < ringNum; i++){
      rings.push({
        radius: 300 * Math.random() * ringRange, 
        speed: ((Math.random()*-15e-4)+(-6e-4)) 
      });
    }
 
    var svg = d3.select("body").append("svg:svg")
      .attr("width", w)
      .attr("height", h)
      .append("svg:g")
        .attr("transform", "translate("+ 3*w/4 +","+ -h/8 +")scale(1)");
    
    var ring = svg.selectAll("g")
      .data(rings)
      .enter().append("svg:g")
        .each(ringInit);
}

function updateD3() {
    var elapsed = (Date.now() - start);
    var rotate = function(d) { return "rotate(" + d.speed * elapsed + ")"; };
    ring.attr("transform", rotate);
    if(Math.random() > 0.3){
        var stars = d3.selectAll("circle");
        twinkleStar(stars[0][Math.floor(Math.random()*stars[0].length)]);
    }
    setTimeout(updateD3,40);
}

  var w = window.innerWidth,
      h = window.innerHeight,
      start = Date.now(),
      i = 0;


  // intialized is_mobile
  var is_mobile = Modernizr.touch;
  
  // svg init, disabled on mobile
  if(!is_mobile){
    
    initD3();
    updateD3();
    
    setTimeout(function(){
      $(".container").fadeTo(1500, 1);
      setTimeout(function(){
        $("svg").fadeTo(3000, 1);
        $(".content").fadeTo(3000, 0.7);
        $("footer").fadeTo(3000, 0.7);
      }, 1200);
    }, 0);
  }

  // init
  if(is_mobile){
    $(".container").css("opacity",1);
    $(".content").css("opacity",1);
    $("footer").css("opacity",1);
    $(".mobile").css("display","block");
    $("body").css("position","fixed");  
  }
*/

setTimeout(function(){
      $(".container").fadeTo(1500, 1);
      setTimeout(function(){
        $("svg").fadeTo(3000, 1);
        $(".content").fadeTo(3000, 0.7);
        $("footer").fadeTo(3000, 0.7);
      }, 1200);
    }, 0);

 var text = [
      "attend hackathons.",
      "rock climb.",
      "nap in my hammock.",
      "slackline.",
      "travel everywhere.",
      "practice yoga."
  ];

  var pos = -1;
  function cycleText(){
    $("#cycle-text").fadeToggle();
    setTimeout(function(){
      i = (i+1)%text.length;
      $("#cycle-text").html(text[i]);
      $("#cycle-text").fadeToggle();
    }, 400);
    setTimeout(cycleText,5000);
  };

