import React from "react";

function ErrorExample() {
  let title = "random title";
  const handleClick = () => {
    title = "hello people";
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" onClick={handleClick}>
        change title
      </button>
    </>
  );
}

export default ErrorExample;
