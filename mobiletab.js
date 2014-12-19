
jQuery.fn.extend({
	changeClass:function(removedClassName,addedClassName,index) {
			this.removeClass(removedClassName)
				.addClass(addedClassName)
				.eq(index)
				.removeClass(addedClassName)
				.addClass(removedClassName);
	},
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
				$blocks.removeClass("desktop").addClass("mobile");
				isMobile=true;
			}
			else {
				$this.show();
				$mobileTitle.hide();
				$content.removeAttr("style");
				$blocks.removeClass("mobile").addClass("desktop");
				isMobile=false;
			}
		}
		var restore=function(index) {
			$this.find("span").removeClass("active").eq(index).addClass("active");
			$mobileTitle.removeClass("active").eq(index).addClass("active");
			$blocks.changeClass("unfold","folded",index);
		}

		init();
		(function(){
			var nav=$this.find("span");
			nav.each(function(index,element){
				$(element).click(function(){
					$content.changeClass("active","inactive",index);
					nav.removeClass("active");
					$(this).addClass("active");
					currentIndex=index;
				})
			})
			$mobileTitle.each(function(index,element){
				$(element).click(function(){
					$mobileTitle.removeClass("active");
					$(this).addClass("active");
					$blocks.changeClass("unfold","folded",index);
					currentIndex=index;
				})
			})
		})()
		window.onresize=function(){
			init();
			if (isMobile) {
				restore(currentIndex);
			}
			else {
				restore(currentIndex);
				$content.changeClass("active","inactive",currentIndex);
			}
		}
	}
})