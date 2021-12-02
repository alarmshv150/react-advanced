import { useState, useEffect,  useCallback } from "react";

export function useFetch(url) {
  const [loading, SetLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    SetLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);

  return {
    loading,
    products,
  };
}
