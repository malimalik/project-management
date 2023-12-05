import React from "react";

const ProjectList = (props) => {
  return (
    <div>
      <ul className="mt-8">
        {props.projects.map((project) => (
          <li
            key={project.id}
            className="flex justify-between my-4 text-white text-center"
          >
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">{project.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
