import React from "react";
import { useFetch } from "./useFetch";
const url = "https://course-api.com/javascript-store-products";

function UseFetchExample() {
  const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}

export default UseFetchExample;
