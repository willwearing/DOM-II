// Your code goes here

//change img using resize
const changeBannerImg = document.querySelector(".intro img");
window.addEventListener("resize", () => {
  changeBannerImg.src = "/destination.28855ccd.jpg";
});

//change img size using wheel

changeBannerImg.addEventListener("wheel", (event) => {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(0.125, scale), 4);
  changeBannerImg.style.transform = `scale(${scale})`;
});
let scale = 1;

//change nav bar text color by using click
const navItems = document.querySelectorAll(".nav-link");
navItems.forEach((el) => {
  el.addEventListener("click", () => {
    el.style.color = "pink";
  });
});

//preventing refresh on navlinks

navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

//using keydown "Escape" to hide all elements within body
const changeHome = document.querySelector(".container.home");
document.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    changeHome.style.backgroundColor = "blue";
  }
});

//using dblclick to change the image size
const adventureImg = document.querySelector(".img-fluid.rounded");
document.addEventListener("dblclick", () => {
  adventureImg.style.transform = "scale(1.5)";
  adventureImg.style.transistion = "transform 0.5s";
});

//using mouse enter and mouse leave to hide .content-destination
const pickYourDestinationEl = document.querySelector(".content-destination");
pickYourDestinationEl.addEventListener("mouseenter", () => {
  pickYourDestinationEl.style.visibility = "hidden";
});
pickYourDestinationEl.addEventListener("mouseleave", () => {
  pickYourDestinationEl.style.visibility = "visible";
});

//using mousedown to load a rickroll video and using mouseup to take you to Google - commented out because its horrible :D
// document.addEventListener("mousedown", () => {
//   window.location.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0"
// })
// document.addEventListener("mouseup", () => {
//   window.location.href = "https://www.google.com/"
// })

//nested event

const destinationEls = document.querySelectorAll(".destination");
const btns = document.querySelectorAll(".btn");
destinationEls.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "blue";
  });
});
btns.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "red";
    event.stopPropagation();
  });
});

//using GSAP to animate some stuff:
gsap.to(".logo-heading", {
  duration: 5,
  x: 300,
  rotation: 360,
  backgroundColor: "purple",
});
gsap.to(".img-content", { duration: 3, rotation: 360 });
