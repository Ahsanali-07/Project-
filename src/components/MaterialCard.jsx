import { MapPin, BadgeCheck, PackagePlus, Layers } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function MaterialCard({ material }) {
  const { addItem } = useCart();

  return (
    <article className="material-card">
      <div className="material-card-img">
        <img src={material.image} alt={material.name} loading="lazy" />
        <span className="condition-badge">{material.condition}</span>
        {material.verified && (
          <span className="verified-badge"><BadgeCheck size={13} /> Verified</span>
        )}
      </div>

      <div className="material-card-body">
        <span className="material-category"><Layers size={12} /> {material.category}</span>
        <h4>{material.name}</h4>

        <div className="material-meta">
          <span><MapPin size={14} /> {material.location} · {material.distanceKm} km</span>
        </div>

        <div className="material-stats">
          <div>
            <span className="stat-label">Available</span>
            <span className="stat-value">{material.quantity.toLocaleString("en-IN")} {material.unit}</span>
          </div>
          <div>
            <span className="stat-label">MOQ</span>
            <span className="stat-value">{material.moq} {material.unit}</span>
          </div>
        </div>

        <div className="material-footer">
          <div className="material-price">
            <strong>₹{material.price}</strong> <span>/ {material.unit.slice(0, -1) || material.unit}</span>
          </div>
          <button className="btn btn-primary btn-sm" onClick={() => addItem(material)}>
            <PackagePlus size={15} /> Add
          </button>
        </div>

        <span className="material-seller">Sold by {material.seller}</span>
      </div>
    </article>
  );
}
