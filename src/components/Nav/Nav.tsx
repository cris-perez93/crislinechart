import { SECTIONS } from "../../constants/sections";

interface NavProps {
  handleSectionClick: (section: string) => void;
}
const Nav = ({ handleSectionClick }: NavProps) => {
  return (
    <div className=" rounded-md  flex gap-5 py-5 uppercase text-sm fixed right-0 top-0 w-[300px] z-50 ">
      {SECTIONS.map((section) => (
        <div
          className="cursor-pointer hover:text-gray-600 transition-all"
          key={section.id}
          onClick={() => handleSectionClick(section.id)}
        >
          <p>{section.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Nav;
