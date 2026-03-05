// src/components/Layout.jsx
import Navbar from "./Navbar";
import "../styles/layout.css"; // optional CSS for layout spacing

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;