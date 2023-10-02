new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 1.1,
  gap: 0,
  autoPlay: false,
}).mount();

const updateLayout = () => {
  const screenWidth = window.innerWidth;

  const glideCarousel = document.querySelector(".second-slot-mob");
  const cardsRow = document.querySelector(".second-slot-desk");

  if (screenWidth < 768) {
    cardsRow.style.display = "none";
  } else {
    glideCarousel.style.display = "none";
  }
};
updateLayout();


const items = document.querySelectorAll(".qa-row").forEach((item) => {
  const button = item.querySelector("#toggleButton");
  const content = item.querySelector(".qa-content");

  button.addEventListener("click", function showDetails() {
    if (content.classList.contains("visible")) {
      content.classList.remove("visible");
      button.innerHTML = "﹀";
    } else {
      content.classList.add("visible");
      button.innerHTML = "︿";
    }
  });
});