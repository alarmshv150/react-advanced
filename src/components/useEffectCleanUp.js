import React, { useEffect, useState } from "react";

function UseEffectCleanUp() {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEfect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("clean up");
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  console.log("render");
  return (
    <>
      <h1>window</h1>
      <h2>{size}</h2>
    </>
  );
}

export default UseEffectCleanUp;
