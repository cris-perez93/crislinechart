import { PROJECTS } from "../../../constants/projects";
import ProjectWindow from "../../ProjectWindow";

const useSectionsView = () => {



    const contentToShow = (id: string) => {
        switch (id) {
          case "Projects":
            return (
              <div className="flex flex-col gap-10 px-5">
                {PROJECTS.map((project, index) => (
                  <ProjectWindow
                    url={project.url || ""}
                    id={project.id}
                    key={index}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.imgUrl}
                  />
                ))}
              </div>
            );
          case "About":
            return (
              <div>
                <p>About</p>
              </div>
            );
          case "Contact":
            return (
              <div>
                <p>Contact</p>
              </div>
            );
          default:
            return <div></div>;
        }
      };
      return { contentToShow };
};
export default useSectionsView;
