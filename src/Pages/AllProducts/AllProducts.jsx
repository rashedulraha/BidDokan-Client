import React, { useState, useEffect } from "react";
import Container from "../../Components/Container";
import useSingleProduct from "../../Hooks/useSingleProduct";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import SearchSection from "../../Components/SearchSection/SearchSection";

const AllProducts = () => {
  const fetchingProducts = useSingleProduct(`http://localhost:3000/products`);
  const products = fetchingProducts.product;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products || []);

  useEffect(() => {
    if (products && searchTerm) {
      const filtered = products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products || []);
    }
  }, [searchTerm, products]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Container>
        <SearchSection onSearch={handleSearch} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
          {filteredProducts?.map((Product) => (
            <ProductsCard key={Product?._id} Product={Product}></ProductsCard>
          ))}
        </div>

        {/* Show message when no results found */}
        {searchTerm && filteredProducts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">
              No products found for "{searchTerm}"
            </p>
            <p className="text-gray-400">Try searching for something else</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default AllProducts;
