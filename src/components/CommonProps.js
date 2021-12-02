import React, { useState } from "react";

function CommonProps() {
  const data = {
    increment: 2,
    underline: "true",
    color: "green",
  };
  const handlerClick = () => {
    console.log("handleClick fired");
  };
  const handleMouseEnter = () => {
    console.log("handleMouseEnterFired");
  };
  const handleMouseLeave = () => {
    console.log("handleMouseLeaveFired");
  };

  return (
    <>
      <Button
        {...data}
        onClick={handlerClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Текст для кнопки
      </Button>
    </>
  );
}

const Button = ({ color, underline, increment, ...data }) => {
  const styles = {
    color: color,
    textDecoration: underline ? "underline" : undefined,
  };
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div style={styles} onClick={() => setCounter((c) => c + increment)}>
        I am button {counter}
      </div>

      <button {...data}>{data.children}</button>
    </>
  );
};

export default CommonProps;
