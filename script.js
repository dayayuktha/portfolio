// Slideshow functionality
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Function to show slides
function showSlides() {
    // Hide all slides first
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Move to the next slide
    slideIndex++;

    // If at the end, loop back to the first slide
    if (slideIndex > totalSlides) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Auto-play every 3 seconds
    setTimeout(showSlides, 3000);
}

// Start the slideshow
showSlides();

// Manual navigation
document.querySelector(".prev").addEventListener("click", function () {
    slideIndex -= 2; // Move back one slide
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    showSlides();
});

document.querySelector(".next").addEventListener("click", function () {
    showSlides();
});


showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("gallery-item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}