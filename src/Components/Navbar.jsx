import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const phoneNumber = "+91 92057 80885";
  const phoneHref = "tel:+919205780885";

  const navLinks = [
    { label: "Programme", hash: "#programme" },
    { label: "Approvals", hash: "#approvals" },
    { label: "Why Us", hash: "#why-us" },
    { label: "About Us", to: "/aboutus" },
    { label: "Contact Us", to: "/contactus" },
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms & Conditions", to: "/terms-and-conditions" },
    { label: "Disclaimer", to: "/disclaimer" },
  ];

  const renderNavLink = (link, className, onClick) =>
    link.to ? (
      <Link to={link.to} className={className} onClick={onClick}>
        {link.label}
      </Link>
    ) : link.hash ? (
      <Link
        to={{ pathname: "/", hash: link.hash }}
        className={className}
        onClick={onClick}>
        {link.label}
      </Link>
    ) : (
      <a href={link.href} className={className} onClick={onClick}>
        {link.label}
      </a>
    );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center rounded-md "
          aria-label="Go to home">
          <img
            src={logo}
            className="h-12 w-auto object-contain sm:h-14 lg:h-16"
            alt="Logo"
          />
        </Link>

        <div className="hidden items-center gap-4 lg:flex">
          {/* Desktop Nav Links */}
          <ul className="flex items-center gap-1 rounded-full border border-gray-100 bg-gray-50 px-2 py-1.5">
            {navLinks.map((link) => (
              <li key={link.to || link.hash || link.href}>
                {renderNavLink(
                  link,
                  "block whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-white hover:text-red-600 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 xl:px-4",
                )}
              </li>
            ))}
          </ul>

          <a
            href={phoneHref}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 xl:text-base"
            aria-label={`Call ${phoneNumber}`}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            {phoneNumber}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={phoneHref}
            className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-2 text-xs font-bold text-white shadow-md shadow-red-600/20 transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:px-4 sm:text-sm"
            aria-label={`Call ${phoneNumber}`}>
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="whitespace-nowrap">Call Now</span>
          </a>

          {/* Hamburger Button (mobile only) */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm transition hover:border-red-200 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}>
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.to || link.hash || link.href}>
              {renderNavLink(
                link,
                "block rounded-lg px-3 py-3 text-sm font-semibold text-gray-700 transition hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
                () => setMenuOpen(false),
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
