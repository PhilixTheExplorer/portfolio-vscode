import {
  FaExclamationCircle,
  FaExclamationTriangle,
  FaBell,
  FaCheckCircle,
  FaCodeBranch,
  FaReact,
} from "react-icons/fa";

const Statusbar = () => {
  return (
    <footer className="bg-[#24292e] h-[25px] border-t border-[#1b1f23] text-[#e1e4e8] px-2 flex items-center justify-between text-[0.8rem]">
      <div className="flex items-center">
        <a
          href="https://github.com/PhilixTheExplorer"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center mr-2 h-[24px] px-1 cursor-pointer font-sans hover:bg-[#4f4f52] text-white no-underline"
        >
          <FaCodeBranch className="mr-1" />
          <p>main</p>
        </a>
        <div className="flex items-center mr-2 h-[24px] px-1 cursor-pointer font-sans hover:bg-[#4f4f52]">
          <FaExclamationCircle className="mr-1" />
          <p className="mr-2">0</p>
          <FaExclamationTriangle className="mr-1" />
          <p>0</p>
        </div>
      </div>
      <div className="hidden md:flex items-center">
        <div className="flex items-center mr-2 h-[24px] px-1 cursor-pointer font-sans hover:bg-[#4f4f52]">
          <FaReact className="mr-1" />
          <p>Powered by React</p>
        </div>
        <div className="flex items-center mr-2 h-[24px] px-1 cursor-pointer font-sans hover:bg-[#4f4f52]">
          <FaCheckCircle className="mr-1" />
          <p>Prettier</p>
        </div>
        <div className="flex items-center mr-2 h-[24px] px-1 cursor-pointer font-sans hover:bg-[#4f4f52]">
          <FaBell className="mr-1" />
        </div>
      </div>
    </footer>
  );
};

export default Statusbar;
