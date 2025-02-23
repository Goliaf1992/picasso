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
      <body className="no-scrollbar overflow-auto h-screen bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] text-[var(--color-text-primary)] flex flex-col justify-between">
        <Navbar />

        <main className="container mx-auto px-4">{children}</main>
        <footer className="p-6 text-center text-sm opacity-75">
          &copy; 2024 | Все права защищены
        </footer>
      </body>
    </html>
  );
}
