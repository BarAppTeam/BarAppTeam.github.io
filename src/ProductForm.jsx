import React, { useState, useCallback } from 'react';

export default function ProductForm({ onAdd }) {
    const [formValues, setFormValues] = useState({});

    const updateFormValues = useCallback((key, value) => {
        setFormValues(current => ({ ...current, [key]: value }))
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const totalCalories = (formValues.productAmount * formValues.caloriesPer100g) / 100;
        const productId = Date.now();
        const product = { ...formValues, totalCalories, productId };

        onAdd(product);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                id="productName"
                type="text"
                value={formValues.productName}
                onChange={(e) => updateFormValues(e.target.id, e.target.value)}
                placeholder="Product Name"
                required
            />
            <input
                id="productAmount"
                type="number"
                value={formValues.productAmount}
                onChange={(e) => updateFormValues(e.target.id, Number(e.target.value))}
                placeholder="Amount (in g)"
                required
            />
            <input
                id="caloriesPer100g"
                type="number"
                value={formValues.caloriesPer100g}
                onChange={(e) => updateFormValues(e.target.id, Number(e.target.value))}
                placeholder="Calories per 100g"
                required
            />
            <button type="submit">Add Product</button>
        </form>
    );
}
