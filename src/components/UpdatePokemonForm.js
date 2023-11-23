import { useState } from "react";

/**
 * Component that lets the user enter in the old and new name and type of a pokemon
 * and then calls the backend to change it. Uses a controlled form.
 * 
 * @props {function} setUpdated: To pass back the changed pokemon by side-effect
 * @returns JSX containing the form.
 */
function UpdatePokemonForm(props){
    const[oldName,setOldName]=useState(null);
    const[oldType,setOldType]=useState(null);
    const[newName,setNewName]=useState(null);
    const[newType,setNewType]=useState(null);

    /**Handler method that makes the fetch request based on the form values */
    const handleSubmit = async (event) => {
        event.preventDefault(); //Prevent page reload

        /**Options that indicate a post request passing in JSON body */
        const requestOptions = {
            method: "PUT",
            body: JSON.stringify({
                oldname: oldName,
                oldtype: oldType,
                newname: newName,
                newtype:newType,
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8",
            },
        };
        const response = await fetch("http://localhost:1339/pokemons",requestOptions);
        const result = await response.json();
        props.setUpdated(result);
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="oldName">Current Name</label>
            <input type="text" placeholder="Current Name..." onChange={(e)=> setOldName(e.target.value)}/>
            <label htmlFor="oldType">Current Type</label>
            <input type="text" placeholder="Current Type..." onChange={(e)=> setOldType(e.target.value)}/>
            <label htmlFor="newName">New Name</label>
            <input type="text" placeholder="New Name..." onChange={(e)=> setNewName(e.target.value)}/>
            <label htmlFor="newType">New Type</label>
            <input type="text" placeholder="New Type..." onChange={(e)=> setNewType(e.target.value)}/>
            {oldName && newName && newType && <button type="submit">Update Pokemon</button>}
        </form>
    )

}

export {UpdatePokemonForm};