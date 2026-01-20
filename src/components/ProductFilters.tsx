import Form from "react-bootstrap/Form";
import { shops, categories, type ProductFilterProps } from "../types";

function ProductFilter({
  filteredName,
  setFilteredName,
  filteredShop,
  setFilteredShop,
  filteredCategory,
  setFilteredCategory,
  filterStatus,
  setFilterStatus,
}: ProductFilterProps) {
  const boughtArray = ["all", "bought", "not-bought"];
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Filter By Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a product name..."
          value={filteredName}
          onChange={(e) => setFilteredName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Filter By Shop</Form.Label>
        <Form.Control
          as={"select"}
          placeholder="Enter a product name..."
          value={filteredShop}
          onChange={(e) => setFilteredShop(e.target.value)}
        >
          <option value="">All Shops</option>
          {shops.map((shop, index) => (
            <option key={index} value={shop}>
              {shop}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Filter By Category</Form.Label>
        <Form.Control
          as={"select"}
          placeholder="Enter a product name..."
          value={filteredCategory}
          onChange={(e) => setFilteredCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        {boughtArray.map((status) => (
          <Form.Check
            type="radio"
            key={status}
            label={
              status === "all"
                ? "All"
                : status === "bought"
                ? "Bought"
                : "Not Bought"
            }
            name="statusFilter"
            value={status}
            onChange={() => setFilterStatus(status as typeof filterStatus)}
            checked={filterStatus === status}
          />
        ))}
      </Form.Group>
    </>
  );
}

export default ProductFilter;
