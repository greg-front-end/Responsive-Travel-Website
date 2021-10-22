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

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.querySelector('#scroll-up');
    // when the scroll is higher than 200 viewport height,
    //  add the show-scroll style
    if (this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');
        /**
         * srollY = 0
         * sectionTop = -60, 569, 1350, 3032
         * sectionHeight = equal height every section
         * current.offsetTop = every section is below the top in px
         *  */ 
        if(sectionId && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-btn');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});