document.querySelector('#header .hamburger-menu').addEventListener("click", function(){
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
});

gsap.registerPlugin(ScrollTrigger);

const elements = document.querySelectorAll('#hero-section .text-containers h1 span, #work-section .text-containers h1 span, #brand .text-containers h1 span, #footer .content-title h1 span');

elements.forEach((el) => {
  gsap.from(el, {
    y: 300,
    rotation: 15,
    duration: 1.5,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      end: 'bottom 60%',
      toggleActions: 'play none none none'
    }
  });
});


gsap.to("#image-section .overlay", {
  scrollTrigger: {
    trigger: "#image-section",
    start: "top 90%",
    end: "bottom bottom",
    scrub: 1
  },
  width: '86vw',
});


gsap.fromTo("#recent-project .grid .item", {
  opacity: 0,
  y: 100
}, {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#recent-project .grid",
    start: "top 70%",
    end: "bottom 70%",
    toggleActions: "play none none none"
  }
});


var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector('.logos').appendChild(copy);


const lenis = new Lenis({
  duration: 1.2
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


