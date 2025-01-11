import { Link, useLocation } from "react-router-dom";

const Tab = ({ icon: Icon, filename, path, color }) => {
  const location = useLocation();

  return (
    <Link to={path}>
      <div
        className={`px-5 py-2 text-[var(--text-color)] flex items-center border-t border-x border-[var(--tab-border)] font-sans text-[0.9rem] cursor-pointer ${
          location.pathname === path
            ? "border-t-[var(--accent-color)] bg-[var(--tab-active-bg)]"
            : ""
        }`}
      >
        <Icon className="h-4 w-4 mr-1" color={color} />
        <p className="ml-1">{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
