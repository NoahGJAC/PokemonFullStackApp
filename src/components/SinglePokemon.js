import {useState} from "react";
import { DisplayPokemon } from "./DisplayPokemon";

/** Component that lets the user get a pokemon and then displays it */
function SinglePokemon(){
    const [pokemon, setPokemon] = useState({}); //Empty object by default

    return (
    <>
    <button onClick={()=> callGetPokemon(setPokemon)}>Get Pokemon Eevee</button>
    
    <DisplayPokemon pokemon = {pokemon} heading="The found pokemon is" />
    </>
    );
}

/** Handler function to fetch a pokemon and update the state value */
async function callGetPokemon(setPokemon){
    const response = await fetch("http://localhost:1339/pokemons/eevee",
    {method: "GET"});
    const result = await response.json();
    setPokemon(result);
}

export {SinglePokemon}