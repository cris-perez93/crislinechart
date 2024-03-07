// src/components/SectionContainer.tsx
import React from "react";

interface SectionContainerProps {
  title: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ title }) => {
  return (
    <>
      <div
        className={` flex  flex-col bg-white  sectionContainer   z-20 items-center w-[300px]  relative p-10 cursor-pointer shadow-md rounded-lg border border-gray-50 transition-transform duration-300 ease-in-out  hover:shadow-lg`}
      >
        <div className="w-full text-center">{title}</div>
      </div>
    </>
  );
};

export default SectionContainer;
