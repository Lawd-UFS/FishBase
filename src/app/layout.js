import './globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';

export const metadata = {
  title: '23rd FishBase & SeaLifeBase Symposium',
};

export default function RootLayout({ children }) {
  return (
    <html lang='pt'>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
