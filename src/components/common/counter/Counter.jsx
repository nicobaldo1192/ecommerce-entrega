import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import "./counter.css";

const Counter = ({ item }) => {
  const [contador, setContador] = useState(1);
  const { addToCart } = useContext(CartContext);

  const sumar = () => {
    if (item.stock > contador) {
      setContador(contador + 1);
    } else {
      alert("Stock máximo alcanzado");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    let obj = { ...item, quantity: contador };
    addToCart(obj);
  };

  return (
    <div className="counter-container">
      <button onClick={restar}>Restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
