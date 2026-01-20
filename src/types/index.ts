export const shops = ["Amazon", "Walmart", "Best Buy"] as const;
export const categories = ["Electronics", "Food", "Toys", "Oven"] as const;

export interface Product {
  id: string;
  name: string;
  shop: (typeof shops)[number];
  categories: (typeof categories)[number];
  isBought?: boolean;
}

export interface AddProductFormProps {
  onAdd: (product: Product) => void;
}

export interface ProductTableProps {
  products: Product[];
  onToggleBought: (id: string) => void;
  onDelete: (id: string) => void;
}

export interface ProductFilterProps {
  filteredName: string;
  filteredShop: string;
  filteredCategory: string;
  setFilteredName: (value: string) => void;
  setFilteredShop: (value: string) => void;
  setFilteredCategory: (value: string) => void;
}
