import React, { useState } from 'react'
import styled from 'styled-components'


const Form = ({ onAdd }) => {
    const [formValue, setFormValue] = useState({
        motivation: '',
        aufgabe: ''
    });

    function save (event) {
        event.preventDefault();
        const newTask = {id: Math.floor(Math.random()* 300000), motivation: formValue.motivation, aufgabe: formValue.aufgabe, }
        onAdd(newTask)
    }

    return (
        <>
        <form>
        <FormStyled>
        <h1>Schreib' Deinem Garten <br/>ein paar nette Karten:</h1>
            <p>Motivation:</p>
            <input className="field" type="text" name="motivation"
                onChange={e => setFormValue({...formValue, motivation: e.target.value})}/>
            <p>Aufgabe:</p>
            <input className="field" type="text" name="aufgabe"
                onChange={e => setFormValue({...formValue, aufgabe: e.target.value})}/>    
            <p>Bitte passendes Icon auswählen:</p>
            <div>
            <img src='./icons/06-carrot.svg' alt=" "/>
            <input type="checkbox"/>
            <img src='./icons/02-schaufel.svg' alt=" "/>
            <input type="checkbox"/>
            <img src='./icons/05-seed.svg' alt=" "/>
            <input type="checkbox"/>
            <img src='./icons/04-schere.svg' alt=" "/>
            <input type="checkbox"/>
            
            </div>
            <h4>Alles klar? Dann:</h4>
            <input className="button" type="submit" value="senden" onClick={save}/>
            <img src="./icons/99-chrissie.svg" alt=""/>
        </FormStyled> 
        </form>
        </>
    )
}

export default Form


const FormStyled = styled.section`
    background: #e6eddf;
    margin: auto;
    width: 80%;
    height: 100vh;
    margin: auto;
    margin-top: 20px;
    margin-bottom: -40px;
    padding-left: 25px;

.field {
    width: 80%;
}

button {
    width: 30%;
}

h1 {
    color: #6b9e52;
    font-size: 1.2rem;
    padding-top: 20px;
    margin-top: 20px;
    margin-bottom: 15px;
    text-algin: center;   
    }
  
h3 {
    color: #6b9e52;
    font-size: 0.8rem;
  }

h4 {
    color: #6b9e52;
    font-size: 0.8rem;
  }

.green {
    color: #6b9e52;
  }

.red {
    color: #d53f63;
  }

p {
      font-size: 12px;
      margin-bottom: -5px;
  }

img {
       
      width: 18%;
      margin-right: 0px;
      margin-top: 10px;
  }
  `