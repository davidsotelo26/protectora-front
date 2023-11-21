import "./filters.scss";
import mS from "../../../src/assets/dentro/mS.png";
import perro from "../../../src/assets/Primarios/perrop.png";
import ave from "../../../src/assets/Primarios/ave.png";
import ovalC from "../../../src/assets/ovalCopy.png";
import oval from "../../../src/assets/oval.png";
import linea from "../../../src/assets/linea.png";
import arrow from "../../../src/assets/dentro/arrow.png";
import filtros from "../../../src/assets/Secundarios/filtros.png";
import buscar from "../../../src/assets/dentro/buscar.png";
import React, { useState, useEffect } from "react";
import Navbar from "../../Components/navbar/navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const Filters = () => {
  const [search, setSearch] = useState("");
  const [animals, setAnimals] = useState(["Apolo", "Kiko", "Dali"]);

  const filterAnimals = () => {
    return animals.filter((animal) =>
      animal.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  const [isButtonPressed, setIsButtonPressed] = useState(false);

  return (
    <>
      {" "}
      <div className="filters__container">
        <div class="div_button">
          <input
            class="input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar"
          />

          {filterAnimals().map((animal) => (
            <div key={animal.id}>{animal.name}</div>
          ))}
        </div>
      </div>
      {/* <div className="points">
         <div><img className="pto"src={ovalC} alt="" /></div>
          <div><img className="pto"src={oval} alt="" /></div>
          <div><img className="pto"src={ovalC} alt="" /></div>
      </div>

      <div className="line"><img className="d_line" src={linea} alt="" /></div>
  
      <div className="stateAdoption">            
          
          <button className="stAd">
              <p className="p_stAd">Estado de la adopción</p>                
              <img className="img_stAd"src={arrow} alt="" />
          </button>
      </div>

      <div className="buscaAnimals">
          <p className="p_BusAnim">Animales en adopción</p>
          <img className="img_BusAnim"src={filtros} alt="" />
      </div> */}
      <Navbar></Navbar>
    </>
  );
};

export default Filters;
