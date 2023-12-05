import React from "react";
import ProjectList from "./ProjectList";
import Button from "./Button";
const SideBar = (props) => {
  return (
    <div className="sidebar fixed top-16 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-black rounded-r-md">
      <section className>
        <h2 className="text-xl font-bold text-stone-200 my-4 mb-3">
          Your Projects
        </h2>
        <Button onClick={props.onSelectProject}> + Add Project</Button>
        <ProjectList projects={props.projects} />
      </section>
    </div>
  );
};

export default SideBar;
