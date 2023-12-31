import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../Onboarding/Onboarding.scss";
import image1 from "../../assets/undrawGoodDoggy4Wfq.png";
import image2 from "../../assets/imagen2.png";
import image3 from "../../assets/undrawPetAdoption2Qkw.png";
import closeOnboarding from "../../assets/cerrar.png";

function Onboarding() {
  const [activeDot, setActiveDot] = useState(0);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/logincover');
  }

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
      <button className="close-btn" onClick={handleButtonClick}>
        <img src={closeOnboarding} alt="Cerrar" />
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

export default Onboarding;