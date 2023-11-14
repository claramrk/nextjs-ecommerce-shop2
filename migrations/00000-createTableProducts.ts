import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string | null;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE
      products (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(30) NOT NULL,
        price FLOAT NOT NULL,
        image VARCHAR(300)
      );
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE products; `;
}
