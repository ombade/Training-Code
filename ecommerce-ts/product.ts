document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    if (!productId) return;

    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) throw new Error("Failed to fetch product details");
        
        const product: Product = await response.json();
        
        const productDetails = document.getElementById("productDetails");
        if (!productDetails) return;
        
        productDetails.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
           
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    } catch (error) {
        console.error("Error fetching product details:", error);
    }
});
