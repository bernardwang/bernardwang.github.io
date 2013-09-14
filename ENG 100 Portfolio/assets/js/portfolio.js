$(document).ready(function(){
	var clicked = 0;

    //face fades in the begining
    $('.face').fadeIn(500);

    $('container').mouseenter(function() {
	/*$('div img').hide();
	$('div img').css({'width':'0px'});
	$('div img').css({'height':'0px'});
	$('.up').css({'top':'+187px'});
	$('.right').css({'right':'+187px'});
	$('.down').css({'bottom':'+187px'});
	$('.left').css({'left':'+187px'});*/
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
		//clicked = 0;
    });
	$('.right').click(function(){
		clicked = 1;
		rightClick();
		//clicked = 0;
    });
    $('.down').click(function(){
    	clicked = 1;
		downClick();
		//clicked = 0;
    });
    $('.left').click(function(){
    	clicked = 1;
		leftClick();
		//clicked = 0;
    });
    
    //mouse leave arrow, bubble fades away
    $('.up').mouseleave(function(){	
    	if(clicked==0){
			$('.about').fadeOut(300);
		}	
    });
	$('.right').mouseleave(function(){
		if(clicked==0){
			$('.resume').fadeOut(300);
		}	
    });
    $('.down').mouseleave(function(){
    	if(clicked==0){
			$('.contact').fadeOut(300);
		}
    });
    $('.left').mouseleave(function(){
    	if(clicked==0){
			$('.projects').fadeOut(300);
		}	
    });
});



//animation of arrow entering when mouse over face
function arrowEnter(){
    $('.arrow img').show();
    $('.up').animate({
		width:'35px',
		height:'35px',
		opacity:1,
		top:'+20px',
    },'fast',function(){
    });
    $('.down').animate({
		width:'35px',
		height:'35px',
		opacity:1,
		bottom:'+20px',
    },'fast',function(){
    });
    $('.right').animate({
		width:'35px',
		height:'35px',
		opacity:1,
		right:'+20px',
    },'fast',function(){
    });
    $('.left').animate({
		width:'35px',
		height:'35px',
		opacity:1,
		left:'+20px',
    },'fast',function(){
    });
}

//animations of arrows enlarging and bubble fading in when mouse over arrows
function upMouse(){
    $('.about').fadeIn(300);
    $('.up').animate({
		width:'45px',
		height:'45px',
		top:'+5px',
    },150,function(){
    });
}
function rightMouse(){
    $('.resume').fadeIn(300);
    $('.right').animate({
		width:'45px',
		height:'45px',
		right:'+5px',
    },150,function(){
    });
}
function downMouse(){  
    $('.contact').fadeIn(300);
    $('.down').animate({
		width:'45px',
		height:'45px',
		bottom:'+5px',
    },150,function(){
    });
}
function leftMouse(){
    $('.projects').fadeIn(300);
    $('.left').animate({
		width:'45px',
		height:'45px',
		left:'+5px',
    },150,function(){
    });
}


//animations of arrows exiting when face or arrows are clicked on
function upClick() {
    $('.up').animate({
		width:'0px',
		height:'0px',
		top:'-45px',
    },'fast',function(){
		$('.up').hide();
		$('.up').css({'top':'+35px'});
		upBubbleOpen();
    });
}
function rightClick(){
    $('.right').animate({
		width:'0px',
		height:'0px',
		right:'-45px',
    },'fast',function(){
		$('.right').hide();
		$('.right').css({'right':'+35px'});
		rightBubbleOpen();
    });
}
function downClick(){
    $('.down').animate({
		width:'0px',
		height:'0px',
		bottom:'-45px',
    },'fast',function(){
		$('.down').hide();
		$('.down').css({'bottom':'+35px'});
		bottomBubbleOpen();
    });
}
function leftClick(){
	$('.about h1').fadeOut(200);
    $('.left').animate({
		width:'0px',
		height:'0px',
		left:'-45px',
    },'fast',function(){
		$('.left').hide();
		$('.left').css({'left':'+35px'});
		leftBubbleOpen();
    });
}

//bubble opening animations
function upBubbleOpen(){
	$('.about h1').fadeOut(150);
	$('.about').css('position','fixed');
	$('.about').css('top','0px');
	$('.about').animate({
		width:'50%',
		height:'5%',
	},200,function(){
		$('.about').css('border-radius','200px');
		$('.about').animate({
			top:'4%',
			height:'80%',
			width:'95%',
		},200,function(){	
		});
	});	
}
function rightBubbleOpen(){
	$('.resume h1').fadeOut(150);
	$('.resume').css('position','fixed');
	$('.resume').css('right','0px');
	$('.resume').animate({
		width:'5%',
		height:'50%',
	},200,function(){
		$('.resume').css('border-radius','200px');
		$('.resume').animate({
			right:'2.5%',
			height:'90%',
			width:'88.6%',
		},200,function(){	
		});
	});	
}
function bottomBubbleOpen(){
	$('.contact h1').fadeOut(150);
	$('.contact').css('position','fixed');
	$('.contact').css('bottom','0px');
	$('.contact').animate({
		width:'50%',
		height:'5%',
	},200,function(){
		$('.contact').css('border-radius','200px');
		$('.contact').animate({
			bottom:'4%',
			height:'80%',
			width:'95%',
		},200,function(){	
		});
	});	
}
function leftBubbleOpen(){
	$('.projects h1').fadeOut(150);
	$('.projects').css('position','fixed');
	$('.projects').css('left','0px');
	$('.projects').animate({
		width:'5%',
		height:'50%',
	},200,function(){
		$('.projects').css('border-radius','200px');
		$('.projects').animate({
			left:'2.5%',
			height:'90%',
			width:'88.6%',
		},200,function(){	
		});
	});	
}
