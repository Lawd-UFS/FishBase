import './globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';

import {
  Sofia_Sans,
  Sofia_Sans_Condensed,
  Sofia_Sans_Semi_Condensed,
  Sofia_Sans_Extra_Condensed,
  Inria_Sans,
  Sulphur_Point,
} from 'next/font/google';

const sofiaSans = Sofia_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

const sofiaSansSemiCondensed = Sofia_Sans_Condensed({
  subsets: ['latin'],
  weight: ['600'],
});

const sofiaSansCondensed = Sofia_Sans_Semi_Condensed({
  subsets: ['latin'],
  weight: ['600'],
});

const sofiaSansExtraCondensed = Sofia_Sans_Extra_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const sulphur = Sulphur_Point({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const inria = Inria_Sans({
  subsets: ['latin'],
  weight: ['300'],
});

export const metadata = {
  title: '23rd FishBase & SeaLifeBase Symposium',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='pt'
      className={`${sofiaSans.className} ${sofiaSansCondensed.className} ${sofiaSansSemiCondensed.className} ${sofiaSansExtraCondensed.className}  ${sulphur.className} ${inria.className}`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
