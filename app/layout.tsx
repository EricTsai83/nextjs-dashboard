import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* you're also adding the Tailwind antialiased class which smooths out the font. */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
