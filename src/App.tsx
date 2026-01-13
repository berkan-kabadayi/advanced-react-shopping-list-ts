import { useState } from "react";
import "./App.css";
import AddProductForm from "./components/AddProductForm";
import type { Product } from "./types";

function App() {
  const [products, setProducts ] = useState<Product[]>([])

  const handleAddProduct = (product:Product) => {
    setProducts([...products, product])
    console.log(products)
  }
  return (
    <>
      <AddProductForm onAdd={handleAddProduct}/>
    </>
  );
}

export default App;
