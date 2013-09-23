$(document).ready(function(){
	
	//toggle for bubble fading away
	var clicked = 0;

    //face fades in the begining
    $('.face').fadeIn(500);

    $('container').mouseenter(function() {
	
    });

    //when mouse over face
    $('.face').mouseenter(function() {

		//makes face pop out
		$('.face').animate({
	    	width:'200px',
	   		height:'200px',
		},'fast',function(){
		});	

		//arrow animations
		arrowEnter();
    });

    //when mouse leaves center of screen
    $('.container').mouseleave(function() {
	
		//face back to normal size
		$('.face').animate({
	    	width:'175px',
	    	height:'175px',
		},'fast',function(){
        });

		//animates arrows to go away
		$('.arrow img').animate({
		    width:'0px',
	    	height:'0px',
		},200,function(){
		    $('.up').hide();
	    	$('.right').hide();
		    $('.down').hide();
	    	$('.left').hide();
		});
    });
    

    //mouse over arrows, show bubble and arrow animation
    $('.up').mouseenter(function(){
		upMouse();
    });
    $('.right').mouseenter(function(){
		rightMouse();
    });
    $('.down').mouseenter(function(){
		downMouse();
    });
    $('.left').mouseenter(function(){
		leftMouse();
    });

    //mouse leave arrow, bubble fades away
    $('.up').mouseleave(function(){	
    	if(clicked==0){
			$('.about').fadeOut(200);
		}	
    });
	$('.right').mouseleave(function(){
		if(clicked==0){
			$('.resume').fadeOut(200);
		}	
    });
    $('.down').mouseleave(function(){
    	if(clicked==0){
			$('.contact').fadeOut(200);
		}
    });
    $('.left').mouseleave(function(){
    	if(clicked==0){
			$('.projects').fadeOut(200);
		}	
    });


    //click on face and animation
    $('.face').click(function(){
		upClick();
		rightClick();
		downClick();
		leftClick();
    });
    
    //arrow click animation
    $('.up').click(function(){
    	clicked = 1;
		upClick();
		upBubbleOpen();

		//clicked = 0;
    });
	$('.right').click(function(){
		clicked = 1;
		rightClick();
		rightBubbleOpen();

		//clicked = 0;
    });
    $('.down').click(function(){
    	clicked = 1;
		downClick();
		bottomBubbleOpen();

		//clicked = 0;
    });
    $('.left').click(function(){
    	clicked = 1;
		leftClick();
		leftBubbleOpen();

		//clicked = 0;
    });

});



//animation of arrow entering when mouse over face
function arrowEnter(){
    $('.arrow img').show();
    $('.up').animate({
		width:'35px',
		height:'35px',
		opacity:1,
		top:'+25px',
    },'fast',function(){
    });
    $('.down').animate({
		width:'35px',
		height:'35px',
		opacity:1,
		bottom:'+25px',
    },'fast',function(){
    });
    $('.right').animate({
		width:'35px',
		height:'35px',
		opacity:1,
		right:'+25px',
    },'fast',function(){
    });
    $('.left').animate({
		width:'35px',
		height:'35px',
		opacity:1,
		left:'+25px',
    },'fast',function(){
    });
}

//animations of arrows enlarging and bubble fading in when mouse over arrows
function upMouse(){
    $('.about').fadeIn(200);
    $('.up').animate({
		width:'50px',
		height:'50px',
		top:'+0px',
    },150,function(){
    });
}
function rightMouse(){
    $('.resume').fadeIn(200);	//
    $('.resume a').css('display','none');	//
    $('.right').animate({
		width:'50px',
		height:'50px',
		right:'+0px',
    },150,function(){
    });
}
function downMouse(){  
    $('.contact').fadeIn(200);	//
    $('.contact p').css('display','none');	//
    $('.down').animate({
		width:'50px',
		height:'50px',
		bottom:'+0px',
    },150,function(){
    });
}
function leftMouse(){
    $('.projects').fadeIn(200);		//
    $('.projects p').css('display','none');	//
    $('.left').animate({
		width:'50px',
		height:'50px',
		left:'+0px',
    },150,function(){
    });
}


