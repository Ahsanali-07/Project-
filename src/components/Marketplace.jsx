import { useMemo, useState } from "react";
import { Search, PackageX } from "lucide-react";
import { MATERIALS } from "../data/materials";
import Categories from "./Categories";
import Filters from "./Filters";
import MaterialCard from "./MaterialCard";

const PAGE_SIZE = 8;

const DEFAULT_FILTERS = {
  conditions: [],
  maxPrice: 500,
  minQty: 0,
  location: "all",
};

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [sort, setSort] = useState("relevance");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    let list = MATERIALS.filter((m) => {
      if (activeCategory !== "all" && m.category !== activeCategory) return false;
      if (query && !m.name.toLowerCase().includes(query.toLowerCase())) return false;
      if (filters.conditions.length && !filters.conditions.includes(m.condition)) return false;
      if (m.price > filters.maxPrice) return false;
      if (m.quantity < filters.minQty) return false;
      if (filters.location !== "all" && m.location !== filters.location) return false;
      return true;
    });

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "qty-desc":
        list = [...list].sort((a, b) => b.quantity - a.quantity);
        break;
      case "distance":
        list = [...list].sort((a, b) => a.distanceKm - b.distanceKm);
        break;
      default:
        break;
    }
    return list;
  }, [activeCategory, query, filters, sort]);

  function resetFilters() {
    setFilters(DEFAULT_FILTERS);
    setActiveCategory("all");
    setQuery("");
    setSort("relevance");
  }

  const visibleItems = filtered.slice(0, visible);

  return (
    <>
      <Categories activeCategory={activeCategory} onSelect={(c) => { setActiveCategory(c); setVisible(PAGE_SIZE); }} />

      <section className="marketplace container" id="marketplace">
        <div className="marketplace-head">
          <div>
            <h2 className="section-title">Surplus Materials Marketplace</h2>
            <p className="section-sub">Live listings from verified manufacturers, retailers &amp; warehouses near you.</p>
          </div>
          <div className="search-box">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search materials, e.g. cardboard boxes, pallets..."
              value={query}
              onChange={(e) => { setQuery(e.target.value); setVisible(PAGE_SIZE); }}
            />
          </div>
        </div>

        <div className="marketplace-body">
          <Filters filters={filters} setFilters={setFilters} onReset={resetFilters} />

          <div className="listings-panel">
            <div className="listings-toolbar">
              <span>{filtered.length} listing{filtered.length !== 1 ? "s" : ""} found</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="relevance">Sort: Relevance</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="qty-desc">Quantity: High to Low</option>
                <option value="distance">Nearest to Me</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="no-results">
                <PackageX size={40} />
                <p>No materials match your filters. Try adjusting your search.</p>
              </div>
            ) : (
              <div className="listings-grid">
                {visibleItems.map((m) => (
                  <MaterialCard key={m.id} material={m} />
                ))}
              </div>
            )}

            {visible < filtered.length && (
              <div className="load-more-wrap">
                <button className="btn btn-outline" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                  Load More Listings
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
