let cart = [];
const cartCount = document.getElementById("cart-count");

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = cart
    .map(item => `<p>${item.name} - $${item.price}</p>`)
    .join("");
}

// Enhanced mobile-friendly cart functionality
document.addEventListener('DOMContentLoaded', function() {
  // Handle both click and touch events for better mobile support
  document.querySelectorAll(".products-container .add-to-cart, .categories-container .box, .products-container .box").forEach(button => {
    // Add click event
    button.addEventListener("click", (e) => {
      e.preventDefault();
      handleCartAction(e);
    });
    
    // Add touch event for mobile
    button.addEventListener("touchend", (e) => {
      e.preventDefault();
      handleCartAction(e);
    });
  });
});

function handleCartAction(e) {
  const productBox = e.target.closest(".box");
  if (!productBox) return;
  
  const name = productBox.dataset.name || productBox.querySelector('h2')?.textContent || 'Product';
  const price = parseFloat(productBox.dataset.price) || 0;

  // Add visual feedback
  productBox.style.transform = 'scale(0.95)';
  setTimeout(() => {
    productBox.style.transform = '';
  }, 150);

  cart.push({ name, price });

  if (cartCount) {
    cartCount.textContent = cart.length;
  }
  renderCart();
}
