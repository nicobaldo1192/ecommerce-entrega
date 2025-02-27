import { Link } from "react-router";
import "./productCard.css";

export const ProductCard = ({ item }) => {
  return (
    <div className="container-card">
      <img className="product-image" src={item.imageUrl} alt={item.title} />
      <h3 className="product-title">{item.title}</h3>
      <h3 className="product-price">{item.price}</h3>
      <Link to={`/itemDetail/${item.id}`} className="product-link">
        Ver detalle
      </Link>
    </div>
  );
};
