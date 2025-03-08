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
  // Check for saved theme preference or use default
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Apply the saved theme or default
  if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      toggleIcons(true);
  }
  
  // Function to handle theme toggle
  function toggleTheme() {
      // Get current theme
      const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
      const isDarkMode = currentTheme === 'light' ? false : true;
      
      // Toggle theme
      const newTheme = isDarkMode ? 'light' : 'dark';
      document.documentElement.setAttribute('data-bs-theme', newTheme);
      
      // Toggle icon visibility
      toggleIcons(!isDarkMode);
      
      // Save preference to localStorage
      localStorage.setItem('theme', newTheme);
  }
  
  // Add click event to the small screen button
  document.getElementById('darkModeToggle')?.addEventListener('click', toggleTheme);
  
  // Add click event to the large screen button
  document.getElementById('darkModeToggleLg')?.addEventListener('click', toggleTheme);
  
  // Function to toggle all icon sets
  function toggleIcons(isDarkMode) {
      // Toggle all sun icons
      document.querySelectorAll('.sun-icon').forEach(icon => {
          icon.classList.toggle('d-none', isDarkMode);
      });
      
      // Toggle all moon icons
      document.querySelectorAll('.moon-icon').forEach(icon => {
          icon.classList.toggle('d-none', !isDarkMode);
      });
  }
});