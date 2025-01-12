import { projects } from "../api/projects";
// Projects have to be updated after rebuilding and modifying projects github links

function ProjectsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 flex flex-col rounded-2xl cursor-pointer shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-2xl"
            />
            <div className="p-4 rounded-b-2xl">
              <h3 className="text-2xl font-semibold text-[var(--accent-color)] mb-2">
                {project.title}
              </h3>
              <p className="text-sm mt-2">{project.description}</p>
              <div className="flex flex-wrap mt-2 mb-4">
                {project.techStack?.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-gray-300 rounded-full px-2 py-1 text-xs mr-2 mb-2  hover:bg-[rgba(66,165,245,0.5)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.source_code && (
                  <a
                    href={project.source_code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm cursor-pointer bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-color)] bg-no-repeat bg-[length:100%_10%] bg-[0_90%] transition-[background-size] duration-250 ease-in hover:bg-[length:100%_90%]"
                  >
                    Source Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm cursor-pointer bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-color)] bg-no-repeat bg-[length:100%_10%] bg-[0_90%] transition-[background-size] duration-250 ease-in hover:bg-[length:100%_90%]"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
