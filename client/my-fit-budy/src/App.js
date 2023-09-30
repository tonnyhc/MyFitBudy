import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Workouts from "./components/workouts/Workouts";
import Navigation from "./components/navigation/Navigation";
import CustomProgram from "./pages/CustomProgram";

import { UtilityContext } from "./contexts/UtilityContext";

import "./App.css";

function App() {
  const { isMoreClicked } = useContext(UtilityContext);

  return (
    <>
      <Navigation>
        <div className="h-[calc(100%-98px-50px)] mt-[96px] relative overflow-hidden ">
          <Routes>
            <Route path="/workouts" element={<Workouts />} />
            <Route path='/program/create' element={<CustomProgram />} />
          </Routes>
        </div>
      </Navigation>
    </>
  );
}

export default App;
