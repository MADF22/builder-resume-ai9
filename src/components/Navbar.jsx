import { useState } from "react";
import { Menu, X } from "lucide-react";
import LogoNav from "../assets/image/Logo Desain Ai-01.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="py-2 px-8 border-b w-full top-0 z-50 bg-white">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-white text-2xl font-bold tracking-wide">
            <img className="w-36" src={LogoNav} alt="logo" />
          </a>

          {/* Tombol Toggle untuk Mobile */}
          <button
            className="md:hidden text-deep-purple-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Menu Links */}
          <div
            className={`fixed md:static md:flex md:items-center w-64 md:w-auto h-screen md:h-auto bg-white md:bg-transparent top-0 left-0 transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 p-4 md:p-0">
              <li>
                <a
                  href="#"
                  className="text-deep-purple-800 text-base hover:text-gray-300 transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-deep-purple-800 text-base hover:text-gray-300 transition">
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-deep-purple-800 text-base hover:text-gray-300 transition">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-deep-purple-800 text-base hover:text-gray-300 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Tombol Get Started */}
          <div className="hidden md:block">
            <a
              href="#"
              className="bg-deep-purple-800 text-base text-white px-4 py-2 rounded-full transition hover:bg-deep-purple-900">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Overlay untuk mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
}
