document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
    updateCartCount();
});

async function fetchProducts(category = "all", sort = "default") {
    try {
        let url = "https://fakestoreapi.com/products";
        if (category !== "all") url = `https://fakestoreapi.com/products/category/${category}`;

        let response = await fetch(url);
        let products = await response.json();

        if (sort === "low-high") {
            products.sort((a, b) => a.price - b.price);
        } else if (sort === "high-low") {
            products.sort((a, b) => b.price - a.price);
        }

        displayProducts(products);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function displayProducts(products) {
    const container = document.getElementById('products');
    container.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            <a href="product.html?id=${product.id}">View Details</a>
        `;
        container.appendChild(productDiv);
    });
}

document.getElementById('categoryFilter').addEventListener('change', function() {
    fetchProducts(this.value, document.getElementById('sortPrice').value);
});

document.getElementById('sortPrice').addEventListener('change', function() {
    fetchProducts(document.getElementById('categoryFilter').value, this.value);
});

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Product added to cart");
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cartCount").innerText = cart.length;
}
