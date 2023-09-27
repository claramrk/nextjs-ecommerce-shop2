import 'server-only';

const products = [
  {
    id: 1,
    type: 'Kinder',
    price: 1,
  },
  { id: 2, type: 'Ermäßigt', price: 2 },
  { id: 3, type: 'Gruppenmitglied', price: 2.5 },
  { id: 4, type: 'Erwachsene/-r', price: 3 },
];

export function getProducts() {
  return products;
}

export function getProductsByID(id) {
  return products.find((p) => p.id === id);
}
