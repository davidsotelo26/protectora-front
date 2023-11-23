import "./PopupAdopcion.scss";
import { useNavigate } from "react-router-dom";
import ImagenVideoAdopcion from "../../assets/group5.png";
import { useState } from "react";

const PopupAdopcion = ({ onClose = () => {} }) => {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate("/form");
  };

  return (
    <div className="divPopupAdopcion">
      <h2 className="h2PopupAdopcion">Solicitud de adopción</h2>
      <p className="pPopupAdopcion">
        Adoptar es un acto de amor, pero sobre todo una responsabilidad de por vida
      </p>
      <p className="pPopupAdopcion">
        Por éste motivo es importante que veas el siguiente video donde te explicamos como va a ser todo el proceso de adopción
      </p>
      <img
        className="imgPopupAdopcion"
        src={ImagenVideoAdopcion}
        alt="Imagen descriptiva"
      />
      <h3 className="h3PopupAdopcion">¿Quieres continuar con el proceso de adoptación?</h3>

    <div className="divBotonesPopupAdopcion">
      <button className="buttonPopupAdopcion-One">Cancelar</button>
      <button className="buttonPopupAdopcion-Two" onClick={handleAccept}>Continuar</button>
    </div>
    </div>
  );
};

export default PopupAdopcion;