import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
CREATE TABLE products(
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name varchar(30) NOT NULL,
price integer NOT NULL,
image varchar(100) );
`;
}

export async function down(sql) {
  await sql`
  DROP TABLE products;
  `;
}
