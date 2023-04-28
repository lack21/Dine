import { Link, Outlet } from "react-router-dom";
import logoImage from "../assets/logo.svg";

function Layout() {
  return (
    <>
      <Outlet />
      <footer className="footer">
        <div className="item">
          <Link to="/Dine">
            <img src={logoImage} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="item">
          <h3 className="footer-text">Marthwaite, Sedbergh</h3>
          <h3 className="footer-text">Cumbria</h3>
          <h3 className="footer-text">+00 44 123 4567</h3>
        </div>
        <div className="item">
          <h3 className="footer-text">Open Times</h3>
          <h3 className="footer-text">Mon - Fri: 09:00 AM - 10:00 PM</h3>
          <h3 className="footer-text">Sat - Sun: 09:00 AM - 11:30 PM</h3>
        </div>
      </footer>
    </>
  );
}

export default Layout;
