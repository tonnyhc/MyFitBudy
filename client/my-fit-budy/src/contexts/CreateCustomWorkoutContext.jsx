import { createContext, useReducer, useState } from "react";
import CustomProgramReducer from "../reducers/CustomProgramReducer";

export const CreateCustomWorkoutPlanContext = createContext();

export const CreateCustomWorkoutPlanProvider = ({ children }) => {
  const defaultWorkoutPlanState = {
    planName: "",
    workouts: [],
    numberOfWorkouts: 0,
  };
  const [workoutPlan, dispatch] = useReducer(
    CustomProgramReducer,
    defaultWorkoutPlanState
  );

  const context = {
    workoutPlan,
    dispatch,
  };

  return (
    <CreateCustomWorkoutPlanContext.Provider value={context}>
      {children}
    </CreateCustomWorkoutPlanContext.Provider>
  );
};
