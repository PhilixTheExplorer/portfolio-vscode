import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router";
import { items } from "../api/items";

const explorerItems = items;

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className="bg-[#1f2428] w-64 text-[#e1e4e8] font-sans border-r border-[#161a1d] ">
      <p className="p-2 text-[0.9rem] font-light uppercase tracking-wider mb-3">
        Explorer
      </p>
      <div>
        <input
          type="checkbox"
          className="absolute opacity-0 z-[-1]"
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label
          htmlFor="portfolio-checkbox"
          className="uppercase font-bold text-[0.8rem] tracking-wider flex items-center cursor-pointer px-2"
        >
          <FaChevronRight
            className="transition-transform mr-2"
            style={portfolioOpen ? { transform: "rotate(90deg)" } : {}}
          />
          Portfolio
        </label>
        <div className={`p-2 ${portfolioOpen ? "block" : "hidden"}`}>
          {explorerItems.map((item) => (
            <Link to={item.path} key={item.name}>
              <div className="p-1 flex items-center text-[0.875rem] hover:bg-[#24292e]">
                <item.icon className="h-4 w-4 mr-1" />
                <p className="ml-1">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
