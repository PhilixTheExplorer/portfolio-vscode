import { Outlet } from "react-router-dom";
import Titlebar from "./components/Titlebar";
import Statusbar from "./components/Statusbar";
import Activitybar from "./components/Activitybar";
import Tabsbar from "./components/Tabsbar";
import Explorer from "./components/Explorer";

function App() {
  return (
    <>
      <Titlebar />
      <div className="flex bg-[#24292e]">
        <Activitybar />
        <Explorer />
        <div className="w-full">
          <Tabsbar />
          <main
            id="main-editor"
            className="p-8 md:p-8 sm:p-4 text-[#efefef] font-mono flex-1 h-[85vh] overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-[#333536] scrollbar-track-[#24292e] scrollbar-thumb-border-l-[1px] scrollbar-thumb-border-[#1e1f29] scrollbar-track-border-l-[1px] scrollbar-track-border-[#1e1f29]"
          >
            <Outlet />
          </main>
        </div>
      </div>
      <Statusbar />
    </>
  );
}

export default App;
