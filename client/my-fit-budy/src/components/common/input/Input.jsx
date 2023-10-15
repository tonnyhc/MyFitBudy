import { useEffect, useState } from "react";

function getInputSizeStyles(size) {
  switch (size) {
    case "xs":
      return "w-[60px] h-[50px]";
    case 's':
      return 'w-[90px] h-[50px]'
    case "xxl":
      return "w-[250px] h-[50px]";

    default:
      return 'w-full h-[50px]';
  }
}

const Input = ({
  labelText,
  labelName,
  inputType,
  placeholder,
  value,
  isRequired,
  onChange,
  inputSize,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(value === "" ? false : true); // Only set to not focused if there's no input value
    setError(value === "" && isRequired ? true : false);
  };

  useEffect(() => {
    if (value !== "" && value >= 0) {
      setIsFocused(true);
    }
  }, []);

  const inputSizeStyles = getInputSizeStyles(inputSize);
  const labelUpStyles = "top-0 scale-75 -translate-y-1.5";
  const labelDownStyles = "py-[14px] px-[6px]";
  const errorInputStyles = "border-red-600 text-red-400";
  const errorLabelStyles = "text-red-400";

  return (
    <div
      className={`relative ${inputSizeStyles} group ${isFocused || value ? "input-focused" : ""}`}
    >
      <label
        htmlFor={labelName}
        className={`  bg-grey transition-scale-all duration-300 absolute left-2  ${
          isFocused ? labelUpStyles : labelDownStyles
        } ${error ? errorLabelStyles : "text-white"} `}
      >
        {labelText}
      </label>
      <input
        className={`w-full h-full border rounded-[10px] text-white  bg-grey-bg px-2 ${
          isFocused || value ? "border-white" : "border-gray-300"
        } ${error ? errorInputStyles : ""}`}
        type={inputType}
        id={labelName}
        name={labelName}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
