var nav = document.querySelector(".navigation ul");

nav.addEventListener("mouseover", function(e){
	event.target.style.background = '#90beab';
})

nav.addEventListener("mouseout", function(e){
	event.target.style.background = '';
})
