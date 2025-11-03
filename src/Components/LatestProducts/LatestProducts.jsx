import React, { use } from "react";
import ProductsCard from "../ProductsCard/ProductsCard";
import Container from "../Container";

const LatestProducts = ({ latestProductsPromise }) => {
  const promiseLatestProducts = use(latestProductsPromise);

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {promiseLatestProducts.map((Product) => (
          <ProductsCard key={Product?._id} Product={Product}></ProductsCard>
        ))}
      </div>
    </Container>
  );
};

export default LatestProducts;
