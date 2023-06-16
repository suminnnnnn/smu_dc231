function checkScroll() {
  const element =
    document.querySelector(".slide-in");
  const elementTop =
    element.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (elementTop < windowHeight) {
    element.classList.add("active");
  }
}

window.addEventListener("scroll", checkScroll);
checkScroll();
