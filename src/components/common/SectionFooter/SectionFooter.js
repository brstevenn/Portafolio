import { useState, useEffect } from "react";
import "./SectionFooter.css"

function SectionFooter({ content, interval }) {

  interval = interval * 1000

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeContent = () => {
      const randomIndex = Math.floor(Math.random() * content.length);
      setCurrentIndex(randomIndex);
    };

    const timer = setInterval(changeContent, interval);

    return () => clearInterval(timer); // Limpia el intervalo al desmontar el componente
  }, [content, interval]);

  return (
    <div className="section-footer-container" >
      <div className="section-footer">
        <p className="section-content">{content[currentIndex]}</p>
      </div>
    </div>
  );
}

export default SectionFooter;
