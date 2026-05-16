import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Vehicles from "./pages/Vehicles";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;