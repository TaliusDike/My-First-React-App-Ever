import React from "react";


// Testing the onSubmit event on Forms...

const FormEvent = () => {
  return (
    <section className="main-form-container">


      <form
        onSubmit={(event) => {
          event.preventDefault();
          const { name, email, tel } = event.target.elements;
          alert(
            `Hello ${name.value}! Your email is ${email.value} and your phone number is ${tel.value}`
          );

          
        }}
        className="form"
      >
        <input type="text" placeholder="Enter your name" name="name" />
        <input type="email" placeholder="Enter your email" name="email" />
        <input type="tel" placeholder="Enter your phone" name="tel" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default FormEvent;
