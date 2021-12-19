import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = (props) => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section>
      {submitted ? (
        <p>submitted!</p>
      ) : (
        <div className="Contact">
          <h3>Get in touch!</h3>
          <p>Please fill out this form and I'll get back with you soon!</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <label htmlFor="fName">first name</label>
            <input type="text" id="fName" />
            <label htmlFor="lName">last name</label>
            <input type="text" id="fName" />
            <label htmlFor="email">email</label>
            <input type="email" id="email" />
            <label htmlFor="message">message</label>
            <textarea id="message" />
            <button type="submit">submit</button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Contact;

/* 


*/
