import React from "react";
import { products } from "../../data/products";

function ProductTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <h2 className="text-lg font-semibold mb-4">Product Inventory</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="pb-3">Product</th>
              <th className="pb-3">Category</th>
              <th className="pb-3">Price</th>
              <th className="pb-3">Stock</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="py-3">{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;
