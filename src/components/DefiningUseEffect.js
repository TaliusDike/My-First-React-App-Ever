import React, { useState, useEffect } from "react";

const DefiningUseEffect = () => {
  // Define State...
  const [count, setCount] = useState(0);
  // Defining the useEffect Hook...
  useEffect(() => {
    console.log("App component rendered...");
  }, []);

  // Define our Click Handler...
  const handleClick = (event) => {
    event.preventDefault();
    setCount((prev) => prev + 1);
  };
  // Returning...
  return (
    <section className="effect-label">
      <h1> Count: {count}</h1>
      <button onClick={handleClick}>Click me!</button>
    </section>
  );
};

export default DefiningUseEffect;
