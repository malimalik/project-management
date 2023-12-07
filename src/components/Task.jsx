import React, { useState, useRef } from "react";
import Input from "./Input";
import Button from "./Button";
const Task = (props) => {
  const taskName = useRef();

  const handleTaskAdd = () => {
    const enteredTaskName = taskName.current.value;
    props.handleTask(enteredTaskName);
  };

  return (
    <>
      <div className="w-[35rem] my-10 mx-10">
        <h3 className="my-4 text-left text-xl font-bold"> Tasks</h3>
      </div>

      <div className="flex">
        <label htmlFor="task"></label>
        <Input name="taskName" ref={taskName} />

        <Button onClick={handleTaskAdd}>Add</Button>
      </div>
    </>
  );
};

export default Task;
