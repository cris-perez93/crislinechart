import { useRef, useState } from "react";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { gsap } from 'gsap';
import ChartsView from "./components/ChartsView";

function App() {
  const [activeSection, setActiveSection] = useState<string>("");
  const contentRef = useRef(null);
  const handleSectionClick = (section: string) => {
    // evitar el scroll al top de la pagina
    if (contentRef.current) {
      // Anima la altura del contenedor a 0 o un valor mínimo
      gsap.to(contentRef.current, {
        translateY: 60,
        display: "none",
        opacity: 0,
        overflow: "hidden",
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          // Cambia la sección activa después de completar la animación de cierre
          setActiveSection(section);

          // Opcional: Expande el contenedor para el nuevo contenido
          // Esto puede requerir medir la altura del nuevo contenido de alguna manera
          gsap.to(contentRef.current, {
            translateY: 0,
            display: "block",
            overflow: "hidden",
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        },
      });
    }

    // scroll to top of the page with animation
  };

  return (
    <Router>
       <Nav
          handleSectionClick={handleSectionClick}
        />
      <Routes>
       
        <Route path="/" element={<HomeScreen
          activeSection={activeSection}
          handleSectionClick={handleSectionClick}
          contentRef={contentRef}
        />} />
        <Route path="/charts" element={<ChartsView />} />
      </Routes>
    </Router>
  );
}

export default App;
