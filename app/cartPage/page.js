import { cookies } from 'next/headers';
import Link from 'next/link';
import { products } from '../../database/products';
import TicketComponent from '../shoppage/TicketComponent';
import CartRemoveAllButton from './CartRemoveAllButton';
import CartRemoveButton from './CartRemoveButton';
import styles from './page.module.scss';

export default function CartPage() {
  // get and parse cookies
  const cartCookie = cookies().get('cart')?.value;
  const parsedCartCookie =
    !cartCookie || JSON.parse(cartCookie).length === 0
      ? []
      : JSON.parse(cartCookie);

  // matching products from cart with database and assigning quanitity - DOESNT WORK, adds strings instead of integers
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
      return accumulator + Number(object.quantity);
    }, 0);
    return sumTotal;
  }

  // multiplying subtotal price
  function multiplySubtotalPricePerItem(id) {
    const singleProduct = matchingProductFromCookieOnlyDefined.find(
      (p) => p.id === id,
    );
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
    <div className={styles.cartpage}>
      <div className={styles.productlist}>
        {matchingProductFromCookieOnlyDefined.length > 0
          ? matchingProductFromCookieOnlyDefined.map((p) => {
              return (
                <div
                  className={styles.card}
                  data-test-id={`cart-product-${p.id}`}
                  key={`cart-product-${p.id}`}
                >
                  {/*
                  <div className={styles.title}>
                  <h2>{p.name}</h2>
                </div>
                <img
                  src={p.image}
                  alt="ProductImage"
                  height="200"
                  data-test-id="product-image"
            />*/}
                  <div>
                    <TicketComponent
                      src={p.image}
                      name={p.name}
                      price={p.price}
                    />
                  </div>
                  <div>
                    <h2>Ticket: {p.name}</h2>
                    <div data-test-id={`cart-product-quantity-${p.id}`}>
                      <p>{`Anzahl im Einkaufswagen: ${p.quantity}`}</p>
                    </div>
                    <div>
                      Zwischensumme: {multiplySubtotalPricePerItem(p.id)}€
                    </div>
                    <form>
                      <CartRemoveButton singleProductID={p.id} />
                    </form>
                  </div>
                </div>
              );
            })
          : 'Your Cart is empty'}
      </div>
      <div className={styles.totalpriceandquantity}>
        {matchingProductFromCookieOnlyDefined.length > 0 ? (
          <>
            <h2>Total</h2>
            <div>
              Ticketanzahl:
              <p data-test-id="quantity">{cartCookie ? sumQuantity() : '0'}</p>
            </div>
            <div>
              Summe:
              <p data-test-id="cart-total">
                {cartCookie ? multiplySubtotalPrices() : '0'}€
              </p>
            </div>
            <Link href="/checkoutPage">
              <button
                className={styles.primarybutton}
                disabled={!sumQuantity() > 0}
              >
                Tickets bestellen
              </button>
            </Link>
            <form>
              <CartRemoveAllButton />
            </form>
          </>
        ) : (
          ''
        )}

        <Link href="/shoppage">
          <button className={styles.primarybutton}>
            Weitere Tickets hinzufügen
          </button>
        </Link>
      </div>
    </div>
  );
}
