import { cookies } from 'next/headers';
import Link from 'next/link';
import { getProductsSQL } from '../../database/products';
import { ParsedCookie } from '../util/getCookie';
import { RedirectButton } from '../util/RedirectButton';
import CartRemoveAllButton from './CartRemoveAllButton';
import styles from './page.module.scss';

export default async function TotalPriceAndQuantity() {
  const products = await getProductsSQL();

  // get and parse cookies
  const cartCookie = await cookies().get('cart')?.value;
  const parsedCartCookie =
    !cartCookie || JSON.parse(cartCookie).length === 0
      ? []
      : JSON.parse(cartCookie);

  // matching products from cart with database and assigning quanitity - DOESNT WORK, adds strings instead of integers
  const databaseProductsInCart = await products.map((product) => {
    const matchingProductFromCookie = parsedCartCookie.find(
      (cookieObject: ParsedCookie) => product.id === cookieObject.id,
    );
    return { ...product, quantity: matchingProductFromCookie?.quantity };
  });
  const matchingProductFromCookieOnlyDefined =
    await databaseProductsInCart.filter((e) => e.quantity !== undefined);

  // summing quantity of all products
  function sumQuantity() {
    const sumTotal = parsedCartCookie.reduce((accumulator, object) => {
      return accumulator + Number(object.quantity);
    }, 0);
    return sumTotal;
  }

  // multiplying subtotal price
  function multiplySubtotalPricePerItem(id: number) {
    const singleProduct = matchingProductFromCookieOnlyDefined.find(
      (p) => p.id === id,
    );
    if (!singleProduct) {
      const priceXQuantity = 0;
      return priceXQuantity;
    } else {
      const priceXQuantity = singleProduct.price * singleProduct.quantity;
      return priceXQuantity;
    }
  }

  // multiplying total price
  function multiplySubtotalPrices() {
    const parsedCartCookieOnlyDefined = parsedCartCookie.filter(
      (e) => e.id !== undefined,
    );
    const subtotalPrices = parsedCartCookieOnlyDefined.map((c) => {
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
    <div className={styles.totalpriceandquantity}>
      {matchingProductFromCookieOnlyDefined.length > 0 ? (
        <>
          <h2>Total</h2>
          <table className="audittable">
            <tbody className="table-body">
              {matchingProductFromCookieOnlyDefined.map((g) => {
                return (
                  <tr
                    className="ticketsummary"
                    key={`uniqueID-${g.firstName}-${g.id}`}
                  >
                    <td>{g.quantity}</td>
                    <td>x</td>
                    <td>{g.name}</td>
                    <td>.....</td>
                    <td>{multiplySubtotalPricePerItem(g.id)}€</td>
                  </tr>
                );
              })}
              <tr>
                <td>{cartCookie ? sumQuantity() : '0'}</td>
                <td>x</td>
                <td>Tickets</td>
                <td>.....</td>
                <td>{cartCookie ? multiplySubtotalPrices() : '0'}€</td>
              </tr>
            </tbody>
          </table>
          <div>
            Ticketanzahl:{' '}
            <span data-test-id="quantity">
              {cartCookie ? sumQuantity() : '0'}
            </span>
          </div>
          <div>
            Summe:{' '}
            <span data-test-id="cart-total">
              {cartCookie ? multiplySubtotalPrices() : '0'}
            </span>
            €
          </div>
          <RedirectButton
            className={styles.primarybutton}
            redirectPage="/checkout"
            buttonText="Tickets bestellen"
            data-test-id="cart-checkout"
          />
          {/*
                      <Link href="/checkout">
<button
              className={styles.primarybutton}
              disabled={!sumQuantity() > 0}
              data-test-id="cart-checkout"
            >
              Tickets bestellen
            </button>
                      </Link>
 */}
        </>
      ) : (
        ''
      )}

      <Link href="/products">
        <button className={styles.primarybutton}>
          {parsedCartCookie.length > 0
            ? 'Weitere Tickets hinzufügen '
            : 'Tickets hinzufügen'}
        </button>
      </Link>
      {matchingProductFromCookieOnlyDefined.length > 0 ? (
        <form>
          <CartRemoveAllButton />
        </form>
      ) : (
        ''
      )}
    </div>
  );
}
