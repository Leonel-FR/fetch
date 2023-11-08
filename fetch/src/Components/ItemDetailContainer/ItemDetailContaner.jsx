import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContaner = (productid) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchData = () => {
      return fetch("/data/productos.json")
        .then((response) => response.json())
        .then((data) => {
          const foundProduct = data.find((item) => item.id == productid);
          setProduct(foundProduct);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [productid]);
  return (
    <div>
      {product ? <ItemDetail producto={product} /> : <p>CARGANDO...</p>}
    </div>
  );
};

export default ItemDetailContaner;
