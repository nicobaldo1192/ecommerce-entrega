import { useEffect, useState } from "react";
import { ProductCard } from "../../common/productCard/ProductCard";
import { useParams } from "react-router";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./itemListContainer.css";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let refCollection = collection(db, "products");
    let consulta = refCollection;
    if (name) {
      consulta = query(refCollection, where("category", "==", name));
    }
    const getProducts = getDocs(consulta);

    getProducts
      .then((res) => {
        const nuevoArray = res.docs.map((elemento) => {
          return { id: elemento.id, ...elemento.data() };
        });
        setItems(nuevoArray);
      })
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <section>
      <h2>Mis productos</h2>
      <div className="products-container">
        {items.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};
