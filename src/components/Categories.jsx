import {
  LayoutGrid,
  PackageOpen,
  Warehouse,
  Recycle,
  ScrollText,
  PackageSearch,
  Cloud,
} from "lucide-react";
import { CATEGORIES } from "../data/materials";

const ICONS = {
  LayoutGrid,
  PackageOpen,
  Warehouse,
  Recycle,
  ScrollText,
  PackageSearch,
  Cloud,
};

export default function Categories({ activeCategory, onSelect }) {
  return (
    <section className="categories container">
      <h2 className="section-title">Browse by Material Category</h2>
      <p className="section-sub">Jump straight to the surplus material type your business needs.</p>

      <div className="category-grid">
        {CATEGORIES.map((cat) => {
          const Icon = ICONS[cat.icon];
          return (
            <button
              key={cat.id}
              className={`category-card ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => onSelect(cat.id)}
            >
              <Icon size={22} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
