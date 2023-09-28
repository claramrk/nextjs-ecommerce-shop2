import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="cartpage">
      <h1 className="cart">Cart</h1>

      <div className="ProductCard" data-test-id="cart-product-<product id>">
        <div className="title">
          <h2>Product.Name</h2>
        </div>

        <div
          className="Quantity"
          data-test-id="cart-product-quantity-<product id>"
        >
          <p>{`Quantity: `}</p>{' '}
        </div>
        <div className="subtotalP1">Product subtotal: price × quantity</div>
        <p>Total Price:</p>
        <p>0</p>
        <button
          className="buttonSecondary"
          data-test-id="cart-product-remove-<product id>"
        >
          Remove
        </button>
      </div>

      <div className="totalpriceandquantity">
        <div className="totalprice">
          <h2>Total Price of all products:</h2>
          <p data-test-id="cart-total">0</p>
        </div>
        <div className="quantity">{`Quantity: `}</div>
        <Link href="/shoppage">
          <div className="buttonSecondary">
            <div className="background3" />

            <div className="cartbutton">Continue Shopping</div>
          </div>
        </Link>
        <Link href="/checkoutPage">
          <div className="buttonSecondary">
            <div className="background3" />

            <div className="cartbutton">Checkout</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
