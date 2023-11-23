import "./userProfilePage.scss"

import React, { useState, useEffect } from 'react';
import axios from "axios";
import Navbar from "../../Components/navbar/navbar";
import { useParams } from "react-router-dom";

function UserProfilePage() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    
    //Estado inicial de las pestañas
    const [selectedTab, setSelectedTab] = useState('datos');

    useEffect(() => {
        const getUser = async () => {
            try {
                const userResponse = await axios.get(`http://localhost:3000/user/${id}`);
                setUser(userResponse.data);

            } catch (error) {
                console.error(error);
            }
        };
        getUser();
    }, [id]);

    return (
        <div className='userProfilecontainer'>
            

            <div className='userProfileinfo'>
                <h2 className='userProfileh2'>Nombre: </h2>
                <p className='userProfilep'>{user.name}</p>
                
                <h2 className= 'userProfileh2'>Apellido:</h2>
                <p className='userProfilep'>{user.surname}</p>

                <h2 className='userProfileh2'>Username:</h2>
                <p className='userProfilep'>{user.username}</p>

                <h2 className='userProfileh2'>Email: </h2>
                <p className='userProfilep'>{user.email}</p>
            </div>

            <Navbar/>

        </div>
    );
};

export default UserProfilePage;