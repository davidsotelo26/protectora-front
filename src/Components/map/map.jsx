import React from "react";
import "./map.scss"

const Map = () => {
    return (
        <div className="MapContainer">
            <iframe src="https://www.google.com/maps/d/embed?mid=1gxSDT__iqrz2zIVTHuybzJ72QTL4eSY&ehbc=2E312F&noprof=1" width={"100%"} height={"530pt"}></iframe>
        </div>
    );
};

export default Map;