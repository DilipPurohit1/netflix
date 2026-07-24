// =============================
// Netflix Top 10 Carousel
// =============================

const carousel = document.getElementById("carousel");

const left = document.getElementById("left");

const right = document.getElementById("right");

// Scroll Right
right.addEventListener("click", () => {

    carousel.scrollBy({

        left: 500,

        behavior: "smooth"

    });

});

// Scroll Left
left.addEventListener("click", () => {

    carousel.scrollBy({

        left: -500,

        behavior: "smooth"

    });

});

// Mouse Wheel Horizontal Scroll

carousel.addEventListener("wheel", (e) => {

    e.preventDefault();

    carousel.scrollLeft += e.deltaY;

});

// Poster Hover Effect

const posters = document.querySelectorAll(".movie img");

posters.forEach((poster) => {

    poster.addEventListener("mouseenter", () => {

        poster.style.transform = "scale(1.1)";

        poster.style.zIndex = "20";

    });

    poster.addEventListener("mouseleave", () => {

        poster.style.transform = "scale(1)";

        poster.style.zIndex = "5";

    });

});