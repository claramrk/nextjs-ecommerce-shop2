import 'server-only';

/*

import { cache } from 'react';
import { Product } from '../migrations/00000-createTableProducts';
import { sql } from './connect';

// get database sql;

export const getProductsSQL = cache(async () => {
  const products = await sql<Product[]>`
    SELECT * FROM products
  `;
  console.log(products);
  return products;
});
*/

// use hardcoded database in project

export const products = [
  {
    id: 1,
    name: 'Kinder',
    price: 1,
    image:
      'https://familienausflug.info/img/4567/ausflugsziel-hermannsh%C3%B6hle-17088.jpg',
  },
  {
    id: 2,
    name: 'Ermäßigt',
    price: 2,
    image:
      'https://www.wieneralpen.at/data/_wieneralpen/mediadb/cms_pictures/%7B14eb1d3d-b983-804c-8bea-18aca08e4510%7D.jpeg',
  },
  {
    id: 3,
    name: 'Gruppenmitglied',
    price: 2.5,
    image:
      'https://cdn.1000things.at/app/uploads/Bildschirmfoto-2018-03-27-um-14.20.11.png',
  },
  {
    id: 4,
    name: 'Erwachsene/-r',
    price: 3,
    image:
      'https://vcdn.bergfex.at/images/resized/profiles/detail/fe6/4ee19122d218070c16f9a5bfdcdebfe6.jpg?1592293387',
  },
];

export function getProducts() {
  return products;
}

export function getProductsByID(id) {
  return products.find((p) => p.id === id);
}
