import { IoMdCart } from "react-icons/io";
import { SlBubble } from "react-icons/sl";
import "./cartWidget.css";
export const CartWidget = () => {
return (
    <div className="cart">
    <IoMdCart className="cart-icono" />
    <SlBubble className="cart-bumbble"/>
    <h3 className="cart-number">2</h3>
    </div>
);
};
