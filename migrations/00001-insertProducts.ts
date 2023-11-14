import { Sql } from 'postgres';
import { Product } from './00000-createTableProducts';

const products: Product[] = [
  {
    id: 1,
    name: 'Kinder',
    price: 1,
    image:
      'https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/sfa1e985dff417ba4/image/i707c3e4fc445bf98/version/1646756208/image.jpg',
  },
  {
    id: 2,
    name: 'Ermäßigt',
    price: 2,
    image:
      'https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/sfa1e985dff417ba4/image/ic5bad08a24720915/version/1646756758/image.jpg',
  },
  {
    id: 3,
    name: 'Gruppenmitglied',
    price: 2.5,
    image:
      'https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/sfa1e985dff417ba4/image/i96c59e6a0dffe07f/version/1646756067/image.jpg',
  },
  {
    id: 4,
    name: 'Erwachsene/-r',
    price: 3,
    image:
      'https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/sfa1e985dff417ba4/image/icb92504cc82f773e/version/1646756104/image.jpg',
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
      INSERT INTO
        products (
          name,
          price,
          image
        )
      VALUES
        (
          ${product.name},
          ${product.price},
          ${product.image}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products
      WHERE
        id = ${product.id}
    `;
  }
}
