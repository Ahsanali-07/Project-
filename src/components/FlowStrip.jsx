import { ArrowRight } from "lucide-react";

const STEPS = [
  "Surplus Material",
  "Digital Listing",
  "Smart Match",
  "Exchange",
  "Reuse",
];

export default function FlowStrip() {
  return (
    <section className="flow-strip">
      <div className="container flow-strip-inner">
        {STEPS.map((step, i) => (
          <div className="flow-step-wrap" key={step}>
            <div className="flow-step">
              <span>{String(i + 1).padStart(2, "0")}</span>
              {step}
            </div>
            {i < STEPS.length - 1 && <ArrowRight size={16} className="flow-arrow" />}
          </div>
        ))}
      </div>
    </section>
  );
}
