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
      const fadeHeight = window.innerHeight / 1;
      if (fade < fadeHeight) {
         fadingParagraph.classList.add('animation-x-visible');
      }
   };
  
   window.addEventListener('scroll', quickFadeAnimationParagraph)

 
 
   const fadingImage = document.querySelector('.animation-y');


   const quickFadeAnimationImage = () => {
      const fade = fadingImage.getBoundingClientRect().top;
      const fadeHeight = window.innerHeight / 1;
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




  
const twitter_icon = document.querySelector('.twitter_animation');
const linkedin_icon = document.querySelector('.linkedin_animation');
const gitHub_icon = document.querySelector('.gitHub_animation');

 
 


const twitterIconFadeAnimation = () => {
   const fade = twitter_icon.getBoundingClientRect().top;
   const fadeHeight = window.innerHeight;
   if (fade < fadeHeight) {
      twitter_icon.classList.add('twitter_animation_visible');
   }
};

window.addEventListener('load', twitterIconFadeAnimation)

const linkedinIconFadeAnimation = () => {
   const fade = linkedin_icon.getBoundingClientRect().top;
   const fadeHeight = window.innerHeight;
   if (fade < fadeHeight) {
      linkedin_icon.classList.add('linkedin_animation_visible');
   }
};

window.addEventListener('load', linkedinIconFadeAnimation)


const gitHubIconFadeAnimation = () => {
   const fade = gitHub_icon.getBoundingClientRect().top;
   const fadeHeight = window.innerHeight;
   if (fade < fadeHeight) {
      gitHub_icon.classList.add('gitHub_animation_visible');
   }
};

window.addEventListener('load', gitHubIconFadeAnimation)