export interface Product {
  company: string;
  description: string;
  id: number;
  image: string;
  price: string;
  productName: string;
  shortDescription: string;
}

export interface ProductState {
  error: string | null;
  items: Array<Product>;
  loading: boolean;
}
