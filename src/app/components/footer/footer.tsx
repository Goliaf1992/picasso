import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-6 text-center text-sm opacity-75">
      <nav className="mb-4">
        <Link href="/" className="mx-2 hover:underline">
          Главная
        </Link>
        <Link href="/about" className="mx-2 hover:underline">
          О нас
        </Link>
        <Link href="/services" className="mx-2 hover:underline">
          Услуги
        </Link>
        <Link href="/contact" className="mx-2 hover:underline">
          Контакты
        </Link>
      </nav>
      &copy; 2024 | Все права защищены
    </footer>
  );
};

export default Footer;