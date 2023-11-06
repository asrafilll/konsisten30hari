import "./globals.css";

export const metadata = {
  title: "Konsisten30Hari",
  description: "Konsisten 30 Hari - Coming Soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-manrope">{children}</body>
    </html>
  );
}
