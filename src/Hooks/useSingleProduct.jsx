import axios from "axios";
import React, { useEffect, useState } from "react";

const useSingleProduct = (url) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetching side effect

  useEffect(() => {
    setLoading(true);
    axios(url)
      .then((res) => setProduct(res.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { product, error, loading };
};

export default useSingleProduct;
