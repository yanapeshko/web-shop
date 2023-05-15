import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname } = props;
  return (
    <div className="mt-1">
      <input
        className={`form-control ${classname}`}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
