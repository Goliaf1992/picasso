"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../logo/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Состояние для мобильного меню

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <Link
            href="/"
            className="text-2xl font-bold text-purple-900 hover:text-purple-700 transition-colors"
          >
            <Logo />
          </Link>

          {/* Меню для десктопа */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-purple-900 hover:text-purple-700 transition-colors"
            >
              Главная
            </Link>

            <Link
              href="/about"
              className="text-purple-900 hover:text-purple-700 transition-colors"
            >
              О нас
            </Link>
            <Link
              href="/contact"
              className="text-purple-900 hover:text-purple-700 transition-colors"
            >
              Контакты
            </Link>
          </div>

          {/* Кнопка для мобильного меню */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-purple-900 hover:text-purple-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Мобильное меню */}
        {isOpen && (
          <div className="md:hidden backdrop-blur-md mt-2 py-4 rounded-lg shadow-lg">
            <Link
              href="/"
              className="block px-4 py-2 text-purple-900 hover:bg-purple-50"
            >
              Главная
            </Link>

            <Link
              href="/about"
              className="block px-4 py-2 text-purple-900 hover:bg-purple-50"
            >
              О нас
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-purple-900 hover:bg-purple-50"
            >
              Контакты
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;