//animations of arrows exiting when face or arrows are clicked on
function upClick() {
    $('.up').animate({
		width:'0px',
		height:'0px',
		top:'-60px',
    },200,function(){
		$('.up').hide();
		$('.up').css({'top':'+35px'});
	});
}
function rightClick(){
    $('.right').animate({
		width:'0px',
		height:'0px',
		right:'-60px',
    },200,function(){
		$('.right').hide();
		$('.right').css({'right':'+35px'});
    });
}
function downClick(){
    $('.down').animate({
		width:'0px',
		height:'0px',
		bottom:'-60px',
    },200,function(){
		$('.down').hide();
		$('.down').css({'bottom':'+35px'});
    });
}
function leftClick(){
    $('.left').animate({
		width:'0px',
		height:'0px',
		left:'-50px',
    },200,function(){
		$('.left').hide();
		$('.left').css({'left':'+35px'});
    });
}

//bubble opening animations
function upBubbleOpen(){	
	$('.about').delay(95).animate({	//'pushes' bubble with the arrow
		top:'-170px',
	},70,function(){	//removes text and finishes push to the window edge
		$('.about h1').fadeOut(150);	
		$('.about').css('position','fixed');
		$('.about').css('top','0px');

		$('.about').animate({	//animates 'squish'
			width:'50%',
			height:'5%',
		},200,function(){
			$('.about').css('border-radius','100px'); 	//animates bubble expand
			$('.about').animate({
			top:'4%',
			height:'80%',
			width:'94%',
		},200,function(){	
			upChangeText();
		});
	});	
	})

}
function rightBubbleOpen(){
	$('.resume').delay(120).animate({
		right:'-370px',
	},50,function(){
		$('.resume h1').fadeOut(150);
		$('.resume').css('position','fixed');
		$('.resume').css('right','0px');

		$('.resume').animate({
			width:'5%',
			height:'50%',
		},200,function(){
			$('.resume').css('border-radius','100px');
			$('.resume').animate({
			right:'2.5%',
			height:'90%',
			width:'88.6%',
		},200,function(){	
			rightChangeText();
		});
	});	
	})
}

function bottomBubbleOpen(){
	$('.contact').delay(95).animate({
		bottom:'-170px',
	},70,function(){
		$('.contact h1').fadeOut(150);
		$('.contact').css('position','fixed');
		$('.contact').css('bottom','0px');

		$('.contact').animate({
			width:'50%',
			height:'5%',
		},200,function(){
			$('.contact').css('border-radius','100px');
			$('.contact').animate({
			bottom:'4%',
			height:'80%',
			width:'94%',
		},200,function(){	
			bottomChangeText();
		});
	});	
	})
}

function leftBubbleOpen(){
	$('.projects').delay(95).animate({
		left:'-370px',
	},50,function(){
		$('.projects h1').fadeOut(150);
		$('.projects').css('position','fixed');
		$('.projects').css('left','0px');

		$('.projects').animate({
			width:'5%',
			height:'50%',
		},200,function(){
			$('.projects').css('border-radius','100px');
			$('.projects').animate({
			left:'2.5%',
			height:'90%',
			width:'88.6%',
		},200,function(){	
			leftChangeText();
		});
	});	
	})
}

function upChangeText(){
	$('.aboutText').fadeIn(100);
	$('.aboutText div').css('text-align','center');
	//$('.aboutBody').fadeIn(150);
	//$('.aboutBody').css('text-align','left');

}
function rightChangeText(){
	$('.resume a').fadeIn(100);
	$('.resume a').css('text-align','center');
}
function bottomChangeText(){
	$('.contact p').fadeIn(100);
	$('.contact p').css('text-align','center');
}
function leftChangeText(){
	$('.projects p').fadeIn(100);
	$('.projects p').css('text-align','center');
}


