import React, { useState, useRef } from "react";
import Input from "./Input";
import Button from "./Button";
const Tasks = (props) => {
  const taskName = useRef();

  const handleTaskAdd = () => {
    const enteredTaskName = taskName.current.value;
  };

  return (
    <>
      <div className="w-[35rem] my-10 mx-10">
        <h3 className="my-4 text-left text-xl font-bold"> Tasks</h3>
      </div>

      <div className="flex">
        <label htmlFor="task"></label>
        <Input name="taskName" ref={taskName} />

        <Button>Add</Button>
      </div>
    </>
  );
};

export default Tasks;
