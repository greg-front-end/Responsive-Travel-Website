/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav-menu'),
        navToggle = document.querySelector('#nav-toggle'),
        navClose = document.querySelector('#nav-close');

// show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
// hidden menu 
if (navClose) {
    navClose.addEventListener('click', linkAction);
}

/*=============== REMOVE MENU WHEN CLICK LINKS ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show-menu');
}
navLink.forEach(link => link.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.querySelector('#header');
    // When scroll is greater than 20 viewport height
    // add the scroll-header class to the head
    if (this.scrollY >= 20) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*=============== SWIPER DISCOVER ===============*/
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 50,
    },
  });

  /*=============== VIDEO ===============*/
  const videoFile = document.querySelector('#video-file'),
        videoBtn = document.querySelector('#video-button'),
        videoIcon = document.querySelector('#video-icon');
    
function playPause() {
    if (videoFile.paused) {
        // Play video
        videoFile.play();

        // If paly, change the icon play
        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    } else {
        // pause video 
        videoFile.pause();

        // If pause, change the icon play
        videoIcon.classList.add('ri-play-line');
        videoIcon.classList.remove('ri-pause-line');
    }
}

videoBtn.addEventListener('click', playPause);

function finalVideo() {
    // If endend, change the icon play
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
}

videoFile.addEventListener('ended', finalVideo);
