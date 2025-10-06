

// Cart initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart count from localStorage
    const CART_KEY = "shm_cart_v1";
    function readCart() { 
        try { 
            return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); 
        } catch { 
            return []; 
        } 
    }
    
    function updateCartCount() {
        const cartCountEl = document.getElementById("cart-count");
        if (cartCountEl) {
            const count = readCart().length;
            cartCountEl.textContent = count;
        }
    }
    
    // Update cart count on page load
    updateCartCount();
});

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
            
            // Allow normal click behavior - double-tap zoom is handled by CSS touch-action
        });
        
        // Ensure proper touch handling for cart icons
        const cartIcons = document.querySelectorAll('.categories-container .box .bx, .products-container .box .bx');
        cartIcons.forEach(icon => {
            icon.addEventListener('touchstart', function(e) {
                this.style.transform = 'scale(0.9)';
            });
            
            icon.addEventListener('touchend', function(e) {
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
        
    }
    
    // Add mobile menu toggle functionality (works on all devices)
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    
    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            navbar.classList.toggle('active');
            this.classList.toggle('bx-x');
        });
        
        // Close menu when clicking on a link
        const navLinks = navbar.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbar.classList.remove('active');
                menuIcon.classList.remove('bx-x');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
                navbar.classList.remove('active');
                menuIcon.classList.remove('bx-x');
            }
        });
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

