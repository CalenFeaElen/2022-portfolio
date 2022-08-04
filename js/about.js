var nav = document.querySelector(".navigation ul");

nav.addEventListener("mouseover", function(e){
	event.target.style.background = '#253d5b';
})

nav.addEventListener("mouseout", function(e){
	event.target.style.background = '';
})
