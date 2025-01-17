import { useLocation } from "react-router-dom";
import Tab from "./Tab";
import { items } from "../api/items";

const tabs = items;

const Tabsbar = () => {
  const location = useLocation();
  const currentTab = tabs.find((tab) => tab.path === location.pathname);

  return (
    <div className="flex bg-[var(--tabs-bg)] overflow-x-auto">
      <div className="hidden min-[900px]:flex">
        {tabs.map((tab) => (
          <Tab
            key={tab.path}
            icon={tab.icon}
            filename={tab.name}
            path={tab.path}
            color={tab.color}
          />
        ))}
      </div>
      <div className="flex min-[900px]:hidden">
        {currentTab && (
          <Tab
            icon={currentTab.icon}
            filename={currentTab.name}
            path={currentTab.path}
            color={currentTab.color}
          />
        )}
      </div>
    </div>
  );
};

export default Tabsbar;
