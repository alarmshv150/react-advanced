import React from "react";
import { useFetch } from "./useFetch";
import defaultImage from "../assets/default-image.jpeg";
import PropTypes from "prop-types";
const url = "https://course-api.com/react-prop-types-example";

function FetchData() {
  const { products } = useFetch(url);
  return (
    <div>
      <h2>{products}</h2>
      <section>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </section>
    </div>
  );
}

function Product({ image, name, price }) {
  const url = image && image.url;
  return (
    <>
      <article>
        <img src={url || defaultImage} alt={name || "default name"} />
        <h4>{name}</h4>
        <p>${price || 3.99}</p>
      </article>
    </>
  );
}

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  image: defaultImage,
  name: "default name",
  price: 3.99,
};

export default FetchData;
