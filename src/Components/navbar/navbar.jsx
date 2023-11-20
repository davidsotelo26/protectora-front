import "./navbar.scss"

import botonhomeblue from "../../assets/menupie/home.png";
import botonhomered from "../../assets/menupie/homered.png";

import botonmapablue from "../../assets/menupie/mapa.png";
import botonmapared from "../../assets/menupie/mapared.png";

import botonmascotasblue from "../../assets/menupie/mascota.png";
import botonmascotasred from "../../assets/menupie/mascotared.png";

import botonperfilblue from "../../assets/perfil/chica.png";
import botonperfilred from "../../assets/perfil/chica.png";

import botonmasblue from "../../assets/menupie/mS.png";
import botonmasred from "../../assets/menupie/mS.png";

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [imageClassHome , setImageClassHome ] = useState(botonhomeblue);

    const cambioClaseHome = () => {
        setImageClassHome (botonhomered);
      };

      const [imageClassMapa , setImageClassMapa ] = useState(botonmapablue);

    const cambioClaseMapa = () => {
        setImageClassMapa (botonmapared);
      };

      const [imageClassMascotas , setImageClassMascotas ] = useState(botonmascotasblue);

    const cambioClaseMascotas = () => {
        setImageClassMascotas (botonmascotasred);
      };

      const [imageClassPerfil , setImageClassPerfil ] = useState(botonperfilblue);

    const cambioClasePerfil = () => {
        setImageClassPerfil (botonperfilred);
      };

      const [imageClassMas , setImageClassMas ] = useState(botonmasblue);

    const cambioClaseMas = () => {
        setImageClassMas (botonmasred);
      };
  

    return (
    
    <div className="navbar">

<Link to="/">
<img className="botonhomeblue" src={imageClassHome} alt="botonhomeblue"
onclick={() => cambioClaseHome} />
</Link>

<Link to="/">
<img className="botonmapablue" src={imageClassMapa} alt="botonmapablue" onclick={() => cambioClaseMapa}/>
</Link>

<Link to="/">
<img className="botonmascotasblue" src={imageClassMascotas} alt="botonmascotasblue" onclick={() => cambioClaseMascotas}/>
</Link>

<Link to="/">
<img className="botonperfilblue" src={imageClassPerfil} alt="botonperfilblue" onclick={() => cambioClasePerfil}/>
</Link>

<Link to="/">
<img className="botonmasblue" src={imageClassMas} alt="botonmasblue" onclick={() => cambioClaseMas}/>
</Link>

</div>

    )
}

export default Navbar;