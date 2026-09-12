import { Zap, Search, PackagePlus, Box, PackageCheck, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="pill"><Zap size={14} /> Team Dinosaur presents</span>
          <h1>
            Turn Surplus into <span className="highlight">Opportunity.</span>
            <br />
            Turn Waste into a <span className="highlight">Resource.</span>
          </h1>
          <p>
            CircularX connects manufacturers, retailers, warehouses and recyclers so surplus
            packaging — cardboard, pallets, plastics, paper &amp; containers — gets reused instead
            of landfilled. List what you don't need. Find what you do.
          </p>
          <div className="hero-cta">
            <a href="#marketplace" className="btn btn-primary btn-lg">
              <Search size={18} /> Browse Materials
            </a>
            <a href="/sell" className="btn btn-dark btn-lg">
              <PackagePlus size={18} /> List Your Surplus
            </a>
          </div>
          <div className="hero-stats">
            <div><strong>4,200+</strong><span>Listings live</span></div>
            <div><strong>1,180 t</strong><span>Waste diverted</span></div>
            <div><strong>₹62L+</strong><span>Procurement saved</span></div>
            <div><strong>390 t</strong><span>CO₂e avoided</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">
            <Box size={20} />
            <div><strong>Cardboard Boxes</strong><span>2,500 units · Mumbai</span></div>
          </div>
          <div className="floating-card card-2">
            <PackageCheck size={20} />
            <div><strong>Wooden Pallets</strong><span>Grade B · Pune</span></div>
          </div>
          <div className="floating-card card-3">
            <Leaf size={20} />
            <div><strong>Impact Score</strong><span>+18% this month</span></div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=60"
            alt="Warehouse packaging materials ready for reuse"
          />
        </div>
      </div>
    </section>
  );
}
