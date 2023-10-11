import { Product } from '../../migrations/00000-createTableProducts';
import { ParsedCookie } from './getCookie';

// summing quantity of all products

export function sumQuantity(parsedCookieFunction: ParsedCookie[]) {
  const parsedCartCookie = parsedCookieFunction;

  const sumTotal = parsedCartCookie.reduce(
    (accumulator: number, object: ParsedCookie) => {
      return accumulator + Number(object.quantity);
    },
    0,
  );
  return sumTotal;
}

// multiplying subtotal price
export function multiplySubtotalPricePerItem(
  id: number,
  parsedCookieFunction: ParsedCookie[],
  getProductsSQLFunction: Product[],
) {
  const products: Product[] = getProductsSQLFunction;
  const parsedCartCookie = parsedCookieFunction;

  const databaseProductsInCart = products.map((product) => {
    const matchingProductFromCookie = parsedCartCookie.find(
      (cookieObject: ParsedCookie) => product.id === cookieObject.id,
    );
    return { ...product, quantity: matchingProductFromCookie?.quantity };
  });
  const matchingProductFromCookieOnlyDefined = databaseProductsInCart.filter(
    (e) => e.quantity !== undefined,
  );
  const singleProduct = matchingProductFromCookieOnlyDefined.find(
    (p) => p.id === id,
  );
  if (singleProduct === undefined || singleProduct.quantity === undefined) {
    const priceXQuantity = 0;
    return priceXQuantity;
  } else {
    const priceXQuantity = singleProduct.price * singleProduct.quantity;
    return priceXQuantity;
  }
}

// multiplying total price
export function multiplySubtotalPrices(
  parsedCookieFunction: ParsedCookie[],
  getProductsSQLFunction: Product[],
) {
  const products: Product[] = getProductsSQLFunction;
  const parsedCartCookie = parsedCookieFunction;
  const parsedCartCookieOnlyDefined = parsedCartCookie.filter(
    (c: ParsedCookie) => c.quantity !== undefined,
  );
  const subtotalPrices = parsedCartCookieOnlyDefined.map((c: ParsedCookie) => {
    return multiplySubtotalPricePerItem(c.id, parsedCartCookie, products);
  });

  const sumTotal = subtotalPrices.reduce((accumulator, object) => {
    return accumulator + Number(object);
  }, 0);
  return sumTotal;
}
