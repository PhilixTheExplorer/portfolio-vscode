import { FaGithub, FaCode, FaEnvelope, FaCog } from "react-icons/fa";
import { VscFiles } from "react-icons/vsc";
import { LuCircleUserRound } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

const activitybarTopItems = [
  {
    Icon: VscFiles,
    path: "/",
  },
  {
    Icon: FaGithub,
    path: "/github",
  },
  {
    Icon: FaCode,
    path: "/projects",
  },

  {
    Icon: FaEnvelope,
    path: "/contact",
  },
];

const activitybarBottomItems = [
  {
    Icon: LuCircleUserRound,
    path: "/about",
  },
  {
    Icon: FaCog,
    path: "/settings",
  },
];

const Activitybar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col justify-between h-[calc(100vh-55px)] bg-[#24292e] w-[60px]">
      <div>
        {activitybarTopItems.map(({ Icon, path }) => (
          <Link to={path} key={path}>
            <div
              className={`cursor-pointer w-full px-2 hover:bg-[#1f2428] ${
                location.pathname === path ? "border-l-2 border-[#bd93f9]" : ""
              }`}
            >
              <Icon className="h-12 w-12 p-2.5 block mx-auto text-gray-400 hover:text-white" />
            </div>
          </Link>
        ))}
      </div>
      <div>
        {activitybarBottomItems.map(({ Icon, path }) => (
          <Link to={path} key={path}>
            <div
              className={`cursor-pointer w-full px-2 hover:bg-[#1f2428] ${
                location.pathname === path ? "border-l-2 border-[#bd93f9]" : ""
              }`}
            >
              <Icon className="h-12 w-12 p-2.5 block mx-auto text-gray-400 hover:text-white" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Activitybar;
