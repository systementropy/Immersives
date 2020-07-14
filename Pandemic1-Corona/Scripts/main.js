const europeAlliances = document.querySelectorAll('.alliances');
const firstTimeObj = {}
function calcNeededHeight(boxHeight){
	return ((window.innerHeight - boxHeight)/2)
} 
const options = {
	root: null,
	// margin: -calcNeededHeight(533)+'px 0px',
	threshold: 1
}
const observer = new IntersectionObserver(function(entries,observer){
	entries.forEach(entry => {
		// console.log(entry.target)
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
const bhChange = document.querySelector('.immersiveBg');
const observerBg = new IntersectionObserver(function(entry,observer){
	if(!entry.isIntersecting){
		return;
	}
	console.log('here')
	const elem = document.querySelector('.mainBody')
	elem.classList.toggle('active')
},{});
observerBg.observe(bhChange)