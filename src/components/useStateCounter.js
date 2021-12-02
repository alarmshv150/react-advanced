import React, { useState } from "react";

function UseStateCounter() {
  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((value) => value + 1);
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button onClick={() => setValue(value - 1)}>decrease</button>
        <button onClick={() => setValue(0)}>reset</button>
        <button onClick={() => setValue(value + 1)}>increase</button>
        <section style={{ margin: "4rem 0" }}>
          <h2>more complex counter</h2>
          <h1>{value}</h1>
          <button onClick={complexIncrease}>increase later</button>
        </section>
      </section>
    </>
  );
}

export default UseStateCounter;
