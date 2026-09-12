import { Store, TruckElectric } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title light">How CircularX Works</h2>
        <p className="section-sub light">
          A simple flow for both sellers with surplus and buyers looking for reusable material.
        </p>

        <div className="flow-columns">
          <div className="flow-column">
            <h3><Store size={20} /> For Sellers</h3>
            <ol>
              <li><span>1</span> Register your business</li>
              <li><span>2</span> List surplus material with photos, quantity &amp; price</li>
              <li><span>3</span> Receive purchase requests from buyers</li>
              <li><span>4</span> Confirm &amp; complete the exchange</li>
            </ol>
          </div>
          <div className="flow-column">
            <h3><TruckElectric size={20} /> For Buyers</h3>
            <ol>
              <li><span>1</span> Search materials &amp; apply filters</li>
              <li><span>2</span> View listing details &amp; seller info</li>
              <li><span>3</span> Get smart-matched to nearby suppliers</li>
              <li><span>4</span> Add to cart, request &amp; complete exchange</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
