import {
  VscChromeClose,
  VscChromeMaximize,
  VscChromeMinimize,
} from "react-icons/vsc";

const Titlebar = () => {
  return (
    <section className="bg-[var(--titlebar-bg)] h-[30px] px-2 flex items-center justify-between text-white font-sans text-sm border-b border-[#191d20]">
      <img
        src="/favicon.ico"
        alt="VSCode Icon"
        height={20}
        width={20}
        className="mr-2"
      />
      <div className=" hidden lg:flex flex-1 items-center space-x-4 mr-auto ml-2">
        <p className="cursor-pointer">File</p>
        <p className="cursor-pointer">Edit</p>
        <p className="cursor-pointer">Selection</p>
        <p className="cursor-pointer">View</p>
        <p className="cursor-pointer">Go</p>
        <p className="cursor-pointer">Run</p>
        <p className="cursor-pointer">Terminal</p>
        <p className="cursor-pointer">Help</p>
      </div>
      <p className="absolute left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap">
        Kaung Hset Hein - PhilixTheExplorer
      </p>
      <div className="hidden lg:flex items-center ml-auto space-x-4">
        <button className="h-[20px] w-[20px] flex items-center justify-center  hover:bg-[var(--titlebar-hover-bg)]">
          <VscChromeMinimize className="text-white" />
        </button>
        <button className="h-[20px] w-[20px] flex items-center justify-center  hover:bg-[var(--titlebar-hover-bg)]">
          <VscChromeMaximize className="text-white" />
        </button>
        <button className="h-[20px] w-[20px] flex items-center justify-center  hover:bg-red-600">
          <VscChromeClose className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default Titlebar;
