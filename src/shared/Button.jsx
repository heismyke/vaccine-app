import React from "react";
const Button = ({ children, color, font }) => {
  return (
    <button
      className={`${color} ${font} p-3 flex items-center  gap-4 round-xl  rounded-xl  min-h-[34.52px]`}
    >
      {children}
    </button>
  );
};

export default Button;
