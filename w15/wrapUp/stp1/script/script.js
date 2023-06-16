function checkScroll() {
  const elements =
    document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    const elementTop =
      element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", checkScroll);
checkScroll();
