/**
 * Component that accepts a prop containing an array of pokemon 
 * and outputs that array as a list on the screen
 * @prop pokemons: Array of pokemons, each containing name and type
 * @returns JSX list of pokemon
 */
function ListPokemons({pokemons}){
    return (
        <div>
            <h1>All Pokemon</h1>
            <ul>
                {pokemons.map((pokemon)=>(
                    <li key={pokemon._id}>
                        {pokemon.name} with type {pokemon.type}.
                    </li>
                ))}
            </ul>
        </div>
    );
}

export {ListPokemons};