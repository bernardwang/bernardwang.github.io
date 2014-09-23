$(document).ready(function() {
    
    $(window).bind("load", function() {
        var height = window.innerHeight;
        var width = window.innerWidth;
        if(width > 550 || height > 700){ // mobile
            pageTransition();
        }
    });

    function pageTransition(){
	    $("html").backstretch([
	   	    "static/img/bg1.jpg",
            "static/img/bg2.jpg",
   	    	"static/img/bg3.jpg"    
	    ], {duration: 0, fade: 400});
	    setTimeout(function() { 
	        $("html").backstretch("pause");
	   	    $(window).resize(moveLinks).ready(moveLinks);
	    }, 1200);
    }
        
    function moveLinks() {
        var height = window.innerHeight;
        var width = window.innerWidth;
        if (height/width < .58) {
            $("#links").css({
                "left": "27.3%",
                "top": "50%",
                "margin-left": 0,
                "margin-top": width/24,
                "height": width/8.7,
                "width": width/11.6
            });
        }
        else {
            $("#links").css({
                "left": "49.7%",
                "top": "57%",
                "margin-left": -height/2.58,
                "margin-top": 0,
                "height": height/5.1,
                "width": height/6.6
            });
        }
    }
});

