function CustomProgramReducer(state, action) {
  switch (action.type) {
    case "initializeProgram":
      const payload = action.payload;
      const newWorkoutPlanState = {
        planName: payload.planName,
        workouts: Array.from({ length: Number(payload.workoutsCount) }, () => ({
          workoutName: "",
          exercises: [],
        })),
        numberOfWorkouts: Number(payload.workoutsCount),
      };
      console.log(newWorkoutPlanState);
      return newWorkoutPlanState;
      break;

    case "changeWorkoutName":
      const name = action.payload.name;
      const index = action.payload.index;
      const newWorkoutsState = [
        ...state.workouts.slice(0, index), // elements before the modified index
        {
          ...state.workouts[index],
          workoutName: name, // update the workoutName property
        },
        ...state.workouts.slice(index + 1), // elements after the modified index
      ];

      return { ...state, workouts: newWorkoutsState };
      break;

    case "addExerciseToWorkout":     
      const newExercise = { name: "", sets: [{weight: '', reps:'', minReps: '', maxReps: ''}] };
      const workoutIndexToAddExercise = action.payload;
      const updatedWorkouts = [...state.workouts]; // create a copy of the workouts array
      // Create a new copy of the workout at the specified index
      const updatedWorkout = {
        ...updatedWorkouts[workoutIndexToAddExercise],
        exercises: [
          ...updatedWorkouts[workoutIndexToAddExercise].exercises,
          newExercise,
        ],
      };
      // Update the workouts array with the modified workout
      updatedWorkouts[workoutIndex] = updatedWorkout;
      // Return the updated state
      return { ...state, workouts: updatedWorkouts };

    case 'addSetToExercise':
      const newSet = { weight: '', reps: '', minReps: '', maxReps: '' };
      const workoutIndexToAddSet = action.payload.workoutIndex;
      const exerciseIndex = action.payload.exerciseIndex;
    
      // Create a shallow copy of the state
      const updatedState = { ...state };
    
      // Create a new array for the workouts to avoid mutating the original array
      const targetedWorkouts = [...state.workouts];
    
      // Create a shallow copy of the workout at the specified index
      const targetedWorkout = { ...targetedWorkouts[workoutIndexToAddSet] };
    
      // Create a new array for the exercises to avoid mutating the original array
      const updatedExercises = [...targetedWorkout.exercises];
    
      // Create a shallow copy of the exercise at the specified index
      const updatedExercise = { ...targetedWorkouts[exerciseIndex] };
    
      // Update the sets array within the exercise
      updatedExercise.sets = [...updatedExercise.sets, newSet];
    
      // Update the exercises array within the workout
      updatedExercises[exerciseIndex] = updatedExercise;
    
      // Update the workouts array within the state
      targetedWorkout.exercises = updatedExercises;
      targetedWorkouts[workoutIndexToAddSet] = targetedWorkout;
    
      // Update the state with the modified workouts array
      updatedState.workouts = targetedWorkouts;
    
      // Return the updated state
      return updatedState;

    default:
      return state;
  }
}

export default CustomProgramReducer;
