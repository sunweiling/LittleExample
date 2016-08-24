(function($){

	var clicked = false;
    var divLeft = 0,
    	divTop = 0,
    	mousex = 0,
    	mousey = 0;

    var $moveHead = null,
        $moveBody = null;

    var bind_func = function(){

    	$(document).mouseup(function (){
    		clicked = false;
    	});

    	$move_head.mousedown(function(e){
    		clicked = true;

    		var offset = $(this).offset();
            divLeft = parseInt(offset.left,10);
            divTop = parseInt(offset.top,10);
            mousey = e.pageY;
            mousex = e.pageX;
    	});

    	$(document).mousemove(function (event){

    		var button =  event.buttons||event.button;
    		if(!clicked || button != 1)
    			return false;
    		var marginLeft = $moveBody.css("margin-left").replace('px', '');
    		var marginTop = $moveBody.css("margin-top").replace('px', '');
	        var left = divLeft + (event.pageX - mousex - marginLeft);
            var top = divTop + (event.pageY - mousey - marginTop);
            $moveBody.css({
                'top' :  top + 'px',
                'left' : left + 'px',
                'position' : 'absolute'
            });

            return false;
    	});
    };

    $.fn.move_a_move = function($header){
    	$moveHead = $header;
        $moveBody = $(this);
        bind_func();
    };

})(jQuery)