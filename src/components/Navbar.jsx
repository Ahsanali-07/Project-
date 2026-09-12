import { useState } from "react";
import { Recycle, Tag, ShoppingCart, User, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const NAV_LINKS = [
  { label: "Home", href: "/", active: true },
  { label: "Listings", href: "/listings" },
  { label: "Directory", href: "/directory" },
  { label: "For Sale", href: "/for-sale" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, openCart } = useCart();

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="/" className="brand">
          <span className="brand-icon"><Recycle size={20} /></span>
          <span className="brand-text">Circular<span>X</span></span>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className={link.active ? "active" : ""}>
              {link.label}
            </a>
          ))}
          <a href="/sell" className="btn btn-sell nav-links-mobile-only">
            <Tag size={16} /> Sell Materials
          </a>
        </nav>

        <div className="nav-actions">
          <a href="/sell" className="btn btn-sell nav-desktop-only">
            <Tag size={16} /> Sell Materials
          </a>

          <button className="icon-btn" aria-label="Open cart" onClick={openCart}>
            <ShoppingCart size={20} />
            {count > 0 && <span className="cart-badge">{count}</span>}
          </button>

          <a href="/login" className="btn btn-outline nav-desktop-only">
            <User size={16} /> Login / Signup
          </a>

          <button className="hamburger" aria-label="Toggle menu" onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
