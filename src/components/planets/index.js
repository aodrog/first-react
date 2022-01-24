import React, { useEffect , useState , Fragment} from 'react';
import Planet from './planet';
import Form from './form';

async function getPlanetsApi(){
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data;
}

const Planets = () => {

const [planets, setPlanets] = useState([ ])

useEffect(() => {
    getPlanetsApi().then(data => {
        setPlanets(data['planets'])
    })
}, [])

const addPlanet = (new_planet) => {
    setPlanets([...planets, new_planet]);
}

return ( 
    <Fragment>
        <h1>Planets List</h1>
        <Form addPlanet={addPlanet}/>
        <hr/>
        {planets.map((planets, index) =>
            <Planet
            name={planets.name}
            description={planets.description}
            img_url={planets.img_url}
            url={planets.url}
            id={planets.id}
            key={index}
            />
        )}
    </Fragment>
);

}

export default Planets;