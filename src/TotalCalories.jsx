import React from 'react';

export default function TotalCalories({ products }) {
  const totalCalories = products.reduce((sum, product) => sum + product.totalCalories, 0);
  return (
    <div>Total Calories: {totalCalories.toFixed(2)}</div>
  );
}
