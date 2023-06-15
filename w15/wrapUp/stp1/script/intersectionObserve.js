let observerOption = {
  root: null,
  rootMargin: "0px 0px -200px 0px",
  threshold: 0.75,
};

//function observerCallback() {}
let observerCallback = (observingTargets) => {
  observingTargets.forEach(
    (eachObservingTarget) => {
      if (eachObservingTarget.isIntersecting) {
        eachObservingTarget.target.classList.add(
          "triggered"
        );
      } else {
        eachObservingTarget.target.classList.remove(
          "triggered"
        );
      }
    }
  );
};

let observer = new IntersectionObserver(
  observerCallback,
  observerOption
);

let elems = document.querySelectorAll(
  ".animTrigger"
);
console.log(elems);
elems.forEach((elem) => {
  observer.observe(elem);
});
// // 하드코딩
// observer.observer(elems[0]);
// observer.observer(elems[0]);
// observer.observer(elems[0]);
// observer.observer(elems[0]);
// ...
// // 조금 똑똑한 코딩
// for (left idx = 0; idx < elems.lenght; idx++) {
// observer.observe(elems[idx]);
// }
// // 있어보이는 토딩
// elems.forEach((eachElem) => {
//   observer.observe(eachElem);
// });
