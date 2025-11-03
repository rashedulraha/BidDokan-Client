import React from "react";
import Container from "../../Components/Container";
import useSingleProduct from "../../Hooks/useSingleProduct";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";

const AllProducts = () => {
  const fetchingProducts = useSingleProduct(`http://localhost:3000/products`);
  const products = fetchingProducts.product;

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
          {products?.map((Product) => (
            <ProductsCard key={Product?._id} Product={Product}></ProductsCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllProducts;
