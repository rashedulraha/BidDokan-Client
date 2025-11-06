import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Container from "../../Components/Container";

const CreateProduct = () => {
  const { user } = useContext(AuthContext);

  const handleProductSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value.trim();
    const image = form.image.value.trim();
    const price_min = form.price_min.value.trim();
    const price_max = form.price_max.value.trim();
    const description = form.description.value.trim();

    // Validation
    if (!title) {
      toast.error("Product title is required!");
      return;
    }

    if (!image) {
      toast.error("Product image URL is required!");
      return;
    }

    if (!price_min || isNaN(price_min) || Number(price_min) <= 0) {
      toast.error("Enter a valid minimum price!");
      return;
    }
    if (!price_max || isNaN(price_max) || Number(price_max) <= 0) {
      toast.error("Enter a valid maximum price!");
      return;
    }
    if (Number(price_min) > Number(price_max)) {
      toast.error("Minimum price cannot be greater than maximum price!");
      return;
    }
    if (!description) {
      toast.error("Product description is required!");
      return;
    }

    // Hardcoded data
    const newProduct = {
      title,
      image,
      price_min: Number(price_min),
      price_max: Number(price_max),
      description,
      category: "Electronics",
      condition: "Excellent",
      usage: "6 months",
      seller_name: user?.displayName || "Anonymous",
      seller_image: user?.photoURL || "https://i.pravatar.cc/150?img=12",
      email: user?.email || "user@example.com",
      location: "Dhaka, Bangladesh",
      seller_contact: "+880 1712-345678",
      created_at: new Date().toISOString(),
    };

    // Send to backend
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Product created successfully!");
          form.reset();
        } else {
          toast.error("Failed to create product. Try again.");
        }
      })
      .catch(() => {
        toast.error("Network error. Please try again.");
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />

      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
        <Container>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Create New Product
              </h1>
              <p className="text-gray-600">
                Fill in the details to list your product
              </p>
            </div>

            <form onSubmit={handleProductSubmit} className="space-y-6">
              {/* Product Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter product title"
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Product Image URL */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Image URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  name="image"
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter a valid image URL
                </p>
              </div>

              {/* Price Range */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Minimum Price ($) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="price_min"
                    placeholder="100"
                    min="1"
                    step="0.01"
                    className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Maximum Price ($) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="price_max"
                    placeholder="500"
                    min="1"
                    step="0.01"
                    className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  placeholder="Enter detailed product description..."
                  rows="5"
                  className="textarea textarea-bordered w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  Provide a detailed description of your product
                </p>
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Additional information like category,
                  condition, and seller details will be added automatically.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer ">
                  Create Product
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CreateProduct;
