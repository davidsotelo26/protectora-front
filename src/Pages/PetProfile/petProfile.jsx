import React, { useState, useEffect } from 'react';
import "./petProfile.scss"
import { getAnimals } from '../../Services/Animals';
import { useParams } from 'react-router-dom';
import axios from 'axios';

//importacion de imagenes
import FavIcon from '../../assets/Secundarios/favoritos.png';
import ShareIcon from  '../../assets/dentro/compartir.png';

//importacion de componentes
import AnimalDetailInfo from '../../Components/AnimalDetailInfo/AnimalDetailInfo';
import AnimalDetailHealth from '../../Components/AnimalDetailInfo/AnimalDetailHealth';
import AnimalDetailAdoption from '../../Components/AnimalDetailInfo/AnimalDetailAdoption';

function PetProfile() {
    const { id } = useParams();
    const [animal, setAnimal] = useState(null);
    
    //Estado inicial de las pestañas
    const [selectedTab, setSelectedTab] = useState('datos');

    useEffect(() => {
        const getAnimal = async () => {
            try {
                const animalResponse = await axios.get(`http://localhost:3000/animals/id/${id}`);
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
        <div className='animal_detail_page'>

            <div className='animal_detail_image'>
                <img src={animal.image} alt="Imagen del animal no disponible" />
            </div>

            <div className='animal_detail_head'>
                <h1>{animal.name}</h1>
                <h2>{animal.city}</h2>
                <img src={FavIcon} alt="añadir a favoritos" />
                <img src={ShareIcon} alt="compartir" />
            </div>

            <div className='animal_detail_tabs'>
                <button onClick={() => handleTabClick('datos')}>Datos</button>
                <button onClick={() => handleTabClick('salud')}>Salud</button>
                <button onClick={() => handleTabClick('adopcion')}>Adopción</button>
            </div>

            {selectedTab === 'datos' && <AnimalDetailInfo />}
            {selectedTab === 'salud' && <AnimalDetailHealth />}
            {selectedTab === 'adopcion' && <AnimalDetailAdoption />}

            <div className='animal_detail_buttons'>
                <button>Button 1</button>
                <button>Button 2</button>
            </div>

        </div>
    );
}

export default PetProfile;
