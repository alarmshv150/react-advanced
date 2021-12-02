import React, { useState } from "react";

function CondRenderingShortCircuit() {
  const [text] = useState(""); // "" - logical false
  const [isError, setIsError] = useState(false);

  const firstValue = text || "hello world"; // "hello world"
  const secondValue = text && "hello world"; // ""

  return (
    <>
      <h1>{text || "conditional rendering"}</h1>
      <h1>{firstValue}</h1>
      <h1>{secondValue}</h1>

      <button onClick={() => setIsError(!isError)}>toggle error</button>
      {isError && <h1>Error...</h1>}

      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
}
// if isError === true => <h1>Error...</h1>
// if isError === true =><div><h2>there is an error</h2></div>

export default CondRenderingShortCircuit;
