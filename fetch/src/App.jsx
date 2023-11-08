import "./App.css";
import ItemDetailContaner from "./Components/ItemDetailContainer/ItemDetailContaner";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <ItemListContainer />
      <ItemDetailContaner productid={3} />
    </>
  );
}

export default App;
