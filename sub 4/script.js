// Smooth scroll to the benefits section when the "Explore Now" button is clicked
document.getElementById("exploreBtn").addEventListener("click", () => {
    document.querySelector(".benefits").scrollIntoView({
        behavior: "smooth",
    });
});
