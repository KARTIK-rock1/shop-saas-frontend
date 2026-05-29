import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from "../services/productService";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  // Load products
  const loadProducts = async () => {
    try {
      const data = await getProducts(user.shop.id);

      setProducts(data);
    } catch (err) {
      toast.error("Failed to load products");
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // Add or Update
  const handleAdd = async () => {
    try {
      if (!name || !price) {
        return toast.error("Fill all fields");
      }

      setLoading(true);

      if (editingId) {
        await updateProduct(editingId, {
          name,
          price,
        });

        toast.success("Product updated");

        setEditingId(null);
      } else {
        await addProduct({
          name,
          price,
          shop_id: user.shop.id,
        });

        toast.success("Product added");
      }

      setName("");
      setPrice("");

      loadProducts();
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Delete
  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);

      toast.success("Product deleted");

      loadProducts();
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  // Filter
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
      </div>

      {/* Form */}
      <div className="bg-white p-5 rounded-xl shadow mb-6">
        <div className="flex gap-4">
          <input
            className="border p-2 rounded w-full"
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="border p-2 rounded w-full"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button
            onClick={handleAdd}
            disabled={loading}
            className="bg-black text-white px-5 rounded"
          >
            {loading ? "Saving..." : editingId ? "Update" : "Add"}
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          className="border p-2 rounded w-full bg-white"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4">Name</th>

              <th className="text-left p-4">Price</th>

              <th className="text-left p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan="3" className="p-6 text-center text-gray-500">
                  No products found
                </td>
              </tr>
            ) : (
              filteredProducts.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="p-4">{p.name}</td>

                  <td className="p-4">₹{p.price}</td>

                  <td className="p-4">
                    <button
                      onClick={() => {
                        setEditingId(p.id);
                        setName(p.name);
                        setPrice(p.price);
                      }}
                      className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(p.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
