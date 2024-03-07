
// src/components/HomeAnimation.tsx
import { useEffect, useState } from 'react';
import SectionsView from '../../components/SectionsView';
import Nav from '../../components/Nav/Nav';

interface HomeScreenProps {
  activeSection: string;
  handleSectionClick: (section: string) => void;
  contentRef: React.RefObject<HTMLDivElement>;

}

const HomeScreen = ({ activeSection, handleSectionClick, contentRef }: HomeScreenProps) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // La animación comienza después de 500ms
  }, []);
  
  return (
    <>
    <div id='info-name' className={isVisible ? 'container mt-20 m-auto show flex justify-center flex-col items-center' : 'container'}>
      <h1 className="name">Cristian Pérez</h1>
      <p className="profession tracking-widest uppercase ">Frontend Developer</p>
      <p className="description">Breve descripción sobre mí y mi experiencia.</p>
    </div>
    <SectionsView
        activeSection={activeSection}
        handleSectionClick={handleSectionClick}
        contentRef={contentRef}
      />
       {activeSection !== "" && (
       <Nav handleSectionClick={handleSectionClick} />
      )}
    </>
  );
};

export default HomeScreen;
