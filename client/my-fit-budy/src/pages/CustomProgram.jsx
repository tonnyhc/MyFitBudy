import { useContext, useState } from "react";

import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import Button from "../components/common/button/Button";
import useFormState from '../hooks/useFormState';
import ProgramNameForm from "../components/custom-program/ProgramNameForm";
import ProgramWorkoutsForm from "../components/custom-program/ProgramWorkoutsForm";
import { CreateCustomWorkoutPlanContext } from "../contexts/CreateCustomWorkoutContext";

const CustomProgram = () => {
  const { workoutPlan, dispatch } = useContext(
    CreateCustomWorkoutPlanContext
  );

  const [programNameWorkoutsCount, setProgramNameWorkoutsCount] = useFormState({planName: "", workoutsCount: ''})

  // This is the step we are on e.g first one is program name, and when the user clicks next
  // it is changed to the workouts part
  const [currStep, setCurrStep] = useState(0);
  const changeStep = (e) => {
    e.preventDefault();
    const button = e.target.closest("button");
    const id = button.id;
    if (id === "next") {
      setCurrStep((currStep) => (currStep += 1));
      currStep === 0 && dispatch({type: "initializeProgram", payload: programNameWorkoutsCount});
    } else {
      if (currStep == 0) {
        return;
      }
      setCurrStep((currStep) => (currStep -= 1));
    }
  };

  return (
    <div className="flex items-center h-full flex-col gap-5">
      <div className="min-h-4/5 w-full">
        {currStep == 0 && (
          <ProgramNameForm
            setFormData={setProgramNameWorkoutsCount}
            formData={workoutPlan}
            step={currStep}
          />
        )}
        {currStep == 1 && (
          <ProgramWorkoutsForm />
        )}
      </div>

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
