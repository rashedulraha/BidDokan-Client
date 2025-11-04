import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const CreateProducts = () => {
  const [condition, setCondition] = useState("new");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="bg-white flex flex-col items-center py-8 px-4">
      {/* Header */}
      <header className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between mb-6 ">
        <Link
          to="/all-products"
          className="flex text-left items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
          <FaArrowLeftLong />
          Back To Products
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold  bg-clip-text text-primary ">
          Create A Product
        </h1>
        <div className="w-20" /> {/* spacer */}
      </header>

      {/* Form Card */}
      <div className="w-full max-w-4xl bg-white  p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Title + Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                placeholder="e.g. Yamaha Fz Guitar for Sale"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Category */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition">
                <option value="">Select a Category</option>
                <option value="guitar">Guitar</option>
                <option value="piano">Piano</option>
                <option value="drums">Drums</option>
                <option value="electronics">Electronics</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>

          {/* Row 2: Min Price + Max Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Min Price */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Min Price You want to Sale ($)
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="e.g. 18.5"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Max Price */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Max Price You want to Sale ($)
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="Optional (default = Min Price)"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* Row 3: Condition + Usage Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Condition */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Product Condition
              </label>
              <div className="flex items-center gap-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="condition"
                    value="new"
                    checked={condition === "new"}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-5 h-5 text-purple-600 focus:ring-purple-500 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700 font-medium">
                    Brand New
                  </span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="condition"
                    value="used"
                    checked={condition === "used"}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-5 h-5 text-purple-600 focus:ring-purple-500 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700 font-medium">Used</span>
                </label>
              </div>
            </div>

            {/* Usage Time */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Product Usage time
              </label>
              <input
                type="text"
                placeholder="e.g. 1 year 3 month"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* Product Image URL */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Your Product Image URL
            </label>
            <input
              type="url"
              placeholder="https://..."
              required
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Row 4: Seller Name + Seller Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Seller Name
              </label>
              <input
                type="text"
                placeholder="e.g. Artisan Roasters"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Seller Email
              </label>
              <input
                type="email"
                placeholder="lel31955@nrlord.com"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* Row 5: Seller Contact + Seller Image URL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Seller Contact
              </label>
              <input
                type="tel"
                placeholder="e.g. +1-555-1234"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Seller Image URL
              </label>
              <input
                type="url"
                placeholder="https://..."
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              placeholder="City, Country"
              required
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Simple Description about your Product
            </label>
            <textarea
              rows={4}
              placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough....."
              required
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex items-center justify-center">
            <button
              type="submit"
              className="btn btn-primary px-6 hover:btn-outline">
              Create A Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProducts;
