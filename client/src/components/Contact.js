import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

const Contact = (props) => {
  const [submitted, setSubmitted] = useState(false);
  const [wantLessons, setWantLessons] = useState(false);

  return (
    <section>
      {submitted ? (
        <Navigate to="/submitted" />
      ) : (
        <div className="Contact">
          <h1>Get in touch!</h1>
          <p>Please fill out this form and I'll get back with you soon.</p>
          <span className="required">* required</span>
          <form
            onSubmit={(e) => {
              props.submit(e);
              setSubmitted(true);
            }}
          >
            <label htmlFor="fName">
              first name<span className="required">*</span>
            </label>
            <input type="text" id="fName" required="true" />
            <label htmlFor="lName">
              last name<span className="required">*</span>
            </label>
            <input type="text" id="lName" required="true" />
            <label htmlFor="email">
              email<span className="required">*</span>
            </label>
            <input type="email" id="email" required="true" />
            <label htmlFor="message">
              message<span className="required">*</span>
            </label>
            <textarea id="message" required="true" />
            <label className="wantLessons">
              <input
                type="checkbox"
                onChange={() => setWantLessons(!wantLessons)}
              />
              <span>I'm looking for private lessons!</span>
            </label>
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
