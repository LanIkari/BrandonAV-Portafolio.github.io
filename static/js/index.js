
const loader = document.querySelector('#loader');
const body = document.querySelector('body');
const main = document.querySelector('main');
const particles = document.getElementById('particles');
window.onload = function(){
  setTimeout(function(){
    body.style.removeProperty('overflow');
    //main.style.removeProperty('overflow');
    loader.style.display = 'none';
  }, 10000); // Puedes cambiar el tiempo cada mil es 1 segundo.
}

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".mobile-nav-toggle");
menuBtn.addEventListener("click", () => {
  const visible = menu.getAttribute("data-visible");
  if (visible === "false") {
    menu.setAttribute("data-visible", "true");
    menuBtn.setAttribute("aria-expanded", "true");
  } else if (visible === "true") {
    menu.setAttribute("data-visible", "false");
    menuBtn.setAttribute("aria-expanded", "falce");
  }
});

