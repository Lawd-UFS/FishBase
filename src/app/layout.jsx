import './globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';

import { Sofia_Sans_Semi_Condensed, Sulphur_Point } from 'next/font/google';
import { AuthProvider } from '@/contexts/AuthContext';
import { AppProvider } from '@/contexts/AppContext';
import { LoadingContainer } from '@/components/LoadingContainer';
import { ErrorContainer } from '@/components/ErrorContainer';

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
        <AppProvider>
          <LoadingContainer />
          <ErrorContainer />
          <LanguageProvider>
            <AuthProvider>{children}</AuthProvider>
          </LanguageProvider>
        </AppProvider>
      </body>
    </html>
  );
}
