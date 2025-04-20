const progress = document.querySelector(".progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let current = 1;

//next button
next.addEventListener("click", () => {
  //increase the current value
  current++;
  if (current > circles.length) {
    current = circles.length;
  }
  //every circle less than the current element is active
  updateActive();
});

function updateActive() {
  prev.disabled = current === 1;
  next.disabled = current === circles.length;
  circles.forEach((circle, idx) => {
    if (idx < current) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const active = document.querySelectorAll(".circle.active");
  const total = circles.length;
  progress.style.width = ((active.length - 1) / (total - 1)) * 100 + "%";
}

prev.addEventListener("click", () => {
  current--;
  if (current === 1) {
    current = 1;
  }
  updateActive();
});
