(function($){ 
    'use strict'
    $.fn.mobileTab = function(options) {
          var defaults={'breakpoint':760,
                       };
          options=$.extend({}, defaults, options);
          var $that=$(this),
          	  that=this;
          var $window=$(window)
          var $desktopTitle=$('.mobiletab-desktop-nav');
  		  var $mobileTitle=$('.mobiletab-content-title');
  		  var $content=$('.mobiletab-content-block');
  	      var currentIndex=0;
          return this.each(function(index,element) {
  			var $element=$(element);
  			var init=function(breakpoint){
  				if (breakpoint<options.breakpoint) {
  					$mobileTitle.show().removeClass('active');
  					$mobileTitle.eq(currentIndex).addClass('active');
  					$desktopTitle.hide();
  					$content.hide();
  					$content.removeClass('active').eq(currentIndex).addClass('active').show();
  				}
  				else {
  					$that.removeClass('active');
  					$that.eq(currentIndex).addClass("active");
  					$mobileTitle.hide();
  					$desktopTitle.show();
  					$content.hide();
  					$content.eq(currentIndex).show();
  				}
  			}
  			init($window.width());
  			$element.click(function(){
  				var $this=$(this);
  				$that.removeClass('active');
  				$this.addClass('active');
  				$content.removeClass('active').hide();
  				$content.eq(index).addClass('active').show();
  				currentIndex=index;
  			})
  			$mobileTitle.each(function(index,element){
  				var $element=$(element);
  				$element.click(function(){
  					$mobileTitle.removeClass('active');
  					$(this).addClass('active');
  					$content.removeClass('active').hide();
  					$content.eq(index).addClass('active').show();
  					currentIndex=index;
  				})
  			})
  			$window.resize(function(){
  				init($window.width());
  			})

  			
  			}) 
        return this;
    }
})(jQuery)

