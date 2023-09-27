new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 1,
  autoPlay: false,
}).mount();

const updateLayout = () => {
  const screenWidth = window.innerWidth;

  const glideCarousel = document.querySelector(".glide");
  const cardsRow = document.querySelector(".cards-row");

  if (screenWidth <= 768) {

    cardsRow.style.display = "none";
  } else {
    glideCarousel.style.display = "none";
    cardsRow.style.display = "block";
  }
};
updateLayout(); 
