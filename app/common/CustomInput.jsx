import React from "react";

const CustomInput = ({
  type,
  value,
  setValue,
  className,
  style,
  placeholder,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={() => setValue}
      className={"rounded-md border-gray-500 border w-full" + " " + className}
      placeholder={placeholder}
      style={style}
    />
  );
};

export default CustomInput;
