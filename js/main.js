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


