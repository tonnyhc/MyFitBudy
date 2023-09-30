import { Link } from "react-router-dom";

import {AiOutlinePlus} from 'react-icons/ai'
import { PiBarbellDuotone } from "react-icons/pi";
import styles from "./MoreSideNav.module.css";
import { forwardRef } from "react";

const SideNavItem = ({ icon, text, path, onClick }) => {
  return (
    <li onClick={onClick} className="mb-2">
      <Link
        to={path}
        className="flex items-center gap-2 font text-lg tracking-wider"
      >
        <p className="text-red-500 text-[22px]">{icon}</p>
        <p>{text}</p>
      </Link>
    </li>
  );
};

const MoreSideNav = forwardRef(function MoreSideNav(props,ref){
  const {closeNav} ={...props}
  const navItems = [
    {
      icon: <PiBarbellDuotone />,
      text: "Your Program",
      path: "program/current",
    },
    {
      icon: <AiOutlinePlus />,
      text: "Create Custom Program",
      path: 'program/create'
    }
  ];

  return (
    <div
      ref={ref}
      className={`${styles.animateSideNav} h-full w-3/4 z-50 bg-gradient-to-br from-black via-transparent to-transparent top-0 absolute py-6 px-4 backdrop-blur-md text-white`}
    >
      <div className="h-full w-full">
        <div id="nav-profile" className="flex flex-col items-center">
          <div className="w-20 mb-3 rounded-full overflow-hidden">
            <img
              className="object-cover w-full "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
              alt=""
            />
          </div>
          <div>
            <p>Toni Petrov</p>
          </div>
        </div>

        <ul className="mt-5">
          {navItems.map((item, index) => (
            <SideNavItem key={index} onClick={closeNav} icon={item.icon} text={item.text} path={item.path} />
          ))}
        </ul>
      </div>
    </div>
  );
});

export default MoreSideNav
