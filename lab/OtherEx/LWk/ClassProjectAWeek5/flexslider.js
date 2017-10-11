function myFunction () {
	document.getELementsByClassName("topnav")[0].classList.toggle("responsive");
}	

// Can also be used with $(document).ready()
$(window).load(function(){
	$('.flexslider').flexslider({
	animation: "slide"
	});
});
