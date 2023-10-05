import { Sql } from 'postgres';

const products = [
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

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
INSERT INTO products (name, price, image)
VALUES (${product.name}, ${product.price}, ${product.image})
`;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
DELETE FROM products WHERE id =${product.id}
  `;
  }
}
