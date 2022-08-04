const button = document.querySelector("button");
const button2 = document.querySelector(".big-button button");
const img = document.querySelector(".slideshow img");
const projectName = document.querySelector(".slideshow h3");
const projectDescription = document.querySelector(".slideshow p");
var images = ["../img/jubilee-thumbnail.png", "../img/rogue-pickings-thumbnail.png", "../img/unplugged.jpg", "../img/github-repo-gallery.PNG", "../img/guess-the-word.PNG", "../img/accelerate.png"];
var names = ["Project: Jubilee Austen", "Project: Rogue Pickings", "Project: Unplugged Retreat", "Project: Github Repo Gallery", "Project: Guess the Word", "Project: Accelerate"];
var descriptions = ["This project was coding up a simple portfolio site from a PSD, using HTML and CSS.", "This project was coding the home page for a food truck site from a PSD, using HTML and CSS.", "This project was coding a responsive three page website from PSDs using HTML and CSS.", "A project utilizing JS and an API to display my Github Repos.", "A JS guess the word game that uses an API to pull random words.", "A Wordpress site utilizing a custom theme."];
var currentImg = 0;
var currentName = 0;
var currentDescription = 0;
var nav = document.querySelector(".navigation ul");

button.addEventListener("click", function(){

  currentImg += 1;
  currentName += 1;
  currentDescription +=1;
  
  if (currentImg >= images.length) {
    currentImg = 0;
  };
  
  if (currentName >= names.length) {
    currentName = 0;
  };

  if (currentDescription >= descriptions.length){
    currentDescription = 0;
  };

  img.src = images[currentImg];
  projectName.innerHTML = names[currentName];
  projectDescription.innerHTML = descriptions[currentDescription];

});

button2.addEventListener("click", function(){

  currentImg += 1;
  currentName += 1;
  currentDescription +=1;
  
  if (currentImg >= images.length) {
    currentImg = 0;
  };
  
  if (currentName >= names.length) {
    currentName = 0;
  };

  if (currentDescription >= descriptions.length){
    currentDescription = 0;
  };

  img.src = images[currentImg];
  projectName.innerHTML = names[currentName];
  projectDescription.innerHTML = descriptions[currentDescription];

});


nav.addEventListener("mouseover", function(e){
  event.target.style.background = '#F8F8F3';
})

nav.addEventListener("mouseout", function(e){
  event.target.style.background = '';
})