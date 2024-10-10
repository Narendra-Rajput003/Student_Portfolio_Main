import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getSingleProject } from "@/services/apis";
import { Button } from "@/components/ui/button";

const ProjectView = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const navigateTo = useNavigate();

  useEffect(() => {
    const getProject = async () => {
      try {
        const data = await getSingleProject(id);
        setProject(data.project);
        console.log(data.project);
      } catch (error) {
        toast.error(error.response?.data?.message || "An error occurred");
      }
    };
    getProject();
  }, [id]);

  const handleReturnToPortfolio = () => {
    navigateTo("/");
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex mt-7 justify-center items-center min-h-[100vh] sm:gap-4 sm:py-4">
      <div className="w-[100%] px-5 md:w-[1000px] pb-5">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="flex justify-end">
              <Button onClick={handleReturnToPortfolio}>
                Return to Portfolio
              </Button>
            </div>
            <div className="mt-10 flex flex-col gap-5">
              <div className="w-full sm:col-span-4">
                <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
                <img
                  src={project.projectBanner?.url || "/avatarHolder.jpg"}
                  alt="projectBanner"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full sm:col-span-4">
                <p className="text-2xl mb-2">Description:</p>
                <ul className="list-disc">
                  {project.description?.split(". ").map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="w-full sm:col-span-4">
                <p className="text-2xl mb-2">Technologies:</p>
                <ul className="list-disc">
                  {project.technologies?.split(", ").map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="w-full sm:col-span-4">
                <p className="text-2xl mb-2">Stack:</p>
                <p>{project.stack}</p>
              </div>
              <div className="w-full sm:col-span-4">
                <p className="text-2xl mb-2">Deployed:</p>
                <p>{project.deployed}</p>
              </div>
              <div className="w-full sm:col-span-4">
                <p className="text-2xl mb-2">Github Repository Link:</p>
                <a
                  className="text-sky-700"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.gitRepoLink}
                >
                  {project.gitRepoLink}
                </a>
              </div>
              <div className="w-full sm:col-span-4">
                <p className="text-2xl mb-2">Project Link:</p>
                <a
                  className="text-sky-700"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.projectLink}
                >
                  {project.projectLink}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
