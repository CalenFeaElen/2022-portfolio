var nav = document.querySelector(".navigation ul");

nav.addEventListener("mouseover", function(e){
  event.target.style.background = '#F8F8F3';
})

nav.addEventListener("mouseout", function(e){
  event.target.style.background = '';
})