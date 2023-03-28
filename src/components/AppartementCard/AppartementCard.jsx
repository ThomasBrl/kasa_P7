import React from "react";
import './AppartementCard.css'
import Carditem from "../Carditem/Carditem";

function Card() {
    return <div className="grid">
        <Carditem/>
        <Carditem/>
        <Carditem/>
        <Carditem/>
        <Carditem/>
        <Carditem/>
    </div>;
}

export default Card;