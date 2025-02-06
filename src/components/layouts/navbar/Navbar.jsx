import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
export const Navbar = () => {
  return (
    <nav className="nav-ul">
      <h2 className="title">Gamer Word</h2>
      <ul className="nav-ul">
        <li>Consolas</li>
        <li>Perifericos</li>
        <li>componentes</li>
        <li>notebooks</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
