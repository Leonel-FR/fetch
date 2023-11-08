const Item = ({ product }) => {
  return (
    <>
      <div className="contenedor">
        <img src={product.img} alt={product.nombre} />
        <h1>{product.nombre}</h1>
      </div>
    </>
  );
};

export default Item;
