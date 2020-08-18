	$('.alliances.imgCont').css({opacity:0})
	$('.fluFlow.imgCont').css({opacity:0})
	$('.worldFlow.imgCont').css({opacity:0})
	$('.indiaFlow.imgCont').css({opacity:0})
	$('.newOrleansFlow.imgCont').css({opacity:0})
	gsap.registerPlugin(ScrollTrigger)
	function init(){
		
		gsap.timeline({repeat:-1}).to('.animEndImg',{opacity:0,stagger:2,ease:"Power3.easeInOut",duration:4})

		// gsap.timeline().to('#topImageSlider',{opacity:1,duration:1})
		// .from('.topSliderImage',{zIndex:1,opacity:0.3,stagger:0.2,y:100,scale:1.1,filter:"blur(15px)",ease:"Power3.easeInOut",duration:1})
		// .to('.headingText',{y:'-50%',opacity:1})
		// .to('.topSliderImage',{width:0,stagger:1,ease:"linear",duration:0.6})
		// .to('.topSliderImage10',{width:'35%','background-attachment':'unset',left:0,ease:"Power3.easeInOut",duration:1})
		// .to('.topSliderImage11',{width:'30%','background-attachment':'unset',left:'35%',ease:"Power3.easeInOut",duration:1})
		// .to('.topSliderImage12',{width:'35%','background-attachment':'unset','background-position':'left',left:'65%',ease:"Power3.easeInOut",duration:1})
		// .to('.topSliderImage7',{width:'35%','background-attachment':'unset',left:0,ease:"Power3.easeInOut",duration:1})
		// .to('.topSliderImage8',{width:'30%','background-attachment':'unset',left:'35%',ease:"Power3.easeInOut",duration:1})
		// .to('.topSliderImage9',{width:'35%','background-attachment':'unset','background-position':'left',left:'65%',ease:"Power3.easeInOut",duration:1})
		// .to('.topSliderImage4',{width:'35%','background-attachment':'unset',left:0,ease:"Power3.easeInOut",duration:1})
		// .to('.topSliderImage5',{width:'30%','background-attachment':'unset',left:'35%',ease:"Power3.easeInOut",duration:1})
		// .to('.topSliderImage6',{width:'35%','background-attachment':'unset','background-position':'left',left:'65%',ease:"Power3.easeInOut",duration:1})
		// .to('.topSliderImage1',{width:'35%','background-attachment':'unset',left:0,ease:"Power3.easeInOut",duration:1})
		// .to('.topSliderImage2',{width:'30%','background-attachment':'unset',left:'35%',ease:"Power3.easeInOut",duration:1})
		// .to('.topSliderImage3',{width:'35%','background-attachment':'unset','background-position':'left',left:'65%',ease:"Power3.easeInOut",duration:1})
		if(window.innerWidth>640){
			let example = gsap.timeline({
				scrollTrigger: {
					// invalidateOnRefresh: true,
					trigger: "#europe1",
					pin: true,  
					pinSpacing:true,
					start: "top 100px", // When the top of the trigger reaches the top of the viewport
					end: "top -50%", // When the bottom of the trigger goes 150% past the top of the scroller
					scrub: 0, 
					// markers: true,
					toggleClass: 'active',
					toggleActions:"restart none reverse reset",
				}
			});
			let example1 = gsap.timeline({
				scrollTrigger: {
					// invalidateOnRefresh: true,
					trigger: "#fluFlowContainer",
					pin: true,  
					pinSpacing:true,
					start: "top 100px", // When the top of the trigger reaches the top of the viewport
					end: "top -50%", // When the bottom of the trigger goes 150% past the top of the scroller
					scrub: 0, 
					// markers: true,
					toggleClass: 'active',
					toggleActions:"restart none reverse reset",
				}
			});
			let example2 = gsap.timeline({
				scrollTrigger: {
					// invalidateOnRefresh: true,
					trigger: "#worldFlowContainer",
					pin: true,  
					pinSpacing:true,
					start: "top 100px", // When the top of the trigger reaches the top of the viewport
					end: "top -50%", // When the bottom of the trigger goes 150% past the top of the scroller
					scrub: 0, 
					// markers: true,
					toggleClass: 'active',
					toggleActions:"restart none reverse reset",
				}
			});
			let example3 = gsap.timeline({
				scrollTrigger: {
					// invalidateOnRefresh: true,
					trigger: "#indiaFlowContainer",
					pin: true,  
					pinSpacing:true,
					start: "top 100px", // When the top of the trigger reaches the top of the viewport
					end: "top -50%", // When the bottom of the trigger goes 150% past the top of the scroller
					scrub: 0, 
					// markers: true,
					toggleClass: 'active',
					toggleActions:"restart none reverse reset",
				}
			});
	
			let example4 = gsap.timeline({
				scrollTrigger: {
					// invalidateOnRefresh: true,
					trigger: "#newOrleansFlowContainer",
					pin: true,  
					pinSpacing:true,
					start: "top 100px", // When the top of the trigger reaches the top of the viewport
					end: "top -100%", // When the bottom of the trigger goes 150% past the top of the scroller
					scrub: 0, 
					// markers: true,
					toggleClass: 'active',
					toggleActions:"restart none reverse reset",
				}
			});
		
		
			
			// let timelineexample = gsap.timeline({
			// 	scrollTrigger: {
					invalidateOnRefresh: true,
			// 		trigger: "#timeline",
			// 		pin: true,  
			// 		pinSpacing:true,
			// 		start: "top 100px", // When the top of the trigger reaches the top of the viewport
			// 		end: "top -50%", // When the bottom of the trigger goes 150% past the top of the scroller
			// 		scrub: true, 
			// 		// markers: true,
			// 		toggleClass: 'active',
			// 		toggleActions:"restart none reverse reset",
			// 	}
			// });

			gsap.from("#europe1 .first",{opacity:0,duration:10000,ease:'none',
				scrollTrigger:{
					trigger:'#europe1 .first',
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: 0,
					toggleClass: 'active',
					toggleActions:"restart none reverse reset",
					// markers: true
				}
			})
			gsap.from("#europe1 .second",{opacity:0,duration:10000,ease:'none',
				scrollTrigger:{
					trigger:'#europe1 .second',
					start: 'top 0%',
					end: '+=1%',
					scrub: 0,
					toggleClass: 'active',
					toggleActions:"restart none reverse reset",
					// markers: true
				}
			})
			gsap.from("#europe1 .third",{opacity:0,duration:10000,ease:'none',
				scrollTrigger:{
					trigger:'#europe1 .third',
					start: 'top -10%',
					end: '+=1%',
					scrub: 0,
					toggleClass: 'active',
					toggleActions:"restart none reverse reset",
					// markers: true
				}
			})
			gsap.from("#europe1 .fourth",{opacity:0,duration:10000,ease:'none',
				scrollTrigger:{
					trigger:'#europe1 .fourth',
					start: 'top -20%',
					end: '+=1%',
					scrub: 0,
					toggleClass: 'active',
					toggleActions:"restart none reverse reset",
					// markers: true
				}
			})
			gsap.from("#europe1 .fifth",{opacity:0,duration:10000,ease:'none',
				scrollTrigger:{
					trigger:'#europe1 .fifth',
					start: 'top -30%',
					end: '+=1%',
					scrub: 0,
					toggleClass: 'active',
					toggleActions:"restart none reverse reset",
					// markers: true
				}
			})
			
			gsap.from("#fluFlowContainer .first",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#fluFlowContainer .first',
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#fluFlowContainer .second",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#fluFlowContainer .second',
					start: 'top -60%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#fluFlowContainer .third",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#fluFlowContainer .third',
					start: 'top -70%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#fluFlowContainer .fourth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#fluFlowContainer .fourth',
					start: 'top -80%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#fluFlowContainer .fifth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#fluFlowContainer .fifth',
					start: 'top -90%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})


			gsap.from("#worldFlowContainer .first",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#worldFlowContainer .first',
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#worldFlowContainer .second",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#worldFlowContainer .second',
					start: 'top -110%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#worldFlowContainer .third",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#worldFlowContainer .third',
					start: 'top -120%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#worldFlowContainer .fourth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#worldFlowContainer .fourth',
					start: 'top -130%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#worldFlowContainer .fifth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#worldFlowContainer .fifth',
					start: 'top -140%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#worldFlowContainer .sixth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#worldFlowContainer .sixth',
					start: 'top -150%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			





			gsap.from("#indiaFlowContainer .first",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#indiaFlowContainer .first',
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#indiaFlowContainer .second",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#indiaFlowContainer .second',
					start: 'top -150%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#indiaFlowContainer .third",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#indiaFlowContainer .third',
					start: 'top -160%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#indiaFlowContainer .fourth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#indiaFlowContainer .fourth',
					start: 'top -170%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#indiaFlowContainer .fifth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#indiaFlowContainer .fifth',
					start: 'top -180%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})

			gsap.from("#newOrleansFlowContainer .first",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .first',
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .second",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .second',
					start: 'top -220%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .third",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .third',
					start: 'top -230%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .fourth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .fourth',
					start: 'top -240%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .fifth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .fifth',
					start: 'top -250%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .sixth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .sixth',
					start: 'top -260%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .seventh",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .seventh',
					start: 'top -270%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .eighth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .eighth',
					start: 'top -280%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .ninth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .ninth',
					start: 'top -290%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .tenth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .tenth',
					start: 'top -300%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .eleventh",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .eleventh',
					start: 'top -310%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			gsap.from("#newOrleansFlowContainer .twelfth",{opacity:0,duration:400,ease:'none',
				scrollTrigger:{
					trigger:'#newOrleansFlowContainer .twelfth',
					start: 'top -320%',
					end: '+=1%',
					scrub: 0,
					// markers: true
				}
			})
			
			gsap.to(".timeline", {
				// xPercent: -(100-1*(((window.innerWidth - 600)*100)/$('#timeline').width())), 
				// xPercent: -100,
				x: -(11067-(window.innerWidth - 600)/2)+'px',
				ease: "none",
				scrollTrigger: {
					trigger: ".timeline",
					start: "top -350%",
					end: "+=400%",
					toggleClass: {targets: ".fixedtimeline", className: "active"},
					//   end: () => innerWidth * 14,
					scrub: true,
					//   pin: true,
					//   anticipatePin: 1
				}
			})
			gsap.to(".timelineOpen", {
				xPercent: -100, 
				// x: 0,
				// y: 180,
				opacity: 0,
				ease: "linear",
				scrollTrigger: {
					trigger: ".timelineOpen",
					start: "top -320%",
					// end: () => innerWidth * 14,
					end: "+=1",
					toggleClass:'active',
					scrub: true,
					// toggleActions:"restart none reverse reset",
					//   pin: true,
					//   anticipatePin: 1
				}
			})
		}else{
			const didPlayObj = {

			}
			function alliances(container,childrenCount,key){
				if(didPlayObj[key]){
					$('body').removeClass('noScroll')
				}else{
					console.log('here'+container);
					$('body').addClass('noScroll')
					gsap.timeline()
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
					onUpdate:() =>alliances('.alliances.imgCont',$('#europe1').children('.imgCont').length,"europe1")
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
			
		}
	}
	window.addEventListener('load',function(){
		var loader = document.getElementById("loader");
		loader?loader. parentNode. removeChild(loader):''
		init();
	});
	window.addEventListener('resize',function(){
		init();
	});
	// init();

	$('.US-PHILHover').on('mouseenter',function(){
		$('.labels').addClass('removeHighlight')
		$('.US-Phil').toggleClass('active')
	}).on('mouseleave',function(){
		$('.US-Phil').toggleClass('active')
	})
	$('.US-SFHover').on('mouseenter',function(){
		$('.labels').addClass('removeHighlight')
		$('.US-SF').toggleClass('active')
	}).on('mouseleave',function(){
		$('.US-SF').toggleClass('active')
	})
	$('.US-StLHover').on('mouseenter',function(){
		$('.labels').addClass('removeHighlight')
		$('.US-StL').toggleClass('active')
	}).on('mouseleave',function(){
		$('.US-StL').toggleClass('active')
	})
	$('.US-NYCHover').on('mouseenter',function(){
		$('.labels').addClass('removeHighlight')
		$('.US-NYC').toggleClass('active')
	}).on('mouseleave',function(){
		$('.US-NYC').toggleClass('active')
	})
