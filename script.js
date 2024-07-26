
// Fungsi untuk menangani pergerakan scroll
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

// Menambahkan event listener ke setiap tautan navigasi
document.addEventListener("DOMContentLoaded", function () {
    var navigationLinks = document.querySelectorAll("nav a");
    
    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            var targetSectionId = link.getAttribute("href").substring(1);
            scrollToSection(targetSectionId);
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-container");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    let slideIndex = 0;
  
    // Show the initial slide
    showSlide(slideIndex);
  
    // Event listeners for previous and next buttons
    prevButton.addEventListener("click", () => {
      slideIndex -= 1;
      showSlide(slideIndex);
    });
  
    nextButton.addEventListener("click", () => {
      slideIndex += 1;
      showSlide(slideIndex);
    });
  
    function showSlide(index) {
      if (index < 0) {
        slideIndex = slides.length - 1;
      } else if (index >= slides.length) {
        slideIndex = 0;
      }
  
      const translateValue = -slideIndex * 100;
      sliderContainer.style.transform = `translateX(${translateValue}%)`;
    }
  });

   
