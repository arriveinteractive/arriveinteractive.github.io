
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);


     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });

    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });



    $('.active-works-carousel').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin: 100,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            }
        }
    });
    // Add smooth scrolling to Menu links
    $(".main-menu li a, .smooth").on('click', function(event) {
            if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
              $('html, body').animate({
                scrollTop: $(hash).offset().top - (-10)
            }, 600, function(){

                window.location.hash = hash;
            });
        }
    });

    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });

		var messages = [
		    "360 video/tours",
		    "Virtual Reality",
		    "Html5    Games",
		    "Mobile   Games",
		];

		var index = 0;

	  function nextMsg() {
	         index++;
					 index = index % messages.length;
	         $('#changing-text').html(messages[index]).fadeIn(500).delay(2000).fadeOut(500, nextMsg);
		 };

		 $('#changing-text').hide();

		 nextMsg();

		 function reset() {
			var menu1 = document.querySelector('#menu1');
			var menu2 = document.querySelector('#menu2');
			var menu3 = document.querySelector('#menu3');

			menu1.setAttribute('material', 'color', "#F16745");
			menu2.setAttribute('material', 'color', "#FFC65D");
			menu3.setAttribute('material', 'color', "#7BC8A4");
		};

		 AFRAME.registerComponent('cursor-listener', {
			init: function () {

				var lastIndex = -1;
		    var COLORS = ['red', 'green', 'blue'];
				var sky = document.querySelector('#sky');
				var menu1 = document.querySelector('#menu1');
				var menu2 = document.querySelector('#menu2');
				var menu3 = document.querySelector('#menu3');

				var sky = document.querySelector('#image-360');

	 	     // Create animation.
	 	     sky.setAttribute('animation__fade', {
	 	       property: 'material.color',
	 	       startEvents: 'set-image-fade',
	 	       dir: 'alternate',
	 	       dur: 300,
	 	       from: '#FFF',
	 	       to: '#000'
	 	     });	 	   	

		    menu1.addEventListener('click', function (evt) {
		      reset();
					evt.target.setAttribute('material', 'color', "#F6F0DE");
					sky.emit('set-image-fade');
					setTimeout(function () {
		        // Set image.
		        sky.setAttribute('material', 'src', evt.target.dataset['src']);
						
						if(evt.target.dataset['src'] === "#inc") {
							var marker = document.querySelector("#inc_spot1");
							
							if(marker !== null) {
								var list = marker.getChildren();
								
								for (var i = 0; i < list.length; i++) {
									list[i].setAttribute("visible",true);
								}              
							}
						} else {
							var dispatcher = document.querySelector("#dispatcher");
							
							dispatcher.emit('reset-marker-visibility');
						}
						
						if(evt.target.dataset['src'] === "#monkey") {
							var marker = document.querySelector("#monkeyDesc");
							
							if(marker !== null) {
								var list = marker.getChildren();
								
								for (var i = 0; i < list.length; i++) {
									list[i].setAttribute("visible",true);
								}              
							}
						} else {
							var marker = document.querySelector("#monkeyDesc");
							
							if(marker !== null) {
								var list = marker.getChildren();
								
								for (var i = 0; i < list.length; i++) {
									list[i].setAttribute("visible",false);
								}              
							}
						}
						
		      }, 300);
		    });

		  }
		});


 });
