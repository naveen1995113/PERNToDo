import React from "react";
import EditToDo from "./EditTodo";

const ListTodo = () => {
  const [todos, setToDos] = React.useState([]);
  const deleteToDo = async (id) => {
    try {
      await fetch(`http://localhost:5001/todos/${id}`, {
        method: "DELETE",
      });
      getToDos();
    } catch (error) {
      console.error(error.message);
    }
  };
  const getToDos = async () => {
    try {
      const response = await fetch("http://localhost:5001/todos");
      const data = await response.json();
      setToDos(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  React.useEffect(() => {
    getToDos();
  }, []);
  return (
    <div className="flex flex-col mt-5 border-2 border-gray-400 rounded-lg md:mx-44">
      <table className="text-center ">
        <thead className="bg-black">
          <tr>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-white"
            >
              Descritpion
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-white"
            >
              Edit
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-sm font-medium text-white"
            >
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {todos !== undefined &&
            todos.map((todo) => (
              <tr className="border-b" key={todo.todo_id}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                  {todo.description}
                </td>
                <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                  <EditToDo todo={todo} />
                </td>
                <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs  uppercase rounded"
                    onClick={deleteToDo.bind(null, todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;
