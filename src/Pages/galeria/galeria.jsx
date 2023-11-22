import "./galeria.scss";
import buscar from "../../../src/assets/dentro/buscar.png";
import filtros from "../../../src/assets/Secundarios/filtros.png";
import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/navbar/navbar"
import { getAnimals } from "../../Services/Animals";

const Galeria = () => {
    const [allAnimals, setAllAnimals] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    


    useEffect(() => {
        const getAnimalsData = async () => {
            const animals = await getAnimals();
            setAllAnimals(animals);
            setFilteredAnimals(animals);
        };
        getAnimalsData();
        console.log(getAnimalsData);
    }, []);

    const animalInput = (event) => {
        const optionFilter = event.target.value;

        if (optionFilter === "gato" || optionFilter === "perro" || optionFilter === "periquito" ||optionFilter === "agaporni" ||optionFilter === "canario") {
            setFilteredAnimals(allAnimals);
        } else {
            const filter = allAnimals.filter((animal) => animal.species === optionFilter);
            setFilteredAnimals(filter);
        }
    }

    const handleClick = (option) => {
        if (option === 'vacunados') {
            const vaccinatedAnimals = allAnimals.filter(animal => animal.vaccinated === true);
            setFilteredAnimals(vaccinatedAnimals);
        }else if(option === 'esterilizados') {
            const sterizedAnimals = allAnimals.filter(animal => animal.sterilized === true);
            setFilteredAnimals(sterizedAnimals);
        }else if(option === 'envio') {
            const sendOtherCityAnimals = allAnimals.filter(animal => animal.sendOtherCity === true);
            setFilteredAnimals(sendOtherCityAnimals);
        }else{
            const identifiedAnimals = allAnimals.filter(animal => animal.identified === true);
            setFilteredAnimals(identifiedAnimals);
        }

    };


    return (
        <div className="Galeria__container">
            <header className="header">
                <div class="inputHeader">
                    <input class="button" type="text" placeholder={"    Buscar"} onChange={animalInput} />
                    <img src={buscar} alt="" />
                </div>

                <div>
            <input img src={filtros} type="button" onClick={() => setShowOptions(!showOptions)} />
            {showOptions && (
                <div>
                <button onClick={() => handleClick('vacunados')}>Vacunados</button>
                <button onClick={() => handleClick('esterilizados')}>Esterilizados</button>
                <button onClick={() => handleClick('envio')}>Envío a otra ciudad</button>
                <button onClick={() => handleClick('Identificado')}>Identificados</button>
                </div>
            )}
        </div>

        

            </header>

            <body className="body">
                <div>
                    {filteredAnimals.map((animal) => {
                        return <div className="animalBody">
                            <img src={animal.image} alt="" width="150px" />
                            <div className="infoanimal">
                                <p className="nombreanimal">{animal.name}</p>
                                <p className="persolalidadanimal">{animal.personality}</p>
                                <p className="historianimal">{animal.history}</p>
                            </div>
                        </div>
                    })}
                </div>

            </body>
            <Navbar />
        </div>
    );
};

export default Galeria;




    



