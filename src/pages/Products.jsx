import React from "react";
import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { products } from "../data/products";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Products</h1>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="border rounded-lg px-4 py-2 w-full max-w-md"
          />

          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
          </select>
        </div>

        <p>Current Search: {searchTerm}</p>

        <div>
          <h2>Product Inventory</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="pb-3">Product</th>
                  <th className="pb-3">Category</th>
                  <th className="pb-3">Price</th>
                  <th className="pb-3">Stock</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr key={product.id} className="border-b hover:bg-gray-50">
                      <td className="py-3">{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.price}</td>
                      <td>{product.stock}</td>
                      <td>
                        {product.stock > 20 ? (
                          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                            In Stock
                          </span>
                        ) : product.stock > 10 ? (
                          <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
                            Low Stock
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">
                            Critical
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-6 text-gray-500">
                      No products found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Products;
