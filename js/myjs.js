// JavaScript Document
$(document).ready(function(e) {
	
	 $(window).resize(function() {
	 var wdth=$(window).width();
		if(wdth>768){
		$('.header').css("background-attachment","fixed");
		$('.con').css("background-attachment","fixed");
		}
		
	 })
	  $(function() {
       var wdth=$(window).width();
		if(wdth>768){
		$('.header').css("background-attachment","fixed");
		$('.con').css("background-attachment","fixed");
		}
    /*  網頁節點讀取完成後隨即執行的程式  */

})
	 

	$('#about').click(function(e){
		$(window).scrollTop($('.about').offset().top-$('.navbar-brand').height()*1.8);
		})
	$('#edu').click(function(e){
		$(window).scrollTop($('.edu').offset().top-$('.navbar-brand').height()*1.8);
		})
	$('#exp').click(function(e){
		$(window).scrollTop($('.exp').offset().top-$('.navbar-brand').height()*1.8);
		})
	$('#skills').click(function(e){
		$(window).scrollTop($('.skills').offset().top-$('.navbar-brand').height()*1.8);
		})
	$('#con').click(function(e){
		$(window).scrollTop($('.con').offset().top-$('.navbar-brand').height()*1.8);
		})
		
	$(window).scroll(function(){
		
		//if($(window).scrollTop()>$('.about').offset().top/2){
		//$('.fn').fadeIn(1000);
		//}	
		
		if($(window).scrollTop()>$('.about').offset().top/2 && $('.about').hasClass('hidden')){
		$('.about').removeClass('hidden');
		}
		else if($(window).scrollTop()<$('.about').offset().top/2){
			$('.about').addClass('hidden');
			}
		
		if($(window).scrollTop()>$('.edu').offset().top/1.8 && $('.edu').hasClass('hidden')){
		$('.edu').removeClass('hidden');
		}
		else if($(window).scrollTop()<$('.edu').offset().top/1.8){
			$('.edu').addClass('hidden');
			}
		
		if($(window).scrollTop()>$('.exp').offset().top/1.5 && $('.exp').hasClass('hiddenright')){
		$('.exp').removeClass('hiddenright');
		}
		else if($(window).scrollTop()<$('.exp').offset().top/1.5){
			$('.exp').addClass('hiddenright');
			}
			
		
		if($(window).scrollTop()>$('.skills').offset().top/1.3&& $('.skills').hasClass('hidden-icon')){
		$('.skills').removeClass('hidden-icon');
		}	
		else if($(window).scrollTop()<$('.skills').offset().top/1.3){
			$('.skills').addClass('hidden-icon');
			}
		
			if($(window).scrollTop()>$('.con').offset().top/1.3&& $('.con').hasClass('hidden-con')){
		$('.con').removeClass('hidden-con');
		}	
		else if($(window).scrollTop()<$('.con').offset().top/1.3){
			$('.con').addClass('hidden-con');
			}
		
			
		})
});