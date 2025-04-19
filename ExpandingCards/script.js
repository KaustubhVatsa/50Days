const panels = document.querySelectorAll(".panel");

function removeActiveClassAll() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClassAll();
    panel.classList.add("active");
  });
});
