import './globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';

import { Sofia_Sans_Semi_Condensed, Sulphur_Point } from 'next/font/google';
import { AuthProvider } from '@/contexts/AuthContext';

const sofiaSansSemiCondensed = Sofia_Sans_Semi_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const sulphur = Sulphur_Point({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: '23rd FishBase & SeaLifeBase Symposium',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='pt'
      className={`${sofiaSansSemiCondensed.className} ${sulphur.className}`}
    >
      <body>
        <LanguageProvider>
          <AuthProvider>{children}</AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
