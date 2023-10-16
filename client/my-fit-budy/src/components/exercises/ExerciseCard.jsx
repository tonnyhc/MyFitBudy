import React, { useContext  } from "react";

import { HiPlusCircle } from "react-icons/hi2";

import Button from "../common/button/Button";
import Input from "../common/input/Input";
import { CreateCustomWorkoutPlanContext } from "../../contexts/CreateCustomWorkoutContext";
import SetCard from "./SetCard";

const ExerciseCard = ({exerciseName, exerciseIndex, workoutIndex, isOpened, openCardClick}) => {
  const {workoutPlan, dispatch} = useContext(CreateCustomWorkoutPlanContext);
  const exercise = workoutPlan.workouts[workoutIndex].exercises[exerciseIndex];
  const sets = exercise.sets

  function addSet() {
    dispatch({type: 'addSetToExercise', payload: {workoutIndex: workoutIndex, exerciseIndex: exerciseIndex}});

  }

  function changeExerciseName(e){
    e.preventDefault();
    const newName = e.target.value;
    dispatch({type: "changeExerciseName", payload:{name: newName, exerciseIndex: exerciseIndex, workoutIndex:workoutIndex}});
  }

  // function removeSet(e, index) {
  //   setSets((oldSets) => oldSets.filter((_, i) => i !== index));
  // }

  return (
    <article onClick={openCardClick} className="flex flex-col items-center bg-light-grey rounded-t-2xl py-3 px-2 w-10/12 rounded overflow-auto">
      {/* Exercise name */}
      <div className="w-full">
        <Input
          labelText="Exercise Name"
          labelName="exerciseName"
          inputType="text"
          value={exerciseName}
          isRequired={true}
          onChange={changeExerciseName}
        />
      </div>
      {isOpened && (
        <>
          {sets.map((set, index) => (
            <SetCard key={index} workoutIndex={workoutIndex} exerciseIndex={exerciseIndex} set={set} setIndex={index} />
          ))}
          <Button
            text="Add Set"
            color="grey"
            onClick={addSet}
            id="addSetBtn"
            icon={<HiPlusCircle />}
            reverseOrder={true}
            shape="rectangular"
          />
        </>
      )}
    </article>
  );
};

export default ExerciseCard;
