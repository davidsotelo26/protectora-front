import "./filters.scss";
import mS from "../../../src/assets/dentro/mS.png";
import buscar from "../../../src/assets/dentro/buscar.png";
import perro from "../../../src/assets/Primarios/perrop.png";
import filtros from "../../../src/assets/Secundarios/filtros.png";
import ave from "../../../src/assets/Primarios/ave.png";
import ovalC from "../../../src/assets/ovalCopy.png";
import oval from "../../../src/assets/oval.png";
import linea from "../../../src/assets/linea.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAnimals } from "../../Services/Animals";
import Navbar from "../../Components/navbar/navbar"

const Filters = () => {

    const [allAnimals, setAllAnimals] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState([]);

  useEffect(() => {
    const getAnimalsData = async () => {
      const animals = await getAnimals();
      setAllAnimals(animals);
      setFilteredAnimals(animals);
    };
    getAnimalsData();
  }, []);

  const handleSelect = (e) => {
    const optionFilter = e.target.value;
 
    if (optionFilter === "all") {
        setFilteredAnimals(allAnimals);
        return;
    }
    const filter = allAnimals.filter((animal) => animal.city === optionFilter);

    setFilteredAnimals(filter);
  }

  return (
    <div className="filters__container">
      <div class="div_button">
        <input class="button" type="text" placeholder="Buscar"></input>
        <img src={buscar} alt=""></img>
        <div class="masc">
          <h2 class="texto">Mis mascotas</h2>
          <img src={mS} class="mas" alt=""></img>
        </div>
        <p class="div_p">Accede al perfil de tus mascotas</p>
      </div>

      <div className="btns">
        <button className="btn">
          <img className="img" src={perro} alt="" />
          <p className="pButton">Apolo</p>
        </button>
        <button className="btn">
          <img className="img" src={ave} alt="" />
          <p className="pButton">Kiko</p>
        </button>
        <button className="btn">
          <img className="img" src={ave} alt="" />
          <p className="pButton">Dali</p>
        </button>
      </div>

      <div className="points">
        <div>
          <img className="pto" src={ovalC} alt="" />
        </div>
        <div>
          <img className="pto" src={oval} alt="" />
        </div>
        <div>
          <img className="pto" src={ovalC} alt="" />
        </div>
      </div>

      <div className="line">
        <img className="d_line" src={linea} alt="" />
      </div>
    <button><img className="filtrado" scr={filtros} alt=""/></button>
    <div>
      <select name="city" id="city" onChange={handleSelect}>
            <option value="all">All</option>
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Aranjuez">Aranjuez</option>
            <option value="Oviedo">Oviedo</option>
        </select>
    </div>
    <div>
        {filteredAnimals.map((animal) =>{
            return <div>
                <img src={animal.image} alt=""  width="150px"/>
                <p>{animal.name}</p>
                <p>City: {animal.city}</p>
            </div>
        } )
            }
    </div>

    </div>
    
  );
}

export default Filters;
