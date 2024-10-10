import React, { useState, useEffect, useMemo } from "react";
import { getProjects } from "@/services/apis";
import { Link } from "react-router-dom";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data.projects);
        setLoading(false); // Stop loading when data is fetched
      })
      .catch(console.error);
  }, []);

  // Memoizing the project elements
  const projectElements = useMemo(
    () => (viewAll ? projects : projects.slice(0, 9)),
    [viewAll, projects]
  );

  // Loading state placeholder
  if (loading) {
    return <div className="text-center py-10">Loading...</div>; // You can replace this with a spinner or skeleton
  }

  return (
    <div className="w-full flex flex-col gap-8 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Title Section */}
      <div className="relative mb-8 sm:mb-12">
        <h1
          className="hidden sm:flex gap-4 items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wide mx-auto w-fit font-extrabold"
          style={{
            background: "linear-gradient(90deg, #ff6f61, #de6fff)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          MY{" "}
          <span className="text-tubeLight-effect font-extrabold">PORTFOLIO</span>
        </h1>

        <h1
          className="flex sm:hidden gap-4 items-center text-2xl leading-tight tracking-wide mx-auto w-fit font-extrabold"
          style={{
            background: "linear-gradient(90deg, #ff6f61, #de6fff)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          MY <span className="text-tubeLight-effect font-extrabold">WORK</span>
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {projectElements.map((project) => (
          <Link
            to={`/project/${project._id}`}
            key={project._id}
            className="group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={project.projectBanner?.url || "/path-to-default-banner.jpg"} // Fallback image
                alt={project.title}
                loading="lazy" // Lazy loading for better performance
                className="w-full h-40 sm:h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-40 transition-all duration-300 flex justify-center items-center">
                <h3 className="text-white text-sm sm:text-md md:text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Show More/Show Less Button */}
      {projects?.length > 9 && (
        <div className="w-full text-center my-6 sm:my-9">
          <button
            onClick={() => setViewAll(!viewAll)}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 transition-shadow duration-300"
            aria-label={viewAll ? "Show less projects" : "Show all projects"}
          >
            {viewAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
