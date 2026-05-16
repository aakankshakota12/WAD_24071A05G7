import "./Pages.css";

function Contact() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>
      <div className="content-box" style={{ gap: "30px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
          width: "100%",
          marginBottom: "20px"
        }}>
          <div style={{
            padding: "20px",
            background: "#f8f9fa",
            borderRadius: "8px",
            border: "2px solid #e0e0e0"
          }}>
            <div style={{ fontSize: "32px", marginBottom: "10px" }}></div>
            <div style={{ fontWeight: "600", marginBottom: "5px" }}>Email</div>
            <p style={{ margin: "0", color: "#666" }}>support@foodapp.com</p>
          </div>
          <div style={{
            padding: "20px",
            background: "#f8f9fa",
            borderRadius: "8px",
            border: "2px solid #e0e0e0"
          }}>
            <div style={{ fontSize: "32px", marginBottom: "10px" }}></div>
            <div style={{ fontWeight: "600", marginBottom: "5px" }}>Phone</div>
            <p style={{ margin: "0", color: "#666" }}>+91 9876543210</p>
          </div>
          <div style={{
            padding: "20px",
            background: "#f8f9fa",
            borderRadius: "8px",
            border: "2px solid #e0e0e0"
          }}>
            <div style={{ fontSize: "32px", marginBottom: "10px" }}></div>
            <div style={{ fontWeight: "600", marginBottom: "5px" }}>Address</div>
            <p style={{ margin: "0", color: "#666" }}>123 Food Street, City</p>
          </div>
        </div>
        <div style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
          <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.6" }}>
            Available 24/7 for your queries and feedback
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;