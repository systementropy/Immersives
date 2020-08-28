// $(document).ready(function(){
















	var video=document.getElementById("home_vid");   
	// SAKET: Please link to following: https://www.youtube.com/watch?v=U219eUIZ7Qo
	var vidHeight; var vidWidth;
	if ($(window).width()>=900) {
		vidWidth=900;
		vidHeight=675;
	}else {
		vidWidth=$(window).width();
		vidHeight=(($(window).width())*9)/16;
	}
	
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var player;
	function onYouTubePlayerAPIReady() {
		vidWidth = vidWidth.toString();
		vidHeight = vidHeight.toString();
		
		player = new YT.Player('vdosInt', {
			height: vidHeight,
			width: vidWidth,
			videoId: 'U219eUIZ7Qo',
			playerVars: {rel: 0},
			events: {
				'onStateChange': onPlayerStateChange
			}
		});
		document.getElementById('cToPlayFade').onclick = function() {
			PlayPause();
			return false;
		};
	}
	var playerState
	function onPlayerStateChange(event) {
		var getId = document.getElementById('cToPlay');
		if(event.data === 0) {
			$('#cToPlayFade').fadeIn(1000);
		}
		else if(event.data === 1) {
			
			$('#cToPlayFade').fadeOut(1000);
		}
		else if(event.data === 2) {
			$('#cToPlayFade').fadeIn(1000);
		}
		else if(event.data === 3) {
		}
		playerState = event.data;
	}
	function PlayPause() {
		if(playerState == '1') {
			player.pauseVideo();
		}
		else {
			player.playVideo();
		}
	}
	function loadOthers() {
		
		$('.noShow').show(0);
		
		if(window.innerWidth>640){
			gsap.timeline({repeat:-1}).to('.animEndImg',{opacity:0,stagger:2,ease:"Power3.easeInOut",duration:4})
			let example = gsap.timeline({
				scrollTrigger: {
					invalidateOnRefresh: true,
					trigger: "#europe1",
					pin: true,  
					pinSpacing:true,
					start: "top 100px", // When the top of the trigger reaches the top of the viewport
					end: "top -50%", // When the bottom of the trigger goes 150% past the top of the scroller
					scrub: true, 
					// markers: true,
					toggleClass: 'active',
					toggleActions:"restart none reverse reset",
				}
			});
			let example1 = gsap.timeline({
				scrollTrigger: {
					invalidateOnRefresh: true,
					trigger: "#fluFlowContainer",
					pin: true,  
					pinSpacing:true,
					start: "top 100px", // When the top of the trigger reaches the top of the viewport
					end: "top -50%", // When the bottom of the trigger goes 150% past the top of the scroller
					scrub: true, 
					// markers: true,
					toggleClass: 'active',
					toggleActions:"restart none reverse reset",
				}
			});
			let example2 = gsap.timeline({
				scrollTrigger: {
					invalidateOnRefresh: true,
					trigger: "#worldFlowContainer",
					pin: true,  
					pinSpacing:true,
					start: "top 100px", // When the top of the trigger reaches the top of the viewport
					end: "top -50%", // When the bottom of the trigger goes 150% past the top of the scroller
					scrub: true, 
					// markers: true,
					toggleClass: 'active',
					toggleActions:"restart none reverse reset",
				}
			});
			let example3 = gsap.timeline({
				scrollTrigger: {
					invalidateOnRefresh: true,
					trigger: "#indiaFlowContainer",
					pin: true,  
					pinSpacing:true,
					start: "top 100px", // When the top of the trigger reaches the top of the viewport
					end: "top -50%", // When the bottom of the trigger goes 150% past the top of the scroller
					scrub: true, 
					// markers: true,
					toggleClass: 'active',
					toggleActions:"restart none reverse reset",
				}
			});

			let example4 = gsap.timeline({
				scrollTrigger: {
					invalidateOnRefresh: true,
					trigger: "#newOrleansFlowContainer",
					pin: true,  
					pinSpacing:true,
					start: "top 100px", // When the top of the trigger reaches the top of the viewport
					end: "top -100%", // When the bottom of the trigger goes 150% past the top of the scroller
					scrub: true, 
					// markers: {startColor: "#FF3", endColor: "#33F", fontSize: "18px", fontWeight: "bold", indent: 20},
					// anticipatePin: 1,
					toggleClass: 'active',
					toggleActions:"restart none reverse reset",
				}
			});


			gsap.from("#europe1 .first",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#europe1 .first',
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#europe1 .second",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#europe1 .second',
					start: 'top 0%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#europe1 .third",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#europe1 .third',
					start: 'top -10%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#europe1 .fourth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#europe1 .fourth',
					start: 'top -20%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#europe1 .fifth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#europe1 .fifth',
					start: 'top -30%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			
			gsap.from("#fluFlowContainer .first",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#fluFlowContainer .first',
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#fluFlowContainer .second",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#fluFlowContainer .second',
					start: 'top -60%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#fluFlowContainer .third",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#fluFlowContainer .third',
					start: 'top -70%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#fluFlowContainer .fourth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#fluFlowContainer .fourth',
					start: 'top -80%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#fluFlowContainer .fifth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#fluFlowContainer .fifth',
					start: 'top -90%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})


			gsap.from("#worldFlowContainer .first",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#worldFlowContainer .first',
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#worldFlowContainer .second",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#worldFlowContainer .second',
					start: 'top -110%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#worldFlowContainer .third",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#worldFlowContainer .third',
					start: 'top -120%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#worldFlowContainer .fourth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#worldFlowContainer .fourth',
					start: 'top -130%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#worldFlowContainer .fifth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#worldFlowContainer .fifth',
					start: 'top -140%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#worldFlowContainer .sixth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#worldFlowContainer .sixth',
					start: 'top -150%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			





			gsap.from("#indiaFlowContainer .first",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#indiaFlowContainer .first',
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#indiaFlowContainer .second",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#indiaFlowContainer .second',
					start: 'top -165%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#indiaFlowContainer .third",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#indiaFlowContainer .third',
					start: 'top -175%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#indiaFlowContainer .fourth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#indiaFlowContainer .fourth',
					start: 'top -185%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#indiaFlowContainer .fifth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#indiaFlowContainer .fifth',
					start: 'top -195%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})



			gsap.from("#newOrleansFlowContainer .first",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .first',
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .second",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .second',
					start: 'top -231%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .third",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .third',
					start: 'top -241%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .fourth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .fourth',
					start: 'top -251%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .fifth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .fifth',
					start: 'top -261%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .sixth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .sixth',
					start: 'top -271%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .seventh",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .seventh',
					start: 'top -281%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .eighth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .eighth',
					start: 'top -291%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .ninth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .ninth',
					start: 'top -301%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .tenth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .tenth',
					start: 'top -311%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .eleventh",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .eleventh',
					start: 'top -321%',
					end: '+=1%',
					scrub: 1,
					// markers: true
				}
			})

			
			gsap.to(".timeline", {
				x: -(11067-600)+'px',
				ease: "none",
				scrollTrigger: {
					trigger: ".timeline",
					start: "top -350%",
					end: "+=400%",
					toggleClass: {targets: ".fixedtimeline", className: "active"},
					scrub: true,
				}
			})
			gsap.to(".timelineOpen", {
				xPercent: -100, 
				opacity: 0,
				ease: "linear",
				scrollTrigger: {
					trigger: ".timeline",
					start: "top -310%",
					end: "+=1px",
					toggleClass:'active',
					scrub: true,
					// markers: true
				}
			})
		}else{
			
			const didPlayObj = {

			}
			function alliances(container,childrenCount,key){
				// ScrollTrigger.refresh()
				// ScrollTrigger.update()
				if(didPlayObj[key]){
					$('body').removeClass('noScroll')
				}else{
					console.log('here'+container);
					// $('body').addClass('noScroll')
					gsap.timeline({repeat: -1,repeatDelay: 3})
					.from(container,{opacity:0,stagger:0,duration:0})
					.to(container,{opacity:1,stagger:0.8,duration:0.4})
					setTimeout(()=>{$('body').removeClass('noScroll');didPlayObj[key] = true;},800*childrenCount)
				}
				
				// .call($('body').removeClass('noScroll'))
				// .then($('body').removeClass('noScroll'));
			}
			
			// $('.alliances.imgCont').style({opacity:0})
			gsap.timeline({
				scrollTrigger: {
					trigger: "#europe1",
					start:("center center"),
					end:"bottom top",
					onUpdate:() =>alliances('.alliancesOfEurope.imgCont',$('#europe1').children('.imgCont').length,"europe1")
				}
			})
			gsap.timeline({
				scrollTrigger: {
					trigger: "#fluFlowContainer",
					start:("center center"),
					end:"bottom top",
					onUpdate:() =>alliances('.fluFlow.imgCont',$('#fluFlowContainer').children('.imgCont').length,"fluFlowContainer")
				}
			})
			gsap.timeline({
				scrollTrigger: {
					trigger: "#worldFlowContainer",
					start:("center center"),
					end:"bottom top",
					onUpdate:() =>alliances('.worldFlow.imgCont',$('#worldFlowContainer').children('.imgCont').length,"worldFlowContainer")
				}
			})
			gsap.timeline({
				scrollTrigger: {
					trigger: "#indiaFlowContainer",
					start:("center center"),
					end:"bottom top",
					onUpdate:() =>alliances('.indiaFlow.imgCont',$('#indiaFlowContainer').children('.imgCont').length,"indiaFlowContainer")
				}
			})
			gsap.timeline({
				scrollTrigger: {
					trigger: "#newOrleansFlowContainer",
					start:("center center"),
					end:"bottom top",
					onUpdate:() =>alliances('.newOrleansFlow.imgCont',$('#newOrleansFlowContainer').children('.imgCont').length,"newOrleansFlowContainer")
				}
			})
			gsap.to(".timeline", {
				x: -(11067-window.innerWidth)+'px',
				ease: "none",
				scrollTrigger: {
					trigger: ".timeline",
					start: "top -40%",
					end: "+=350%",
					toggleClass: {targets: ".fixedtimeline", className: "active"},
					scrub: true
				}
			})
			gsap.to(".timelineOpen", {
				xPercent: -200, 
				opacity: 0,
				ease: "ease",
				scrollTrigger: {
					trigger: ".timelineOpen",
					start: "top -30%",
					end: "+=1%",
					toggleClass:'active',
					scrub: true
				}
			})
		}
		
	}
	gsap.registerPlugin(ScrollTrigger)
	function init(label){
		
		if(label === 'init'){
			if(window.innerWidth>640){
				var desktopLoad = gsap.timeline().to('#topImageSlider',{opacity:1,duration:1})
				.from('.topSliderImage',{zIndex:1,opacity:0,ease:"Power3.easeInOut",duration:0.6})
				.to('.headingText',{y:'-50%',opacity:1})
				.to('.topSliderImage',{width:0,stagger:0.6,ease:"linear",duration:0.8})
				// .call(loadOthers())
				.to('.topSliderImage10',{width:'35%','background-attachment':'unset',left:0,ease:"Power3.easeInOut",duration:0.4})
				.to('.topSliderImage11',{width:'30%','background-attachment':'unset',left:'35%',ease:"Power3.easeInOut",duration:0.4})
				.to('.topSliderImage12',{width:'35%','background-attachment':'unset','background-position':'left',left:'65%',ease:"Power3.easeInOut",duration:0.4})
				.to('.topSliderImage7',{width:'35%','background-attachment':'unset',left:0,ease:"Power3.easeInOut",duration:0.4})
				.to('.topSliderImage8',{width:'30%','background-attachment':'unset',left:'35%',ease:"Power3.easeInOut",duration:0.4})
				.to('.topSliderImage9',{width:'35%','background-attachment':'unset','background-position':'left',left:'65%',ease:"Power3.easeInOut",duration:0.4})
				.to('.topSliderImage4',{width:'35%','background-attachment':'unset',left:0,ease:"Power3.easeInOut",duration:0.4})
				.to('.topSliderImage5',{width:'30%','background-attachment':'unset',left:'35%',ease:"Power3.easeInOut",duration:0.4})
				.to('.topSliderImage6',{width:'35%','background-attachment':'unset','background-position':'left',left:'65%',ease:"Power3.easeInOut",duration:0.4})
				.to('.topSliderImage1',{width:'35%','background-attachment':'unset',left:0,ease:"Power3.easeInOut",duration:0.4})
				.to('.topSliderImage2',{width:'30%','background-attachment':'unset',left:'35%',ease:"Power3.easeInOut",duration:0.4})
				.to('.topSliderImage3',{width:'35%','background-attachment':'unset','background-position':'left',left:'65%',ease:"Power3.easeInOut",duration:0.4})
				desktopLoad.call(loadOthers, null, 6)
				
			}else{
				loadOthers()
				var mobLoad = gsap.timeline().to('#topImageSlider',{opacity:1,duration:1})
				.to('.headingText',{y:'-50%',opacity:1})
				.to('.topSliderImage',{width:0,stagger:0.6,ease:"linear",duration:0.8})
				.to('.topSliderImage:nth-child(2n+1)',{left:'auto',right:0,height:'50%',width:0,top:'50%',ease:"linear",duration:0.1})
				.to('.topSliderImage:nth-child(2n)',{left:'auto',height:'50%',width:0,top:'0%',ease:"linear",duration:0.1})
				.to('.topSliderImage',{width:'100%',ease:"Power3.easeInOut",stagger:0.8,duration:0.6,'background-attachment':'unset','background-size':'cover',zIndex:-20})
				// .then(loadOthers)
				mobLoad.call(loadOthers, null, 6)
			}
			
		}else{
			
		}
		
		
		
	}
	window.addEventListener('load',function(){
		var loader = document.getElementById("loader");
		loader?loader. parentNode. removeChild(loader):'';
		if(window.innerWidth<=640){
			$('.alliancesOfEurope.imgCont').css({opacity:0})
			$('.fluFlow.imgCont').css({opacity:0})
			$('.worldFlow.imgCont').css({opacity:0})
			$('.indiaFlow.imgCont').css({opacity:0})
			$('.newOrleansFlow.imgCont').css({opacity:0})
		}
		
		init('init');
	});
	window.addEventListener('resize',function(){
		init();
	});
	// init();

	$('.US-PHILHover').on('mouseenter',function(){
		$('.labels').addClass('removeHighlight')
		$('.blackTextLabel').addClass('addWhite')
		$('.US-Phil').toggleClass('active')
	}).on('mouseleave',function(){
		$('.blackTextLabel').removeClass('addWhite')
		$('.US-Phil').toggleClass('active')
	})
	$('.US-SFHover').on('mouseenter',function(){
		$('.labels').addClass('removeHighlight')
		$('.blackTextLabel').addClass('addWhite')
		$('.US-SF').toggleClass('active')
	}).on('mouseleave',function(){
		$('.blackTextLabel').removeClass('addWhite')
		$('.US-SF').toggleClass('active')
	})
	$('.US-StLHover').on('mouseenter',function(){
		$('.labels').addClass('removeHighlight')
		$('.blackTextLabel').addClass('addWhite')
		$('.US-StL').toggleClass('active')
	}).on('mouseleave',function(){
		$('.blackTextLabel').removeClass('addWhite')
		$('.US-StL').toggleClass('active')
	})
	$('.US-NYCHover').on('mouseenter',function(){
		$('.labels').addClass('removeHighlight')
		$('.blackTextLabel').addClass('addWhite')
		$('.US-NYC').toggleClass('active')
	}).on('mouseleave',function(){
		$('.blackTextLabel').removeClass('addWhite')
		$('.US-NYC').toggleClass('active')
	})
// })