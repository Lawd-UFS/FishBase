import './globals.css';

export const metadata = {
  title: '23rd FishBase & SeaLifeBase Symposium',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  );
}
