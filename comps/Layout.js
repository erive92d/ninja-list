import Footer from "./Footer";
import Navbar from "./Navbar";
// import "../styles/globals.css";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
