import React from "react";
const SelectedProject = (props) => {
  const { title, description, dueDate } = props;

  const formattedDate = new Date(props.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <section className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-tone-600 mb-2">
            {props.title}
          </h1>
          <button className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>

        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {props.description}
        </p>
      </header>
    </section>
  );
};

export default SelectedProject;
