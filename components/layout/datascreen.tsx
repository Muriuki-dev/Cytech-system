import VisitLogger from '@/components/VisitLogger';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <VisitLogger />
        {children}
      </body>
    </html>
  );
}
