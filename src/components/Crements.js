import React, {useState} from 'react'


// A simple setup to increase or decrease a number count at the touch of a button.

function Crements () {
    // State...
    
    const [counter, setCounter] = useState(0);
  
    // Update State... Handle increment...
    const handleIncrement = (event) => {
      event.preventDefault();
      setCounter((prev) => prev + 1);
    };
  
    // Handle decrement...
    const handleDecrement = (event) => {
      event.preventDefault();
      setCounter((prev) => prev - 1);
    };
  
    // Render...
    return (
      <section className="counter-container">
        <div className="counter-label">{counter}</div>
        <button className="action-btn" onClick={handleIncrement}>
          Increment
        </button>
        <button className="action-btn" onClick={handleDecrement}>
          Decrement
        </button>
      </section>
    );
  }

  export default Crements;