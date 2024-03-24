import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList({ products, onEdit, onDelete }) {
    return (
        <div>
            {products.map(product => (
                <ProductItem
                    key={product.productId}
                    product={product}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

