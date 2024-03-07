import { SECTIONS } from "../../constants/sections";
import SectionContainer from "../SectionContainer";
import useSectionsView from "./hooks/useSectionsView";

interface SectionsViewProps {
    activeSection: string;
    handleSectionClick: (section: string) => void;
    contentRef: React.RefObject<HTMLDivElement>;
}


const SectionsView = ({ activeSection, handleSectionClick, contentRef }: SectionsViewProps) => {
    const { contentToShow } = useSectionsView();
   
    return (
        <div className=" mt-10 w-full max-w-[80%] justify-center m-auto  flex gap-5">
        {activeSection === "" &&
          SECTIONS.map((section) => (
            <div
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
            >
              <SectionContainer key={section.id} title={section.title} />
            </div>
          ))}

        <div
          ref={contentRef}
          className="absolute overflow-hidden pb-10 hidden  z-20 w-[60%] bg-white  rounded-lg  "
        >
          <div className="">
            <p className="text-center">{activeSection}</p>
            {contentToShow(activeSection)}
          </div>
        </div>
      </div>
      );
}
 
export default SectionsView;