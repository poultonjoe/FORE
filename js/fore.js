var mediaBreakPoint = 991;

$(window).on("scroll", function() {
    if( $(window).scrollTop() > 50 && window.innerWidth > mediaBreakPoint ) {
        $(".top-menu").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".top-menu").removeClass("active");
    }
});

$(document).ready(function(){
	// Create the google map
    google.maps.event.addDomListener(window, 'load', init);
    function init() {
        var mapOptions = {
            zoom: 13,
            center: new google.maps.LatLng(13.757496, 100.512867), // Bangkok
            styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#b4d4e1"},{"visibility":"on"}]}]
        };
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(13.757496, 100.512867),
            map: map,
            title: 'FORE Management Group'
        });
    };

    // Set carousels
    $('.carousel.center-multi').each(function(i,el){
    	$(el).slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			focusOnSelect: true,
			arrows: true,
			dots: false,
			centerMode: true,
  			responsive: [
		    {
		    	breakpoint: mediaBreakPoint,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '60px',
					arrows: true,
					dots: true		   
				}
		    }]
    	});
    });	
    $('.carousel.single').each(function(i,el){
    	$(el).slick({
			arrows: true,
    	});
    });	

    // mobile nav
    var header = $('header');
    $('nav.mobile a.menu-button').click(function(e){
    	e.preventDefault();
    	console.log('cliked nav')
    	header.toggleClass('headerMobileActive');

    });
});
