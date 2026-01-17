import { useState } from "react";
import "./App.css";
import AddProductForm from "./components/AddProductForm";
import type { Product } from "./types";
import ProductTable from "./components/ProductTable";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = (product: Product) => {
    setProducts([...products, product]);
    console.log(products);
  };
  return (
    <>
      <div className="container mt-4">
        <AddProductForm onAdd={handleAddProduct} />
        <ProductTable products={products} />
      </div>
    </>
  );
}

export default App;
