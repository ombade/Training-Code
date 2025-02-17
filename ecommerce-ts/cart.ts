document.addEventListener("DOMContentLoaded", async () => {
    await displayCart();
});

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

async function displayCart(): Promise<void> {
    const cart: number[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartContainer = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");
    
    if (!cartContainer || !totalPriceElement) return;
    
    let totalPrice = 0;
    cartContainer.innerHTML = "";
    
    for (const productId of cart) {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            if (!response.ok) throw new Error("Failed to fetch product");
            
            const product: Product = await response.json();
            totalPrice += product.price;
            
            cartContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>$${product.price}</p>
                    <button onclick="removeFromCart(${product.id})">Remove</button>
                </div>
            `;
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    }
    
    totalPriceElement.innerText = totalPrice.toFixed(2);
}

function removeFromCart(productId: number): void {
    let cart: number[] = JSON.parse(localStorage.getItem("cart") || "[]");
    cart = cart.filter(id => id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function clearCart(): void {
    localStorage.removeItem("cart");
    displayCart();
}
