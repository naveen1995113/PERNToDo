import React from "react";
import Modal from "./Modal";
const EditToDo = ({ todo }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="">
      <button
        type="button"
        className="inline-block px-6 py-2.5 bg-yellow-600 text-white font-medium text-xs leading-tight uppercase rounded "
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter"
        onClick={() => setIsOpen(true)}
      >
        Edit
      </button>
      {isOpen && (
        <Modal
          todo_id={todo.todo_id}
          todo_desc={todo.description}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};
export default EditToDo;
