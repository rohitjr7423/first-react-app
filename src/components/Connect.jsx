import React, { useState } from "react";
import { context } from "../App";
function Connect() {
  
  const [form, setForm] = useState({});

  const handleValue = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitValue = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Form Submitted Successfully 🚀");
  };

  return (
    <div className="main-block">
      <div className="left-part">
        <h1>Register to our courses</h1>
        <p>
          Learn HTML, CSS, JavaScript and more with free resources and quizzes.
        </p>
        <div className="btn-group">
          <a className="btn-item" href="#">Learn HTML</a>
          <a className="btn-item outline" href="#">Select Quiz</a>
        </div>
      </div>

      <form className="form-card" onSubmit={submitValue}>
        <h2>Register Here</h2>

         
       

        <label className="checkbox">
          <input type="checkbox" required />
          <span>I agree to the Privacy Policy</span>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Connect;