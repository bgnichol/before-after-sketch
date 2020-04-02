const toggle = document.getElementById("toggle");
const flex = document.getElementById("flex");
const ball = document.getElementById("ball");

toggle.addEventListener("change", e => {
    flex.classList.toggle("show-monthly") 
    + ball.classList.toggle("ball-active");
});
