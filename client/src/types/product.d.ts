interface Image {
  perspective: string;
  sizes: { size: string; url: string }[];
}

interface Item {
  favorite: boolean;
  fulfillment: {
    curbside: boolean;
    delivery: boolean;
    inStore: boolean;
    shipToHome: boolean;
  };
  itemId: string;
  size: string;
}

interface Product {
  productId: string;
  description: string;
  brand: string;
  categories: string[];
  images: Image[];
  items: Item[];
  productPageURI: string;
}

export interface ProductListProps {
  products: Product[];
}
