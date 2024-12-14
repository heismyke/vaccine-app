const Button = ({ children }) => {
  return (
    <button className="bg-[#1E4EA2] p-3 flex items-center  gap-4 rounded-xl text-white  min-h-[34.52px]">
      {children}
    </button>
  );
};

export default Button;
