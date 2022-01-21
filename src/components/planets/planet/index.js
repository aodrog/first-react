import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import GrayImg from '../../shared/gray-img';
import PlanetDescription from '../../shared/planet-description';

async function getSatellitesApi(id){
    let response = await fetch(`http://localhost:3000/api/${id}.json`);
    let data = await response.json();
    return data;
}

const Planet = (props) => {

const [satellites, setSatellites] = useState([ ])

useEffect(() => {
    getSatellitesApi(props.id).then(data => {
        setSatellites(data['satellites'])
    })
}, [])

    return ( 
        <div>
            <h2>{props.name}</h2>
            <PlanetDescription description={props.description} url={props.url}/>
            <GrayImg img_url={props.img_url} gray={props.gray}/>
            <h3>Satélites</h3>
            <ul>
                {satellites.map((sat, index) =>
                <li key={index}>{sat.name}</li>)}
            </ul>
            <hr/>
        </div>
    );
}

export default Planet;