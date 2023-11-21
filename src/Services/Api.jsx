import React, { useState, useEffect } from 'react';
import { getAnimals } from './Animals.js';

function Api() {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        const fetchAnimal = async () => {
            const api = await getAnimals();
            setAnimals(api);
        } 
        fetchAnimal();
        animals.map((animal) => {
            console.log(animal);
            return animal;
        })
    }, [animals]);

    return (
        <div>
            <h1>Api</h1>
        </div>
    )
}

export default Api;