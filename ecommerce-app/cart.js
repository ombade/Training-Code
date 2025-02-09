document.addEventListener("DOMContentLoaded", async () => {
    displayCart();
});

async function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cartItems");
    let totalPrice = 0;
    cartContainer.innerHTML = "";

    for (let productId of cart) {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await response.json();

        totalPrice += product.price;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
                <button onclick="removeFromCart(${product.id})">Remove</button>
            </div>
        `;
    }

    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(id => id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
}
