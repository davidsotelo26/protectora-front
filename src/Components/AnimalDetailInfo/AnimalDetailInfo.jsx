import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./AnimalDetailComponents.scss";

function AnimalDetailInfo() {
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
            <div className='animal_detail_line'> <h2 className='epigraph_title'>Especie</h2> <p>{animal.species}</p> </div>
            <div className='animal_detail_line'> <h2 className='epigraph_title'>Fecha de nacimiento</h2> <p>{animal.birthDate}</p> </div>
            <div className='animal_detail_line'> <h2 className='epigraph_title'>Sexo</h2> <p>{animal.genre}</p> </div>
            <div className='animal_detail_line'> <h2 className='epigraph_title'>Tamaño</h2> <p>{animal.size}</p> </div>
            <div className='animal_detail_line'> <h2 className='epigraph_title'>Peso</h2> <p>{animal.weight}</p> </div>
            
            <div className='animal_detail_line'> <h2 className='epigraph_title'>Personalidad</h2>
             <p>{animal.personality}</p> </div>
            
            <div className='epigraph'>
                <h2 className='epigraph_title'>Historia</h2> 
                <p className='epigraph_text'>{animal.history}</p>
            </div>
        </div>
    )
}

export default AnimalDetailInfo;