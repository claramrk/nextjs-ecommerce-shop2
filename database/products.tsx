import 'server-only';
import { cache } from 'react';
import { sql } from './connect';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string | null;
};

// get database sql;
export const getProductsSQL = cache(async () => {
  const products = await sql<Product[]>`
    SELECT
      *
    FROM
      products
  `;
  return products;
});

export const getProductSQLById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;
  return product;
});
