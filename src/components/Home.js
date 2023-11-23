import {useState} from 'react';
import { AddPokemon } from './AddPokemon';
import { AllPokemons } from './AllPokemons';
import { SinglePokemon} from "./SinglePokemon";
import { UpdatePokemon } from './UpdatePokemon';

/* Main component for our home page */
function Home(){
const[pokemon,setPokemon] = useState({}); // Empty object by default

    return(
        <div>
            <p>Welcome to our Pokemon app!</p>
        
            <SinglePokemon />
            <AddPokemon />
            <UpdatePokemon />
            <AllPokemons />
        </div>
    );
}

export default Home;