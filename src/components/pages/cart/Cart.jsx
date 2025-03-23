import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../../context/CartContext";
import "./cart.css";

const Cart = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);
  let total = getTotalAmount();
  return (
    <div className="cart-container">
      <h1 className="cart-title">Carrito</h1>
      <div className="cart-items">
        {cart.map((product) => {
          return (
            <div key={product.id} className="cart-item">
              <div className="product-info">
                <h2>{product.title}</h2>
                <h3>${product.price}</h3>
                <h3>x{product.quantity}</h3>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeById(product.id)}
              >
                Eliminar
              </button>
            </div>
          );
        })}
      </div>
      <h2 className="cart-total">Total a pagar ${total}</h2>
      <button className="clear-btn" onClick={resetCart}>
        Vaciar carrito
      </button>
      <Link className="checkout-link" to="/checkout">
        Finalizar compra
      </Link>
    </div>
  );
};
export default Cart;
