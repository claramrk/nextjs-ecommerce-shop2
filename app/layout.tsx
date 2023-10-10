import './globals.scss';
import { ReactNode } from 'react';
import HeaderComponent from './HeaderComponent';

export const metadata = {
  title: { default: 'Shop', template: '%s | Shop' },
  description: 'This is Claras e-commerce shop',
};

type Props = {
  children: ReactNode;
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>
        <header>
          <HeaderComponent />
        </header>
        <main className="mainBackground">
          <div>{props.children}</div>
        </main>
      </body>
    </html>
  );
}
