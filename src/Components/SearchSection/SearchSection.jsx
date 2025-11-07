// Components/SearchSection/SearchSection.jsx
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchSection = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const popularSearches = [
    "Samsung Galaxy S23 Ultra",
    "Laptop ASUS Vivobook",
    "iPhone 13 Pro Max",
    "MacBook Air M2",
    "Smart TV",
    "Honda Dio Scooter",
    "DSLR Camera",
    "Office Chair",
    "HP Printer",
    "Dining Table",
  ];

  const handleSearch = (term) => {
    onSearch(term);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handlePopularSearch = (term) => {
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4">
      <div className="relative">
        {/* Search Container */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden">
          {/* Search Icon */}
          <div className="pl-4 pr-2 py-3">
            <CiSearch />
          </div>

          {/* Search Input */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search products..."
            className="input input-ghost w-full focus:outline-none focus:bg-transparent"
          />

          {/* Search Button */}
          <button
            className="btn btn-primary rounded-l-none rounded-r-full px-5"
            onClick={() => handleSearch(searchTerm)}>
            Search
          </button>
        </div>

        {/* Popular Search Categories */}
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-600 mb-2 text-center">
            Popular Searches
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {popularSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => handlePopularSearch(search)}
                className="px-3 py-1.5 text-sm bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-blue-700 rounded-full transition-all duration-200 border border-blue-200 hover:shadow-sm hover:border-blue-300">
                {search}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
