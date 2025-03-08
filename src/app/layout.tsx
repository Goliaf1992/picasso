import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "picasso-lab",
  description: "Сайт для заказа хирургических шаблонов",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </head>
      <body className="no-scrollbar overflow-auto min-h-screen bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] text-[var(--color-text-primary)] flex flex-col align-middle justify-between">
        <Navbar />
        <div className="h-20"></div>
        <main className="flex-col align-center w-full flex-1">{children}</main>
      </body>
    </html>
  );
}
