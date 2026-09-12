import { PackagePlus } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <div>
          <h2>Have surplus packaging sitting in your warehouse?</h2>
          <p>List it in minutes and turn unused stock into revenue — while helping close the loop.</p>
        </div>
        <a href="/sell" className="btn btn-primary btn-lg">
          <PackagePlus size={18} /> Start Selling Now
        </a>
      </div>
    </section>
  );
}
