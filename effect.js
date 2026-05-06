$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
	function getBalloonPositions() {
		var vw = $(window).width() / 2;
		var isMobile = $(window).width() < 768;
		var gap = isMobile ? 65 : 120; 
		var offset = isMobile ? 37.5 : 50; // Half of balloon width to truly center
		return {
			b1: vw - (gap * 2) - offset,
			b2: vw - (gap * 1) - offset,
			b3: vw - offset,
			b4: vw + (gap * 1) - offset,
			b5: vw + (gap * 2) - offset,
			topPos: isMobile ? 260 : 330
		};
	}

	$(window).resize(function(){
		var pos = getBalloonPositions();
		$('#b1,#b2,#b3,#b4,#b5').stop();
		$('#b1').animate({top: pos.topPos, left: pos.b1, bottom: 'auto'},500);
		$('#b2').animate({top: pos.topPos, left: pos.b2, bottom: 'auto'},500);
		$('#b3').animate({top: pos.topPos, left: pos.b3, bottom: 'auto'},500);
		$('#b4').animate({top: pos.topPos, left: pos.b4, bottom: 'auto'},500);
		$('#b5').animate({top: pos.topPos, left: pos.b5, bottom: 'auto'},500);
	});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(1000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(1000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(1000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = ($(window).width() - 100) * Math.random();
		var randbottom = ($(window).height() - 200) * Math.random();
		$('#b1').animate({left:randleft,bottom:randbottom},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = ($(window).width() - 100) * Math.random();
		var randbottom = ($(window).height() - 200) * Math.random();
		$('#b2').animate({left:randleft,bottom:randbottom},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = ($(window).width() - 100) * Math.random();
		var randbottom = ($(window).height() - 200) * Math.random();
		$('#b3').animate({left:randleft,bottom:randbottom},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = ($(window).width() - 100) * Math.random();
		var randbottom = ($(window).height() - 200) * Math.random();
		$('#b4').animate({left:randleft,bottom:randbottom},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = ($(window).width() - 100) * Math.random();
		var randbottom = ($(window).height() - 200) * Math.random();
		$('#b5').animate({left:randleft,bottom:randbottom},10000,function(){
			loopFive();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('.balloons').fadeIn('slow'); // Show the balloons!
		$('#b1,#b4,#b5').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3').addClass('balloons-rotate-behaviour-two');

		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		
		$(this).fadeOut('slow').delay(1000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(1000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		var pos = getBalloonPositions();
		
		// Stop the floating loops
		$('#b1,#b2,#b3,#b4,#b5').stop(true, false);
		
		// Animate to final "Happy Birthday" positions (Higher up, below banner)
		$('#b1').animate({top: pos.topPos, left: pos.b1, bottom: 'auto'},500);
		$('#b2').animate({top: pos.topPos, left: pos.b2, bottom: 'auto'},500);
		$('#b3').animate({top: pos.topPos, left: pos.b3, bottom: 'auto'},500);
		$('#b4').animate({top: pos.topPos, left: pos.b4, bottom: 'auto'},500);
		$('#b5').animate({top: pos.topPos, left: pos.b5, bottom: 'auto'},500);
		
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast');
		
		// Keep balloons in their "Happy Birthday" positions and visible
		$('.balloons').css('opacity', '0.6'); 
		
		$('.message').fadeIn('slow');
		$('.message p').fadeIn('slow'); 
	});
});




//alert('hello');