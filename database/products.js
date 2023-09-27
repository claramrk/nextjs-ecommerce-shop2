import 'server-only';

const products = [
  { id: 1, name: 'Kinder', price: 1 },
  { id: 2, name: 'Ermäßigt', price: 2 },
  { id: 3, name: 'Gruppenmitglied', price: 2.5 },
  { id: 4, name: 'Erwachsene/-r', price: 3 },
];

export function getProducts() {
  return products;
}

export function getProductsByID(id) {
  return products.find((p) => p.id === id);
}
