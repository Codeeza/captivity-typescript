import React from 'react';

interface PriceTagProps {
  price: string | number; // Assuming price can be either a string or number
  className?: string; // className is optional
}

export default function PriceTag({ price, className = '' }: PriceTagProps) {
  return <div className={`text-2xl font-semibold ${className}`}>{price}</div>;
}
