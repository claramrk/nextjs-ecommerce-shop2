import './globals.modules.scss';
import HeaderComponent from './HeaderComponent';

export const metadata = {
  title: { default: 'Shop', template: '%s | Shop' },
  description: 'This is Claras e-commerce shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <HeaderComponent />
        </header>
        <main>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
