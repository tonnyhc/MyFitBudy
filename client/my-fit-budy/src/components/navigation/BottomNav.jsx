import { NavLink, useLocation } from "react-router-dom";

import { PiBarbell, PiBarbellFill } from "react-icons/pi";
import { GoHomeFill, GoHome } from "react-icons/go";

const BottomNav = () => {
  const location = useLocation();
  console.log(location)
  const isActiveLink = (path) => location.pathname === path;

  return (
    <ul
      className="flex flex-row justify-between fixed w-full bottom-0 px-8 text-4xl h-20 items-center"
      role="list"
    >
      <li>
      <NavLink to="/" exact>
          {isActiveLink("/") ? <GoHomeFill style={{ fill: "#3C7AB3" }} /> : <GoHome style={{color: '#FFF'}}/>}
        </NavLink>
      </li>
      <li>
      <NavLink to="/workouts" exact>
          {isActiveLink("/workouts") ? <PiBarbellFill style={{ fill: "#3C7AB3" }} /> : <PiBarbell style={{color: '#FFF'}}/>}
        </NavLink>
      </li>
    </ul>
  );
};

export default BottomNav;
