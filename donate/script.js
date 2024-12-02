

// Smooth scrolling to the donation form
function scrollToForm() {
    const formSection = document.querySelector('#donate');
    formSection.scrollIntoView({ behavior: 'smooth' });
}

// Handle donation form submission
document.getElementById('donation-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate thank-you message
    const thankYouMessage = document.getElementById('thank-you');
    thankYouMessage.style.display = 'block';

    // Clear the form inputs
    this.reset();

    // Hide thank-you message after 3 seconds
    setTimeout(() => {
        thankYouMessage.style.display = 'none';
    }, 3000);
});
