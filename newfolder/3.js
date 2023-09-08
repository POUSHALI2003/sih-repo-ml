//  TOGGLE ICON NAVBAR
let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuicon.onclick = () => {
  menuicon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};

//  SCROLL SECTIONS ACTIVE LINKS
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //   STICKY NAVBAR
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //   REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK(SCROLL)
  menuicon.classList.remove("fa-x");
  navbar.classList.remove("active");
};

//  SCROLL REVEAL
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1000,
  delay: 100,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio.box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .btn, .about-content", {
  origin: "right",
});

// TYPED JS

const typed = new Typed("#multiple-names", {
  strings: ["Front-End Developer", "Youtuber", "Content-creator"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  backDelay: 100,
});
