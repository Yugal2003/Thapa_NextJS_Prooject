import Image from 'next/image';
import React from 'react';

// Fetch product by ID
const fetchProductById = async (id) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    // Check if the response is OK (status code 200)
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }

    const product = await res.json();

    // Check if the response is valid JSON
    if (!product) {
      throw new Error('No product data found');
    }

    return product;
  } catch (error) {
    console.error('Error fetching product:', error.message);
    return null; // Return null in case of error
  }
};

// Dynamic page for displaying product details
const proData = async ({ params }) => {
  const { proData: id } = params; // Access the product ID from params

  // Fetch product by ID
  const product = await fetchProductById(id);

  // If no product is found, return an error message
  if (!product) {
    return (
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-4xl font-bold mb-8">Product not found</h1>
      </div>
    );
  }

  // Render product details
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl font-bold mb-8">{product.title}</h1>
      <Image src={product.image} alt={product.title} height={300} width={300} />
      <h2 className="text-lg font-semibold mt-4">Price: ${product.price}</h2>
      <h3 className="text-md font-medium mt-2">Category: {product.category}</h3>
      <p className="mt-4 text-center max-w-lg">{product.description}</p>
    </div>
  );
};

export default proData;