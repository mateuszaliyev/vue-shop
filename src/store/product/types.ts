export type APIProduct = {
  company: string;
  description: string;
  id: number;
  image: string;
  price: string;
  product_name: string;
  short_description: string;
};

export type Product = Omit<APIProduct, "product_name" | "short_description"> & {
  productName: string;
  shortDescription: string;
};

export interface ProductState {
  error: string | null;
  items: Array<Product>;
  loading: boolean;
}
