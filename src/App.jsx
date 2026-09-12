import { CartProvider } from "./context/CartContext";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import Hero from "./components/Hero";
import FlowStrip from "./components/FlowStrip";
import Marketplace from "./components/Marketplace";
import HowItWorks from "./components/HowItWorks";
import ImpactDashboard from "./components/ImpactDashboard";
import WhyChoose from "./components/WhyChoose";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <CartProvider>
      <TopBar />
      <Navbar />
      <CartDrawer />

      <main>
        <Hero />
        <FlowStrip />
        <Marketplace />
        <HowItWorks />
        <ImpactDashboard />
        <WhyChoose />
        <CtaBanner />
      </main>

      <Footer />
    </CartProvider>
  );
}
