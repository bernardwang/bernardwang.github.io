$("html").backstretch([
	"static/img/bg1.jpg",
    "static/img/bg2.jpg",
   	"static/img/bg3.jpg"    
], {duration: 0, fade: 450});

setTimeout(function() { 
	$("html").backstretch("pause");
}, 1350);
