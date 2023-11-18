import React, { useState } from "react";
import "../Onboarding/Onboarding.scss";
import image1 from "../../Assets/undrawGoodDoggy4Wfq.png";
import image2 from "../../Assets/imagen2.png";
import image3 from "../../Assets/undrawPetAdoption2Qkw.png";
import cerrarOnboarding from "../../Assets/cerrar.png";

function App() {
  const [activeDot, setActiveDot] = useState(0);

  const slides = [
    {
      image: image1,
      text: "Encuentra todo tipo de servicios que tienes cerca de ti",
    },
    {
      image: image2,
      text: "Adopta desde tu móvil",
      text2:
        "Puedes acceder al perfil de muchos animales que están en adopción y filtrarlos para encontrar el que mejor se adapta a ti",
    },
    {
      image: image3,
      text: "Si eres una asociación sube a tus peludos para darles más difusión",
    },
  ];

  const handleDotClick = (index) => {
    setActiveDot(index);
  };

  return (
    <div className="containerOnboarding">
      <button className="close-btn">
        <img src={cerrarOnboarding} alt="Cerrar" />
      </button>
      <div className="slider">
        <img
          src={slides[activeDot].image}
          alt="Slider"
          className="slider-img"
        />
        <h4 className="slider-title">{slides[activeDot].text}</h4>
        <p>{slides[activeDot].text2}</p>
        <div className="slider-dots">
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