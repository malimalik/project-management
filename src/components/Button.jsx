const Button = (props) => {
  return (
    <button
      className=" ml-3 px-4 py-2 text-xs md:text-base rounded-md bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
