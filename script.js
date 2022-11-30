const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('pepe-animation');
      }
    });
  });
  
  observer.observe(document.querySelector('.pepedance'));

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}