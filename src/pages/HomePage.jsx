import { Link } from "react-router";

function HomePage() {
  return (
    <div className="flex flex-col text-md h-full">
      <div className="md:hidden my-4">
        <p className="text-sm text-red-300 md:hidden">
          View this portfoilo on Desktop to experience full VS Code Style.
        </p>
        <p className="text-[0.5rem]">
          This is just a warning message in a mobile view.
        </p>
      </div>
      <div className="h-4 md:h-20"></div>
      <h1 className="font-extrabold text-[var(--accent-color)] text-3xl md:text-7xl mb-4 blink-cursor">
        Kaung Hset Hein
      </h1>
      <h2 className="font-semibold md:text-lg">PhilixTheExplorer</h2>
      <p className="sm:text-lg my-4">
        🎓 Computer Science Student <br className="sm:hidden" />| 💻 Aspiring
        Software Engineer <br className="sm:hidden" />| 📚 Lifelong Learner
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
        <Link
          to="/about"
          className="bg-cyan-700 p-2 cursor-pointer bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-color)] bg-no-repeat bg-[length:100%_0%] bg-[0_90%] transition-[background-size] duration-250 ease-in hover:bg-[length:100%_100%]"
        >
          <button className="">About Me</button>
        </Link>
        <Link
          to="/projects"
          className="bg-cyan-700 p-2 cursor-pointer bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-color)] bg-no-repeat bg-[length:100%_0%] bg-[0_90%] transition-[background-size] duration-250 ease-in hover:bg-[length:100%_100%]"
        >
          <button className="">Projects</button>
        </Link>
        <Link
          to="/contact"
          className="bg-cyan-700 p-2 cursor-pointer bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-color)] bg-no-repeat bg-[length:100%_0%] bg-[0_90%] transition-[background-size] duration-250 ease-in hover:bg-[length:100%_100%]"
        >
          <button className="">Contact Me</button>
        </Link>
        <Link
          to="/github"
          className="bg-cyan-700 p-2 cursor-pointer bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-color)] bg-no-repeat bg-[length:100%_0%] bg-[0_90%] transition-[background-size] duration-250 ease-in hover:bg-[length:100%_100%]"
        >
          <button className="">Github Stats</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
