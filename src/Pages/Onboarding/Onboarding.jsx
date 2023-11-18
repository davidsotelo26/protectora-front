import React, { useState } from "react";
import "../Onboarding/Onboarding.scss";

function App() {
  const [activeDot, setActiveDot] = useState(0);

  const slides = [
    {
      image: "path-to-your-image-0.jpg",
      text: "Encuentra todo tipo de servicios que tienes cerca de ti",
    },
    {
      image: "path-to-your-image-1.jpg",
      text: "Adopta desde tu móvil",
      text2:
        "Puedes acceder al perfil de muchos animales que están en adopción y filtrarlos para encontrar el que mejor se adapta a ti",
    },
    {
      image: "path-to-your-image-2.jpg",
      text: "Si eres una asociación sube a tus peludos para darles más difusión",
    },
  ];

  const handleDotClick = (index) => {
    setActiveDot(index);
  };

  return (
    <div className="containerOnboarding">
      <button className="close-btn">X</button>
      <div className="slider">
        <img
          src={slides[activeDot].image}
          alt="Slider"
          className="slider-img"
        />
        <h4 className="slider-title">{slides[activeDot].text}</h4>
        <div className="slider-dots">
          <p>{slides[activeDot].text2}</p>
          <span
            className={`dot ${activeDot === 0 ? "active" : ""}`}
            onClick={() => handleDotClick(0)}
          ></span>
          <span
            className={`dot ${activeDot === 1 ? "active" : ""}`}
            onClick={() => handleDotClick(1)}
          ></span>
          <span
            className={`dot ${activeDot === 2 ? "active" : ""}`}
            onClick={() => handleDotClick(2)}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default App;
