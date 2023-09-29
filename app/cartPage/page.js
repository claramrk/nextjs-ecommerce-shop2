import { cookies } from 'next/headers';
import Link from 'next/link';
import { getProducts, products } from '../../database/products';

export default function CartPage() {
  const cartCookie = cookies().get('cart')?.value;
  const parsedCartCookie = !cartCookie ? [] : JSON.parse(cartCookie);

  const databaseProductsInCart = products.map((product) => {
    const matchingProductFromCookie = parsedCartCookie.find(
      (cookieObject) => product.id === cookieObject.id,
    );
    return { ...product, quantity: matchingProductFromCookie?.quantity };
  });

  console.log(databaseProductsInCart);

  const matchingProductFromCookieOnlyDefined = databaseProductsInCart.filter(
    (e) => e.quantity !== undefined,
  );

  console.log(matchingProductFromCookieOnlyDefined);

  function sumQuantity() {
    const parsedCartCookie = JSON.parse(cartCookie);
    const sumTotal = parsedCartCookie.reduce((accumulator, object) => {
      return accumulator + object.quantity;
    }, 0);
    return sumTotal;
  }

  function multiplySubtotalPrices() {
    const parsedCartCookie = JSON.parse(cartCookie);
    const subtotalPrices = parsedCartCookie.map((c) => {
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === c.id) {
          const priceXQuantity = products[i].price * c.quantity;
          return priceXQuantity;
        }
      }
    });

    const sumTotal = subtotalPrices.reduce((accumulator, object) => {
      return accumulator + object;
    }, 0);
    return sumTotal;
  }

  return (
    <div className="cartpage">
      <h1 className="cart">Cart</h1>

      {matchingProductFromCookieOnlyDefined.length > 0
        ? matchingProductFromCookieOnlyDefined.map((p) => {
            return (
              <div
                className="ProductCard"
                data-test-id={`cart-product-${p.id}`}
                key={`cart-product-${p.id}`}
              >
                <div className="title">
                  <h2>{p.name}</h2>
                </div>
              </div>
            );
          })
        : ''}
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
        <h2>Total</h2>
        <div className="quantity">
          {`Quantity:`}
          <p data-test-id="quantity">{cartCookie ? sumQuantity() : '0'}</p>
        </div>
        <div className="price">
          {`Price:`}
          <p data-test-id="cart-total">
            {cartCookie ? multiplySubtotalPrices() : '0'}
          </p>
        </div>

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
