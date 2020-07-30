// $(document).ready(function(){
	
	gsap.registerPlugin(ScrollTrigger)
	function init(){
		gsap.timeline().from('#topImageSlider',{opacity:0,duration:1})
		.from('.topSliderImage',{opacity:0.3,stagger:0.1,flexBasis:'100%',y:100,scale:1.1,filter:"blur(15px)",ease:"Power3.easeInOut",duration:2})
		.to('.revealElt',{scale:0,rotate:180,duration:1.2,stagger:0.1,ease:"back"})
		// .to('.revealAni',{height:0,duration:1})
						
		let example = gsap.timeline({
			scrollTrigger: {
				trigger: "#europe1",
				pin: true,  
				pinSpacing:true,
				start: "top 100px", // When the top of the trigger reaches the top of the viewport
				end: "top -150%", // When the bottom of the trigger goes 150% past the top of the scroller
				scrub: true, 
				// markers: true,
				toggleClass: 'active',
				toggleActions:"restart none reverse reset",
			}
		});
		let example1 = gsap.timeline({
			scrollTrigger: {
				trigger: "#fluFlowContainer",
				pin: true,  
				pinSpacing:true,
				start: "top 100px", // When the top of the trigger reaches the top of the viewport
				end: "top -150%", // When the bottom of the trigger goes 150% past the top of the scroller
				scrub: true, 
				// markers: true,
				toggleClass: 'active',
				toggleActions:"restart none reverse reset",
			}
		});
		let example2 = gsap.timeline({
			scrollTrigger: {
				trigger: "#worldFlowContainer",
				pin: true,  
				pinSpacing:true,
				start: "top 100px", // When the top of the trigger reaches the top of the viewport
				end: "top -150%", // When the bottom of the trigger goes 150% past the top of the scroller
				scrub: true, 
				// markers: true,
				toggleClass: 'active',
				toggleActions:"restart none reverse reset",
			}
		});
		let example3 = gsap.timeline({
			scrollTrigger: {
				trigger: "#indiaFlowContainer",
				pin: true,  
				pinSpacing:true,
				start: "top 100px", // When the top of the trigger reaches the top of the viewport
				end: "top -150%", // When the bottom of the trigger goes 150% past the top of the scroller
				scrub: true, 
				// markers: true,
				toggleClass: 'active',
				toggleActions:"restart none reverse reset",
			}
		});

		let example4 = gsap.timeline({
			scrollTrigger: {
				trigger: "#newOrleansFlowContainer",
				pin: true,  
				pinSpacing:true,
				start: "top 100px", // When the top of the trigger reaches the top of the viewport
				end: "top -150%", // When the bottom of the trigger goes 150% past the top of the scroller
				scrub: true, 
				// markers: true,
				toggleClass: 'active',
				toggleActions:"restart none reverse reset",
			}
		});
		


		gsap.from("#europe1 .first",{opacity:0,duration:10000,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#europe1 .first',
				start: 'top bottom',
				end: 'bottom bottom',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#europe1 .second",{opacity:0,duration:10000,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#europe1 .second',
				start: 'bottom 100%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#europe1 .third",{opacity:0,duration:10000,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#europe1 .third',
				start: 'bottom 95%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#europe1 .fourth",{opacity:0,duration:10000,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#europe1 .fourth',
				start: 'bottom 90%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#europe1 .fifth",{opacity:0,duration:10000,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#europe1 .fifth',
				start: 'bottom 85%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		
		gsap.from("#fluFlowContainer .first",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#fluFlowContainer .first',
				start: 'top -120%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#fluFlowContainer .second",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#fluFlowContainer .second',
				start: 'top -130%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#fluFlowContainer .third",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#fluFlowContainer .third',
				start: 'top -140%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#fluFlowContainer .fourth",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#fluFlowContainer .fourth',
				start: 'top -150%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#fluFlowContainer .fifth",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#fluFlowContainer .fifth',
				start: 'top -160%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})


		gsap.from("#worldFlowContainer .first",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#worldFlowContainer .first',
				start: 'top bottom',
				end: 'bottom bottom',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#worldFlowContainer .second",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#worldFlowContainer .second',
				start: 'top -230%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#worldFlowContainer .third",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#worldFlowContainer .third',
				start: 'top -240%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#worldFlowContainer .fourth",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#worldFlowContainer .fourth',
				start: 'top -250%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#worldFlowContainer .fifth",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#worldFlowContainer .fifth',
				start: 'top -260%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#worldFlowContainer .sixth",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#worldFlowContainer .sixth',
				start: 'top -250%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		// trigger:'#indiaFlowContainer
		// gsap.to("#indiaFlowContainer",{duration:4000,translateY: '50%',scrollTrigger:{
		// 	trigger:'#indiaFlowContainer',
		// 	start: 'top bottom',
		// 	end: 'bottom bottom ',
		// 	scrub: 1,
		// 	pin: true,
		// 	// pinSpacing: false,
			markers: true
		// }})
		gsap.from("#indiaFlowContainer .first",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#indiaFlowContainer .first',
				start: 'top -400%',
				end: 'bottom -400%',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#indiaFlowContainer .second",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#indiaFlowContainer .second',
				start: 'bottom -420%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#indiaFlowContainer .third",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#indiaFlowContainer .third',
				start: 'bottom -430%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#indiaFlowContainer .fourth",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#indiaFlowContainer .fourth',
				start: 'bottom -440%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#indiaFlowContainer .fifth",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#indiaFlowContainer .fifth',
				start: 'bottom -450%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})

		gsap.from("#newOrleansFlowContainer .first",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#newOrleansFlowContainer .first',
				start: 'top -550%',
				end: 'bottom -550%',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#newOrleansFlowContainer .second",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#newOrleansFlowContainer .second',
				start: 'bottom -520%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#newOrleansFlowContainer .third",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#newOrleansFlowContainer .third',
				start: 'bottom -530%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#newOrleansFlowContainer .fourth",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#newOrleansFlowContainer .fourth',
				start: 'bottom -540%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#newOrleansFlowContainer .fifth",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#newOrleansFlowContainer .fifth',
				start: 'bottom -550%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#newOrleansFlowContainer .sixth",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#newOrleansFlowContainer .sixth',
				start: 'bottom -560%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#newOrleansFlowContainer .seventh",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#newOrleansFlowContainer .seventh',
				start: 'bottom -570%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#newOrleansFlowContainer .eighth",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#newOrleansFlowContainer .eighth',
				start: 'bottom -580%',
				end: '+=500',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#newOrleansFlowContainer .ninth",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#newOrleansFlowContainer .ninth',
				start: 'bottom -590%',
				end: '+=50',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#newOrleansFlowContainer .tenth",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#newOrleansFlowContainer .tenth',
				start: 'bottom -600%',
				end: '+=50',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#newOrleansFlowContainer .eleventh",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#newOrleansFlowContainer .eleventh',
				start: 'bottom -610%',
				end: '+=50',
				scrub: 1,
				// markers: true
			}
		})
		gsap.from("#newOrleansFlowContainer .twelfth",{opacity:0,duration:400,ease:'Power3.easeInOut',
			scrollTrigger:{
				trigger:'#newOrleansFlowContainer .twelfth',
				start: 'bottom -620%',
				end: '+=50',
				scrub: 1,
				// markers: true
			}
		})
	}
	window.addEventListener('load',function(){
		init();
	});
	// init();

	$('.US-PHILHover').on('mouseenter',function(){
		$('.US-Phil').toggleClass('active')
	}).on('mouseleave',function(){
		$('.US-Phil').toggleClass('active')
	})
	$('.US-SFHover').on('mouseenter',function(){
		$('.US-SF').toggleClass('active')
	}).on('mouseleave',function(){
		$('.US-SF').toggleClass('active')
	})
	$('.US-StLHover').on('mouseenter',function(){
		$('.US-StL').toggleClass('active')
	}).on('mouseleave',function(){
		$('.US-StL').toggleClass('active')
	})
	$('.US-NYCHover').on('mouseenter',function(){
		$('.US-NYC').toggleClass('active')
	}).on('mouseleave',function(){
		$('.US-NYC').toggleClass('active')
	})
// })