const icon=document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

const toggleBtn = () => {
   navList.classList.toggle('show')
}

icon.addEventListener('click', toggleBtn)
