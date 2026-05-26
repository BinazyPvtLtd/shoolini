import { useState } from "react";
import { Phone } from "lucide-react";
import logo from "../assets/Logo.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const phoneNumber = "+91 92057 80885";
  const phoneHref = "tel:+919205780885";

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

        <div className="hidden md:flex items-center gap-6">
          {/* Desktop Nav Links */}
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="text-base font-medium text-gray-700 transition hover:text-black lg:text-lg"
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-red-600/20 transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 lg:text-base"
            aria-label={`Call ${phoneNumber}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {phoneNumber}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={phoneHref}
            className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-2 text-xs font-semibold text-white shadow-md shadow-red-600/20 transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-sm"
            aria-label={`Call ${phoneNumber}`}
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="whitespace-nowrap">Call Now</span>
          </a>

          {/* Hamburger Button (mobile only) */}
          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded focus:outline-none"
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
        </div>
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
          <li className="px-2 py-3">
            <a
              href={phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-red-600/20 transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label={`Call ${phoneNumber}`}
              onClick={() => setMenuOpen(false)}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {phoneNumber}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
