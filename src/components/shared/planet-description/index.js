import React, { Fragment } from 'react';

const PlanetDescription = (props) => {
    if(props.url){
        return ( 
            <Fragment>
                <p>{props.description}</p>
                <p><a href={props.url} target="_blank">Clique aqui e Saiba mais!</a></p>
            </Fragment>
        );
    } else {
        return ( 
            <Fragment>
                <p><u>{props.description}</u></p>
            </Fragment>
        );
    }

}

export default PlanetDescription;
