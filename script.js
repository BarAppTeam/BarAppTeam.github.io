// document.getElementById('productForm').addEventListener('submit', addProduct);

document.addEventListener('DOMContentLoaded', () => {
    loadProductsFromLocalStorage();
    document.getElementById('productForm').addEventListener('submit', addProduct);
    document.getElementById('clearAll').addEventListener('click', clearAllProducts);
});

function addProduct(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productAmount = parseFloat(document.getElementById('productAmount').value); // Now in grams
    const caloriesPer100g = parseFloat(document.getElementById('caloriesPerKg').value);
    const totalCalories = (productAmount * caloriesPer100g) / 100; // Adjust for calories per 100g

    const productId = Date.now(); // Using timestamp as a simple unique identifier
    const product = {productName, productAmount, caloriesPer100g, totalCalories, productId};
    saveProductToLocalStorage(product);
    displayProduct(product, productId);
    document.getElementById('productForm').reset();
}

function clearAllProducts() {
    // Clear display
    document.getElementById('productList').innerHTML = '';

    // Clear localStorage
    localStorage.removeItem('products');
}

function deleteProduct(productId) {
    // The ID from the DOM will be a string because it's part of the element's ID attribute.
    // We ensure it's converted back to a number before comparison, as it was originally a number.
    const numericId = parseInt(productId, 10);

    // Remove the product element from the DOM
    const productElement = document.getElementById(`product-${productId}`);
    if (productElement) {
        productElement.remove();
    }

    // Retrieve the current list of products from localStorage, parse it,
    // and filter out the product with the matching numericId.
    let products = JSON.parse(localStorage.getItem('products')) || [];
    const filteredProducts = products.filter(product => product.productId !== numericId);

    // Update localStorage with the filtered list of products.
    localStorage.setItem('products', JSON.stringify(filteredProducts));
}


function displayProduct(product, productId) {
    const productList = document.getElementById('productList');
    const productElement = document.createElement('div');
    productElement.className = 'product-card'; // Use the new class
    productElement.setAttribute('id', `product-${productId}`);
    productElement.innerHTML = `
    <p>${product.productName}: ${product.productAmount} g - ${product.totalCalories} calories (total)</p>
    <button class="delete-btn" onclick="deleteProduct('${productId}')">Delete</button>
  `;
    productList.appendChild(productElement);
}


function saveProductToLocalStorage(product) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}

function loadProductsFromLocalStorage() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.forEach(product => displayProduct(product, product.productId));
}

document.getElementById('shareSummary').addEventListener('click', shareSummary);

function shareSummary() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    let summary = 'Product Calorie Summary:\n';
    products.forEach(product => {
        summary += `${product.productName}: ${product.productAmount} kg - ${product.totalCalories} calories (total)\n`;
    });
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(summary)}`;
    window.open(whatsappUrl, '_blank');
}
