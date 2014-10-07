+function($){"use strict";function t(t){return this.each(function(){var e=$(this),o=e.data("bs.affix"),f="object"==typeof t&&t;o||e.data("bs.affix",o=new i(this,f)),"string"==typeof t&&o[t]()})}var i=function(t,e){this.options=$.extend({},i.DEFAULTS,e),this.$target=$(this.options.target).on("scroll.bs.affix.data-api",$.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",$.proxy(this.checkPositionWithEventLoop,this)),this.$element=$(t),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.2.0",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=$(document).height(),e=this.$target.scrollTop(),o=this.$element.offset(),f=this.options.offset,n=f.top,s=f.bottom;"object"!=typeof f&&(s=n=f),"function"==typeof n&&(n=f.top(this.$element)),"function"==typeof s&&(s=f.bottom(this.$element));var a=null!=this.unpin&&e+this.unpin<=o.top?!1:null!=s&&o.top+this.$element.height()>=t-s?"bottom":null!=n&&n>=e?"top":!1;if(this.affixed!==a){null!=this.unpin&&this.$element.css("top","");var h="affix"+(a?"-"+a:""),p=$.Event(h+".bs.affix");this.$element.trigger(p),p.isDefaultPrevented()||(this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(h).trigger($.Event(h.replace("affix","affixed"))),"bottom"==a&&this.$element.offset({top:t-this.$element.height()-s}))}}};var e=$.fn.affix;$.fn.affix=t,$.fn.affix.Constructor=i,$.fn.affix.noConflict=function(){return $.fn.affix=e,this},$(window).on("load",function(){$('[data-spy="affix"]').each(function(){var i=$(this),e=i.data();e.offset=e.offset||{},e.offsetBottom&&(e.offset.bottom=e.offsetBottom),e.offsetTop&&(e.offset.top=e.offsetTop),t.call(i,e)})})}(jQuery);