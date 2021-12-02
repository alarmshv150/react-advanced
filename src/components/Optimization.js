import React, { useState, useCallback, useMemo, memo } from "react";
import { useFetch } from "./useFetch";

const url = "https://course-api.com/javascript-store-products";

function calculateMostExpensive(data) {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
}

function Index() {
  const { products } = useFetch(url);
  const [count, setCounter] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => setCart(cart + 1), [cart]);

  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  );
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCounter(count + 1)}>click me</button>
      <h1>Cart:{cart}</h1>
      <h1>Most expensive : $ {mostExpensive}</h1>
      <Products products={products} addToCart={addToCart} />
    </>
  );
}

const Products = memo(({ products, addToCart }) => {
  return (
    <section>
      {products.map((product) => (
        <Product key={product.id} {...product} addToCart={addToCart}></Product>
      ))}
    </section>
  );
});

function Product({ fields, addToCard }) {
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;
  return (
    <article>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCard}>add to cart</button>
    </article>
  );
}

//context
// const url = "https://course-api.com/javascript-store-products";
// const Context = createContext();

// function calculateMostExpensive(data) {
//   return (
//     data.reduce((total, item) => {
//       const price = item.fields.price;
//       if (price >= total) {
//         total = price;
//       }
//       return total;
//     }, 0) / 100
//   );
// }

// function Index() {
//   const { products } = useFetch(url);
//   const [count, setCounter] = useState(0);
//   const [cart, setCart] = useState(0);

//   const addToCart = useCallback(() => {
//     setCart(cart + 1);
//   }, [cart]);

//   const mostExpensive = useMemo(
//     () => calculateMostExpensive(products),
//     [products]
//   );
//   return (
//     <>
//       <Context.Provider value={{ products, addToCart }}>
//         <h1>Count: {count}</h1>
//         <button onClick={() => setCounter(count + 1)}>click me</button>
//         <h1>Cart:{cart}</h1>
//         <h1>Most expensive : $ {mostExpensive}</h1>
//         <Products />
//       </Context.Provider>
//     </>
//   );
// }

// const Products = () => {
//   const { products } = useContext(Context);
//   return (
//     <section>
//       {products.map((product) => (
//         <Product key={product.id} {...product}></Product>
//       ))}
//     </section>
//   );
// };

// function Product({ fields }) {
//   const { addToCard } = useContext(Context);
//   let { name, price } = fields;
//   price = price / 100;
//   const image = fields.image[0].url;
//   return (
//     <article>
//       <img src={image} alt={name} />
//       <h4>{name}</h4>
//       <p>${price}</p>
//       <button onClick={addToCard}>add to cart</button>
//     </article>
//   );
// }

//without optimization

// const url = "https://course-api.com/javascript-store-products";
// function Index() {
//   const { products } = useFetch(url);
//   const [count, setCounter] = useState(0);
//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCounter(count + 1)}>click me</button>
//       <Products products={products} />
//     </>
//   );
// }

// function Products({ products }) {
//   return (
//     <section>
//       {products.map((product) => (
//         <Product key={product.id} {...product} />
//       ))}
//     </section>
//   );
// }

// function Product({ fields }) {
//   let { name, price } = fields;
//   price = price / 100;
//   const image = fields.image[0].url;
//   return (
//     <atricle>
//       <img src={image} alt={name} />
//       <h4>{name}</h4>
//       <p>${price}</p>
//     </atricle>
//   );
// }

export default Index;
