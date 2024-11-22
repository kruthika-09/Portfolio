// Smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      console.log("Target section not found:", targetId);
    }
  });
});
//nav bar
const checkBtn = document.querySelector(".checkbtn");
if (checkBtn) {
  checkBtn.addEventListener("click", function () {
    const nav = document.querySelector(".nav");
    if (nav) {
      nav.classList.toggle("hidden");
    }
  });
}

// Function to show the appropriate certificate based on the URL hash
function showCertificate() {
  const hash = window.location.hash;

  if (hash) {
    const certificate = document.querySelector(hash);
    if (certificate) {
      certificate.classList.remove("hide");
    }
  }
}
document.addEventListener("DOMContentLoaded", showCertificate);
