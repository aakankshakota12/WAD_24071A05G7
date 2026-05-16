import { useState } from "react";
import { useNavigate } from "react-router-dom";

const vehicles = [
  {
    id: 1,
    name: "Honda City",
    price: 2000,
    image: "https://images.unsplash.com/photo-1590362891991-f776e74a5a38?w=400&h=300&fit=crop",
    description: "Comfortable sedan for city driving",
  },
  {
    id: 2,
    name: "Hyundai Creta",
    price: 3000,
    image: "https://images.unsplash.com/photo-1609447773264-da94f73d4c95?w=400&h=300&fit=crop",
    description: "Spacious SUV for family trips",
  },
  {
    id: 3,
    name: "Royal Enfield",
    price: 1500,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description: "Classic bike for adventure seekers",
  },
];

function Vehicles() {
  const navigate = useNavigate();
  const [days, setDays] = useState({});

  const handleDaysChange = (vehicleId, value) => {
    const newDays = Math.max(1, parseInt(value) || 1);
    setDays({ ...days, [vehicleId]: newDays });
  };

  const handleBooking = (vehicle) => {
    const numDays = days[vehicle.id] || 1;
    const bookingItem = {
      id: vehicle.id,
      name: vehicle.name,
      price: vehicle.price,
      image: vehicle.image,
      description: vehicle.description,
      days: numDays,
      totalCost: vehicle.price * numDays,
    };

    // Get existing bookings from localStorage
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const existingIndex = existingBookings.findIndex(
      (item) => item.id === vehicle.id
    );

    if (existingIndex > -1) {
      // Update existing booking
      existingBookings[existingIndex] = bookingItem;
    } else {
      // Add new booking
      existingBookings.push(bookingItem);
    }

    localStorage.setItem("bookings", JSON.stringify(existingBookings));
    navigate("/booking");
  };

  return (
    <div className="page-container vehicles-page">
      <div className="page-header">
        <h1>🚗 Available Vehicles</h1>
        <p>Choose your perfect ride</p>
      </div>

      <div className="vehicles-grid">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="vehicle-card">
            <div className="vehicle-image-container">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="vehicle-image"
              />
            </div>
            <div className="vehicle-details">
              <h3 className="vehicle-name">{vehicle.name}</h3>
              <p className="vehicle-description">{vehicle.description}</p>
              
              <div className="vehicle-price-section">
                <span className="vehicle-price">₹{vehicle.price}/day</span>
              </div>

              <div className="days-counter-section">
                <label htmlFor={`days-${vehicle.id}`}>Number of Days:</label>
                <div className="days-counter">
                  <button
                    className="counter-btn"
                    onClick={() =>
                      handleDaysChange(
                        vehicle.id,
                        (days[vehicle.id] || 1) - 1
                      )
                    }
                  >
                    −
                  </button>
                  <input
                    type="number"
                    id={`days-${vehicle.id}`}
                    className="days-input"
                    min="1"
                    value={days[vehicle.id] || 1}
                    onChange={(e) =>
                      handleDaysChange(vehicle.id, e.target.value)
                    }
                  />
                  <button
                    className="counter-btn"
                    onClick={() =>
                      handleDaysChange(
                        vehicle.id,
                        (days[vehicle.id] || 1) + 1
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <p className="total-cost">
                  Total: ₹{vehicle.price * (days[vehicle.id] || 1)}
                </p>
              </div>

              <button
                className="book-btn"
                onClick={() => handleBooking(vehicle)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vehicles;