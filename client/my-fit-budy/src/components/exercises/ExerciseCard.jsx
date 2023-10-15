import React, { useContext  } from "react";

import { HiPlusCircle, HiMinusCircle } from "react-icons/hi2";

import Button from "../common/button/Button";
import Input from "../common/input/Input";
import { CreateCustomWorkoutPlanContext } from "../../contexts/CreateCustomWorkoutContext";

const ExerciseCard = ({exerciseName, onChange, exerciseIndex, workoutIndex, isOpened, openCardClick}) => {
  const {workoutPlan, dispatch} = useContext(CreateCustomWorkoutPlanContext);
  const exercise = workoutPlan.workouts[workoutIndex].exercises[exerciseIndex];
  const sets = exercise.sets

  function addSet() {
    dispatch({type: 'addSetToExercise', payload: {workoutIndex: workoutIndex, exerciseIndex: exerciseIndex}});

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
          // onChange={(e) => onChange(e, index)}
        />
      </div>
      {isOpened && (
        <>
          {sets.map((set, index) => (
            <div
              className="w-full py-2 border-b-2 border-border-grey"
              key={index}
            >
              <div className="flex justify-between items-center  px-1">
                <h3 className="text-xl">Set {index + 1}</h3>
                <Button
                  text="Remove"
                  color="grey"
                  // onClick={(e) => removeSet(e, index)}
                  id="removeSetBtn"
                  icon={<HiMinusCircle />}
                  reverseOrder={true}
                  shape="rectangular"
                  type="delete"
                />
              </div>
              <div className="flex w-full">
                <Input
                  labelText="Weight"
                  labelName="weight"
                  inputType="number"
                  value={set.kg}
                  inputSize="s"
                />
                <Input
                  labelText="Reps"
                  labelName="reps"
                  inputType="number"
                  value={set.reps}
                  inputSize="s"
                />
                <div className="flex">
                  <Input
                    labelText="Min Reps"
                    labelName="minReps"
                    inputType="number"
                    value={set.minReps}
                    inputSize="s"
                  />
                  <Input
                    labelText="Max Reps"
                    labelName="maxReps"
                    inputType="number"
                    value={set.maxReps}
                    inputSize="s"
                  />
                </div>
              </div>
            </div>
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
