import React, { useState, useEffect } from "react";
import "./petProfile.scss";
import { getAnimals } from "../../Services/Animals";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

//importacion de imagenes
import FavIcon from "../../assets/Secundarios/favoritos.png";
import ShareIcon from "../../assets/dentro/compartir.png";
import ImagenVideoAdopcion from "../../assets/group5.png";

//importacion de componentes
import AnimalDetailInfo from "../../Components/AnimalDetailInfo/AnimalDetailInfo";
import AnimalDetailHealth from "../../Components/AnimalDetailInfo/AnimalDetailHealth";
import AnimalDetailAdoption from "../../Components/AnimalDetailInfo/AnimalDetailAdoption";
import PopupAdopcion from "../Popup/PopupAdopcion";

function PetProfile() {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);

  //Estado inicial de las pestañas
  const [selectedTab, setSelectedTab] = useState("datos");

  // Estado inicial para que el pop-up de Adocion no se muestre
  const [popupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  useEffect(() => {
    const getAnimal = async () => {
      try {
        const animalResponse = await axios.get(
          `http://localhost:3000/animals/id/${id}`
        );
        setAnimal(animalResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    getAnimal();
  }, [id]);

  if (!animal) {
    return <div>Cargando...</div>;
  }

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="animal_detail_page">
      <div className="animal_detail_image">
        <img src={animal.image} alt="Imagen del animal no disponible" />
      </div>

      <div className="animal_detail_head">
        <div>
        <h1>{animal.name}</h1>
        <h4>{animal.city}</h4>
        </div>
        <div>
        <img src={FavIcon} alt="añadir a favoritos" />
        <img src={ShareIcon} alt="compartir" />
        </div>
      </div>

      <div className="animal_detail_tabs">
        <button onClick={() => handleTabClick("datos")}>Datos</button>
        <button onClick={() => handleTabClick("salud")}>Salud</button>
        <button onClick={() => handleTabClick("adopcion")}>Adopción</button>
      </div>

      {selectedTab === "datos" && <AnimalDetailInfo />}
      {selectedTab === "salud" && <AnimalDetailHealth />}
      {selectedTab === "adopcion" && <AnimalDetailAdoption />}

      <div className="animal_detail_buttons">

        
        <button className="buttonLinks"><Link to="/animalgallery">Apadrinar </Link></button>
       
        <button className="buttonLinks" onClick={togglePopup}>Adoptar</button>
      </div>

      {popupVisible && (
        <PopupAdopcion onClose={togglePopup} />
      )}
    </div>
  );
}

export default PetProfile;
