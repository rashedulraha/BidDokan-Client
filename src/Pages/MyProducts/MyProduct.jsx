import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Container from "../../Components/Container";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const [myProducts, setMyProducts] = useState([]);

  //! my product get using useEffect
  useEffect(() => {
    if (!user) {
      return;
    }
    fetch(`http://localhost:3000/my-products?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setMyProducts(result);
      });
  }, [user]);

  // console.log(myProducts);

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {myProducts?.map((Product) => (
          <ProductsCard key={Product?._id} Product={Product}></ProductsCard>
        ))}
      </div>
    </Container>
  );
};

export default MyProduct;
