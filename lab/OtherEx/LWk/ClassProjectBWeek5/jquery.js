<! -- jQuery -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.min.js">\x3C/script>')</script>

<! -- FlexSlider -->
<script defer src="jquery.flexslider.js"></script>
<script>
function myFunction () {
	document.getELementsByClassName("topnav")[0].classList.toggle("responsive");
}	

// Can also be used with $(document).ready()
$(window).load(function(){
	$('.flexslider').flexslider({
	animation: "slide"
	});
});
</script>