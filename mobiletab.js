
jQuery.fn.extend({
	mobileTab:function(options) {
		var $=jQuery.noConflict();
		var options=options||{};
		var breakpoint=options.breakpoint||760;
		var $window=$(window);
		var $mobileTitle=$(".mobiletab-content-title");
		var $this=this;
		var isMobile;
		var $content=$(".mobiletab-content");
		var $blocks=$(".mobiletab-content-block");
		var init=function(){
			if($window.width()<breakpoint) {
				$this.hide();
				$mobileTitle.show();
				$content.show();
				isMobile=true;
			}
			else {
				$this.show();
				$mobileTitle.hide();
				$content.removeAttr("style");
				isMobile=false;
			}
		}
		init();
		(function(){
			var nav=$this.find("span");
			nav.each(function(index,element){
				$(element).click(function(){
					$content.removeClass("active").addClass("inactive").eq(index).removeClass("inactive").addClass("active");
					nav.removeClass("active");
					$(this).addClass("active");
				})
			})
			$mobileTitle.each(function(index,element){
				$(element).click(function(){
					$(this).parent().removeClass("active");
					$(this).addClass("active");
					$block.hide().eq(index).show();
				})
			})
		})()
		window.onresize=function(){
			init();
		}
	}
})