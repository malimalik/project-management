import React from "react";

const ProjectList = (props) => {
  return (
    <div>
      <ul className="m">
        {props.projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-500"

          if (project.id === props.selectedProjectId) {
            cssClasses += ' bg-stone-800 text-stone-200'
          } else {
            cssClasses += ' text-stone-400'
          }

          // Corrected: Replaced curly braces with parentheses for an implicit return
          return (
            <li
              key={project.id}
              className="flex justify-between my-4 text-white text-center"
            >
              <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">{project.title}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
