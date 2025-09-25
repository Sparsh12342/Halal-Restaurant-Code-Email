

// Mobile touch improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add touch event listeners for mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Add touch feedback to buttons
        const buttons = document.querySelectorAll('.btn, .navbar a, .categories-container .box, .products-container .box');
        
        buttons.forEach(button => {
            // Add touch start event for immediate feedback
            button.addEventListener('touchstart', function(e) {
                this.style.transform = 'scale(0.95)';
                this.style.transition = 'transform 0.1s ease';
            });
            
            // Add touch end event to reset
            button.addEventListener('touchend', function(e) {
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.transition = '';
                }, 150);
            });
            
            // Prevent double-tap zoom on buttons
            button.addEventListener('touchend', function(e) {
                e.preventDefault();
            });
        });
        
        // Ensure proper touch handling for cart icons
        const cartIcons = document.querySelectorAll('.categories-container .box .bx, .products-container .box .bx');
        cartIcons.forEach(icon => {
            icon.addEventListener('touchstart', function(e) {
                e.stopPropagation();
                this.style.transform = 'scale(0.9)';
            });
            
            icon.addEventListener('touchend', function(e) {
                e.stopPropagation();
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
        
        // Add mobile menu toggle functionality
        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.querySelector('.navbar');
        
        if (menuIcon && navbar) {
            menuIcon.addEventListener('click', function() {
                navbar.classList.toggle('active');
                this.classList.toggle('bx-x');
            });
        }
    }
});

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
   
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

