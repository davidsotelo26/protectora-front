import "./galeria.scss";
import filtros from "../../../src/assets/Secundarios/filtros.png";
import React, { useState, useEffect } from 'react';

const Galeria = () => {
    const [filtro, setFiltro] = useState('');
    const [speciesFilter, setSpeciesFilter] = useState('');
    const [birthDateFilter, setBirthDateFilter] = useState('');
    const [sizeFilter, setSizeFilter] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [animalTypes, setAnimalTypes] = useState([]);

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

    useEffect(() => {
        getAnimals();
    }, []);

    async function getAnimals() {
        const response = await fetch('https://api.example.com/animals');
        const data = await response.json();
        return data;
    }

    const handleClick = (opcion) => {
        setFiltro(opcion);
        if (opcion === 'opcion1') {
            setAnimalTypes(['Perro', 'Gato', 'Otro']);
        } else {
            setAnimalTypes([]);
        }
    };

    const handleSpeciesFilter = (event) => {
        setSpeciesFilter(event.target.value);
    };

    const handleBirthDateFilter = (event) => {
        setBirthDateFilter(event.target.value);
    };

    const handleSizeFilter = (event) => {
        setSizeFilter(event.target.value);
    };

    const handleToggleFilters = () => {
        setShowFilters(!showFilters);
    };

    return (
<div className="filters__container">
        <button><img className="filtrado" scr={filtros} alt=""/></button>
        <div>
          <select name="city" id="city" onChange={handleSelect}>
                <option value="all">Categprias</option>
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
    

        
        // <div>
        //     <button onClick={handleToggleFilters}>
        //         <img src={filtros} alt="Buscar" />
        //     </button>
        //     {showFilters && (
        //         <div>
        //             <select value={filtro} onChange={(e) => handleClick(e.target.value)}>
        //                 <option value="opcion1">Clase de animal</option>
        //                 <option value="opcion2">Edad</option>
        //                 <option value="opcion3">Tamaño</option>
        //             </select>
        //             {filtro === 'opcion1' && (
        //                 <div>
        //                     {animalTypes.map((type) => (
        //                         <button key={type} onClick={() => handleSpeciesFilter(type)}>
        //                             {type}
        //                         </button>
        //                     ))}
        //                 </div>
        //             )}
        //             <input
        //                 type="text"
        //                 value={birthDateFilter}
        //                 onChange={handleBirthDateFilter}
        //                 placeholder="Filtrar por fecha de nacimiento"
        //             />
        //             <input
        //                 type="text"
        //                 value={sizeFilter}
        //                 onChange={handleSizeFilter}
        //                 placeholder="Filtrar por tamaño"
        //             />
        //         </div>
        //     )}
        //     <div>
        //         {filteredAnimals.map((animal) => (
        //             <div key={animal.id}>
        //                 <img src={animal.image} alt="" width="150px" />
        //                 <p>{animal.name}</p>
        //                 <p>{animal.birthdate}</p>
        //                 <p>{animal.personality}</p>
        //                 <p>{animal.history}</p>
        //             </div>
        //         ))}
        //     </div>
        // </div>
    );
};

export default Galeria;




    



