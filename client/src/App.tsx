import React from "react";
import ProductList from "./components/ProductList";
import SearchForm from "./components/SearchForm";
import "./index.css";

import { useSearch } from "./hooks/useSearch";

const App: React.FC = () => {
  const { products, loading, handleSearch } = useSearch();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Product Search</h1>
      <SearchForm onSearch={handleSearch} loading={loading} />
      <ProductList products={products} />
    </div>
  );
};

export default App;
