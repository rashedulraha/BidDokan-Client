import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Container from "../../Components/Container";

const CreateProducts = () => {
  const [condition, setCondition] = useState("new");

  const handleSubmit = (e) => {
    e.preventDefault();

    // const title = e.target.title.value;
    // const number = e.target.number.value;
    // const min_price = e.target.min_price.value;
    // const max_price = e.target.max_price.value;
    // const userContact = e.target.contact.value;
  };
  return (
    <Container>
      <div className="bg-white flex flex-col items-center py-10">
        {/* Header */}
        <header className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <Link
            to="/all-products"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
            <FaArrowLeftLong className="text-lg" />
            Back To Products
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Create A Product
          </h1>

          <div className="w-20 md:w-auto" />
        </header>

        {/* Form Card */}
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 md:p-8 border">
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Title + Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter your product title"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Category
                </label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200">
                  <option value="">Select a Category</option>
                  <option value="guitar">Guitar</option>
                  <option value="piano">Piano</option>
                  <option value="drums">Drums</option>
                  <option value="electronics">Electronics</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            {/* Min Price + Max Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Min Price You want to Sale ($)
                </label>
                <input
                  type="number"
                  name="min_price"
                  step="0.01"
                  placeholder="Enter your minimum price"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Max Price You want to Sale ($)
                </label>
                <input
                  type="number"
                  name="max_price"
                  step="0.01"
                  placeholder="Enter your maximum price"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Condition + Usage Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Product Condition
                </label>
                <div className="flex items-center gap-8">
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Product Usage time
                </label>
                <input
                  type="text"
                  placeholder="1 year 3 month"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Product Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Your Product Image URL
              </label>
              <input
                type="url"
                placeholder="https://..."
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>

            {/* Seller Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Seller Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your Full Name"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Seller Email
                </label>
                <input
                  type="email"
                  placeholder="your@example.com"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Seller Contact + Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Seller Contact
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Seller Image URL
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Simple Description about your Product
              </label>
              <textarea
                rows={4}
                placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough....."
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6 flex justify-center">
              <button type="submit" className="btn btn-primary w-fit px-6  ">
                Create A Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default CreateProducts;
