import './globals.scss';
import { KoHo } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Providers from '@/components/Providers/Providers';
import { Suspense } from 'react';
import Loading from './loading';

const koho = KoHo({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Library',
  description: 'Library animation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={koho.className}>
        <Providers>
          <Header />
          <Suspense fallback={<Loading />}>
            <main className="container">{children}</main>
          </Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
