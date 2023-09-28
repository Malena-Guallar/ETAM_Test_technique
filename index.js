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

  if (screenWidth <= 768) {
    cardsRow.style.display = "none";
  } else {
    glideCarousel.style.display = "none";
  }
};
updateLayout();

let items = document.querySelectorAll(".qa-row").forEach((item) => {
  let button = item.querySelector("#toggleButton");
  let content = item.querySelector(".qa-content");

  button.addEventListener("click", function showDetails() {
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      button.innerHTML = "︿";
    } else {
      content.style.display = "none";
      button.innerHTML = "﹀";
    }
  });
});
