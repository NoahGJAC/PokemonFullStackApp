import { useState } from "react";
import {AddPokemonForm} from "./AddPokemonForm";
import { DisplayPokemon } from "./DisplayPokemon";

/** Component that lets the user get a pokemon and then displays it */
function AddPokemon(){
    const [added,setAdded] = useState({}); //Empty object by default

    return (
        <>
            <AddPokemonForm setAdded = {setAdded} />
            <DisplayPokemon pokemon = {added} heading="The added pokemon is" />
        </>
    );
}

export {AddPokemon};