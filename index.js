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

let contentArray = document.querySelectorAll(".qa-content");

let buttons = document
  .querySelectorAll(".open-close-arrow")
  .forEach((button, index) => {
    button.addEventListener("click", function showDetails() {
      let content = contentArray[index];

      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.innerHTML = "︿";
      } else {
        content.style.display = "none";
        button.innerHTML = "﹀";
      }
    });
  });
