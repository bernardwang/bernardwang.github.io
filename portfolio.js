$(document).ready(function(){
	
	//toggle for bubble fading away
	var clicked = false;
	var instruct = true;

    //face fades in the begining
    $('.face').fadeIn(500);
    $('.instructions').delay(300).fadeIn(1000);

    //when mouse over face
    $('.face').mouseenter(function() {
    	if(instruct==true){
    		$('.instructions').fadeOut(500);
    		$('.instructions').text("click on arrows to navigate");
    		$('.instructions').fadeIn(500)
    		instruct=false;
    	}
		//makes face pop out
		if(clicked==false)
		{
			$('.face').animate({
	    		width:'200px',
	   			height:'200px',
			},150);

			//arrow animations
			arrowEnter();
		}
		if(clicked==true)
		{
			$('.face').animate({
	    		width:'90px',
	   			height:'90px',
			},150);
		}
    });


    //when mouse leaves center of screen
    $('.container').mouseleave(function() {

		//face back to normal size if arrow not clicked
		if(clicked==false)
		{
			$('.face').animate({
	    		width:'175px',
	    		height:'175px',
			},150);
		}
		if(clicked==true)
		{
			$('.face').animate({
	    		width:'75px',
	    		height:'75px',
			},150);
		}
		arrowExit();
    });
    
    //when mouse leaves center of screen
    $('.face').mouseleave(function(){
    	if(clicked==true){
    		arrowExit();
    	}
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
    	if(clicked==false){
			$('.about').fadeOut(200);
		}	
    });
	$('.right').mouseleave(function(){
		if(clicked==false){
			$('.resume').fadeOut(200);
		}	
    });
    $('.down').mouseleave(function(){
    	if(clicked==false){
			$('.contact').fadeOut(200);
		}
    });
    $('.left').mouseleave(function(){
    	if(clicked==false){
			$('.projects').fadeOut(200);
		}	
    });

  
    $('.up').click(function(){
    	$('.instructions').fadeOut(500);
    	clicked = true;
		upClick();
		upBubbleOpen();
		upNavHome();

		//clicked = 0;
    });
	$('.right').click(function(){
		$('.instructions').fadeOut(500);
		clicked = true;
		rightClick();
		rightBubbleOpen();
		rightNavHome();

		//clicked = 0;
    });
    $('.down').click(function(){
    	$('.instructions').fadeOut(500);
    	clicked = true;
		downClick();
		bottomBubbleOpen();
		downNavHome();

		//clicked = 0;
    });
    $('.left').click(function(){
    	$('.instructions').fadeOut(500);
    	clicked = true;
		leftClick();
		leftBubbleOpen();
		leftNavHome();

		//clicked = 0;
    });

    //click on face and animation
	$('.face').click(function(){
		clicked = false;
		masterReset();
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
    },200,function(){
    });
    $('.down').animate({
		width:'35px',
		height:'35px',
		opacity:1,
		bottom:'+25px',
    },200,function(){
    });
    $('.right').animate({
		width:'35px',
		height:'35px',
		opacity:1,
		right:'+25px',
    },200,function(){
    });
    $('.left').animate({
		width:'35px',
		height:'35px',
		opacity:1,
		left:'+25px',
    },200,function(){
    });
}

function arrowExit(){
	//animates arrows to go away
	$('.arrow img').show();
	$('.arrow img').animate({
	    width:'0px',
    	height:'0px',

    },200,function(){
	 	$('.up').hide();
	   	$('.right').hide();
	    $('.down').hide();
	   	$('.left').hide();
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
    $('.right').animate({
		width:'50px',
		height:'50px',
		right:'+0px',
    },150,function(){
    });
}
function downMouse(){  
    $('.contact').fadeIn(200);	//
    $('.down').animate({
		width:'50px',
		height:'50px',
		bottom:'+0px',
    },150,function(){
    });
}
function leftMouse(){
    $('.projects').fadeIn(200);		
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
	$('.about').delay(90).animate({	//'pushes' bubble with the arrow
		top:'-170px',
	},50,function(){	//removes text and arrows and finishes push to the window edge
		$('.arrow').fadeOut(150);	

		$('.about').text("");	
		$('.about').css('position','fixed');
		$('.about').css('top','0px');

		$('.about').animate({	//animates 'squish'
			width:'50%',
			height:'5%',
		},200,function(){
			$('.about').css('border-radius','60px'); 	//animates bubble expand
			$('.about').css('background-image','url("img/topbanner.png")');
			$('.about').css('background-color','white');

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
	$('.resume').delay(100).animate({
		right:'-140%',
	},100,function(){
		$('.arrow').fadeOut(150);

		$('.resume').text("");
		$('.resume').css('position','fixed');
		$('.resume').css('right','0px');

		$('.resume').animate({
			width:'5%',
			height:'50%',
		},200,function(){
			$('.resume').css('border-radius','60px');
			$('.resume').css('background-image','url("img/rightbanner.png")');
			$('.resume').css('background-color','white');

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
	$('.contact').delay(90).animate({
		bottom:'-170px',
	},50,function(){
		$('.arrow').fadeOut(150);

		$('.contact').text("");
		$('.contact').css('position','fixed');
		$('.contact').css('bottom','0px');

		$('.contact').animate({
			width:'50%',
			height:'5%',
		},200,function(){
			$('.contact').css('border-radius','60px');
			$('.contact').css('background-image','url("img/bottombanner.png")');
			$('.contact').css('background-color','white');

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
	$('.projects').delay(100).animate({
		left:'-140%',
	},100,function(){
		$('.arrow').fadeOut(150);

		$('.projects').text("");
		$('.projects').css('position','fixed');
		$('.projects').css('left','0px');

		$('.projects').animate({
			width:'5%',
			height:'50%',
		},200,function(){
			$('.projects').css('border-radius','60px');
			$('.projects').css('background-image','url("img/leftbanner.png")');
			$('.projects').css('background-color','white');
			
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

function clearHome(){
	$('.arrow').fadeOut(150);
	//$('.face').fadeOut(150);
}

//shows only relavant text
function upChangeText(){
	$('.aboutText').css('display','block');

	$('.text').fadeIn(150); 
	$('.resumeText').hide();
	$('.contactText').hide();
	$('.projectsText').hide();
}
function rightChangeText(){
	$('.resumeText').css('display','block');

	$('.text').fadeIn(150); 
	$('.aboutText').hide();
	$('.contactText').hide();
	$('.projectsText').hide();
}
function bottomChangeText(){
	$('.contactText').css('display','block');

	$('.text').fadeIn(150); 
	$('.aboutText').hide();
	$('.resumeText').hide();
	$('.projectsText').hide();
}
function leftChangeText(){
	$('.projectsText').css('display','block');

	$('.text').fadeIn(150); 
	$('.aboutText').hide();
	$('.resumeText').hide();
	$('.contactText').hide();
}

function upNavHome(){
	$('.face').css('position','fixed');
	$('.face').delay(375).animate({
		width: '75px',
		height: '75px',
		top: '85%',
	},150,function(){
	});
}
function rightNavHome(){
	$('.face').css('position','fixed');
	$('.face').delay(410).animate({
		width: '75px',
		height: '75px',
		right: '91%',
	},200,function(){
	});
}
function downNavHome(){
	$('.face').css('position','fixed');
	$('.face').delay(375).animate({
		width: '75px',
		height: '75px',
		top: '-85%',
	},150,function(){
	});
}
function leftNavHome(){
	$('.face').css('position','fixed');
	$('.face').delay(410).animate({
		width: '75px',
		height: '75px',
		left: '91%',
	},200,function(){
	});
}

function masterReset(){

	//resets face and arrows
	$('.face').animate({
		width: '175px',
    	height: '175px',
    	top: '0', 
		bottom: '0', 
		left: '0', 
		right: '0',
	})
	$('.arrow').show();

	//resets bubbles
	$('.text').fadeOut(150);
	$('.about').fadeOut(150);
	$('.resume').fadeOut(150);
	$('.contact').fadeOut(150);
	$('.projects').fadeOut(150);

	$('.bubbles div').css({
		'display': 'none',
		'width': '125px',
    	'height': '125px',
    	'position': 'absolute',
    	'background-image': 'none',
	})
	$('.about').css({
		'top': '0', 'bottom': '1', 'left': '0', 'right': '0',
    	'top': '-155px',
    	'background-color': '#34dceb',
    	})
	$('.about').text("about");
	$('.resume').css({
		'top': '0', 'bottom': '0', 'left': '1', 'right': '0',
    	'right': '-155px',
    	'background-color': '#319be7',
    	})
	$('.resume').text("resume");
	$('.contact').css({
		'top': '1', 'bottom': '0', 'left': '0', 'right': '0',
    	'bottom': '-155px',
    	'background-color': '#6170e5',
    	})
	$('.contact').text("contact");
	$('.projects').css({
		'top': '', 'bottom': '0', 'left': '0', 'right': '1',
    	'left': '-155px',
    	'background-color': '#9A0066',
    	})
	$('.projects').text("projects");
}


