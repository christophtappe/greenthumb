import React, { useState } from 'react'

const Form = ({ onAdd }) => {
    const [workData, setworkData] = useState({
        motivation: '',
        aufgabe: ''
    });

    function save (event) {
        event.preventDefault();
//        onAdd({id: 8, aufgabe: workData.aufgabe, motivation: workData.motivation})
    }

    return (
        <form> 
            <input type="text" name="motivation" value={workData.motivation} onChange={e => setworkData({...workData, motivation: e.target.value})}/>
            <input type="text" name="aufgabe" value={workData.aufgabe} onChange={e => setworkData({...workData, aufgabe: e.target.value})}/>
           
            <input type="checkbox"/>
            <input type="submit" value="senden" onClick={save}/>

        </form>
    )
}

export default Form