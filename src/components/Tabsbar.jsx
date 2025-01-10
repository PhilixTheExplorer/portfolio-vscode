import { FaHome } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Tab from "./Tab";

const tabs = [
  { icon: FaHome, filename: "home.jsx", path: "/" },
  { icon: FaHome, filename: "about.html", path: "/about" },
  { icon: FaHome, filename: "contact.css", path: "/contact" },
  { icon: FaHome, filename: "projects.js", path: "/projects" },
  { icon: FaHome, filename: "github.md", path: "/github" },
];

const Tabsbar = () => {
  const location = useLocation();
  const currentTab = tabs.find((tab) => tab.path === location.pathname);

  return (
    <div className="flex bg-[#1f2428] overflow-x-auto">
      <div className="hidden min-[900px]:flex">
        {tabs.map((tab) => (
          <Tab
            key={tab.path}
            icon={tab.icon}
            filename={tab.filename}
            path={tab.path}
          />
        ))}
      </div>
      <div className="flex min-[900px]:hidden">
        {currentTab && (
          <Tab
            icon={currentTab.icon}
            filename={currentTab.filename}
            path={currentTab.path}
          />
        )}
      </div>
    </div>
  );
};

export default Tabsbar;
