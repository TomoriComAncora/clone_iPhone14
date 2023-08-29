const buttons = document.querySelectorAll("#picker li");
const image = document.querySelector("#product-image");
const barBlur = document.querySelector("#picker-header");
const titleRemove = document.querySelector(" #title");

let posicaoInicial = barBlur.getBoundingClientRect().top;

const mudarPosicao = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > posicaoInicial) {
    titleRemove.style.visibility = "hidden";
    barBlur.classList.add("aux");
    barBlur.style.padding = ".4rem";
  } else if (scrollTop <= 0) {
    titleRemove.style.visibility = "visible";
    barBlur.classList.remove("aux");
  }
  posicaoInicial = scrollTop;
};

window.addEventListener("scroll", mudarPosicao);

buttons.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    buttons.forEach((btns) => {
      btns.querySelector(".color").classList.remove("selected");
    });

    const button = e.target;
    const id = button.getAttribute("id");

    button.querySelector(".color").classList.add("selected");

    image.classList.add("changing");
    image.setAttribute("src", `img/iphone_${id}.jpg`);

    setTimeout(() => {
      image.classList.remove("changing");
    }, 200);
  });
});
