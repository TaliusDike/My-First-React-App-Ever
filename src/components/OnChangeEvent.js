import React from "react";


// function OnChangeEvent () {
  // Handle change...
  // Whenever anyone makes a change in your input field, the OnChangeEvent in React will track the change in input value.


const OnChangeEvent = () => {

  const handleChange = (event) => {
    event.preventDefault();
    console.log("value :", event.target.value);
  };

  return (
    <section className="main-form-container">
      
      <form className="form">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter your email"
        />
        <input type="text" placeholder="Enter your phone" />
        <button onChange={handleChange} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default OnChangeEvent;
