import React from "react";
import logo from "../assets/no-projects.png";
import Button from "./Button";

const NoProject = (props) => {
  return (
    <>
      {/* width of 2/3 of the available space */}
      <div className="mt-24 text-center w-2/3">
        <img
          src={logo}
          alt="An empty task list"
          className="w-16 h-16 object-contain mx-auto"
        />
        <h2 className="my-4 text-center text-xl font-bold">
          No project selected
        </h2>
        <p className="text-stone-600 mb-4 text-center">
          Select a project or get started with a new one
        </p>

        <p className="text-stone-400 mb-4">
          <Button
            onClick={props.onAddingProject}
          >
            + Add Project
          </Button>
        </p>
      </div>
    </>
  );
};

export default NoProject;
