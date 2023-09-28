import { cookies } from 'next/headers';
import Link from 'next/link';
import { getProducts } from '../../database/products';

export default function CartPage() {
  const cartCookie = cookies().get('cart')?.value;
  const productsDatabase = getProducts();

  function sumQuantity() {
    const parsedCartCookie = JSON.parse(cartCookie);
    const sumTotal = parsedCartCookie.reduce((accumulator, object) => {
      return accumulator + object.quantity;
    }, 0);
    return sumTotal;
  }

  function multiplyTotalPrice() {
    const parsedCartCookie = JSON.parse(cartCookie);
    parsedCartCookie.forEach((c) => {
      for (let i = 0; i < productsDatabase.length; i++) {
        if (productsDatabase[i].id === c.id) {
          const priceXQuantity = productsDatabase[i].price * c.quantity;
          console.log(
            `${productsDatabase[i].name} ${c.quantity} ${priceXQuantity}`,
          );
        }
      }
    });
  }
  console.log(multiplyTotalPrice());

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
          <h2>Total</h2>
          <div className="price">
            {`Price: `}
            <p data-test-id="cart-total">0</p>
          </div>
        </div>
        <div className="quantity">{`Quantity: ${
          cartCookie ? sumQuantity() : '0'
        }`}</div>
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
