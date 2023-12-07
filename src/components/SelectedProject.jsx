import React, { useState } from "react";
import { nanoid } from "nanoid";
import Task from "./Task";
import TaskList from "./TaskList";
const SelectedProject = ({ project, onDelete}) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTaskName) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: nanoid(),
        name: newTaskName,
        projectId: project.id,
      },
    ]);
  };

  const onClear = (doomedTaskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== doomedTaskId)
    );
  };

  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <section className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-tone-600 mb-2">
            {project.title}
          </h1>
          <button className="text-stone-600 hover:text-stone-950" onClick={() => onDelete(project.id)}>
            Delete
          </button>
        </div>

        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>

      <main>
        <Task handleTask={addTask}></Task>

        {/* the task list that appears should be the one according to the project */}

        <TaskList
          tasks={tasks}
          onClear={onClear}
          projectId={project.id}
        ></TaskList>
      </main>
    </section>
  );
};

export default SelectedProject;
