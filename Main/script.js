document.getElementById('learnMoreBtn').addEventListener('click', () => {
    const extraTips = document.getElementById('extraTips');
    extraTips.classList.toggle('hidden');
    document.getElementById('learnMoreBtn').innerText = extraTips.classList.contains('hidden') ? 'More Tips' : 'Hide Tips';
  });
  



  const video = document.getElementById('background-video');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const videoHeight = window.innerHeight;
  
  // Adjust video playback speed based on scroll position
  video.currentTime = scrollPosition / 20;
});




document.getElementById("exploreBtn").addEventListener("click", () => {
  document.querySelector(".section").scrollIntoView({
      behavior: "smooth",
  });
});
