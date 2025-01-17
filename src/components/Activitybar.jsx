import { VscAccount, VscCode, VscFiles, VscGithub } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { HiOutlineEnvelope } from "react-icons/hi2";

const activitybarTopItems = [
  {
    Icon: VscFiles,
    path: "/",
    tooltip: "Home",
  },
  {
    Icon: VscGithub,
    path: "/github",
    tooltip: "GitHub",
  },
  {
    Icon: VscCode,
    path: "/projects",
    tooltip: "Projects",
  },
  {
    Icon: HiOutlineEnvelope,
    path: "/contact",
    tooltip: "Contact Me",
  },
];

const activitybarBottomItems = [
  {
    Icon: VscAccount,
    path: "/about",
    tooltip: "About Me",
  },
  {
    Icon: CiSettings,
    path: "/settings",
    tooltip: "Credits",
  },
];

const Activitybar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col justify-between h-[calc(100vh-55px)] bg-[var(--activitybar-bg)] w-[60px]">
      <div>
        {activitybarTopItems.map(({ Icon, path, tooltip }) => (
          <Link to={path} key={path} title={tooltip}>
            <div
              className={`cursor-pointer w-full px-2 hover:bg-[var(--activitybar-hover-bg)] ${
                location.pathname === path
                  ? "border-l-2 border-[var(--accent-color)]"
                  : ""
              }`}
            >
              <Icon className="h-12 w-12 p-2.5 block mx-auto text-gray-400 hover:text-white" />
            </div>
          </Link>
        ))}
      </div>
      <div>
        {activitybarBottomItems.map(({ Icon, path, tooltip }) => (
          <Link to={path} key={path} title={tooltip}>
            <div
              className={`cursor-pointer w-full px-2 hover:bg-[var(--activitybar-hover-bg)] ${
                location.pathname === path
                  ? "border-l-2 border-[var(--accent-color)]"
                  : ""
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
