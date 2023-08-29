const buttons = document.querySelectorAll("#picker li");
const image = document.querySelector("#product-image");

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
