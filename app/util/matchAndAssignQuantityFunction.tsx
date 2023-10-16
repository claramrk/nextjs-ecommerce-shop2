import { Product } from '../../migrations/00000-createTableProducts';
import { Cookie } from './cookieValueFunction';

export function matchProductsAndAssignQuantity(
  products: Product[],
  parsedCartCookie: Cookie[],
) {
  const databaseProductsInCart = products.map((product) => {
    const matchingProductFromCookie = parsedCartCookie.find(
      (cookieObject: Cookie) => product.id === cookieObject.id,
    );
    if (matchingProductFromCookie) {
      const matchingProductWithQuantity = {
        ...product,
        quantity: matchingProductFromCookie.quantity,
      };
      return matchingProductWithQuantity;
    } else {
      return { ...product, quantity: 0 };
    }
  });
  const matchingProductFromCookieOnlyDefined = databaseProductsInCart.filter(
    (e) => e.quantity > 0,
  );

  return matchingProductFromCookieOnlyDefined;
}
