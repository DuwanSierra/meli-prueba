import { Metadata } from 'next';
import { Header } from './ui/Header/Header';
import './layout.scss';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Mercado Libre Colombia - Envíos Gratis en el día',
  description:
    'Compre productos con Envío Gratis en el día en Mercado Libre Colombia. Encuentre miles de marcas y productos a precios increíbles.',
  keywords: ['sales', 'products', 'development'],
};

const meliFont = localFont({
  src: 'fonts/proximanova-regular.woff2',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={meliFont.className}>
      <body>
        <Header></Header>
        <section className="container">{children}</section>
      </body>
    </html>
  );
}
