import React from "react";
const InputTodo = () => {
  const [description, setDescription] = React.useState("");
  const inputChangeHandler = (e) => {
    setDescription(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5001/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <React.Fragment>
      <h1 className="mx-auto mt-5 text-3xl font-bold text-center">
        Pern To Do List
      </h1>
      <form
        className="flex items-center justify-center mt-5"
        onSubmit={submitHandler}
      >
        <input
          value={description}
          type="text"
          placeholder="Enter Text"
          className="form-control block w-96 px-3 py-1.5 border border-solid border-gray-300 rounded"
          onChange={inputChangeHandler}
        />
        <button
          type="submit"
          className="ml-2 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-green-600   transition duration-150 ease-in-out"
        >
          Add
        </button>
      </form>
    </React.Fragment>
  );
};
export default InputTodo;
