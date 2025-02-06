import { ProductCard } from "../../productCard/ProductCard";

export const ItemListContainer = ({ greeting }) => {


  
  return (
    <section>
      <h2>{greeting}</h2>

      <h2>Mis productos</h2>
      <ProductCard title="titulo 1" price="precio 1" />
      <ProductCard title="titulo 2" price="precio 2" />
      <ProductCard title="titulo 3" price="precio 3" />
    </section>
  );
};
