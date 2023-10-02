// const Input = ({ labelText, labelName, inputType }) => {
//   return (
//     <div className="relative group">
//       <label
//         className="absolute top-0 py-[14px] px-[6px] text-xs group-focus-within:-translate-y-8"
//         htmlFor={labelName}
//       >
//         {labelText}
//       </label>
//       <input
//         className="w-[250px] h-[50px] border-solid focus-within:border-white bg-grey-bg"
//         type={inputType}
//         id={labelName}
//       />
//     </div>
//   );
// };

// export default Input;

import { useState } from "react";

const Input = ({ labelText, labelName, inputType, placeholder, value }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(value === ""); // Only set to not focused if there's no input value
  };

  const labelUpStyles = "top-0 text-xs -translate-y-1.5";
  const labelDownStyles = "py-[14px] px-[6px]";

  return (
    <div
      className={`relative group ${isFocused || value ? "input-focused" : ""}`}
    >
      <label
        htmlFor={labelName}
        className={`${
          isFocused ? labelUpStyles : labelDownStyles
        } transition-all duration-110 absolute left-2 bg-grey`}
      >
        {labelText}
      </label>
      <input
        className={`w-[250px] h-[50px] border-solid rounded-[10px] ${
          isFocused || value ? "border-white" : "border-gray-300"
        } bg-grey-bg px-2`}
        type={inputType}
        id={labelName}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
      />
    </div>
  );
};

export default Input;
