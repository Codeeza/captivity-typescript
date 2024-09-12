import React from 'react';

// Define an interface for the component props
interface AddToCartButtonProps {
  productId: string; // Specify the type for productId
}

// Update the component to use the props interface
const AddToCardButton: React.FC<AddToCartButtonProps> = ({ productId }) => {
  const handleAddToCart = () => {
    // Handle add to cart logic
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
    >
      Add to Cart
    </button>
  );
};

export default AddToCardButton;
