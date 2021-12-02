import React, { useState } from "react";

// const list = new Array(20).fill(0).map(() => `Item - ${Math.random()}`);

// function Optimization2() {
//   const [n, setN] = useState(0);
//   const [filer, setFiler] = useState("");

//useMemo return the same reference
//   const filteredElements = useMemo(
//     () => list.filter((item) => item.includes(filer)),
//     [filer]
//   );
//   return (
//     <>
//       <List list={filteredElements} />
//       <input
//         type="text"
//         placeholder="filter"
//         onChange={(e) => setFiler(e.target.value)}
//       />
//       <p>Clicked {n} times </p>
//       <button onClick={() => setN(n + 1)}>Click me</button>
//     </>
//   );
// }

//List will be rerendered with parent component
// const List = ({ list }) => (
//   <ul>
//     {list.map((item) => (
//       <li key={item}>{item}</li>
//     ))}
//   </ul>
// );

//memo fix it,component rerendering only if prop list changed
// const List = memo(({ list }) => (
//   <ul>
//     {list.map((item) => (
//       <li key={item}>{item}</li>
//     ))}
//   </ul>
// ));

// List.displayName = "List";

//spliting logic
// function Optimization2() {
//   const list = new Array(20).fill(0).map(() => `Item - ${Math.random()}`);
//   return (
//     <>
//       <List list={list} />
//       <Clicker />
//     </>
//   );
// }

//only List rendering when use filter
// const List = ({ list }) => {
//   const [filer, setFiler] = useState("");

//   const filteredElements = list.filter((item) => item.includes(filer));
//   return (
//     <>
//       <ul>
//         {filteredElements.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         placeholder="filter"
//         onChange={(e) => setFiler(e.target.value)}
//       />
//     </>
//   );
// };

//only Clicker rendering when use click me
// const Clicker = () => {
//   const [n, setN] = useState(0);
//   return (
//     <div>
//       <p>Clicked {n} times </p>
//       <button onClick={() => setN(n + 1)}>Click me</button>
//     </div>
//   );
// };

//children

function Optimization2() {
  const list = new Array(20).fill(0).map(() => `Item - ${Math.random()}`);
  return (
    <>
      <Clicker />
      <List list={list} />
    </>
  );
}

//Clicker rerendering cause hooks changed
const Clicker = ({ chidren }) => {
  const [n, setN] = useState(0);
  return (
    <artilce data-count={n}>
      {chidren}
      <p>Clicked {n} times </p>
      <button onClick={() => setN(n + 1)}>Click me</button>
    </artilce>
  );
};

const List = ({ list, chidren }) => {
  const [filer, setFiler] = useState("");

  const filteredElements = list.filter((item) => item.includes(filer));
  return (
    <div data-filer={filer}>
      {chidren}
      <ul>
        {filteredElements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="filter"
        onChange={(e) => setFiler(e.target.value)}
      />
    </div>
  );
};

export default Optimization2;
