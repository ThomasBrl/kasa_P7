import React from "react";
import { Link } from "react-router-dom";
import './Carditem.css'


function Carditem() {
    return (
        <div className="card_item">
            <Link to="/appartement">
                <div className="card_item_title">Titre de la location</div>
            </Link>
        </div>
)}

export default Carditem;