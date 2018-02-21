// external js: masonry.pkgd.js, imagesloaded.pkgd.js

$('head').append(
	'<style type="text/css">body {display:none;}',
	'<style type="text/css">.who{opacity: 0;margin-top:10px;}'
);

$(window).load(function() {
	$('body').delay(200).fadeIn("slow");
});

$(document).ready(function () {
	$('p.navSocial').hide();
	 $("ul li:nth-of-type(2)").click(function () {
        $("p.navSocial").slideToggle();
    });
	
});

$('ul li:nth-of-type(2)').each(function() {
    $(this).show(0).on('click', function(e) {
        
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




/*
	here comes all the @media query stuffs
*/

if ($(window).width() > 1200) {
	/* three columns */
	
	// $(".item.one").after($(".item.four"), (".item.seven"), (".item.eight"), $(".item.two"), $(".item.five"), $(".item.three"), $(".item.six"));
	
	var delaySpeed = 250;
    var fadeSpeed = 1000;

	function openNav() {
		$("#mySidenav").css({"width": "51vw"});
        $('.who').each(function(i){
            $(this).delay(i*(delaySpeed)).animate({opacity:'1',marginTop:'0px'},fadeSpeed);
        });
	}

	function closeNav() {
		$('.who').each(function(i){
            $(this).delay(i*(delaySpeed)).animate({opacity:'0',marginTop:'10px'},fadeSpeed/10);
        });
		setTimeout(function(){
			$("#mySidenav").css({"width": "0"});
    	}, 300);
	}
} 
else if ($(window).width() > 740) {
	/* two columns */
	
    // $(".item.one").after($(".item.three"), $(".item.five"), $(".item.seven"), $(".item.eight"), $(".item.two"), $(".item.four"), $(".item.six"));
	
	var delaySpeed = 250;
    var fadeSpeed = 1000;

	function openNav() {
		$("#mySidenav").css({"width": "51vw"});
        $('.who').each(function(i){
            $(this).delay(i*(delaySpeed)).animate({opacity:'1',marginTop:'0px'},fadeSpeed);
        });
	}

	function closeNav() {
		$('.who').each(function(i){
            $(this).delay(i*(delaySpeed)).animate({opacity:'0',marginTop:'10px'},fadeSpeed/10);
        });
		setTimeout(function(){
			$("#mySidenav").css({"width": "0"});
    	}, 300);
	}
} 
else {
	/* one column */

	var delaySpeed = 250;
    var fadeSpeed = 1000;

	function openNav() {
		$("#mySidenav").css({"width": "100vw"});
        $('.who').each(function(i){
            $(this).delay(i*(delaySpeed)).animate({opacity:'1',marginTop:'0px'},fadeSpeed);
        });
	}

	function closeNav() {
		$('.who').each(function(i){
            $(this).delay(i*(delaySpeed)).animate({opacity:'0',marginTop:'10px'},fadeSpeed/10);
        });
		setTimeout(function(){
			$("#mySidenav").css({"width": "0"});
    	}, 300);
	}
}