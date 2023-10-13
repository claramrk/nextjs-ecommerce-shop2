import { cookies } from 'next/headers';
import { getProductsSQL } from '../../database/products';
import { Product } from '../../migrations/00000-createTableProducts';
import { getParsedCookie, ParsedCookie } from '../util/getCookie';
import {
  multiplySubtotalPricePerItem,
  multiplySubtotalPrices,
  sumQuantity,
} from '../util/pricexQuantityFunctions';
import { RedirectButton } from '../util/RedirectButton';
import CartRemoveAllButton from './CartRemoveAllButton';
import styles from './page.module.scss';

export default async function TotalPriceAndQuantity() {
  // get products from SQL database

  const products: Product[] = await getProductsSQL();

  // get and parse cookies
  const cartCookie = await cookies().get('cart')?.value;
  const parsedCartCookie = await getParsedCookie();

  // matching products from cart with database and assigning quanitity
  const databaseProductsInCart = await products.map((product) => {
    const matchingProductFromCookie = parsedCartCookie.find(
      (cookieObject: ParsedCookie) => product.id === cookieObject.id,
    );
    return { ...product, quantity: matchingProductFromCookie?.quantity };
  });
  const matchingProductFromCookieOnlyDefined =
    await databaseProductsInCart.filter((e) => e.quantity !== undefined);

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
                    key={`uniqueID-${g.name}-${g.id}`}
                  >
                    <td>{g.quantity}</td>
                    <td>x</td>
                    <td>{g.name}</td>
                    <td>.....</td>
                    <td>
                      {multiplySubtotalPricePerItem(
                        g.id,
                        parsedCartCookie,
                        products,
                      )}
                      €
                    </td>
                  </tr>
                );
              })}
              <tr style={{ backgroundColor: '#e0b4b4' }}>
                <td>{cartCookie ? sumQuantity(parsedCartCookie) : '0'}</td>
                <td>x</td>
                <td>Tickets</td>
                <td>.....</td>
                <td>
                  {cartCookie
                    ? multiplySubtotalPrices(parsedCartCookie, products)
                    : '0'}
                  €
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            Ticketanzahl:{' '}
            <span data-test-id="quantity">
              {cartCookie ? sumQuantity(parsedCartCookie) : '0'}
            </span>
          </div>
          <div>
            Summe:{' '}
            <span data-test-id="cart-total">
              {cartCookie
                ? multiplySubtotalPrices(parsedCartCookie, products)
                : '0'}
            </span>
            €
          </div>
        </>
      ) : (
        ''
      )}
      <RedirectButton
        redirectPage="/products"
        buttonText={
          parsedCartCookie.length > 0
            ? 'Weitere Tickets hinzufügen'
            : 'Tickets hinzufügen'
        }
      />

      {matchingProductFromCookieOnlyDefined.length > 0 ? (
        <>
          <RedirectButton redirectPage="/cart" buttonText="Zum Einkaufswagen" />
          <RedirectButton
            className={styles.primarybutton}
            redirectPage="/checkout"
            buttonText="Tickets bestellen"
            data-test-id="cart-checkout"
          />
          <CartRemoveAllButton />
        </>
      ) : (
        ''
      )}
    </div>
  );
}
