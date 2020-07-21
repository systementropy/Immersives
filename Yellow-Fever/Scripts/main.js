

function calcNeededHeight(boxHeight){
	return ((window.innerHeight - boxHeight)/2)
} 
const options = {
	root: null,
	threshold: 1
}
const europenewOrleansFlow = document.querySelectorAll('.newOrleansFlow');
const firstTimeObj = {}
const observer = new IntersectionObserver(function(entries,observer){
	entries.forEach(entry => {
		if(entry.isIntersecting){
			firstTimeObj['newOrleansFlow'] = true;
		}
		if(firstTimeObj['newOrleansFlow']){
			entry.target.classList.toggle('active')
		}
		if(!entry.isIntersecting && !firstTimeObj['newOrleansFlow']){
			return
		}
		
		
	});
},options);
europenewOrleansFlow.forEach(slide => {
	observer.observe(slide)
})

