//let box = document.querySelector("#box2");
//box.onclick = () => {
//  box.classList.toggle("boxSelected");
//};

//let box = document.querySelector(".box");
//box.onclick = () => {
//  box.classList.toggle("boxSelected");
//};
//.넣으면 맨 처음 찾은? 그것만 반응

let boxes = document.querySelectorAll(".box");
console.log(boxes);
console.log(boxes[0]);
console.log(boxes[1]);
console.log(boxes[2]);
//boxes.forEach(function (grass) {
//  grass.onclick = () => {
//    grass.classList.toggle("boxSelected");
//  };
//});
boxes.forEach((each) => {
  each.onclick = () => {
    each.classList.toggle("boxSelected");
  };
});
//each자리 암거나O
