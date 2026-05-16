import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pages.css";

function Payment() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const paymentMethods = [
    { id: "upi", name: "UPI",desc: "Fast and secure" },
    { id: "card", name: "Credit/Debit Card", desc: "VISA, MasterCard" },
    { id: "cod", name: "Cash on Delivery", desc: "Pay when you receive" }
  ];

  const handlePayment = () => {
    if (selected) {
      alert(`Payment via ${selected} successful!`);
      localStorage.removeItem("cart");
      navigate("/menu");
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>💳 Payment</h1>
        <p>Choose your preferred payment method</p>
      </div>
      <div className="content-box" style={{ flexDirection: "column", gap: "20px" }}>
        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", margin: "20px 0" }}>
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              onClick={() => setSelected(method.name)}
              style={{
                padding: "20px",
                border: selected === method.name ? "3px solid #667eea" : "2px solid #e0e0e0",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                background: selected === method.name ? "#f0f3ff" : "white",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "10px" }}>{method.emoji}</div>
              <div style={{ fontWeight: "600", color: "#333", marginBottom: "5px" }}>{method.name}</div>
              <div style={{ fontSize: "12px", color: "#999" }}>{method.desc}</div>
            </div>
          ))}
        </div>
        <button 
          onClick={handlePayment}
          disabled={!selected}
          style={{
            opacity: selected ? 1 : 0.5,
            cursor: selected ? "pointer" : "not-allowed"
          }}
        >
          Continue Payment
        </button>
      </div>
    </div>
  );
}

export default Payment;