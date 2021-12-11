import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Pokemon.css";


const PokeList = () => {
    
const [poke, setPoke] = useState([]);
const [pokeid, setPokeid] = useState(1);


const getPokeApi = (id) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => {
        console.log(response.data)
       //console.log("nono",response.data.types)
        setPoke(response.data)
        setPokeid(id)
    })
};

useEffect(() => {
    getPokeApi(pokeid)
    console.log(poke)
},[pokeid]);

return (
    <div className='pikachu'>
        <h3 >Hello Trainer, you just captured {poke.name}</h3>
        <h4 >The N° {poke.id} in the Pokedex </h4>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`} alt={poke.name} />
        <button id='button-prev'  type="button" onClick={() => getPokeApi(pokeid - 1)}>Prev</button>
        <button id='button-next'  type="button" onClick={() => getPokeApi(pokeid + 1)} >Next</button>
    </div>
)

}

export default PokeList;

