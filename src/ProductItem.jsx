import React from 'react';

function ProductItem({ product, onEdit, onDelete }) {
  return (
    <div className="product-card">
      <p>{product.productName}: {product.productAmount} g - {product.totalCalories} calories (total)</p>
      {/* <button onClick={() => onEdit(product)}>Edit</button> */}
      <button className="delete-btn" onClick={() => onDelete(product.productId)}>Delete</button>
    </div>
  );
}

export default ProductItem;
