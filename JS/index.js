$(document).ready(function(){
	
			/* cube 1 */
			$(".front2").mouseover(function(){
				$(".grave").stop().animate({'opacity':0},2000);
			});
			$(".front2").mouseleave(function(){
				$(".grave").stop().animate({'opacity':1},500);
			});
			$(".backGrave").mouseleave(function(){
				$(".grave").stop().animate({'opacity':1},2000);
			});
			$(".left1").mouseleave(function(){
				$(".grave").stop().animate({'opacity':1},1500);
			});
			$(".back1").mouseleave(function(){
				$(".grave").stop().animate({'opacity':1},1000);
			});
			$(".right1").mouseleave(function(){
				$(".grave").stop().animate({'opacity':1},500);
			});
			$(".right11").mouseover(function(){
				$(".grave").stop().animate({'opacity':0},500);
			});

			/* cube 2 */
			$(".front3").hover(function(){
				$(".dream").stop().animate({'opacity':0},2000);
			});
			$(".front3").mouseleave(function(){
				$(".dream").stop().animate({'opacity':1},500);
			});
			$(".backDream").mouseleave(function(){
				$(".dream").stop().animate({'opacity':1},2000);
			});
			$(".left2").mouseleave(function(){
				$(".dream").stop().animate({'opacity':1},1500);
			});
			$(".back2").mouseleave(function(){
				$(".dream").stop().animate({'opacity':1},1000);
			});
			$(".right2").mouseleave(function(){
				$(".dream").stop().animate({'opacity':1},500);
			});
			$(".right22").mouseover(function(){
				$(".dream").stop().animate({'opacity':0},500);
			});
			
			/* cube 3 */
			$(".front4").mouseover(function(){
				$(".drive").stop().animate({'opacity':0},2000);
			});
			$(".front4").mouseleave(function(){
				$(".drive").stop().animate({'opacity':1},500);
			});
			$(".backDrive").mouseleave(function(){
				$(".drive").stop().animate({'opacity':1},2000);
			});
			$(".left3").mouseleave(function(){
				$(".drive").stop().animate({'opacity':1},1500);
			});
			$(".back3").mouseleave(function(){
				$(".drive").stop().animate({'opacity':1},1000);
			});
			$(".right3").mouseleave(function(){
				$(".drive").stop().animate({'opacity':1},500);
			});
			$(".right33").mouseover(function(){
				$(".drive").stop().animate({'opacity':0},500);
			});
			/* sci-fi */
			$(".img1").mouseover(function(){$(".posterText1").stop().animate({'opacity':1},1000);});
			$(".img1").mouseleave(function(){$(".posterText1").stop().animate({'opacity':0},1000);});
			
			$(".img2").mouseover(function(){$(".posterText2").stop().animate({'opacity':1},1000);});
			$(".img2").mouseleave(function(){$(".posterText2").stop().animate({'opacity':0},1000);});
			
			$(".img3").mouseover(function(){$(".posterText3").stop().animate({'opacity':1},1000);});
			$(".img3").mouseleave(function(){$(".posterText3").stop().animate({'opacity':0},1000);});
			
			$(".img4").mouseover(function(){$(".posterText4").stop().animate({'opacity':1},1000);});
			$(".img4").mouseleave(function(){$(".posterText4").stop().animate({'opacity':0},1000);});
			
			$(".img5").mouseover(function(){$(".posterText5").stop().animate({'opacity':1},1000);});
			$(".img5").mouseleave(function(){$(".posterText5").stop().animate({'opacity':0},1000);});
			/* time-travel */
			$(".img11").mouseover(function(){$(".posterText11").stop().animate({'opacity':1},1000);});
			$(".img11").mouseleave(function(){$(".posterText11").stop().animate({'opacity':0},1000);});
			
			$(".img22").mouseover(function(){$(".posterText22").stop().animate({'opacity':1},1000);});
			$(".img22").mouseleave(function(){$(".posterText22").stop().animate({'opacity':0},1000);});
			
			$(".img33").mouseover(function(){$(".posterText33").stop().animate({'opacity':1},1000);});
			$(".img33").mouseleave(function(){$(".posterText33").stop().animate({'opacity':0},1000);});
			
			$(".img44").mouseover(function(){$(".posterText44").stop().animate({'opacity':1},1000);});
			$(".img44").mouseleave(function(){$(".posterText44").stop().animate({'opacity':0},1000);});
			
			$(".img55").mouseover(function(){$(".posterText55").stop().animate({'opacity':1},1000);});
			$(".img55").mouseleave(function(){$(".posterText55").stop().animate({'opacity':0},1000);});
			/* slice of life */
			$(".img111").mouseover(function(){$(".posterText111").stop().animate({'opacity':1},1000);});
			$(".img111").mouseleave(function(){$(".posterText111").stop().animate({'opacity':0},1000);});
			
			$(".img222").mouseover(function(){$(".posterText222").stop().animate({'opacity':1},1000);});
			$(".img222").mouseleave(function(){$(".posterText222").stop().animate({'opacity':0},1000);});
			
			$(".img333").mouseover(function(){$(".posterText333").stop().animate({'opacity':1},1000);});
			$(".img333").mouseleave(function(){$(".posterText333").stop().animate({'opacity':0},1000);});
			
			$(".img444").mouseover(function(){$(".posterText444").stop().animate({'opacity':1},1000);});
			$(".img444").mouseleave(function(){$(".posterText444").stop().animate({'opacity':0},1000);});
			
			$(".img555").mouseover(function(){$(".posterText555").stop().animate({'opacity':1},1000);});
			$(".img555").mouseleave(function(){$(".posterText555").stop().animate({'opacity':0},1000);});			
			/* romance */
			$(".img1111").mouseover(function(){$(".posterText1111").stop().animate({'opacity':1},1000);});
			$(".img1111").mouseleave(function(){$(".posterText1111").stop().animate({'opacity':0},1000);});
			
			$(".img2222").mouseover(function(){$(".posterText2222").stop().animate({'opacity':1},1000);});
			$(".img2222").mouseleave(function(){$(".posterText2222").stop().animate({'opacity':0},1000);});
			
			$(".img3333").mouseover(function(){$(".posterText3333").stop().animate({'opacity':1},1000);});
			$(".img3333").mouseleave(function(){$(".posterText3333").stop().animate({'opacity':0},1000);});
			
			$(".img4444").mouseover(function(){$(".posterText4444").stop().animate({'opacity':1},1000);});
			$(".img4444").mouseleave(function(){$(".posterText4444").stop().animate({'opacity':0},1000);});
			
			$(".img5555").mouseover(function(){$(".posterText5555").stop().animate({'opacity':1},1000);});
			$(".img5555").mouseleave(function(){$(".posterText5555").stop().animate({'opacity':0},1000);});
			/* mystery */
			$(".img11111").mouseover(function(){$(".posterText11111").stop().animate({'opacity':1},1000);});
			$(".img11111").mouseleave(function(){$(".posterText11111").stop().animate({'opacity':0},1000);});
			
			$(".img22222").mouseover(function(){$(".posterText22222").stop().animate({'opacity':1},1000);});
			$(".img22222").mouseleave(function(){$(".posterText22222").stop().animate({'opacity':0},1000);});
			
			$(".img33333").mouseover(function(){$(".posterText33333").stop().animate({'opacity':1},1000);});
			$(".img33333").mouseleave(function(){$(".posterText33333").stop().animate({'opacity':0},1000);});
			
			$(".img44444").mouseover(function(){$(".posterText44444").stop().animate({'opacity':1},1000);});
			$(".img44444").mouseleave(function(){$(".posterText44444").stop().animate({'opacity':0},1000);});
			
			$(".img55555").mouseover(function(){$(".posterText55555").stop().animate({'opacity':1},1000);});
			$(".img55555").mouseleave(function(){$(".posterText55555").stop().animate({'opacity':0},1000);});
			/* cloud nice */
			$(".img111111").mouseover(function(){$(".posterText111111").stop().animate({'opacity':1},1000);});
			$(".img111111").mouseleave(function(){$(".posterText111111").stop().animate({'opacity':0},1000);});
			
			$(".img222222").mouseover(function(){$(".posterText222222").stop().animate({'opacity':1},1000);});
			$(".img222222").mouseleave(function(){$(".posterText222222").stop().animate({'opacity':0},1000);});
			
			$(".img333333").mouseover(function(){$(".posterText333333").stop().animate({'opacity':1},1000);});
			$(".img333333").mouseleave(function(){$(".posterText333333").stop().animate({'opacity':0},1000);});
			
			$(".img444444").mouseover(function(){$(".posterText444444").stop().animate({'opacity':1},1000);});
			$(".img444444").mouseleave(function(){$(".posterText444444").stop().animate({'opacity':0},1000);});
			
			$(".img555555").mouseover(function(){$(".posterText555555").stop().animate({'opacity':1},1000);});
			$(".img555555").mouseleave(function(){$(".posterText555555").stop().animate({'opacity':0},1000);});
			
			$(".imgBTTFposter").mouseover(function(){$(".posterTextBTTF").stop().animate({'opacity':1},1000);});
			$(".imgBTTFposter").mouseleave(function(){$(".posterTextBTTF").stop().animate({'opacity':0},1000);});
			
			$("show").hide();
			
			$(".containerH").slideUp();
			$(".hide").click(function() {
				$( ".containerH" ).animate({
					height: [ "toggle", "linear" ],
					width: [ "toggle", "linear" ],	
					opacity: "toggle"
				  }, 
					{
						duration: 3500
					}
				);
				$(this).hide();
				$("show").show(1500);
				$(".hideSens").hide();
			});
			/*
			$('.hide').on('click', function(e) {
				e.preventDefault();
				$(this).off().attr('href', "javascript: void(0);");
			    $(this).css('cursor', 'not-allowed');
			});
			*/
			$(".delt").click(function() {
				document.getElementById("name").value = "";
				document.getElementById("email").value = "";
				document.getElementById("message").value = "";
				$(this).prop('disabled', true);
				$(this).css('cursor', 'not-allowed	');
				
			});
			
			$(".containerS").slideUp();
			$("#movie7").click(function() {
				$( ".containerS" ).animate({
					width: [ "toggle", "swing" ]
				  }, 
					{
						duration: 1500
					}
				);
				
			});
			
			var isPlaying = false;
			var songTime = 0;
			var song = document.createElement('audio');
			song.setAttribute('src', './CSS/Nuotraukos/bttf.mp3');
			$.get();
			
			$("#movie7").click(function() {
				song.play();
				isPlaying = true;
				console.log("Soundtrack groja");
			});
		});