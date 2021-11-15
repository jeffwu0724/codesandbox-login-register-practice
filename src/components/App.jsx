import React from "react";
import Login from "./Login";
import Register from "./Register";
import Form from "./Form";

var isRegisted = true;
function App() {
  return <Form isRegisted={isRegisted} />;
}

export default App;
