import React from "react";
//components
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
const App = () => {
  return (
    <React.Fragment>
      <InputTodo />
      <ListTodo />
    </React.Fragment>
  );
};

export default App;
