import { useState } from "react";
import { ListPokemons } from "./ListPokemons.js";

/**
 * Component that lets the user get all the pokemon and then displays them as a list.
 */
function AllPokemons(){
    const [pokemons, setPokemons] = useState([]); //Empty array by default

    /** Handler function to fetch all pokemons and update the state value */
    const callGetAllPokemons = async () => {
        const response = await fetch("http://localhost:1339/pokemons", {method: "GET"});
        const result = await response.json();
        setPokemons(result);
    };

    return (
        <>
            <button onClick={callGetAllPokemons}>Get All Pokemons</button>
            <ListPokemons pokemons={pokemons}/>
        </>
    );
}

export {AllPokemons};