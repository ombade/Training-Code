
const products = [
    { name: "Laptop", price: 800, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Shirt", price: 30, category: "Clothing" },
    { name: "Shoes", price: 60, category: "Clothing" },
    { name: "Headphones", price: 100, category: "Electronics" }
];

const upperCaseNames = products.map(product => product.name.toUpperCase());
console.log("Product Names in Uppercase:", upperCaseNames);


const electronicsProducts = products.filter(product => product.category === "Electronics");
console.log("Electronics Products:", electronicsProducts);


const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log("Total Price of All Products:", totalPrice);

function totalPriceByCategory(category) {
    return products
        .filter(product => product.category === category) 
        .map(product => product.price) 
        .reduce((sum, price) => sum + price, 0); 
}

console.log("Total Price of Electronics:", totalPriceByCategory("Electronics"));
