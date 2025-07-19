import React from "react";

const Footer = () => (
  <footer style={{
    width: "100%",
    padding: "1rem 0",
    background: "#f8f9fa",
    textAlign: "center",
    position: "relative",
    bottom: 0,
    marginTop: "2rem",
    borderTop: "1px solid #eaeaea"
  }}>
    <span>&copy; {new Date().getFullYear()} Ecom Store. All rights reserved.</span>
  </footer>
);

export default Footer; 