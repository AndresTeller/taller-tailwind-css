const $hamburguesa = document.getElementById("hamburguesa"),
  $menu = document.getElementById("menu-desplegable");

console.log($hamburguesa);

document.addEventListener("click", (e) => {
  if (e.target === $hamburguesa) {
    $menu.classList.toggle("hidden");
  }
});
