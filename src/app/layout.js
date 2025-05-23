import './globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';

<<<<<<< HEAD
=======
import { Sofia_Sans_Semi_Condensed, Sulphur_Point } from 'next/font/google';

const sofiaSansSemiCondensed = Sofia_Sans_Semi_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const sulphur = Sulphur_Point({
  subsets: ['latin'],
  weight: ['400', '700'],
});

>>>>>>> us001-realizar-cadastro
export const metadata = {
  title: '23rd FishBase & SeaLifeBase Symposium',
};

export default function RootLayout({ children }) {
  return (
<<<<<<< HEAD
    <html lang="pt">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
=======
    <html
      lang='pt'
      className={`${sofiaSansSemiCondensed.className} ${sulphur.className}`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
>>>>>>> us001-realizar-cadastro
      </body>
    </html>
  );
}
