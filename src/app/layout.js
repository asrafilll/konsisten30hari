import { Provider } from "@/components/Provider";
import "./globals.css";

export const metadata = {
  title: "Konsisten30Hari",
  description: "Konsisten 30 Hari - Coming Soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-plusJakarta bg-[#0A0A0A] p-6 lg:p-16 text-zinc-300">
        <Provider> {children} </Provider>
      </body>
    </html>
  );
}
