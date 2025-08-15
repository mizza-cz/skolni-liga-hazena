let runHero = document.querySelector(".icon-run");
let runMap = document.querySelector(".icon-run-2");

window.addEventListener("scroll", function () {
  let value = this.window.scrollY;
  runHero.style.right = value * 0.25 + "px";
  runMap.style.left = value * 0.5 + "px";
});
