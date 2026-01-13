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
    onAdd: (product:Product) => void
}