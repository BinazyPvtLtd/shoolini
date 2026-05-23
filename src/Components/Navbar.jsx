import { useState } from "react";
import logo from "../assets/Logo.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Programme", href: "#programme" },
    { label: "Approvals", href: "#approvals" },
    { label: "About Us", href: "#about-us" },
    { label: "Why Us", href: "#why-us" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 md:py-4">
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <img
            src={logo}
            className="h-12 w-auto object-contain sm:h-16"
            alt="Logo"
          />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="text-base font-medium text-gray-700 transition hover:text-black lg:text-lg"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col border-t border-gray-100 px-4 py-2">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="rounded px-2 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-black"
            >
              <a
                href={link.href}
                className="block"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
