import { Link, useLocation } from "react-router-dom";

const Tab = ({ icon: Icon, filename, path }) => {
  const location = useLocation();

  return (
    <Link to={path}>
      <div
        className={`px-5 py-2 bg-[#1f2428] text-[#ececec] flex items-center border-t border-[#24292e] font-sans text-[0.9rem] cursor-pointer ${
          location.pathname === path
            ? "border-t border-[#f9826c] bg-[#24292e]"
            : ""
        }`}
      >
        <Icon className="h-4 w-4 mr-1" />
        <p className="ml-1">{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
