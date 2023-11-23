import { useRef } from "react";

/**
 * Component that lets the user enter in the name and typr of a pokemon 
 * and then calls the backend to add it.
 * Side-Effect: Passes the added pokemon using setAdded
 * Returns JSX containing the form.
 *  
 */
function AddPokemonForm(props){
    const nameRef = useRef(null);
    const typeRef = useRef(null);

    /** Handler method that makes the fetch request based on the form values */
    const handleSubmit = async (event) =>{
        event.preventDefault(); //prevent page reload

        /** Options that indicate a post request pasing in JSON body */
        const requestOptions = {
            method: "POST",
            body: JSON.stringify({ 
                name: nameRef.current.value,
                type: typeRef.current.value,
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8",
            },
        };
        const response = await fetch("http://localhost:1339/pokemons", requestOptions);
        const result = await response.json();
        props.setAdded(result);
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name..." ref={nameRef} required />

            <label htmlFor="type">Type</label>
            <input type="text" placeholder="Type..." ref={typeRef} required />
            <button type="submit">Add Pokemon</button>
        </form>
    );
}

export {AddPokemonForm};