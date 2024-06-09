import '@/app/ui/global.css'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { inter } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} roboto`}>{children}
      <SpeedInsights />
      </body>
    </html>
  );
}
