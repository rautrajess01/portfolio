document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const upArrow = document.getElementById("upArrow");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        upArrow.style.display = "block";  
    } else {
        upArrow.style.display = "none";  
    }
};

upArrow.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
};
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or respect OS preference
    if (localStorage.getItem('darkMode') === 'enabled' || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches && 
         localStorage.getItem('darkMode') !== 'disabled')) {
      enableDarkMode();
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', function() {
      if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });
    
    function enableDarkMode() {
      htmlElement.setAttribute('data-bs-theme', 'dark');
      darkModeIcon.classList.remove('bi-moon-stars');
      darkModeIcon.classList.add('bi-sun');
      localStorage.setItem('darkMode', 'enabled');
    }
    
    function disableDarkMode() {
      htmlElement.setAttribute('data-bs-theme', 'light');
      darkModeIcon.classList.remove('bi-sun');
      darkModeIcon.classList.add('bi-moon-stars');
      localStorage.setItem('darkMode', 'disabled');
    }
  });