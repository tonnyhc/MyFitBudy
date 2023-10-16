import { useContext } from "react";
import Button from "../common/button/Button";
import Input from "../common/input/Input";

import {HiMinusCircle } from "react-icons/hi2";
import { CreateCustomWorkoutPlanContext } from "../../contexts/CreateCustomWorkoutContext";

const SetCard = ({set, workoutIndex, exerciseIndex, setIndex}) => {
    console.log(set)
    const {dispatch} = useContext(CreateCustomWorkoutPlanContext);

    function onUpdateSet(e){
        const fieldName = e.target.name;
        const value = e.target.value
        dispatch({type: "updateSetInfo", payload: {workoutIndex, exerciseIndex, setIndex, fieldName, value}});
    }

    function onRemoveSet(e){
        dispatch({type:"removeSetFromExercise", payload: {workoutIndex, setIndex, exerciseIndex}});
    }

  return (
    <div className="w-full py-2 border-b-2 border-border-grey">
      <div className="flex justify-between items-center  px-1">
        <h3 className="text-xl">Set {setIndex + 1}</h3>
        <Button
          text="Remove"
          color="grey"
          onClick={onRemoveSet}
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
          onChange={onUpdateSet}
          value={set.kg}
          inputSize="s"
        />
        <Input
          labelText="Reps"
          labelName="reps"
          inputType="number"
          onChange={onUpdateSet}
          value={set.reps}
          inputSize="s"
        />
        <div className="flex">
          <Input
            labelText="Min Reps"
            labelName="minReps"
            inputType="number"
            onChange={onUpdateSet}
            value={set.minReps}
            inputSize="s"
          />
          <Input
            labelText="Max Reps"
            labelName="maxReps"
            inputType="number"
            onChange={onUpdateSet}
            value={set.maxReps}
            inputSize="s"
          />
        </div>
      </div>
    </div>
  );
};

export default SetCard;
