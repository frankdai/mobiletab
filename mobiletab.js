
jQuery.fn.extend({
	mobileTab:function(options) {
		var $=jQuery.noConflict();
		var options=options||{};
		var breakpoint=options.breakpoint||760;
		var $window=$(window);
		var $mobileTitle=$(".mobiletab-content-title");
		var $content=$(".mobiletab-content");
		var $blocks=$(".mobiletab-content-block");
		var currentIndex=options.startIndex||0;
		var $this=this;
		var isMobile;
		var init=function(){
			if($window.width()<breakpoint) {
				$this.hide();
				$mobileTitle.show();
				$content.show();
				$blocks.addClass("mobile");
				isMobile=true;
			}
			else {
				$this.show();
				$mobileTitle.hide();
				$content.removeAttr("style");
				$blocks.removeClass("mobile");
				isMobile=false;
			}
		}
		var restore=function(index) {
			$this.find("span").removeClass("active").eq(index).addClass("active");
			$mobileTitle.removeClass("active").eq(index).addClass("active");
		}
		init();
		(function(){
			var nav=$this.find("span");
			nav.each(function(index,element){
				$(element).click(function(){
					$content.removeClass("active").addClass("inactive").eq(index).removeClass("inactive").addClass("active");
					nav.removeClass("active");
					$(this).addClass("active");
					currentIndex=index;
				})
			})
			$mobileTitle.each(function(index,element){
				$(element).click(function(){
					$mobileTitle.removeClass("active");
					$(this).addClass("active");
					$blocks.removeClass("unfold").addClass("folded").eq(index).addClass("unfold").removeClass("folded");
					currentIndex=index;
				})
			})
		})()
		window.onresize=function(){
			init();
			if (isMobile) {
				restore(currentIndex)
				$blocks.removeClass("unfold").addClass("folded").eq(currentIndex).addClass("unfold").removeClass("folded");
			}
			else {
				restore(currentIndex)
				$content.hide().eq(currentIndex).show();
			}
		}
	}
})