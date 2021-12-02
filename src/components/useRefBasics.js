import React, { useEffect, useRef } from "react";

function UseRefBasics() {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    console.log(refContainer.current); // <input type="text">
    refContainer.current.focus();
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default UseRefBasics;
