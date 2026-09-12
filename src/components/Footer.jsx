import { Recycle } from "lucide-react";

// lucide-react no longer ships brand/social marks, so these are hand-drawn.
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.4 8.65 22 11 22 14.1V21h-4v-6.1c0-1.46-.03-3.33-2.03-3.33-2.03 0-2.35 1.59-2.35 3.23V21h-4V9Z" />
    </svg>
  );
}
function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M18.9 3h3.1l-6.8 7.77L23.2 21h-6.3l-4.9-6.4L6.3 21H3.2l7.28-8.3L2.9 3h6.46l4.44 5.85L18.9 3Zm-1.1 16.2h1.72L7.3 4.7H5.46l12.34 14.5Z" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="/" className="brand">
            <span className="brand-icon"><Recycle size={20} /></span>
            <span className="brand-text">Circular<span>X</span></span>
          </a>
          <p>A B2B marketplace for surplus packaging &amp; materials exchange. Turning waste into a resource.</p>
          <div className="socials">
            <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href="#" aria-label="Twitter"><TwitterIcon /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Platform</h5>
          <a href="/">Home</a>
          <a href="/listings">Listings</a>
          <a href="/directory">Directory</a>
          <a href="/for-sale">For Sale</a>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/sell">Sell Materials</a>
          <a href="/login">Login / Signup</a>
        </div>

        <div className="footer-col">
          <h5>Team Dinosaur</h5>
          <p className="team-list">Azifa Shaikh · Palak Keswani<br />Bhavy Chauhan · Devesh Rawat</p>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© 2026 CircularX · Circular Packaging &amp; Materials Exchange</span>
        <span>Built by Team Dinosaur for the Hackathon</span>
      </div>
    </footer>
  );
}
