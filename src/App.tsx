import { useState } from "react";
import "./App.css";
import AddProductForm from "./components/AddProductForm";
import type { Product, FilterStatusProps } from "./types";
import ProductTable from "./components/ProductTable";
import ProductFilter from "./components/ProductFilters";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredName, setFilteredName] = useState("");
  const [filteredShop, setFilteredShop] = useState("");
  const [filteredCategory, setFilteredCategory] = useState("");
  const [filterStatus, setFilterStatus] = useState<FilterStatusProps>("all");

  const handleAddProduct = (product: Product) => {
    setProducts([...products, product]);
    console.log(products);
  };

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name
      .toLowerCase()
      .includes(filteredName.toLowerCase());

    const shopMatch = !filteredShop || product.shop === filteredShop;

    const categoryMatch =
      !filteredCategory || product.categories === filteredCategory;

    const statusMatch =
      filterStatus === "all" ||
      (filterStatus === "bought" && product.isBought) ||
      (filterStatus === "not-bought" && !product.isBought);

    return nameMatch && shopMatch && categoryMatch && statusMatch;
  });

  const handleToggleBought = (id: string) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, isBought: !product.isBought }
          : product
      )
    );
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <>
      <div className="container mt-4 app-wrapper">
        <AddProductForm onAdd={handleAddProduct} />
        <ProductFilter
          filteredName={filteredName}
          filteredShop={filteredShop}
          filteredCategory={filteredCategory}
          filterStatus={filterStatus}
          setFilteredName={setFilteredName}
          setFilteredShop={setFilteredShop}
          setFilteredCategory={setFilteredCategory}
          setFilterStatus={setFilterStatus}
        />
        <ProductTable
          products={filteredProducts}
          onToggleBought={handleToggleBought}
          onDelete={handleDeleteProduct}
        />
      </div>
    </>
  );
}

export default App;
