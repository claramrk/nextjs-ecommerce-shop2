import { Product } from '../../migrations/00000-createTableProducts';

export type ProductWithQuantity = {
  id: number;
  name: string;
  price: number;
  image: string | null;
  quantity: number;
};

// summing quantity of all products

export function sumQuantity(parsedCookieFunction: ProductWithQuantity[]) {
  const parsedCartCookie = parsedCookieFunction;

  const sumTotal = parsedCartCookie.reduce(
    (accumulator: number, object: ProductWithQuantity) => {
      return accumulator + object.quantity;
    },
    0,
  );
  return sumTotal;
}

// multiplying subtotal price
export function multiplySubtotalPricePerItem(
  id: number,
  parsedCookieFunction: ProductWithQuantity[],
  getProductsSQLFunction: Product[],
) {
  const products: Product[] = getProductsSQLFunction;
  const parsedCartCookie = parsedCookieFunction;

  const databaseProductsInCart = products.map((product) => {
    const matchingProductFromCookie = parsedCartCookie.find(
      (cookieObject: ProductWithQuantity) => product.id === cookieObject.id,
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
  parsedCookieFunction: ProductWithQuantity[],
  getProductsSQLFunction: Product[],
) {
  const products: Product[] = getProductsSQLFunction;
  const parsedCartCookie = parsedCookieFunction;
  // const parsedCartCookieOnlyDefined = parsedCartCookie.filter(
  //    (c) => c.quantity !== undefined );
  const subtotalPrices = parsedCartCookie.map((c: ProductWithQuantity) => {
    return multiplySubtotalPricePerItem(c.id, parsedCartCookie, products);
  });

  const sumTotal = subtotalPrices.reduce((accumulator, object) => {
    return accumulator + object;
  }, 0);
  return sumTotal;
}
