import { BrainCircuit, LocateFixed, TrendingUp, ShieldCheck } from "lucide-react";

const REASONS = [
  {
    icon: BrainCircuit,
    title: "Smart Material Matching",
    text: "We match on material type, quantity, condition and location — so you spend less time searching and more time closing deals.",
  },
  {
    icon: LocateFixed,
    title: "Location-Aware Sourcing",
    text: "Prioritized nearby suppliers mean lower transport costs and faster, more practical exchanges.",
  },
  {
    icon: TrendingUp,
    title: "Impact You Can Measure",
    text: "Track waste diverted, money saved and CO₂ avoided — data you can report to stakeholders.",
  },
  {
    icon: ShieldCheck,
    title: "Built for B2B Trust",
    text: "Business verification, transaction status tracking and transparent seller information.",
  },
];

export default function WhyChoose() {
  return (
    <section className="why container">
      <h2 className="section-title">Why Businesses Choose CircularX</h2>
      <div className="why-grid">
        {REASONS.map(({ icon: Icon, title, text }) => (
          <div className="why-card" key={title}>
            <Icon size={24} />
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
