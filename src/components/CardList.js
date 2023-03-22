import React from "react";
import Card from "./Card";

const CardList = ({ drivers }) => {
    const cardsArray = drivers.map((user, i)) => {
        return (
            <Card
                key={i}
                id={drivers[i].id}
                name={drivers[i].name}
                team={drivers[i].team}
                driverNum={drivers[i].driverNum}
                tag={drivers[i].tag}
            />
        );
    }
    return(
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;