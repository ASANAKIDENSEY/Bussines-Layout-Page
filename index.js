const caruselImage = document.querySelectorAll(".carusel_img"),
  caruselLine = document.querySelector(".carusel_line"),
  caruselDots = document.querySelector(".carusel__dot"),
  caruselBtnNext = document.querySelector(".btn__carusel-next"),
  caruselBtnPrev = document.querySelector(".btn__carusel-prev");

let caruselCount = 0;
let caruselWidth;

//adaptability
// window.addEventListener("resize", showCarusel);

//Btn slide next and prev
caruselBtnNext.addEventListener("click", nextCarusel);
caruselBtnPrev.addEventListener("click", PrevCarusel);

function showCarusel() {
  caruselWidth = document.querySelector(".carusel").offsetWidth;
  caruselLine.style.width = caruselWidth * caruselImage.length + "px";
  caruselImage.forEach((item) => (item.style.width = caruselWidth + "px"));

  rollCarusel();
}

function nextCarusel() {
  caruselCount++;
  if (caruselCount >= caruselImage.length) caruselCount = 0;

  rollCarusel();
}

function prevCarusel() {
  caruselCount--;
  if (caruselCount < 0) caruselCount = caruselImage.length - 1;

  rollCarusel();
}

//Roll slide
function rollCarusel() {
  caruselLine.style.transform = `transleteY(${-caruselCount * caruselWidth}px)`;
}
