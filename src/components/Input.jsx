import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { name, textarea = false, ...rest } = props;
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 bg-stone-200";

  return (
    <>
      {!textarea && (
        <input
          className="w-[30rem] px-2 py-1 rounded-sm bg-stone-200"
          name={name}
          ref={ref}
          {...rest}
        />
      )}

      {textarea && (
        <textarea
          className={classes}
          ref={ref}
          name={name}
          id=""
          cols="30"
          rows="10"
          {...rest}
        />
      )}
    </>
  );
});

export default Input;
