import React, { useContext } from "react";

import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import Button from "../common/button/Button";
import WorkoutCard from "./WorkoutCard";
import { CreateCustomWorkoutPlanContext } from "../../contexts/CreateCustomWorkoutContext";

const ProgramWorkoutsForm = () => {
  const { workoutPlan, dispatch } = useContext(CreateCustomWorkoutPlanContext);

  return (
    <div className="w-full h-full relative">
      <div className="flex absolute h-full overflow-y-scroll max-h-9/10">
        {workoutPlan.workouts.map((workout, index) => (
          <WorkoutCard key={index} arrayIndex={index} />
        ))}
      </div>

      <div className="absolute top-1/2 translate-y-3/4 left-[12px] inline">
        <Button shape="circle" color="red" icon={<HiChevronLeft />} />
      </div>
      <div className="absolute top-1/2 translate-y-3/4 right-[12px] inline">
        <Button shape="circle" color="red" icon={<HiChevronRight />} />
      </div>
      <div
        className={`flex flex-wrap gap-1 w-9/10 justify-center items-center absolute bottom-0 right-1/2 translate-x-2/4`}
      >
        {workoutPlan.workouts.map((number, index) => (
          <div
            key={index}
            className="bg-button-red h-[15px] w-[30px] rounded flex justify-center items-center text-white text-sm point"
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramWorkoutsForm;
