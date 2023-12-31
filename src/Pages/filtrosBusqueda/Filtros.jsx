import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getAnimals } from '../../Services/Animals';
import "./Filtros.scss";
const iconos = require.context("../../assets", true);

function FiltrosBusqueda() {
    const [searchTerm, setSearchTerm] = useState({ city: "", especies: "", edad: "", genre: "", size: "" });
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const api = await getAnimals();
                console.log(api);
                setCharacters(api);
            } catch (error) {
                console.error('Hubo un problema con la petición Fetch:', error);
            }
        }
        fetchCharacter();
    }, []);

    const handleButtonSize = (event) => {
        const value = event.target.innerText;
        setSearchTerm({ ...searchTerm, size: value })
        if (event.target.id === "f-btn__especie") {
            event.target.id = "f-btn__especie--selected"
        } else {
            event.target.id = "f-btn__especie"
        }
    };

    const handleButtonGenre = (event) => {
        const value = event.target.innerText;
        setSearchTerm({ ...searchTerm, genre: value })
        if (event.target.id === "f-btn__especie") {
            event.target.id = "f-btn__especie--selected"
        } else {
            event.target.id = "f-btn__especie"
        }
    };

    const handleButtonSpecie = (event) => {
        const value = event.target.innerText;
        setSearchTerm({ ...searchTerm, especies: value })
        // console.log(event.target.id);
        // event.target.className = "selected"
        if (event.target.id === "f-btn__especie") {
            event.target.id = "f-btn__especie--selected"
        } else {
            event.target.id = "f-btn__especie"
        }
    };

    const handleSearch = (event) => {
        const value = event.target.value;
        console.log(event);
        setSearchTerm({ ...searchTerm, [event.target.name]: value });
    };
    const handleButtonClick = () => {
        navigate('/logincover');
    };

    return (
        <div id="filter-container">
            <button className="close-btn" onClick={handleButtonClick}>
                <img src={iconos("./cerrar.png")} alt="Cerrar" />
            </button>

            <div id="filter">
                <h2 id="f-title">Filtros</h2>
                <p className="f-para">Ciudad</p>
                <select className="f-input"
                    type="text"
                    name="city"
                    onChange={handleSearch}>
                        <option value="Madrid">Madrid</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Zaragoza">Zaragoza</option>
                        <option value="Aranjuez">Aranjuez</option>
                        <option value="Sevilla">Sevilla</option>
                        <option value="Ciudad Real">Ciudad Real</option>
                        <option value="Gerona">Gerona</option>
                        <option value="Vitoria-Gasteiz">Vitoria-Gasteiz</option>
                        <option value="Oviedo">Oviedo</option>
                        <option value="Castellón">Oviedo</option>
                </select>

                <p className="f-para">Especie</p>
                <div className="f-b-filters" >
                    <button id="f-btn__especie" onClick={handleButtonSpecie}>
                        <img className="f-img" src={iconos("./Primarios/perrop.png")} alt="perro" />
                        Perro
                    </button>
                    <button id="f-btn__especie" onClick={handleButtonSpecie}>
                        <img className="f-img" src={iconos("./Primarios/cat.png")} alt="gato" />
                        Gato
                    </button>
                    <button id="f-btn__especie" onClick={handleButtonSpecie}>
                        <img className="f-img" src={iconos("./Primarios/conejo.png")} alt="conejo" />
                        Conejo
                    </button>
                    <button id="f-btn__especie" onClick={handleButtonSpecie}>
                        <img className="f-img" src={iconos("./Primarios/067Hamster.png")} alt="cobaya" />
                        Cobaya
                    </button>
                    <button id="f-btn__especie" onClick={handleButtonSpecie}>
                        <img className="f-img" src={iconos("./Primarios/CoatiCopy.png")} alt="coati" />
                        Pequeño mamifero
                    </button>
                    <button id="f-btn__especie" onClick={handleButtonSpecie}>
                        <img className="f-img" src={iconos("./Primarios/huron.png")} alt="huron" />
                        Hurón
                    </button>
                    <button id="f-btn__especie" onClick={handleButtonSpecie}>
                        <img className="f-img" src={iconos("./Primarios/fish2.png")} alt="pez" />
                        Pez
                    </button>
                    <button id="f-btn__especie" onClick={handleButtonSpecie}>
                        <img className="f-img" src={iconos("./Primarios/snake.png")} alt="reptil" />
                        Reptil
                    </button>
                    <button id="f-btn__especie" onClick={handleButtonSpecie}>
                        <img className="f-img" src={iconos("./Primarios/anfibio.png")} alt="anfibio" />
                        Anfibio
                    </button>
                    <button id="f-btn__especie" onClick={handleButtonSpecie}>
                        <img className="f-img" src={iconos("./Primarios/aracnido.png")} alt="aracnido" />
                        Arácnido o insecto
                    </button>
                    <button id="f-btn__especie" onClick={handleButtonSpecie}>
                        <img className="f-img" src={iconos("./Primarios/ave.png")} alt="ave" />
                        Ave
                    </button>
                </div>
                <p className="f-para">Edad</p>
                <select className="f-input"
                    type="text"
                    name="edad"
                    onChange={handleSearch} >
                    <option value="cachorro">Cachorro</option>
                    <option value="joven">Joven</option>
                    <option value="adulto">Adulto</option>
                </select>
                <p className="f-para">Sexo</p>
                <div className="f-b-filters">
                    <button id="f-btn__genre" onClick={handleButtonGenre}>
                        <img className="f-img" src={iconos("./Primarios/female.png")} alt="female" />
                        Hembra
                    </button>
                    <button id="f-btn__genre" onClick={handleButtonGenre}>
                        <img className="f-img" src={iconos("./Primarios/male.png")} alt="male" />
                        Macho
                    </button>
                </div>
                <p className="f-para">Tamaño</p>
                <div className="f-b-filters">
                    <button id="f-btn__size" onClick={handleButtonSize}>
                        <img className="f-img" src={iconos("./Primarios/group.png")} alt="small" />
                        Pequeño
                    </button>
                    <button id="f-btn__size" onClick={handleButtonSize}>
                        <img className="f-img" src={iconos("./Primarios/groupCopy.png")} alt="middle" />
                        Mediano
                    </button>
                    <button id="f-btn__size" onClick={handleButtonSize}>
                        <img className="f-img" src={iconos("./Primarios/groupCopy2.png")} alt="large" />
                        Grande
                    </button>
                </div>
                <div id="f-span">
                    <span onClick={characters}>Aplicar</span>
                </div>
            </div>
        </div>
    )
}


export default FiltrosBusqueda;