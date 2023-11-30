import React from "react";
import ProjectList from "./ProjectList";
const SideBar = () => {
  return (
    <div className="sidebar fixed top-16 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-black rounded-r-md">
      <section className>
        <h2 className="text-xl font-bold text-stone-200 my-4 mb-3>">
          Your Projects
        </h2>
        <button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          onClick={() => {}}
        >
          + Add Project
        </button>

        <ProjectList />
      </section>
    </div>
  );
};

export default SideBar;
