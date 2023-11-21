import React, { useState } from "react";
import "./Filtros.scss";
const iconos = require.context("../../assets", true);

function Filtros({ onSearch, t }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value);
    };
    return (
        <div id="filter">
            <h2 id="f-title">Filtros</h2>
            <p className="f-para">Ciudad</p>
                <input className="f-input" 
                type="text"
                value={searchTerm}
                onChange={handleSearch} />
            <p className="f-para">Especie</p>
            <img className="f-img" src={iconos("./Primarios/perrop.png")} alt="" />
            <img className="f-img" src={iconos("./Primarios/cat.png")} alt="" />
            <img className="f-img" src={iconos("./Primarios/conejo.png")} alt="" />
            <img className="f-img" src={iconos("./Primarios/067Hamster.png")} alt="" />
            <img className="f-img" src={iconos("./Primarios/CoatiCopy.png")} alt="" />
            <img className="f-img" src={iconos("./Primarios/huron.png")} alt="" />
            <img className="f-img" src={iconos("./Primarios/fish2.png")} alt="" />
            <img className="f-img" src={iconos("./Primarios/snake.png")} alt="" />
            <img className="f-img" src={iconos("./Primarios/anfibio.png")} alt="" />
            <img className="f-img" src={iconos("./Primarios/aracnido.png")} alt="" />
            <img className="f-img" src={iconos("./Primarios/ave.png")} alt="" />
            <p className="f-para">Edad</p>
            <input className="f-input" 
                type="text"
                value={searchTerm}
                onChange={handleSearch}/>
            <p className="f-para">Sexo</p>
            <img className="f-img" src={iconos("./Primarios/female.png")} alt="" />
            <img className="f-img" src={iconos("./Primarios/male.png")} alt="" />
            <p className="f-para">Tamaño</p>
            <img className="f-img" src={iconos("./Primarios/group.png")} alt="" />
            <img className="f-img" src={iconos("./Primarios/groupCopy.png")} alt="" />
            <img className="f-img" src={iconos("./Primarios/groupCopy2.png")} alt="" />
        </div>
    )
}

export default Filtros