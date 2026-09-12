import { Leaf, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <span><Leaf size={14} /> Building a circular economy for B2B packaging</span>
        <span className="topbar-right"><MapPin size={14} /> Serving businesses pan-India</span>
      </div>
    </div>
  );
}
