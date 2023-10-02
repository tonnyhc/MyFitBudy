import { useState } from "react";

import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

import Button from "../components/common/button/Button";

import CustomProgramForm from "../components/custom-program/CustomProgramForm";

const CustomProgram = () => {
  const initialProgramState = {
    name: "",
  };

  const [formData, setFormData] = useState(initialProgramState);
  // This is the step we are on e.g first one is program name, and when the user clicks next
  // it is changed to the workouts part
  const [currStep, setCurrStep] = useState(0);
  const changeStep = (e) => {
    e.preventDefault();
    const button = e.target.closest('button')
    const id = button.id
    if (id === "next") {
      setCurrStep((currStep) => (currStep += 1));
      console.log(currStep);
    } else {
      if (currStep == 0) {
        return;
      }
      setCurrStep((currStep) => (currStep -= 1));
    }
  };

  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <CustomProgramForm formData={formData} step={currStep} />
      <div className="flex gap-3">
        {currStep > 0 && (
          <Button
            onClick={changeStep}
            icon={<MdOutlineNavigateBefore style={{ color: "#fff" }} />}
            id="back"
            reverseOrder={true}
            color="red"
            text="Back"
          />
        )}
        <Button
          onClick={changeStep}
          icon={<MdOutlineNavigateNext style={{ color: "#fff" }} />}
          id="next"
          color="red"
          text="Next"
        />
      </div>
    </div>
  );
};

export default CustomProgram;
