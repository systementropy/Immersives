const europeAlliances = document.querySelectorAll('.alliances');
const options = {
	root: null,
	margin: '0% 0% 0% 0',
	threshold: 1
}
const observer = new IntersectionObserver(function(entries,observer){
	entries.forEach(entry => {
		console.log(entry.target)
		if(!entry.isIntersecting){
			return
		}
		entry.target.classList.toggle('active')
	});
},options);
europeAlliances.forEach(slide => {
	observer.observe(slide)
})
