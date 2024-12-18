import React from "react";

const SharedContainer = ({ children, variant }) => {
  const baseStyles = "p-10 xl:w-[85%] mx-auto";
  const variants = {
    default: "bg-[#EFF5F6] p-10  xl:w-[85%] mx-auto",
  };
  return (
    <div
      className={`${variant === "default" ? variants["default"] : baseStyles}`}
    >
      {children}
    </div>
  );
};

export default SharedContainer;
