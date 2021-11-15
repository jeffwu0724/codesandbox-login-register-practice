import React from "react";
import Login from "./Login";
import Register from "./Register";

function Form(props) {
  return (
    <div className="container">
      {props.isRegisted ? <Login /> : <Register />}
    </div>
  );
}

export default Form;
