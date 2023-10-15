import { Routes, Route } from "react-router-dom";

import Workouts from "./components/workouts/Workouts";
import Navigation from "./components/navigation/Navigation";
import CustomProgram from "./pages/CustomProgram";

import "./App.css";
import { CreateCustomWorkoutPlanProvider } from "./contexts/CreateCustomWorkoutContext";

function App() {
  return (
    <>
      <Navigation>
        <div className="h-[calc(100%-98px-50px)] mt-[96px] relative overflow-hidden ">
          <CreateCustomWorkoutPlanProvider>
            <Routes>
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/program/create" element={<CustomProgram />} />
            </Routes>
          </CreateCustomWorkoutPlanProvider>
        </div>
      </Navigation>
    </>
  );
}

export default App;
