'use strict';

function cycleText(){
    $('#cycle-text').fadeToggle();
    setTimeout(function(){
        pos = (pos+1)%text.length;
        $('#cycle-text').html(text[pos]);
        $('#cycle-text').fadeToggle();
    }, 400);
    setTimeout(cycleText,5000);
}

function init() {  
    text = [
      'attend hackathons.',
      'rock climb.',
      'nap in my hammock.',
      'slackline.',
      'travel everywhere.',
      'practice yoga.'
    ];
    
    touch = Modernizr.touch;
    if(!touch){
        setTimeout(function(){
            $('.container').fadeTo(1500, 1);
            setTimeout(function(){
                $('svg').fadeTo(2000, 1);
                $('.content').fadeTo(2000, 1);
                $('footer').fadeTo(2000, 1);
            }, 1200);
        }, 0);
        
        initD3();
        updateD3();
    }
		pos = -1;
    cycleText();
}

var touch;
var text;
var pos;
    
window.onload = init;