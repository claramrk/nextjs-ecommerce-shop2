import { cookies } from 'next/headers';
import Link from 'next/link';
import { getProductsSQL } from '../../database/products';
import TicketComponent from '../shoppage/TicketComponent';
import CartRemoveAllButton from './CartRemoveAllButton';
import CartRemoveButton from './CartRemoveButton';
import ChangeQuantityFormComponent from './ChangeQuantityFormComponent';
import styles from './page.module.scss';
import TotalPriceAndQuantity from './TotalPriceAndQuantityComponent';

export default async function CartPage() {
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

  const parsedCartCookieOnlyDefined = parsedCartCookie.filter(
    (e) => e.id !== undefined,
  );

  // multiplying total price
  function multiplySubtotalPrices() {
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

                    <ChangeQuantityFormComponent
                      quantity={p.quantity}
                      singleProductID={p.id}
                    />
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
      <TotalPriceAndQuantity />
    </div>
  );
}
