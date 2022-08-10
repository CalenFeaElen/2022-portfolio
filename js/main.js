var nav = document.querySelector(".navigation ul");
const img = document.querySelector(".mushroom img");
var images = ["img/mushroom.png", "img/cat2.png", "img/rose.png"];
var currentImg = 0;

nav.addEventListener("mouseover", function(e){
	event.target.style.background = '#90beab';
})

nav.addEventListener("mouseout", function(e){
	event.target.style.background = '';
})

img.addEventListener("mouseover", function(){

  currentImg += 1;
  
  if (currentImg >= images.length) {
    currentImg = 0;
  };

  img.src = images[currentImg];

});