import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getAnimals } from '../../Services/Animals';
import "./Filtros.scss";
const iconos = require.context("../../assets", true);

function Filtros() {
    const [searchTerm, setSearchTerm] = useState({ city: "", especies: "", edad: "", genre: "", size: "" });
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
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

    useEffect(() => {
        const results = characters.filter(character =>
            character.city.toLowerCase().includes(searchTerm.city.toLowerCase()) &&
            character.especie.toLowerCase().includes(searchTerm.especies.toLowerCase()) &&
            character.edad.toLowerCase().includes(searchTerm.edad.toLowerCase()) &&
            character.genre.toLowerCase().includes(searchTerm.genre.toLowerCase()) &&
            character.size.toLowerCase().includes(searchTerm.size.toLowerCase())
        );
        setFilteredCharacters(results);
    }, [characters, searchTerm]);

    const handleButtonSize = (value) => {
        setSearchTerm({ ...searchTerm, size: value })
    };

    const handleButtonGenre = (value) => {
        setSearchTerm({ ...searchTerm, genre: value })
    };

    const handleButtonSpecie = (value) => {
        setSearchTerm({ ...searchTerm, especies: value })
    };

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm({ ...searchTerm, [event.target.name]: value });
    };
    const handleButtonClick = () => {
        navigate('/logincover');
    }

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

                </select>

                <p className="f-para">Especie</p>
                <div className="f-b-filters" >
                    <button id="f-btn__especie" onClick={() => handleButtonSpecie("Perro")}>
                        <img className="f-img" src={iconos("./Primarios/perrop.png")} alt="perro" />
                        Perro
                    </button>
                    <button id="f-btn__especie" onClick={() => handleButtonSpecie("Gato")}>
                        <img className="f-img" src={iconos("./Primarios/cat.png")} alt="gato" />
                        Gato
                    </button>
                    <button id="f-btn__especie" onClick={() => handleButtonSpecie("Conejo")}>
                        <img className="f-img" src={iconos("./Primarios/conejo.png")} alt="conejo" />
                        Conejo
                    </button>
                    <button id="f-btn__especie" onClick={() => handleButtonSpecie("Cobaya")}>
                        <img className="f-img" src={iconos("./Primarios/067Hamster.png")} alt="cobaya" />
                        Cobaya
                    </button>
                    <button id="f-btn__especie" onClick={() => handleButtonSpecie("Pequeño mamifero")}>
                        <img className="f-img" src={iconos("./Primarios/CoatiCopy.png")} alt="coati" />
                        Pequeño mamifero
                    </button>
                    <button id="f-btn__especie" onClick={() => handleButtonSpecie("Huron")}>
                        <img className="f-img" src={iconos("./Primarios/huron.png")} alt="huron" />
                        Hurón
                    </button>
                    <button id="f-btn__especie" onClick={() => handleButtonSpecie("Pez")}>
                        <img className="f-img" src={iconos("./Primarios/fish2.png")} alt="pez" />
                        Pez
                    </button>
                    <button id="f-btn__especie" onClick={() => handleButtonSpecie("Reptil")}>
                        <img className="f-img" src={iconos("./Primarios/snake.png")} alt="reptil" />
                        Reptil
                    </button>
                    <button id="f-btn__especie" onClick={() => handleButtonSpecie("Anfibio")}>
                        <img className="f-img" src={iconos("./Primarios/anfibio.png")} alt="anfibio" />
                        Anfibio
                    </button>
                    <button id="f-btn__especie" onClick={() => handleButtonSpecie("Aracnido o insecto")}>
                        <img className="f-img" src={iconos("./Primarios/aracnido.png")} alt="aracnido" />
                        Arácnido o insecto
                    </button>
                    <button id="f-btn__especie" onClick={() => handleButtonSpecie("Ave")}>
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
                    <button id="f-btn__genre" onClick={() => handleButtonGenre("Female")}>
                        <img className="f-img" src={iconos("./Primarios/female.png")} alt="female" />
                        Hembra
                    </button>
                    <button id="f-btn__genre" onClick={() => handleButtonGenre("Male")}>
                        <img className="f-img" src={iconos("./Primarios/male.png")} alt="male" />
                        Macho
                    </button>
                </div>
                <p className="f-para">Tamaño</p>
                <div className="f-b-filters">
                    <button id="f-btn__size" onClick={() => handleButtonSize("S")}>
                        <img className="f-img" src={iconos("./Primarios/group.png")} alt="small" />
                        Pequeño
                    </button>
                    <button id="f-btn__size" onClick={() => handleButtonSize("M")}>
                        <img className="f-img" src={iconos("./Primarios/groupCopy.png")} alt="middle" />
                        Mediano
                    </button>
                    <button id="f-btn__size" onClick={() => handleButtonSize("L")}>
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

export default Filtros