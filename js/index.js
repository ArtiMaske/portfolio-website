const sectionHero = document.querySelector(".section-hero");
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");
const scrollElement = document.querySelector(".scrollTop-style");

// ========================================
// creating a responsive navbar component
// ========================================
const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};
mobile_nav.addEventListener("click", () => toggleNavbar());

// ========================================
// creating a // sticky navigation component
// ========================================
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    //console.log(ent);
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    // viewport
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);
observer.observe(sectionHero);

// ========================================
// creating portifolio component
// ========================================

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
  const btn_num = p_btn_clicked.dataset.btnNum;

  p_img_elem.forEach((curElem) => curElem.classList.add("p-img-not-active"));

  img_active.forEach((curElem) => curElem.classList.remove("p-img-not-active"));
});

// ========================================
// creating scroll to top button
// ========================================

const scrollTop = () => {
  sectionHero.scrollIntoView({ behavior: "smooth" });
};
scrollElement.addEventListener("click", scrollTop);

// ========================================
// creating testimonial section
// ========================================

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ========================================
// Media queries for testimonial section using javascript
// ========================================

function myFunction(widthSize) {
  if (widthSize.matches) {
    // If media query matches
    const swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  } else {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
}
const widthSize = window.matchMedia("(max-width: 780px)");
// Call listener function at run time
myFunction(widthSize);
// Attach listener function on state changes
widthSize.addEventListener("change", myFunction);

//lazy loading images
// const imgRef = document.querySelector("img[data-src]");

// const lazyImg = (entries) => {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   entry.target.src = imgRef.dataset.src;
// }
// const imgObserver = new IntersectionObserver(lazyImg, {
//         root: null,
//         threshold: 0,
//     }
// );
