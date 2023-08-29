const buttons = document.querySelectorAll("#picker li");
const image = document.querySelector("#product-image");
const barBlur = document.querySelector("#picker-header");
const titleRemove = document.querySelector("#picker-header #title");

const idOriginal = titleRemove.id;

let posicaoInicial = barBlur.getBoundingClientRect().top;

const mudarPosicao = ()=>{
    const posicaoAtual = barBlur.getBoundingClientRect().top;
    if(posicaoAtual !== posicaoInicial){
        titleRemove.remove();
    }

    posicaoInicial = posicaoAtual;
}

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
