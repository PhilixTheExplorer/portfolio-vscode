import { VscAccount, VscCode, VscFiles, VscGithub } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { HiOutlineEnvelope } from "react-icons/hi2";

const activitybarTopItems = [
  {
    Icon: VscFiles,
    path: "/",
  },
  {
    Icon: VscGithub,
    path: "/github",
  },
  {
    Icon: VscCode,
    path: "/projects",
  },

  {
    Icon: HiOutlineEnvelope,
    path: "/contact",
  },
];

const activitybarBottomItems = [
  {
    Icon: VscAccount,
    path: "/about",
  },
  {
    Icon: CiSettings,
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
                location.pathname === path ? "border-l-2 border-[#42A5F5]" : ""
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
                location.pathname === path ? "border-l-2 border-[#42A5F5]" : ""
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
