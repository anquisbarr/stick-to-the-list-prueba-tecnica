import React, { useState } from "react";

interface SearchFormProps {
  onSearch: (keyword: string) => void;
  loading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, loading }) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword === "") return;
    if (!loading) {
      onSearch(keyword);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter keyword..."
        className="p-2 border rounded mb-4"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-700 text-white rounded"
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default SearchForm;
