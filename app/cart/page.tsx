// import { cookies } from 'next/headers';
import { getProductsSQL } from '../../database/products';
import TicketComponent from '../products/TicketComponent';
import { getParsedCookie, ParsedCookie } from '../util/getCookie';
import { RedirectButton } from '../util/RedirectButton';
import CartRemoveButton from './CartRemoveButton';
import ChangeQuantityFormComponent from './ChangeQuantityFormComponent';
import styles from './page.module.scss';
import TotalPriceAndQuantity from './TotalPriceAndQuantityComponent';

export const metadata = {
  title: 'Einkaufswagen',
  description: 'Ticketshop',
};

export default async function Cart() {
  // get productsfromDatabaseSQL
  const products = await getProductsSQL();

  // get and parse cookies
  const parsedCartCookie = await getParsedCookie();

  // matching products from cart with database and assigning quanitity - DOESNT WORK, adds strings instead of integers
  const databaseProductsInCart = await products.map((product) => {
    const matchingProductFromCookie = parsedCartCookie.find(
      (cookieObject: ParsedCookie) => product.id === cookieObject.id,
    );
    return { ...product, quantity: matchingProductFromCookie?.quantity };
  });
  const matchingProductFromCookieOnlyDefined =
    await databaseProductsInCart.filter((e) => e.quantity !== undefined);


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

  /*
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
*/

  // JSX Code return
  return (
    <div>
      <h1>Einkaufswagen</h1>
      <div className={styles.productlist}>
        {matchingProductFromCookieOnlyDefined.length > 0 ? (
          matchingProductFromCookieOnlyDefined.map((p) => {
            return (
              <div
                className={styles.card}
                data-test-id={`cart-product-${p.id}`}
                key={`cart-product-${p.id}`}
              >
                <div>
                  <TicketComponent
                    src={p.image}
                    name={p.name}
                    price={p.price}
                  />
                </div>
                <div>
                  <ChangeQuantityFormComponent
                    quantity={p.quantity}
                    singleProductID={p.id}
                    name={p.name}
                  />
                  <div data-test-id={`cart-product-quantity-${p.id}`}>
                    <p>
                      Anzahl im Einkaufswagen:{' '}
                      <span data-test-id={`cart-product-quantity${p.id}`}>
                        {p.quantity}
                      </span>
                    </p>
                  </div>
                  <div>
                    Zwischensumme:{' '}
                    <span data-test-id={`cart-product-subtotal-${p.id}`}>
                      {multiplySubtotalPricePerItem(p.id)}
                    </span>
                    €
                  </div>
                  <form>
                    <CartRemoveButton singleProductID={p.id} />
                  </form>
                </div>
              </div>
            );
          })
        ) : (
          <>
            Einkaufswagen ist leer{' '}
            <RedirectButton
              redirectPage="/products"
              buttonText="Tickets hinzufügen"
            />
            {/* <Link href="/products">
              <button className={styles.primarybutton}>
                Tickets hinzufügen
              </button>
        </Link>*/}
          </>
        )}
      </div>
      <TotalPriceAndQuantity />
    </div>
  );
}
