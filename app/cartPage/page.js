import { cookies } from 'next/headers';
import Link from 'next/link';
import { getProductsByID, products } from '../../database/products';

export default function CartPage() {
  // get and parse cookies
  const cartCookie = cookies().get('cart')?.value;
  const parsedCartCookie = !cartCookie ? [] : JSON.parse(cartCookie);

  // matching products from cart with database and assigning quanitity
  const databaseProductsInCart = products.map((product) => {
    const matchingProductFromCookie = parsedCartCookie.find(
      (cookieObject) => product.id === cookieObject.id,
    );
    return { ...product, quantity: matchingProductFromCookie?.quantity };
  });
  const matchingProductFromCookieOnlyDefined = databaseProductsInCart.filter(
    (e) => e.quantity !== undefined,
  );

  // summing quantity of all products
  function sumQuantity() {
    const sumTotal = parsedCartCookie.reduce((accumulator, object) => {
      return accumulator + object.quantity;
    }, 0);
    return sumTotal;
  }

  // multiplying subtotal price
  function multiplySubtotalPricePerItem(id) {
    const singleProduct = matchingProductFromCookieOnlyDefined.find(
      (p) => p.id === id,
    );
    console.log(singleProduct.price);
    console.log(singleProduct.quantity);
    const priceXQuantity = singleProduct.price * singleProduct.quantity;
    return priceXQuantity;
  }

  // multiplying total price
  function multiplySubtotalPrices() {
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

  // JSX Code return
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
                <div
                  className="Quantity"
                  data-test-id={`cart-product-quantity-${p.id}`}
                >
                  <p>{`Quantity: ${p.quantity}`}</p>
                </div>
                <p>Price per Item:</p>
                <p>{p.price}</p>
                <div className="subtotalP1">
                  Product subtotal: {multiplySubtotalPricePerItem(p.id)}
                </div>
                <button
                  className="buttonSecondary"
                  data-test-id={`cart-product-remove-${p.id}`}
                >
                  Remove
                </button>
              </div>
            );
          })
        : ''}
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
