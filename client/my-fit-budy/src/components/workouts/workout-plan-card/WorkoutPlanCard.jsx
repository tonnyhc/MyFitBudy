import { Link } from "react-router-dom";

const WorkoutPlanCard = () => {
  return (
    <Link to='/workout-plan/25'>
      <article className="bg-gray-700 p-6 rounded-lg shadow-lg m-4 max-w-md transition-transform transform scale-95 active:scale-100">
        <div className="text-white text-2xl font-bold mb-2">
          <h3 className="text-base">Push/Pull/Legs x Upper/Lower</h3>
        </div>
        <div className="text-gray-400">
          <p>
            <strong>Created:</strong> September 26, 2023
          </p>
        </div>
      </article>
    </Link>
  );
};

export default WorkoutPlanCard;
