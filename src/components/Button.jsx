const Button = (props) => {
  return (
    <button
      className=" ml-3 px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
