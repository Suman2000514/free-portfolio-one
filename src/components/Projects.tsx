import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Cofee House "
            des=" It is coofee house website made by react js react bootstrap and tailwind css."
            src={projectOne}
          />
          <ProjectsCard
            title="Portfolio"
            des=" It is my portfolio made by html css . "
            src={projectTwo}
          />
          <ProjectsCard
            title="Demo next js Portfolio"
            des="It is portfolio made by next js and tailwind css full responsive !"
            src={projectThree}
          />
          
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
