import axios from "axios";
import React, { useEffect, useState } from "react";

const useSingleProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetching side effect

  useEffect(() => {
    setLoading(true);
    axios(`http://localhost:3000/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { product, error, loading };
};

export default useSingleProduct;
