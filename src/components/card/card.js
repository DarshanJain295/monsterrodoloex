import React from "react";
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
    <img alt="my-friend"
         src={`https://robohash.org/${props.monster.id+343}?set=set2&size=180x180`}/>   
    <h3>  {props.monster.name}  </h3>
    <p>{props.monster.email}</p>
    </div>

)

