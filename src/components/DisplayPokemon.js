/**
 * Component to display a given pokemon
 * @prop {object} pokemon : Pokemon to display containing name and type fields.
 * @prop {string} heading: String describing the pokemon to display
 */
function DisplayPokemon(props){
    return(
        <>
        {/* Display the pokemon */}
        <h1>{props.heading}</h1>
        <h2>Name: {props.pokemon.name}</h2>
        <h2>Type: {props.pokemon.type}</h2>
        </>
    );
}

export {DisplayPokemon};