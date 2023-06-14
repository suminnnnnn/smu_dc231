const observingTargets =
  document.querySelectorAll("main section");
//console.log(observingTargets);

const margin = ["10px", "5px"];

const visualizingMargin = () => {
  let topMargin = document.createElement("div");
  topMargin.style.cssText =
    "position: fixed; top: " +
    margin[0] +
    "; left: 0; right: 0; height: 1px; background-color: red;";
  document.body;
};

const whenTargetInView = (entitites) => {
  entities.forEach((eachEntity) => {
    if (eachEntity.isIntersecting) {
      console.log("isIn!", eachEntity.target);
    } else {
      console.log("isIn!", eachEntity.target);
    }
  });
};

const observer = new IntersectionObserver(
  whenTargetInView,
  {
    root: null,
    rootMargin:
      margin[0] + "0px" + margin[1] + "0px",
    threshold: [0],
  }
);

observingTargets.forEach((eachTarget) => {
  observer.observe(eachTarget);
});
