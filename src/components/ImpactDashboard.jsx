import { PackageOpen, Trash2, HandCoins, CloudFog } from "lucide-react";

const METRICS = [
  { icon: PackageOpen, value: "18,640", label: "Units of Material Reused" },
  { icon: Trash2, value: "1,180 t", label: "Waste Diverted from Landfill" },
  { icon: HandCoins, value: "₹62.4L", label: "Estimated Cost Savings" },
  { icon: CloudFog, value: "390 t", label: "CO₂ Emissions Avoided" },
];

export default function ImpactDashboard() {
  return (
    <section className="impact container">
      <h2 className="section-title">Sustainability Impact Dashboard</h2>
      <p className="section-sub">
        Real-time indicators of the circular value created across the CircularX network.
      </p>

      <div className="impact-grid">
        {METRICS.map(({ icon: Icon, value, label }) => (
          <div className="impact-card" key={label}>
            <Icon size={26} />
            <h3>{value}</h3>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
