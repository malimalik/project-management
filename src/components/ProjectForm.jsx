import React, { useRef } from "react";
import Input from "./Input";
const ProjectForm = (props) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    props.onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <div className="w-[57rem] mt-16 flex flex-col items-end">
      <menu className="flex items-center justify-end gap-2 my-4">
        <li>
          <button
            className="text-stone-800 hover:text-stone-950 px-6 py-2"
            onClick={props.onCancel}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            className="
            px-6
            py-2
            rounded-md
            bg-stone-800
            text-stone-50
            hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <form>
        <div className="flex flex-col gap-2 my-4 items-start">
          <label
            htmlFor="title"
            className="text-sm font-bold uppercase text-stone-500"
          >
            TITLE
          </label>
          <Input name="title" ref={title}></Input>
        </div>
        <div className="flex flex-col gap-2 my-4 items-start">
          <label
            htmlFor="description"
            className="text-sm font-bold uppercase text-stone-500"
          >
            DESCRIPTION
          </label>
          <Input name="description" textarea={true} ref={description}></Input>
        </div>
        <div className="flex flex-col gap-2 my-4 items-start">
          <label
            htmlFor="dueDate"
            className="text-sm font-bold uppercase text-stone-500"
          >
            DUE DATE
          </label>
          <Input name="dueDate" ref={dueDate} type="date"></Input>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
