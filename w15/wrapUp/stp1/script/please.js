function checkScroll() {
  const element =
    document.querySelector(".scale");
  const elementTop =
    element.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (elementTop < windowHeight) {
    element.classList.add("active");
  }
}

window.addEventListener("scroll", checkScroll);
checkScroll();
