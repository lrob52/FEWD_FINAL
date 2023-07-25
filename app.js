let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
} 





// // JavaScript for creating a carousel with 3 blocks in rotation
// const imgGrid = document.querySelector(".img-grid");
// const slides = imgGrid.querySelectorAll(".pic-frame");
// const slideCount = slides.length;
// let currentIndex = 0;

// function showSlide(index) {
//     slides.forEach((slide, idx) => {
//         const slidePosition = (idx - index + slideCount) % slideCount;
//         slide.style.display = slidePosition < 3 ? "grid" : "none";
//     });
// }

// function nextSlide() {
//     currentIndex = (currentIndex + 1) % slideCount;
//     showSlide(currentIndex);
// }

// function prevSlide() {
//     currentIndex = (currentIndex - 1 + slideCount) % slideCount;
//     showSlide(currentIndex);
// }

// // Show the first 3 slides by default
// showSlide(currentIndex);

// // Automatically move to the next slide every 3 seconds
// setInterval(nextSlide, 3000);
