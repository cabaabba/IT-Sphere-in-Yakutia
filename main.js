document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a, .go-top a');
    
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', smoothScroll);
    }
    
    function smoothScroll(event) {
        event.preventDefault();
        
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
});

document.querySelector('.go-top a').addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector('header'); // замените '.your-section-selector' на селектор вашей секции
    section.scrollIntoView({ behavior: 'smooth' });
});