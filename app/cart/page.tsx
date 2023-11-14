// import { cookies } from 'next/headers';
import { cookies } from 'next/headers';
import { getProductsSQL } from '../../database/products';
import TicketComponent from '../products/TicketComponent';
import { matchProductsAndAssignQuantity } from '../util/matchAndAssignQuantityFunction';
import { parseJson } from '../util/parsejson';
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
  const cartCookie = cookies().get('cart')?.value;
  const parsedCartCookie =
    !cartCookie || JSON.parse(cartCookie).length === 0
      ? []
      : JSON.parse(cartCookie);

  // matching products from cart with database and assigning quanitity
  const matchingProductFromCookieOnlyDefined = matchProductsAndAssignQuantity(
    products,
    parsedCartCookie,
  );

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
                  <CartRemoveButton singleProductID={p.id} />
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
          </>
        )}
      </div>
      <TotalPriceAndQuantity />
    </div>
  );
}
