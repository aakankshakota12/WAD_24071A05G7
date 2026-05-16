import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);

    const totalCost = storedBookings.reduce(
      (sum, item) => sum + item.totalCost,
      0
    );
    setTotal(totalCost);
  }, []);

  const handleRemove = (vehicleId) => {
    const updatedBookings = bookings.filter((item) => item.id !== vehicleId);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    const totalCost = updatedBookings.reduce(
      (sum, item) => sum + item.totalCost,
      0
    );
    setTotal(totalCost);
  };

  const handleUpdateDays = (vehicleId, newDays) => {
    const updatedBookings = bookings.map((item) => {
      if (item.id === vehicleId) {
        return {
          ...item,
          days: newDays,
          totalCost: item.price * newDays,
        };
      }
      return item;
    });
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    const totalCost = updatedBookings.reduce(
      (sum, item) => sum + item.totalCost,
      0
    );
    setTotal(totalCost);
  };

  return (
    <div className="booking-page">
      <div className="page-container">
        <div className="page-header">
          <h1>🛒 Your Booking Cart</h1>
          <p>Review and manage your bookings</p>
        </div>

        {bookings.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button
              className="continue-btn"
              onClick={() => navigate("/vehicles")}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="booking-items">
              {bookings.map((item) => (
                <div key={item.id} className="booking-item">
                  <div className="booking-image-container">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="booking-image"
                    />
                  </div>

                  <div className="booking-info">
                    <h3 className="booking-name">{item.name}</h3>
                    <p className="booking-description">{item.description}</p>
                    <span className="booking-price">₹{item.price}/day</span>
                  </div>

                  <div className="booking-days">
                    <label>Days:</label>
                    <div className="days-counter">
                      <button
                        className="counter-btn"
                        onClick={() =>
                          handleUpdateDays(item.id, Math.max(1, item.days - 1))
                        }
                      >
                        −
                      </button>
                      <input
                        type="number"
                        className="days-input"
                        min="1"
                        value={item.days}
                        onChange={(e) =>
                          handleUpdateDays(
                            item.id,
                            Math.max(1, parseInt(e.target.value) || 1)
                          )
                        }
                      />
                      <button
                        className="counter-btn"
                        onClick={() =>
                          handleUpdateDays(item.id, item.days + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="booking-total">
                    <span className="total-label">Total:</span>
                    <span className="total-amount">₹{item.totalCost}</span>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="booking-summary">
              <div className="summary-card">
                <h2>Order Summary</h2>
                <div className="summary-rows">
                  <div className="summary-row">
                    <span>Subtotal ({bookings.length} items):</span>
                    <span>₹{total}</span>
                  </div>
                  <div className="summary-row tax">
                    <span>Taxes & Fees:</span>
                    <span>₹{Math.round(total * 0.1)}</span>
                  </div>
                  <div className="summary-row total-row">
                    <span className="summary-total">Grand Total:</span>
                    <span className="summary-total-amount">
                      ₹{total + Math.round(total * 0.1)}
                    </span>
                  </div>
                </div>

                <button
                  className="pay-now-btn"
                  onClick={() => navigate("/payment")}
                >
                  Proceed to Payment
                </button>
                <button
                  className="continue-shopping-btn"
                  onClick={() => navigate("/vehicles")}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Booking;