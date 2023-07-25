// SWIPER
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


// PorfolioFilter

const buttons = document.querySelectorAll('.btn-porto');
const images = document.querySelectorAll('.item-showroom');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active class from all buttons
    buttons.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Add active class to the clicked button
    button.classList.add('active');

    const filter = e.target.dataset.filter;

    images.forEach((item) => {
      if (filter === 'all') {
        item.style.opacity = '1';
        item.style.display = 'block';
        document.documentElement.style.height = '100vh'; // Set page height to 100vh
      } else {
        if (item.classList.contains(filter)) {
          item.style.opacity = '0';
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 300); // Adjust the delay according to your preference
          document.documentElement.style.height = 'auto'; // Set page height to auto
        } else {
          item.style.opacity = '0';
          item.style.display = 'none';
        }
      }
    });
  });
});




// YEAR UPDATE
let yearUpdate = new Date().getFullYear();
let newYear = document.getElementById("year");
newYear.textContent = yearUpdate;


// COUNTER UP
$('.counter').countUp();


// GSAP ANIMATION
const tl = gsap.timeline({defaults: {ease: 'bounce.out', delay: 1}});

tl.fromTo(".title-hero", {opacity: 0, y: -120}, {opacity: 1, y: 'initial', duration: 1.5});
tl.fromTo(".text-hero", {opacity: 0, y: 50}, {opacity: 1, y: 'initial', duration: 1.2, ease: "power2.out"});
tl.fromTo(".btn-hero", {opacity: 0, y: 30}, {opacity: 1, y: 'initial', duration: 1.2, ease: "power2.out"});



// ANIMATION SPAN HERO
const text = document.querySelector(".standby");

text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

anime.timeline({
    loop: false
})

.add({
  targets: '.standby span',
  translateX: [0, 0],
  scale: [1,10],
  opacity: [1,1],
  easing: "easeOutExpo",
  duration: 1500,
  delay: anime.stagger(200),
})


.add({
    targets: '.standby span',
    translateY: [-600, 0],
    scale: [10,1],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: anime.stagger(100),
})

.add({
    targets: '.standby span',
    translateX: [0, -1000],
    scale: [1,1],
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 2000,
    delay: anime.stagger(100),
})

.add({
    targets: '.standby span',
    translateX: [1000, 0],
    scale: [1,1],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: anime.stagger(100),
})

.add({
    targets: '.standby span',
    translateX: [0, 0],
    scale: [1,10],
    opacity: [1,1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: anime.stagger(100),
})


// GET DATA FROM CarAPI
const getDataBtns = document.querySelectorAll('.get-data-btn');

getDataBtns.forEach((btn) => {
  btn.addEventListener('click', async () => {
    const itemContainer = btn.closest('.item-showroom');
    const dataContainer = itemContainer.querySelector('.data-container');

    const options = {
      method: 'GET',
      url: 'https://car-api2.p.rapidapi.com/api/vin/KNDJ23AU4N7154467',
      headers: {
        'X-RapidAPI-Key': 'd04d02c9dbmsh7991d78e8892be5p18a5e0jsn56916406749e',
        'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const responseData = response.data;

      // Extract the required properties
      const { year, make } = responseData;

      // Create a paragraph element with the required properties
      const paragraph = document.createElement('p');
      paragraph.textContent = `Year: ${year} Make: ${make}`;

      // Create a close button
      const closeButton = document.createElement('button');
      closeButton.textContent = 'Close';
      closeButton.classList.add('close-button');

      // Display the data container
      dataContainer.style.display = 'block';
      btn.style.display = 'none';

      // Append the paragraph and close button to the data container
      dataContainer.innerHTML = '';
      dataContainer.appendChild(paragraph);
      dataContainer.appendChild(closeButton);

      // Add event listener to close button
      closeButton.addEventListener('click', () => {
        dataContainer.innerHTML = '';
        dataContainer.style.display = 'none';
        btn.style.display = 'block';
      });
    } catch (error) {
      console.error(error);
    }
  });
});



















// NAVIGATION MOBILE
const navBtn = document.querySelector('.checkbtn');
const navMobile = document.querySelector('.navigation');
const checkbox = document.querySelector('input[type=checkbox]');
const btnMenu = document.querySelector('.btn-mobile');

checkbox.addEventListener("change", function() {
  if (check.checked) {
    navMobile.style.height = '100vh';
    btnMenu.style.color = '#25bad0';
    document.body.style.overflow = 'hidden';
  } else {
    navMobile.style.height = '0';
    btnMenu.style.color = '#fff';
    document.body.style.overflow = 'visible';
  }
});


// ChangeNabarColor
if (window.matchMedia('(min-width: 768px)').matches) {
const navbar = document.querySelector('nav');

function navbarChangeColor() {
  var scrollPos = window.scrollY;

  if(scrollPos > 50){
    navbar.style.backgroundColor = '#051a40';
    navbar.style.boxShadow = "0 -5px 7px #fff";
  }else{
    navbar.style.backgroundColor = 'transparent';
    navbar.style.boxShadow = "none";
  }

}

window.onscroll = navbarChangeColor;

}




// HideNavbar
if (window.matchMedia('(max-width: 767px)').matches) {

const navMobil = document.querySelector('.navigation');
const navLink = document.querySelectorAll('.nav-link');
const checkBox = document.querySelector('input[type=checkbox]');
const menuBtn = document.querySelector('.btn-mobile');

navLink.forEach(link => {
    link.addEventListener('click', function() {
      navMobil.style.height = '0';
      checkBox.checked = false;
      menuBtn.style.color = '#fff';
      document.body.style.overflow = 'visible';
    });
});

}



// AOS ANIMATION
AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  
  duration: 800,
  easing: 'ease-in-out',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',

});



// ACTIVE SCROLL

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.navigation a[href="#' + sectionId + '"]').forEach(link => {
        link.classList.add('active');
      });
    } else {
      document.querySelectorAll('.navigation a[href="#' + sectionId + '"]').forEach(link => {
        link.classList.remove('active');
      });
    }
  });
});