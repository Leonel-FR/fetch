import React from "react";

const ItemDetail = ({ producto }) => {
  return (
    <div>
      <img src={producto.img} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>Stock: {producto.stock}</p>
      <p>Precio: {producto.precio}</p>
      <p>Categoria: {producto.categoria}</p>
      <p>Descricion: {producto.descripcion}</p>
    </div>
  );
};

export default ItemDetail;
