

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
    
    // Force enable touch events for all clickable elements
    const clickableElements = document.querySelectorAll('a, button, .btn, .navbar a, .categories-container .box, .products-container .box, .bx');
    
    clickableElements.forEach(element => {
        // Ensure element is clickable
        element.style.pointerEvents = 'auto';
        element.style.cursor = 'pointer';
        element.style.zIndex = '10';
        
        // Add touch event handling
        element.addEventListener('touchstart', function(e) {
            e.stopPropagation();
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
        });
        
        element.addEventListener('touchend', function(e) {
            e.stopPropagation();
            setTimeout(() => {
                this.style.transform = '';
                this.style.transition = '';
            }, 150);
        });
        
        // Ensure click events work
        element.addEventListener('click', function(e) {
            console.log('Click detected on:', this);
        });
    });
    
    if (isMobile) {
        console.log('Mobile device detected, applying mobile-specific fixes');
        
        // Add mobile-specific touch handling
        const mobileElements = document.querySelectorAll('.categories-container .box, .products-container .box');
        mobileElements.forEach(element => {
            element.style.minHeight = '44px';
            element.style.minWidth = '44px';
            element.style.touchAction = 'manipulation';
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

