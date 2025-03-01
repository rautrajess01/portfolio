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