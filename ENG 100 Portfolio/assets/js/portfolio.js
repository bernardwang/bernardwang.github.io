$(document).ready(function(){
   
    //face fades in the begining
    $('.face').fadeIn(500);

    $('body').mouseenter(function() {
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
    $('body').mouseleave(function() {
	
	//face back to normal size
	$('.face').animate({
	    width:'175px',
	    height:'175px',
	},'fast',function(){
        });

	//animates arrows to go away
	$('div img').animate({
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
	upClick();
    });
    $('.right').click(function(){
	rightClick();
    });
    $('.down').click(function(){
	downClick();
    });
    $('.left').click(function(){
	leftClick();
    });
    
    //mouse leave arrow, bubble fades away
    $('.up').mouseleave(function(){	
	$('.about').delay(200).fadeOut(300);
    });
    $('.right').mouseleave(function(){
	$('.resume').delay(200).fadeOut(300);
    });
    $('.down').mouseleave(function(){
	$('.contact').delay(200).fadeOut(300);
    });
    $('.left').mouseleave(function(){
	$('.projects').delay(200).fadeOut(300);
    });

 
});


/*/reset arrow locations
function resetArrow(){    
    $('.up').css({'top':'+20px'});
    $('.right').css({'right':'+20px'});
    $('.down').css({'bottom':'+20px'});
    $('.left').css({'left':'+20px'});
}*/

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
    });
}
function leftClick(){
    $('.left').animate({
	width:'0px',
	height:'0px',
	left:'-45px',
    },'fast',function(){
	$('.left').hide();
	$('.left').css({'left':'+35px'});
    });
}

function upBubbleOpen{
    $('.about').animate({
	width:'0px',
	height:'0px',
	left:'-45px',
    },'fast',function(){
	$('.about').animate({

	});
    });
	
}
