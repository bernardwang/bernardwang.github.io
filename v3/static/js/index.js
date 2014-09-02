$(document).ready(function(e) {
	transition();
	setTimeout(function(){
		highlight();
	}, 2500);
});

function transition(){
	setTimeout(function(){
		$('#notebook2').toggleClass("show");
		setTimeout(function(){
			$('#notebook3').toggleClass("show");
			$('#notebook3').rwdImageMaps();
		}, 900);
	}, 2000);
}

function highlight(){
	$('area').mouseover(function (e) {
    	var id = this.id;
  		if(id == "email"){
  			$("#link_hl").attr("src","static/img/email_hl.png");
  		}
  		else if(id == "resume"){
  			$("#link_hl").attr("src","static/img/resume_hl.png");
  		}
  		else if(id == "github"){
  			$("#link_hl").attr("src","static/img/github_hl.png");
  		}
  		else if(id == "linkedin"){
  			$("#link_hl").attr("src","static/img/linkedin_hl.png");
  		}
        $('#link_hl').fadeIn(100);
    });
    $('area').mouseout(function (e) {
    	$('#link_hl').fadeOut(100);
    });
}