
const images = [
    "Imagenes/imagen1.jpg",
    "Imagenes/imagen2.jpg",
    "Imagenes/imagen3.jpg",
    "Imagenes/imagen4.jpg"
  ];
  
  let currentImageIndex = 0;
  
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const toggleButton = document.getElementById("toggle-button");
  const sliderContainer = document.getElementById("slider-container");
  const galleryContainer = document.getElementById("gallery-container");
  
  prevButton.addEventListener("click", showPrevImage);
  nextButton.addEventListener("click", showNextImage);
  toggleButton.addEventListener("click", toggleView);
  
  function showPrevImage() {
    currentImageIndex = (currentImageIndex === 0) ? (images.length - 1) : (currentImageIndex - 1);
    const imgElement = document.querySelector(".img");
    imgElement.setAttribute("src", images[currentImageIndex]);
  }
  
  function showNextImage() {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : (currentImageIndex + 1);
    const imgElement = document.querySelector(".img");
    imgElement.setAttribute("src", images[currentImageIndex]);
  }
  
  function toggleView() {
    sliderContainer.classList.toggle("hidden");
    galleryContainer.classList.toggle("hidden");
    if (sliderContainer.classList.contains("hidden")) {
      toggleButton.textContent = "Ver vista deslizador de imágenes";
    } else {
      toggleButton.textContent = "Ver vista galería de imágenes";
    }
  }