import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const fetchdata = () => {
      return fetch("/data/productos.json")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => console.log(error));
    };

    fetchdata();
  }, []);
  return (
    <>
      {products.length == 0 ? (
        <h1>CARGANDO...</h1>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
