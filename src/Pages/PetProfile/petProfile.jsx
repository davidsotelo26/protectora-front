import React, { useState, useEffect } from 'react';
import "./petProfile.scss"
import { getAnimals } from '../../Services/Animals';

function PetProfile() {
    const [animal, setAnimal] = useState(null);
  
    useEffect(() => {
      getAnimals()
        .then(response => {
          setAnimal(response[0]);
        });
    }, []);
  
    if (!animal) return 'Loading...';
  
    return (
        <div>

            <div>
                <img src={animal.image} alt="Imagen del animal no disponible" />
            </div>
        
            <div>
                <h1>{animal.name}</h1>
            </div>

            <div>
                <button>Datos</button>
                <button>Salud</button>
                <button>Adopción</button>
            </div>

            <div>
                <p>{animal.species}</p>
            </div>
        
            <div>
                <button>Button 1</button>
                <button>Button 2</button>
            </div>

        </div>
    );
  }
  
  export default PetProfile;