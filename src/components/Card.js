import React from "react";

const Card = ({name, team, driverNum, tag, id}) => {
    return(
        <div>
            <img alt='drivers' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <h3>{team}</h3>
                <p>{driverNum}</p>
                <p>{tag}</p>
            </div>
        </div>
    );
}

export default Card;
