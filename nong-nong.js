// external js: masonry.pkgd.js, imagesloaded.pkgd.js

$('head').append(
	'<style type="text/css">body {display:none;}'
);
$(window).load(function() {
	$('body').delay(300).fadeIn("slow");
});

$(document).ready(function () {
	$('p.navSocial').hide();
	 $("ul li:nth-of-type(2)").click(function () {
        $("p.navSocial").slideToggle();
    });
	
});

$('ul li:nth-of-type(2)').each(function() {
    $(this).show(0).on('click', function(e) {
        // This is only needed if your using an anchor to target the "box" elements
        e.preventDefault();
        
        // Find the next "box" element in the DOM
        $(this).next('.navSocial').slideToggle('fast');
    });
});

jQuery(function($){
    $("img.lazy").lazyload({
        effect: 'fadeIn',
        effectspeed: 300,
		threashold: 0
    });
});

if ($(window).width() > 1200) {
	/* three columns */
	
	function openNav() {
		document.getElementById("mySidenav").style.width = "51vw";
	}

	function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
	}
} 
else if ($(window).width() > 740) {
	/* two columns */
	
	function openNav() {
		document.getElementById("mySidenav").style.width = "51vw";
	}

	function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
	}
} 
else {
	/* one column */
	
	function openNav() {
		document.getElementById("mySidenav").style.width = "100vw";
		/* document.getElementById("main").style.marginLeft = "100vw"; */
	}

	function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
		/* document.getElementById("main").style.marginLeft = "0"; */
	}
}