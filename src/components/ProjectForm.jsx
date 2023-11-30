import React from "react";
const ProjectForm = () => {
  return (
    <div className="mt-4 w-28">
      <form action="mt-4 text-right" onSubmit={() => {}}>
        <label
          htmlFor="title"
          className="text-sm font-bold uppercase text-stone-500"
        >
          <input
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            required
            name="title"
          />
          TITLE
        </label>
        <label
          htmlFor="description"
          className="text-sm font-bold uppercase text-stone-500"
        >
          <input
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            required
            name="description"
          />
          DESCRIPTION
        </label>
        <label
          htmlFor="dueDate"
          className="text-sm font-bold uppercase text-stone-500"
        >
          <input
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            required
            name="dueDate"
          />
          DUE DATE
        </label>
        <button className="text-stone-800 hover:text-stone-950">Submit</button>
        <button className="text-stone-700 hover:text-stone-950">Cancel</button>
      </form>
    </div>
  );
};

export default ProjectForm;
