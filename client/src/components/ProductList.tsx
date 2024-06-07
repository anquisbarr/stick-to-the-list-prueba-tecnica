import React from "react";
import { ProductListProps } from "../types/product";

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div
      id="results"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
    >
      {products.map((product) => (
        <div key={product.productId} className="p-4 border rounded shadow">
          <h2 className="text-lg font-semibold">{product.description}</h2>
          <p className="text-sm text-gray-600">Brand: {product.brand}</p>
          <p className="text-sm text-gray-600">
            Categories: {product.categories.join(", ")}
          </p>
          <div className="flex space-x-4 overflow-auto">
            {product.images.map((image, index) => (
              <div key={index} className="min-w-[100px]">
                <img
                  src={image.sizes.find((size) => size.size === "medium")?.url}
                  alt={product.description}
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600">Size: {product.items[0].size}</p>
          <a
            href={`https://www.kroger.com${product.productPageURI}`}
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Product
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
