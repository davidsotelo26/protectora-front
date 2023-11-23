import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./AnimalDetailComponents.scss";

function AnimalDetailHealth() {
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
            <div className='animal_detail_line'> <h2>Vacunado/a</h2> <p>{animal.vaccinated ? 'Sí' : 'No'}</p> </div>
            <div className='animal_detail_line'> <h2>Desparasitado/a</h2> <p>{animal.dewormed ? 'Sí' : 'No'}</p> </div>
            <div className='animal_detail_line'> <h2>Esterilizado/a</h2> <p>{animal.sterilized ? 'Sí' : 'No'}</p> </div>
            <div className='animal_detail_line'> <h2>Identificado/a</h2> <p>{animal.identified ? 'Sí' : 'No'}</p> </div>
            <div className='animal_detail_line'> <h2>Microchip</h2> <p>{animal.microchip ? 'Sí' : 'No'}</p> </div>
            
            <div className='epigraph'>
                <h2 className='epigraph_title'>Tienes que saber que necesito</h2> 
                <p className='epigraph_text'>{animal.adoptionRequirements}</p>
            </div>
        </div>
    )
}

export default AnimalDetailHealth;