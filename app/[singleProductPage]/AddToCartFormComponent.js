'use client';

import { useEffect, useState } from 'react';

export default function AddToCartFormComponent() {
  const [quantityValue, setQuantityValue] = useState('');

  useEffect(() => {
    setQuantityValue(1);
  }, []);

  const preventMinus = (e) => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
  };

  return (
    <form className="add-product-to-cart">
      <label htmlFor="quantity" className="quantitylabel">
        Quantity:
      </label>
      <input
        id="quantity"
        type="number"
        pattern="[0-9]*"
        className="quantityinput"
        value={quantityValue}
        data-test-id="product-quantity"
        min="0"
        onChange={(event) => {
          setQuantityValue(event.currentTarget.value);
          preventMinus(event.currentTarget.value);
        }}
      />
      <button className="buttonPrimary" data-test-id="product-add-to-cart">
        Add to Cart
      </button>
    </form>
  );
}
