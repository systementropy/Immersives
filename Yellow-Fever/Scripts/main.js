

function calcNeededHeight(boxHeight){
	return ((window.innerHeight - boxHeight)/2)
} 
const options = {
	root: null,
	threshold: 1
}
const europeAlliances = document.querySelectorAll('.alliances');
const firstTimeObj = {}
const observer = new IntersectionObserver(function(entries,observer){
	entries.forEach(entry => {
		if(entry.isIntersecting){
			firstTimeObj['alliances'] = true;
		}
		if(firstTimeObj['alliances']){
			entry.target.classList.toggle('active')
		}
		if(!entry.isIntersecting && !firstTimeObj['alliances']){
			return
		}
		
		
	});
},options);
europeAlliances.forEach(slide => {
	observer.observe(slide)
})


const fluFlowConts = document.querySelectorAll('.fluFlow');
const fluFlowTimeObj = {}
const fluFlowObserver = new IntersectionObserver(function(entries,fluFlowObserver){
	entries.forEach(entry => {
		if(entry.isIntersecting){
			fluFlowTimeObj['fluFlow'] = true;
		}
		if(fluFlowTimeObj['fluFlow']){
			entry.target.classList.toggle('active')
		}
		if(!entry.isIntersecting && !fluFlowTimeObj['fluFlow']){
			return
		}
		
		
	});
},options);
fluFlowConts.forEach(slide => {
	fluFlowObserver.observe(slide)
})





const worldFlowConts = document.querySelectorAll('.worldFlow');
const worldFlowTimeObj = {}
const worldFlowObserver = new IntersectionObserver(function(entries,worldFlowObserver){
	entries.forEach(entry => {
		if(entry.isIntersecting){
			worldFlowTimeObj['worldFlow'] = true;
		}
		if(worldFlowTimeObj['worldFlow']){
			entry.target.classList.toggle('active')
		}
		if(!entry.isIntersecting && !worldFlowTimeObj['worldFlow']){
			return
		}
		
		
	});
},options);
worldFlowConts.forEach(slide => {
	worldFlowObserver.observe(slide)
})


const indiaFlowConts = document.querySelectorAll('.indiaFlow');
const indiaFlowTimeObj = {}
const indiaFlowObserver = new IntersectionObserver(function(entries,indiaFlowObserver){
	entries.forEach(entry => {
		if(entry.isIntersecting){
			indiaFlowTimeObj['indiaFlow'] = true;
		}
		if(indiaFlowTimeObj['indiaFlow']){
			entry.target.classList.toggle('active')
		}
		if(!entry.isIntersecting && !indiaFlowTimeObj['indiaFlow']){
			return
		}
		
		
	});
},options);
indiaFlowConts.forEach(slide => {
	indiaFlowObserver.observe(slide)
})




const indiaSpreadConts = document.querySelectorAll('.indiaSpread');
const indiaSpreadTimeObj = {}
const indiaSpreadObserver = new IntersectionObserver(function(entries,indiaSpreadObserver){
	entries.forEach(entry => {
		if(entry.isIntersecting){
			indiaSpreadTimeObj['indiaSpread'] = true;
		}
		if(indiaSpreadTimeObj['indiaSpread']){
			entry.target.classList.toggle('active')
		}
		if(!entry.isIntersecting && !indiaSpreadTimeObj['indiaSpread']){
			return
		}
		
		
	});
},options);
indiaSpreadConts.forEach(slide => {
	indiaSpreadObserver.observe(slide)
})





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