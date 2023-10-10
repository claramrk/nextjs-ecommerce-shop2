import { cookies } from 'next/headers';
import { getProductsSQL } from '../../database/products';
import TicketComponent from '../products/TicketComponent';
import { RedirectButton } from '../util/RedirectButton';
import CartRemoveButton from './CartRemoveButton';
import ChangeQuantityFormComponent from './ChangeQuantityFormComponent';
import styles from './page.module.scss';
import TotalPriceAndQuantity from './TotalPriceAndQuantityComponent';

export default async function Cart() {
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
      (cookieObject) => product.id === cookieObject.id,
    );
    return { ...product, quantity: matchingProductFromCookie?.quantity };
  });
  const matchingProductFromCookieOnlyDefined =
    await databaseProductsInCart.filter((e) => e.quantity !== undefined);

  // summing quantity of all products
 /* function sumQuantity() {
    const sumTotal = parsedCartCookie.reduce((accumulator, object) => {
      return accumulator + Number(object.quantity);
    }, 0);
    return sumTotal;
  }
  */

  // multiplying subtotal price
  function multiplySubtotalPricePerItem(id) {
    const singleProduct = matchingProductFromCookieOnlyDefined.find(
      (p) => p.id === id,
    );
    const priceXQuantity = singleProduct.price * singleProduct.quantity;
    return priceXQuantity;
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
    <div className={styles.cartpage}>
      <div className={styles.productlist}>
        {matchingProductFromCookieOnlyDefined.length > 0 ? (
          matchingProductFromCookieOnlyDefined.map((p) => {
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
