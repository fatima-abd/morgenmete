// const obServer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log;
//     entry;
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     } else {
//       entry.target.classList.remove("show");
//     }
//   });
// });

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let slides = document.getElementsByClassName("slide");
//   let dots = document.getElementsByClassName("dot");

//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += "active";
// }

// function openMenu() {

function openMenu() {
  const nav = document.querySelector(".header-content");
  const open = document.querySelector(".menu-icon");

  open.addEventListener("click", () => {
    nav.style.display = "flex";
  });
}
function closeMenu() {
  const nav = document.querySelector(".header-content");
  const close = document.querySelector(".close-icon");

  close.addEventListener("click", () => {
    nav.style.display = "none";
  });
}

// ***********************cart *************************

function openCart() {
  const cart = document.querySelector(".cart-box");
  const openCart = document.querySelector(".cart-item-media");

  openCart.addEventListener("click", () => {
    cart.style.display = "flex";
  });
}

function closeCart() {
  const cart = document.querySelector(".cart-box");
  const closeCart = document.querySelector(".close-cart");

  closeCart.addEventListener("click", () => {
    cart.style.display = "none";
  });
}

const toggleNavigationButton = document.querySelector(".cart-item-media");
const navigation = document.querySelector(".cart-box");

toggleNavigationButton.addEventListener("click", () => {
  navigation.classList.toggle("active");
});
