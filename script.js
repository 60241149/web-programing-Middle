press.addEventListener("click", () => {
  console.log("PRESS clicked"); // 개발자도구에서 눌림 확인
  stage.classList.add("dim-now");
  setTimeout(() => {
    stage.classList.add("show-next");
    document.querySelector(".logo-wrap").style.display = "none";
    press.style.display = "none";
    stage.classList.remove("dim-now");
  }, 500);
});

const soldier = document.querySelector(".soldier-img");
if (soldier) {
  soldier.addEventListener("mouseenter", startAutoFire);
  soldier.addEventListener("mouseleave", stopAutoFire);
}

document
  .querySelector(".top-menu .menu-item:first-child")
  ?.addEventListener("click", () => {
    stage.classList.remove("to-about"); // ← 이게 있어야 PREORDER가 다시 나타남
  });
