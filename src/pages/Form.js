import React, { useState } from 'react'

export default function CardForm({ onAdd }) {
    const [workData, setworkData] = useState({});

    function save (event) {
        event.preventDefault();
        onAdd({id: 8, aufgab: 'aufgabe', motivatio: 'afegwsak'})
    }

    return (
        <form> 
            <input type="text" name= {motivation}/>
            <input type="text" name={aufgabe}/>
           
            <input type="checkbox"/>
            <input type="submit" value="senden" onClick={save}/>

        </form>
    )
}