/**
Core script to handle the entire theme and core functions
**/

function getUrlParams(dParam) {
    var dPageURL = window.location.search.substring(1),
        dURLVariables = dPageURL.split('&'),
        dParameterName,
        i;

    for (i = 0; i < dURLVariables.length; i++) {
        dParameterName = dURLVariables[i].split('=');

        if (dParameterName[0] === dParam) {
            return dParameterName[1] === undefined ? true : decodeURIComponent(dParameterName[1]);
        }
    }
}

var Vora = function(){
	
	/* Search Bar ============ */
	var screenWidth = $( window ).width();
	
	
	var handleDraggableCard = function() {
		var dzCardDraggable = function () {
		 return {
		  //main function to initiate the module
		  init: function () {
		   var containers = document.querySelectorAll('.draggable-zone');

		   if (containers.length === 0) {
			return false;
		   }

		   var swappable = new Sortable.default(containers, {
			draggable: '.draggable',
			handle: '.draggable.draggable-handle',
			mirror: {
			 appendTo: 'body',
			 constrainDimensions: true
			}
			
		   });
		   swappable.on('drag:stop', () => {
				setTimeout(function(){
					setBoxCount();
				}, 200);
				
			})
		  }
		 };
		}();

		jQuery(document).ready(function () {
		 dzCardDraggable.init();
		});
		
		
		function setBoxCount(){
			var cardCount = 0;
			jQuery('.dropzoneContainer').each(function(){
				cardCount = jQuery(this).find('.draggable-handle').length;
				jQuery(this).find('.totalCount').html(cardCount);
			});
		}
	}
	
	/* Function ============ */
	return {
		init:function(){
			handleDraggableCard();
		},

		
		load:function(){
			handleSelectPicker();
			handleTheme();
		},
		
		resize:function(){
			
			
		}
	}
	
}();

/* Document.ready Start */	
jQuery(document).ready(function() {
    'use strict';
	Vora.init();
	
});
/* Document.ready END */

/* Window Load START */
jQuery(window).on('load',function () {
	'use strict'; 
	Vora.load();
	
});
/*  Window Load END */
/* Window Resize START */
jQuery(window).on('resize',function () {
	'use strict'; 
	Vora.resize();
});
/*  Window Resize END */