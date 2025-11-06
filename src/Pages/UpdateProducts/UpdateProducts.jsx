import React from "react";
// import useSingleProduct from "../../Hooks/useSingleProduct";
import { Link, useParams } from "react-router";
import useSingleProduct from "../../Hooks/useSingleProduct";
import Container from "../../Components/Container";
import { FaArrowLeftLong } from "react-icons/fa6";

const UpdateProducts = () => {
  const { _id } = useParams();

  const { product } = useSingleProduct(`http://localhost:3000/products/${_id}`);
  console.log(product);

  const { description, image, price_max, price_min, title } = product || {};

  const handleUpdateProducts = (e) => {
    e.preventDefault();
    const description = e.target.description.value;
    const title = e.target.title.value;
    const price_max = e.target.price_max.value;
    const price_min = e.target.price_max.value;
    const image = e.target.image.value;

    const updateProducts = {
      description,
      image,
      price_max,
      price_min,
      title,
    };

    fetch(`http://localhost:3000/update-products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProducts),
    })
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        // console.log(error.message);
      });
  };

  return (
    <>
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
        <Container>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Update product
              </h1>
              <p className="text-gray-600">
                Fill in the details to update your product
              </p>
            </div>

            <form onSubmit={handleUpdateProducts} className="space-y-6">
              {/* Product Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
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
                  defaultValue={image}
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
                    defaultValue={price_min}
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
                    defaultValue={price_max}
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
                  defaultValue={description}
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
                  Update product
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default UpdateProducts;
