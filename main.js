
// Immediate test to see if JavaScript is loading
console.log('=== JavaScript file loaded! ===');
alert('JavaScript is loading!');

// Combined initialization and mobile fixes
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== DOM LOADED - JavaScript is working! ===');
    
    // Test if JavaScript is working - add test button immediately
    const testButton = document.createElement('button');
    testButton.textContent = 'TEST CLICK';
    testButton.style.cssText = 'position: fixed; top: 10px; right: 10px; z-index: 9999; background: red; color: white; padding: 10px; border: none; border-radius: 5px; font-size: 14px;';
    testButton.onclick = function() {
        alert('CLICK WORKS! JavaScript is functioning properly.');
        console.log('Test button clicked successfully');
    };
    document.body.appendChild(testButton);
    console.log('Test button added to page');
    
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
    console.log('Cart initialized');
    
    // Mobile touch improvements - SIMPLIFIED APPROACH
    console.log('Setting up mobile fixes...');
    
    // Detect mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    console.log('Is mobile:', isMobile);
    
    // Get all clickable elements
    const clickableElements = document.querySelectorAll('a, button, .btn, .navbar a, .categories-container .box, .products-container .box, .bx');
    console.log('Found clickable elements:', clickableElements.length);
    
    clickableElements.forEach((element, index) => {
        console.log(`Setting up element ${index}:`, element);
        
        // Force make it clickable
        element.style.pointerEvents = 'auto';
        element.style.cursor = 'pointer';
        element.style.zIndex = '999';
        element.style.position = 'relative';
        
        // Add simple click handler
        element.addEventListener('click', function(e) {
            console.log('CLICK DETECTED on:', this, 'href:', this.href);
            // Don't prevent default - let the link work normally
        });
        
        // Add touch handler for mobile
        if (isMobile) {
            element.addEventListener('touchstart', function(e) {
                console.log('TOUCH START on:', this);
                this.style.backgroundColor = 'rgba(0,0,0,0.1)';
            });
            
            element.addEventListener('touchend', function(e) {
                console.log('TOUCH END on:', this);
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 200);
            });
        }
    });
    
    // Special handling for category and product boxes
    const categoryBoxes = document.querySelectorAll('.categories-container .box');
    const productBoxes = document.querySelectorAll('.products-container .box');
    
    [...categoryBoxes, ...productBoxes].forEach(box => {
        console.log('Setting up box:', box);
        box.style.pointerEvents = 'auto';
        box.style.cursor = 'pointer';
        box.style.zIndex = '999';
        box.style.position = 'relative';
        
        // Make sure the link inside works
        const link = box.querySelector('a') || box;
        if (link) {
            link.style.pointerEvents = 'auto';
            link.style.zIndex = '1000';
        }
    });
    
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

