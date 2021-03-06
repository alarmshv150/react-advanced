import React, { useEffect, useState } from "react";

function CondRenderingShowHide() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>show/hide</button>
      {show && <Item />} 
    </>
  );
}

const Item = () => {
  const [size, setSize] = useState(window.innerHeight);

  const checkSize = () => {
    setSize(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>Window</h1>
      <h2>size:{size}</h2>
    </div>
  );
};

export default CondRenderingShowHide;
