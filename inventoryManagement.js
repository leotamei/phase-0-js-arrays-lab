// 1. Declare and initialize the product inventory array
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// 2. Access product information
// Logs the details of the first product in the array
function logFirstProduct() {
  console.log(products[0]);
}

// 3. Update product information
// Changes the name of a product at a given index/position
function updateProductName(position, newName) {
  products[position] = newName;
}

// 4. Remove a product
// Removes the last product from the array
function removeLastProduct() {
  products.pop();
}

// 5. Add a new product
// Appends a product to the end of the array
function addProduct(newProduct) {
  products.push(newProduct);
}

// Export variables and functions for automated test suites (Learn.co / Jest)
if (typeof module !== "undefined") {
  module.exports = {
    products,
    logFirstProduct,
    updateProductName,
    removeLastProduct,
    addProduct,
  };
}
