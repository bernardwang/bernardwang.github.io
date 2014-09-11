$(document).ready(function(e) {
	transition();
	setTimeout(function(){
		$('#notebook1').hide();
		$('#notebook2').hide();
		//$('.spinner').hide();
		highlight();
	}, 2100);//4000); 			//time before highlighting is enabled
});

function transition(){
	//setTimeout(function(){
		//$('#notebook1').toggleClass("show");
		setTimeout(function(){
			$('#notebook2').toggleClass("show");
			setTimeout(function(){
				$('#notebook3').toggleClass("show");
				$('#notebook3').rwdImageMaps();
			}, 600);	// time for notebook2
		}, 500);		// time for notebook1
	//}, 1000);			// time before load screen is disabled
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
        $('#link_hl').fadeIn(10);
    });
    $('area').mouseout(function (e) {
    	$('#link_hl').fadeOut(10);
    });
}