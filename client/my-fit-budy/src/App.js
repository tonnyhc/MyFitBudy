import { Routes, Route } from "react-router-dom";

import BottomNav from "./components/navigation/BottomNav";

import "./App.css";
import Workouts from "./components/workouts/Workouts";

function App() {
  return (
    <>
      <div className="h-[calc(100%-80px)] overflow-y-auto ">
        <Routes>
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </div>
      <BottomNav />
    </>
  );
}

export default App;
