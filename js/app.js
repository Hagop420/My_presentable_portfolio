// quick word fade animation
const fadingText = document.querySelector('.fade-animation');

 
 


   const quickFadeAnimation = () => {
      const fade = fadingText.getBoundingClientRect().top;
      const fadeHeight = window.innerHeight;
      if (fade < fadeHeight) {
         fadingText.classList.add('show-text-item');
      }
   };
  
window.addEventListener('load', quickFadeAnimation)
   
const fadingParagraph = document.querySelector('.animation-x');

 
 


   const quickFadeAnimationParagraph = () => {
      const fade = fadingParagraph.getBoundingClientRect().top;
      const fadeHeight = window.innerHeight;
      if (fade < fadeHeight) {
         fadingParagraph.classList.add('animation-x-visible');
      }
   };
  
   window.addEventListener('scroll', quickFadeAnimationParagraph)

 
 
   const fadingImage = document.querySelector('.animation-y');


   const quickFadeAnimationImage = () => {
      const fade = fadingImage.getBoundingClientRect().top;
      const fadeHeight = window.innerHeight;
      if (fade < fadeHeight) {
         fadingImage.classList.add('animation-y-visible');
      }
   };
  
   window.addEventListener('scroll', quickFadeAnimationImage)



   
   
   
 
   

const icon = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

const toggleBtn = () => {
   navList.classList.toggle('show')
}

icon.addEventListener('click', toggleBtn)


var pricePerSoda = 1;
var numberOfSodas = 2;
var pricePerTaco;
var numberOfTacos;

var Subtotal = (numberOfSodas * pricePerSoda) + (numberOfTacos* pricePerTaco)
var total = Subtotal * 1.10



console.log(total);