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
      <div className="flex bg-[var(--main-bg)] text-[var(--text-color)] font-mono">
        <Activitybar />
        <Explorer className="hidden md:block" />
        <div className="w-full">
          <Tabsbar />
          <main className="p-4 md:p-8 flex-1 h-[calc(100vh-100px)] overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-[#333536] scrollbar-track-[#24292e] scrollbar-thumb-border-l-[1px] scrollbar-thumb-border-[#1e1f29] scrollbar-track-border-l-[1px] scrollbar-track-border-[#1e1f29]">
            <Outlet />
          </main>
        </div>
      </div>
      <Statusbar />
    </>
  );
}

export default App;
