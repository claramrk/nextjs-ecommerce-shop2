import '../database/products.js';
import Link from 'next/link';
import { getProducts } from '../database/products.js';

export const metadata = {
  title: 'Home',
  description: 'This is Claras e-commerce shop',
};


export default function Home() {
  return (
    <main className="main">
     <p>mainpage</p>
    </main>
  );
}
