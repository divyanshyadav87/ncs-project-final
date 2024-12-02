
// Parallax Animation
window.addEventListener("scroll", () => {
    const sun = document.querySelector(".sun");
    const solarPanel = document.querySelector(".solar-panel");
    const scrollY = window.scrollY;
  
    // Sun moves slower than scroll
    sun.style.transform = `translate(-50%, ${scrollY * 0.2}px)`;
    solarPanel.style.transform = `translate(-50%, ${scrollY * 0.1}px)`;
  });
  