import React from "react";
const Input = ({ name, textarea = false }) => {
  return (
    <>
      {!textarea && (
        <input
          className="w-[30rem] px-2 py-1 rounded-sm bg-stone-200"
          name={name}
        ></input>
      )}

      {textarea && (
        <textarea
          className="w-[30rem] px-2 py-1 rounded-sm bg-stone-200"
          name={name}
          id=""
          cols="30"
          rows="10"
        ></textarea>
      )}
    </>
  );
};

export default Input;
