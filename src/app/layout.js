import './globals.scss';
import { KoHo } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const koho = KoHo({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Бібліотека',
  description: 'Бібліотека анімацій',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={koho.className}>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
