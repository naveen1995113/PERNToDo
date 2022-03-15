import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ todo_id, todo_desc, setIsOpen }) => {
  const [description, setDescription] = React.useState(todo_desc);
  const updateHandler = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:5001/todos/${todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log();
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        onClick={() => {
          setDescription(todo_desc);
          setIsOpen(false);
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="z-10 p-4 bg-white border rounded-lg">
          {/* Modal Header with close btn */}
          <div
            className="flex justify-end hover:cursor-pointer"
            onClick={() => {
              setDescription(todo_desc);
              setIsOpen(false);
            }}
          >
            <AiFillCloseCircle className="w-6 h-6" />
          </div>
          {/* Modal body */}
          <div>
            <input
              value={description}
              type="text"
              className="form-control block overflow-auto w-96 my-5 mx-auto px-3 py-1.5 border border-solid border-gray-300 rounded"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {/* action btns */}
          <div className="flex justify-end">
            <button
              className="px-4 py-1 mr-1 font-medium text-white bg-red-500 border rounded-lg hover:bg-red-700 hover:cursor-pointer "
              onClick={() => {
                setDescription(todo_desc);
                setIsOpen(false);
              }}
            >
              Cancel
            </button>
            <button
              className="px-4 py-1 font-medium text-white bg-blue-500 border rounded-lg hover:bg-blue-700 hover:cursor-pointer"
              onClick={updateHandler}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Modal;
