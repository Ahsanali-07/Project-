import { ShoppingCart, X, Minus, Plus, Trash2, Send, Info } from "lucide-react";
import { useCart } from "../context/CartContext";

function formatINR(n) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, removeItem, updateQty } = useCart();

  return (
    <>
      <div
        className={`drawer-overlay ${isOpen ? "visible" : ""}`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside className={`cart-drawer ${isOpen ? "open" : ""}`}>
        <div className="cart-drawer-header">
          <h3><ShoppingCart size={18} /> Your Request Cart</h3>
          <button onClick={closeCart} aria-label="Close cart"><X size={20} /></button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <p className="cart-empty">
              Your cart is empty. Browse the marketplace and add materials you need.
            </p>
          ) : (
            items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <strong>{item.name}</strong>
                  <span className="cart-item-seller">{item.seller}</span>
                  <div className="qty-control">
                    <button onClick={() => updateQty(item.id, item.qty - item.moq)} aria-label="Decrease quantity">
                      <Minus size={14} />
                    </button>
                    <span>{item.qty} {item.unit}</span>
                    <button onClick={() => updateQty(item.id, item.qty + item.moq)} aria-label="Increase quantity">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <div className="cart-item-actions">
                  <span className="cart-item-price">{formatINR(item.qty * item.price)}</span>
                  <button className="remove-btn" onClick={() => removeItem(item.id)} aria-label="Remove item">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-summary">
          <div className="cart-summary-row">
            <span>Estimated Subtotal</span>
            <span>{formatINR(subtotal)}</span>
          </div>
          <p className="cart-note">
            <Info size={14} /> Final pricing confirmed directly with seller. This is a purchase request, not a payment.
          </p>
          <button className="btn btn-primary btn-block" disabled={items.length === 0}>
            <Send size={16} /> Send Purchase Request
          </button>
        </div>
      </aside>
    </>
  );
}
