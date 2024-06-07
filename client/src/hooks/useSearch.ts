import { useState } from "react";
import { searchProducts } from "../helpers/searchProducts";
import { Product } from "../types/product";

export const useSearch = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (keyword: string) => {
    if (keyword === "") return;
    setLoading(true);
    const [data, error] = await searchProducts(keyword);
    if (error) {
      console.error("Search error:", error);
    } else if (data) {
      setProducts(data.data);
    }
    setLoading(false);
  };

  return { products, loading, handleSearch };
};
