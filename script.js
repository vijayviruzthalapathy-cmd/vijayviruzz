// Contact Form Alert
document.querySelector(".contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! We will contact you soon.");
});

// Scroll Reveal Animation
function reveal(){
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element)=>{
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if(elementTop < windowHeight - revealPoint){
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
