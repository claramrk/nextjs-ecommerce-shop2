'use client';

import { useState } from 'react';

export default function AddToCartFormComponent() {
  return (
    <form className="add-product-to-cart">
      <label htmlFor="quantity" className="quantitylabel">
        Quantity:
      </label>
      <input
        id="quantity"
        className="quantityinput"
        placeholder="1"
        data-test-id="product-quantity"
      />
      <button className="buttonPrimary" data-test-id="product-add-to-cart">
        Add to Cart
      </button>
    </form>
  );
}
