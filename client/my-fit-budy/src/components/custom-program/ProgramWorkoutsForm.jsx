import React, { useContext, useState } from "react";

import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import Button from "../common/button/Button";
import WorkoutCard from "./WorkoutCard";
import { CreateCustomWorkoutPlanContext } from "../../contexts/CreateCustomWorkoutContext";

const ProgramWorkoutsForm = () => {
  const { workoutPlan, dispatch } = useContext(CreateCustomWorkoutPlanContext);
  const workoutsCount = Number(workoutPlan.numberOfWorkouts);
  const [currentWorkoutCardIndex, setCurrentWorkoutCardIndex] = useState(0);
  const screenWidth = window.innerWidth;

  function changeCurrentWorkoutIndex(e){
    const button = e.target.closest('button')
    if(button.id == 'next'){
      setCurrentWorkoutCardIndex(oldIndex => oldIndex += 1);
    } else if (button.id == 'prev'){
      setCurrentWorkoutCardIndex(oldIndex => oldIndex -= 1)
    }
  }


  return (
    <div className="w-full h-full relative">
      <div className="flex absolute h-full overflow-y-scroll max-h-9/10" style={{transform: `translateX(-${screenWidth * currentWorkoutCardIndex}px)`, transition: '200ms ease-in-out transform'}}>
        {workoutPlan.workouts.map((workout, index) => (
          <WorkoutCard key={index} arrayIndex={index} />
        ))}
      </div>

      {currentWorkoutCardIndex > 0 && (
        <div className="absolute top-1/2 translate-y-3/4 left-[12px] inline">
          <Button onClick={changeCurrentWorkoutIndex} id='prev' shape="circle" color="red" icon={<HiChevronLeft />} />
        </div>
      )}
      {currentWorkoutCardIndex < workoutsCount -1  &&
      <div className="absolute top-1/2 translate-y-3/4 right-[12px] inline" >
        <Button onClick={changeCurrentWorkoutIndex} id='next' shape="circle" color="red" icon={<HiChevronRight />} />
      </div>
      }
      <div
        className={`flex flex-wrap gap-1 w-9/10 justify-center items-center absolute bottom-0 right-1/2 translate-x-2/4`}
      >
        {workoutPlan.workouts.map((number, index) => (
          <div
            
            key={index}
            className="bg-button-red h-[15px] w-[30px] py-2 rounded flex justify-center items-center text-white text-sm point"
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramWorkoutsForm;
