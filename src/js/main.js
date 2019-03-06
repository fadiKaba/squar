const container = document.querySelector(".container");

container.addEventListener("mouseover", openSquqr);
container.addEventListener("mouseout", closeSquar);

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
