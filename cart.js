let cart = [];
const cartCount = document.getElementById("cart-count");

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = cart
    .map(item => `<p>${item.name} - $${item.price}</p>`)
    .join("");
}

document.querySelectorAll(".products-container .add-to-cart").forEach(button => {
  button.addEventListener("click", (e) => {
    const productBox = e.target.closest(".box");
    const name = productBox.dataset.name;
    const price = parseFloat(productBox.dataset.price);

    cart.push({ name, price });

    cartCount.textContent = cart.length;
    renderCart();
  });
});
