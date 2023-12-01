import React from "react";
const ProjectForm = () => {
  return (
    <div className="w-[57rem] mt-16">
      <menu className="flex items-center justify-end gap-2 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950 px-6 py-2">
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
          >
            Save
          </button>
        </li>
      </menu>
      <form className="items-end" onSubmit={() => {}}>
        <p className="flex flex-col gap-1 my-4">
          <label
            htmlFor="title"
            className="text-sm font-bold uppercase text-stone-500"
          >
            TITLE
          </label>
          <input
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            required
            name="title"
          />
        </p>
        <p className="flex flex-col gap-1 my-4">
          <label
            htmlFor="description"
            className="text-sm font-bold uppercase text-stone-500"
          >
            DESCRIPTION
          </label>
          <input
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            required
            name="description"
          />
        </p>
        <p className="flex flex-col gap-1 my-4">
          <label
            htmlFor="dueDate"
            className="text-sm font-bold uppercase text-stone-500"
          >
            DUE DATE
          </label>
          <input
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            required
            name="dueDate"
          />
        </p>

      </form>
    </div>
  );
};

export default ProjectForm;
