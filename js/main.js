// Counter Nums

let myStates = document.querySelector(".states");
let mySpans = document.querySelectorAll(".states .box .edit");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= myStates.offsetTop) {
    if (!started) {
      mySpans.forEach((span) => myCounter(span));
    }
    started = true;
  }
}
function myCounter(el) {
  let count = el.dataset.count;
  let thisCounter = setInterval(() => {
    el.textContent++
    if (el.textContent === count) {
      clearInterval(thisCounter)
    }
  }, 3000 / count)
}

// OnScrol Add Class to Navbar
let myNavbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  myNavbar.classList.toggle("add-class", window.scrollY > 0);
});


window.onscroll = () => {
  if (window.scrollY >= myNavbar.offsetTop) {
    if (myNavbar.classList.contains("bg-white")) {
      myNavbar.classList.remove("bg-white");
    } else if (myNavbar.offsetTop === 0) {
      myNavbar.classList.add("bg-white");
    }
  }
}


