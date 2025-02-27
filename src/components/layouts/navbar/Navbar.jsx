import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Gamer World
      </Link>
      <ul className="nav-links">
        <Link to="/category/consolas" className="nav-item">
          Consolas
        </Link>
        <Link to="/category/perifericos" className="nav-item">
          Perifericos
        </Link>
        <Link to="/category/monitores" className="nav-item">
          Monitores
        </Link>
        <Link to="/category/juegos" className="nav-item">
          juegos
        </Link>
      </ul>
      <Link to="/cart" className="cart-link">
        <div className="cart-hover">
          <CartWidget />
        </div>
      </Link>
    </nav>
  );
};
