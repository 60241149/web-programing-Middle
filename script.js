press.addEventListener("click", () => {
  stage.classList.remove("to-about");
  console.log("PRESS clicked");
  stage.classList.add("dim-now");
  setTimeout(() => {
    stage.classList.add("show-next");
    document.querySelector(".logo-wrap").style.display = "none";
    press.style.display = "none";
    stage.classList.remove("dim-now");
  }, 500);
});

document
  .querySelector(".top-menu .menu-item:first-child")
  ?.addEventListener("click", () => {
    stage.classList.remove("to-about");
  });

const bgm = document.getElementById("bgm");

press.addEventListener("click", () => {
  bgm.play().catch((err) => console.log("Autoplay blocked:", err));

  stage.classList.add("dim-now");
  setTimeout(() => {
    stage.classList.add("show-next");
    document.querySelector(".logo-wrap").style.display = "none";
    press.style.display = "none";
    stage.classList.remove("dim-now");
  }, 500);
});
