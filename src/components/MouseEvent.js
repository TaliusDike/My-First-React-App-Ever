import React, { useState } from "react";

// Mouse hover events...

const MouseEvent = () => {
  const [state, setState] = useState("Magic is here");

  // Handler for the MouseOver Change Event...
  const handleMouseOver = (event) => {
    setState("Welcome to the Jungle!");
    setTimeout(() => {
      setState("Magic is here");
    }, 500);
  };


  return (
    <section className="main-form-container">
      <h1 onMouseOver={handleMouseOver} className="hover-me">
        {state}
      </h1>
    </section>
  );
};

export default MouseEvent;
