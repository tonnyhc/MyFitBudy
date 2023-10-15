import { useContext } from "react";

import {CreateCustomWorkoutPlanContext} from '../../contexts/CreateCustomWorkoutContext'
 
import { HiPlusSm } from "react-icons/hi";

import Input from "../common/input/Input";
import Button from "../common/button/Button";
import { useState } from "react";
import ExerciseCard from "../exercises/ExerciseCard";

const initialWorkoutState = { workoutName: "", exercises: [] };

const WorkoutCard = ({ arrayIndex, isOpened }) => {
  const { workoutPlan, dispatch } = useContext(CreateCustomWorkoutPlanContext);
  const currentWorkout = workoutPlan.workouts[arrayIndex];
  const exercises = currentWorkout.exercises;
  const [openedExercisesCardIndex, setOpenedExerciseCardIndex] = useState("");
  function onAddExercise() {
    dispatch({type: 'addExerciseToWorkout', payload: arrayIndex})
  }

  function openExerciseCard(e, index) {
    setOpenedExerciseCardIndex(index);
  }

  // function onChangeExercise(e, index) {
  //   const field = e.target.name;
  //   const value = e.target.value;
  //   const exerciseToChange = exercises[index];
  //   exerciseToChange[field] = value;
  //   setExercises((oldExercises) => [...oldExercises, exerciseToChange]);
  // }

  function onChangeWorkoutName(e){
    e.preventDefault();
    dispatch({type: 'changeWorkoutName', payload: {index: arrayIndex, name: e.target.value}});
  }

  return (
    <article
      className="w-screen py-4 gap-3 flex flex-col justify-start items-center "
      key={`workout-${arrayIndex + 1}`}
    >
      <Input
        labelText={`Workout ${arrayIndex + 1}`}
        labelName={`workout${arrayIndex + 1}`}
        inputType="text"
        value={currentWorkout.workoutName}
        isRequired={true}
        onChange={onChangeWorkoutName}
        inputSize="xxl"
      />

      {exercises.map((exercise, index) => (
        <ExerciseCard
          // onChange={onChangeExercise}
          workoutIndex={arrayIndex}
          index={index}
          exerciseName={exercise.name}
          isOpened={index == openedExercisesCardIndex}
          openCardClick={(e) => openExerciseCard(e, index)}
          key={index}
        />
      ))}

      <Button
        text="Exercise"
        color="grey"
        onClick={onAddExercise}
        id="addExerciseBtn"
        icon={<HiPlusSm />}
        reverseOrder={true}
        shape="rectangular"
      />
    </article>
  );
};

export default WorkoutCard;
