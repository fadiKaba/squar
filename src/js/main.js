const container = document.querySelector(".container");
const miniSquar = document.querySelectorAll(".mini-squar");
const bigImageDive = document.querySelector(".big-img");
const innerBigImageDive = document.querySelector(".big-img > div");
const span = document.querySelector(".big-img  span");
console.log(span);

container.addEventListener("mouseover", openSquqr);
container.addEventListener("mouseout", closeSquar);

function main() {
  mousePos(miniSquar);
  mousePosO(miniSquar);
  biger(miniSquar);
}

function openSquqr() {
  this.classList.add("stretch");
  div = document.querySelectorAll(".container > div");
  for (let i = 0; i < div.length; i++) {
    div[i].classList.add("transformN");
  }
}

function closeSquar() {
  this.classList.remove("stretch");
  for (let i = 0; i < div.length; i++) {
    div[i].classList.remove("transformN");
  }
}

function biger(items) {
  items.forEach(element => {
    element.addEventListener("click", () => {
      bigImageDive.style.display = "block";
      innerBigImageDive.innerHTML = element.innerHTML;
      console.log(element.innerHTML);
    });
  });
}

function hide() {
  console.log("span");
  bigImageDive.style.display = "none";
  innerBigImageDive.innerHTML = "";
}
const mainC = document.querySelector(".main-container");

function mousePos(items) {
  items.forEach(element => {
    element.addEventListener("mouseover", e => {
      element.classList.add("stopAnim");
      element.style.left = e.clientX - 20 + "px";
      element.style.top = e.clientY - 10 + "px";
      element.style.transform = "scale(3)";
      console.log(" x : " + e.clientX + " " + "y : " + e.clientY);
    });
  });
}
function mousePosO(items) {
  items.forEach(element => {
    element.addEventListener("mouseout", e => {
      element.classList.remove("stopAnim");
    });
  });
}
main();
