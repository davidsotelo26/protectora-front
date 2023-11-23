import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./AnimalDetailComponents.scss";

function AnimalDetailAdoption() {
    const { id } = useParams();
    const [animal, setAnimal] = useState(null); 

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

    return (
        <div className='animal_detail_component_container'>

            <div className='epigraph'>
                <h2 className='epigraph_title'>Requisitos de adopción</h2> 
                <p className='epigraph_text'>{animal.adoptionRequirements}</p>
            </div>

            <div className='epigraph'>
                <h2 className='epigraph_title'>Tasa de adopción</h2> 
                <p className='epigraph_text'>{animal.rate} €</p>
            </div>
            
            <div className='epigraph'>
                <h2 className='epigraph_title'>¿Se envía a otra ciudad?</h2> 
                <p className='epigraph_text'>{animal.sendOtherCity ? 'Se envía a otra ciudad' : 'No se envía a otra ciudad'}</p>
            </div>

        </div>
    )
}

export default AnimalDetailAdoption;