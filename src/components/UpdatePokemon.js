import { useState } from "react";
import {UpdatePokemonForm} from "./UpdatePokemonForm.js";
import { DisplayPokemon } from "./DisplayPokemon";

/** Component that lets the user update a pokemon and then displays it. */

function UpdatePokemon(){
    const [updated,setUpdated] = useState({}); //Empty object by default

    return(
        <>
            <UpdatePokemonForm setUpdated={setUpdated} />
            <DisplayPokemon pokemon = {updated} heading="The changed pokemon is" />
        </>
    );
}

export{ UpdatePokemon};