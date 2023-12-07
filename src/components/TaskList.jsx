import React from "react";

const TaskList = (props) => {
  const projectTasks = props.tasks.filter(
    (task) => task.projectId === props.projectId
  );

  console.log(projectTasks);

  return (
    <div className="mt-5">
      <ul className="flex flex-col">
        {projectTasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center">
            {task.name}
            <button
              className="px-2 py-1 rounded-sm text-stone-400 hover:text-stone-500"
              onClick={() => props.onClear(task.id)}
            >
              Clear
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
