$(document).ready(function(e) {
	setTimeout(function(){
		$('#notebook2').toggleClass("show");
		setTimeout(function(){
			$('#notebook3').toggleClass("show");
			$('#notebook3').rwdImageMaps();
		}, 900);
	}, 900);
});