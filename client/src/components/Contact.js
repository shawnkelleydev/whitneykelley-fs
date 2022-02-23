//dependencies
import { Navigate } from "react-router-dom";
import { useState } from "react";
import Action from "./Action";

const Contact = (props) => {
  const [submitted, setSubmitted] = useState(false);

  const inputs = [
    {
      label: "first name",
      id: "fName",
      field: "input",
      type: "text",
      required: true,
    },
    {
      label: "last name",
      id: "lName",
      field: "input",
      type: "text",
      required: false,
    },
    {
      label: "email address",
      id: "email",
      field: "input",
      type: "email",
      required: true,
    },
    {
      label: "message",
      id: "message",
      field: "textarea",
      type: "text",
      required: true,
    },
  ];

  return (
    <section>
      {submitted ? (
        <Navigate to="/submitted" />
      ) : (
        <div className="Contact">
          <h1>Get in touch!</h1>
          <p>Please fill out this form and I'll get back with you soon.</p>
          <form
            onSubmit={(e) => {
              props.submit(e);
              setSubmitted(true);
            }}
          >
            <legend className="required">* required</legend>
            {inputs.map((ob, i) => (
              <label htmlFor={ob.id} key={i}>
                {ob.label}
                {ob.required ? <span className="required">*</span> : null}
                <br />
                {ob.field === "input" ? (
                  <input id={ob.id} type={ob.type} required={ob.required} />
                ) : (
                  <textarea id={ob.id} type={ob.type} required={ob.required} />
                )}
                <br />
              </label>
            ))}

            <Action type="submit" text="submit" />
          </form>
        </div>
      )}
    </section>
  );
};

export default Contact;

/* 


*/
