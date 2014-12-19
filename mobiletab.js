
jQuery.fn.extend({
	mobileTab:function(options) {
		var $=jQuery.noConflict();
		var breakpoint=options.breakpoint||760;
		var $window=$(window)
		var DPI=window.devicePixelRatio||1;
		var $mobileTitle=$(".mobiletab-content-title");
		var $this=this;
		var $content=$(".mobiletab-content");
		var $inactiveContent=$(".mobiletab-content.inactive");
		//var currentIndex;
		var init=function(){
			if($window.width()<breakpoint) {
				$this.hide();
				$mobileTitle.show();
				$content.show();
			}
			else {
				$this.show();
				$mobileTitle.hide();
				$content.removeAttr("style");
			}
		}
		init();
		(function(){
			var nav=$this.find("span");
			nav.each(function(index,element){
				$(element).click(function(){
					$content.removeClass("active").addClass("inactive").eq(index).removeClass("inactive").addClass("active");
					nav.removeClass("active");
					this.className+=" active";
					//currentIndex=index
				})
			})
		})()
		window.onresize=function(){
			init();
		}
	}
})