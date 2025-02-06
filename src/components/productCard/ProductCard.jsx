import "./productCard.css";
export const ProductCard = ({ title, price }) => {
  //const {title, price } = props;
return (
    <div className="container-card">
    <h3>{title}</h3>
    <h3>{price}</h3>
    <h3>stock 1</h3>
    <h3>descripcion 1</h3>
    </div>
);
};
