import Table from "react-bootstrap/Table";
import styled from "styled-components";
import type { ProductTableProps } from "../types";
import { Button } from "react-bootstrap";

const StyledTableCell = styled.td<{ isBought?: boolean }>`
  text-decoration: ${({ isBought }) => (isBought ? "line-through" : "none")};
`;

function ProductTable({ products }: ProductTableProps) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Shop</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <StyledTableCell isBought={product.isBought}>
              {product.id}
            </StyledTableCell>
            <StyledTableCell isBought={product.isBought}>
              {product.name}
            </StyledTableCell>
            <StyledTableCell isBought={product.isBought}>
              {product.shop}
            </StyledTableCell>
            <StyledTableCell isBought={product.isBought}>
              {product.categories}
            </StyledTableCell>
            <td>
              <Button variant="secondary">
                {product.isBought ? "Purchased" : "To be purchased"}
              </Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ProductTable;
