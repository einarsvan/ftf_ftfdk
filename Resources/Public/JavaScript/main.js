$(document).ready(function(){

	if($(window).width() <= 700){
		// $('#mobilenav').mmenu();
		// $('h1').css('border','1px solid red');
	}
	
	/**
	* Set breakpoints for javascript
	*/
	$(window).breakpoints({
		breakpoints : [700, 1040]
	});

});


/**
 * Code to run when below 700px
 */
function breakpoint700(){
	$('#mobilenav').mmenu();
}