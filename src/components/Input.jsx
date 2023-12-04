import React from "react";

const Input = ({ name, textarea = false, ...props }) => {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 bg-stone-200";

  return (
    <>
      {!textarea && (
        <input
          className="w-[30rem] px-2 py-1 rounded-sm bg-stone-200"
          name={name}
          onChange={props.onChange}
        ></input>
      )}

      {textarea && (
        <textarea
          className={classes}
          {...props}
          name={name}
          id=""
          cols="30"
          rows="10"
          onChange={props.onChange}
        ></textarea>
      )}
    </>
  );
};

export default Input;
