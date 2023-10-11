import { Product } from '../../migrations/00000-createTableProducts';
import { ParsedCookie } from './getCookie';

/*
const products = getProductsSQL();

// get and parse cookies
const cartCookie = cookies().get('cart')?.value;
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

*/

// summing quantity of all products

export async function sumQuantity(parsedCookieFunction: ParsedCookie[]) {
  const parsedCartCookie = await parsedCookieFunction;

  const sumTotal = parsedCartCookie.reduce(
    (accumulator: number, object: ParsedCookie) => {
      return accumulator + Number(object.quantity);
    },
    0,
  );
  return sumTotal;
}

// multiplying subtotal price
export async function multiplySubtotalPricePerItem(
  id: number,
  parsedCookieFunction: ParsedCookie[],
  getProductsSQLFunction: Product[],
) {
  const products: Product[] = await getProductsSQLFunction;
  const parsedCartCookie = await parsedCookieFunction;

  const databaseProductsInCart = await products.map((product) => {
    const matchingProductFromCookie = parsedCartCookie.find(
      (cookieObject: ParsedCookie) => product.id === cookieObject.id,
    );
    return { ...product, quantity: matchingProductFromCookie?.quantity };
  });
  const matchingProductFromCookieOnlyDefined =
    await databaseProductsInCart.filter((e) => e.quantity !== undefined);
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
export async function multiplySubtotalPrices(
  parsedCookieFunction: ParsedCookie[],
  getProductsSQLFunction: Product[],
) {
  const parsedCartCookie = await parsedCookieFunction;
  const parsedCartCookieOnlyDefined = parsedCartCookie.filter(
    (c: ParsedCookie) => c.quantity !== undefined,
  );
  const subtotalPrices = parsedCartCookieOnlyDefined.map((c: ParsedCookie) => {
    return multiplySubtotalPricePerItem(
      c.id,
      parsedCookieFunction,
      getProductsSQLFunction,
    );
  });
  console.log(subtotalPrices);

  const sumTotal = subtotalPrices.reduce((accumulator, object) => {
    return accumulator + Number(object);
  }, 0);
  return sumTotal;
}
