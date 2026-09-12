import { SlidersHorizontal, Globe2 } from "lucide-react";

const CONDITIONS = ["New / Excess Stock", "Like New", "Good", "Usable"];
const LOCATIONS = ["all", "Mumbai", "Pune", "Ahmedabad", "Delhi NCR", "Bengaluru", "Surat"];

export default function Filters({ filters, setFilters, onReset }) {
  function toggleCondition(cond) {
    setFilters((f) => ({
      ...f,
      conditions: f.conditions.includes(cond)
        ? f.conditions.filter((c) => c !== cond)
        : [...f.conditions, cond],
    }));
  }

  return (
    <aside className="filters">
      <div className="filters-head">
        <h4><SlidersHorizontal size={16} /> Filters</h4>
        <button onClick={onReset}>Reset</button>
      </div>

      <div className="filter-group">
        <h5>Condition</h5>
        {CONDITIONS.map((cond) => (
          <label key={cond}>
            <input
              type="checkbox"
              checked={filters.conditions.includes(cond)}
              onChange={() => toggleCondition(cond)}
            />
            {cond}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h5>Price Range (₹ per unit)</h5>
        <input
          type="range"
          min="0"
          max="500"
          value={filters.maxPrice}
          onChange={(e) => setFilters((f) => ({ ...f, maxPrice: Number(e.target.value) }))}
        />
        <div className="range-value">Up to ₹{filters.maxPrice}</div>
      </div>

      <div className="filter-group">
        <h5>Minimum Quantity Available</h5>
        <select
          value={filters.minQty}
          onChange={(e) => setFilters((f) => ({ ...f, minQty: Number(e.target.value) }))}
        >
          <option value={0}>Any quantity</option>
          <option value={100}>100+ units</option>
          <option value={500}>500+ units</option>
          <option value={1000}>1,000+ units</option>
        </select>
      </div>

      <div className="filter-group">
        <h5>Location</h5>
        <select
          value={filters.location}
          onChange={(e) => setFilters((f) => ({ ...f, location: e.target.value }))}
        >
          {LOCATIONS.map((loc) => (
            <option key={loc} value={loc}>{loc === "all" ? "All locations" : loc}</option>
          ))}
        </select>
      </div>

      <div className="impact-mini">
        <Globe2 size={20} />
        <p>Every reused ton of packaging saves an estimated <strong>1.2 tonnes CO₂e</strong>.</p>
      </div>
    </aside>
  );
}
