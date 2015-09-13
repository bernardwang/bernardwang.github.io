function initD3() {
    
    w = window.innerWidth;
    h = window.innerHeight;
    start = Date.now();

    twinkle = function(d){
      var star = d3.select(d);
      star.attr("r",0.5); 
      setTimeout(function(){
        star.attr("r",Math.random()*1.2+1);
      },100);
    };

    ringInit = function(d){
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

    largeScreen = (w>1300);
    ringRange = largeScreen ? 8 : 4; // smaller num, smaller range
    ringNum = largeScreen ? 170 : 110; // smaller num, less rings
    starDensity = largeScreen ? 100 : 75; // smaller num, more stars

    rings = [];
    for(var i = 0; i < ringNum; i++){
      rings.push({
        radius: 300 * Math.random() * ringRange, 
        speed: ((Math.random()*-15e-4)+(-6e-4)) 
      });
    }
 
    svg = d3.select("body").append("svg:svg")
      .attr("width", w)
      .attr("height", h)
      .append("svg:g")
        .attr("transform", "translate("+ 3*w/4 +","+ -h/8 +")scale(1)");
    
    ring = svg.selectAll("g")
      .data(rings)
      .enter().append("svg:g")
        .each(ringInit);
}

function updateD3() {
    elapsed = (Date.now() - start);
    rotate = function(d) { return "rotate(" + d.speed * elapsed + ")"; };
    ring.attr("transform", rotate);
    if(Math.random() > 0.3){
        stars = d3.selectAll("circle");
        twinkle(stars[0][Math.floor(Math.random()*stars[0].length)]);
    }
    setTimeout(updateD3,40);
}

var svg,
    rings,
    ring,
    
    twinkle,
    ringInit,
    
    ringRange, 
    ringNum,
    starDensity,

    elapsed,
    rotate,
    stars,
    
    w,
    h,
    start,
    
    largeScreen;