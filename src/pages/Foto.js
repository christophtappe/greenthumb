import React from 'react'
import styled from 'styled-components'

export default function Foto() {
    
    return (
        <FotoLayer>
            <div className="container">
                    <h3>Zeige Deinen Garten von seiner schönsten Seite.</h3>
                <p className="text">Auch im stürmischen Herbst oder im regnerischen Winter findest Du hier Deinen Platz an der Sonne.
                    Vorausgesetzt, Du hast Deinen Garten verschönert! Und ein paar eindrucksvolle Vorher-Nachher-Fotos hochgeladen.
                </p>
            <h4>Nur ein <span><i>Klick</i></span> bis zum Paradies:</h4>
          
         <img className="garden" src="../Fotos/Garten_before.jpg" alt=""/>
         <img className="garden-after" src="../Fotos/Garten_after.jpg" alt=""/>
        
            </div> 
        

        </FotoLayer>
    )
}

const FotoLayer = styled.section`
    margin: auto;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 10px;
    width: 90%;

.container {
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 1fr 1fr 1fr auto;
}

.garden {   
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
    justify-content: center;
    margin-left: 10px;
    border: 5px solid white;
    box-shadow: 2px 1px 15px rgba(0, 0, 0, 0.4);
    transform: rotate(-3deg);
    }

.garden-after {   
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
    justify-content: center;
    margin-left: 10px;
    border: 5px solid white;
    box-shadow: 2px 1px 15px rgba(0, 0, 0, 0.4);
    transform: rotate(-3deg);
    }

.text {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start:2;
    grid-row-end:3;
}

p { 
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    margin-bottom: -15px;
    font-size: 12px;
    color: #333333;
}
 
h3 {    
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    color: #6b9e52;
    text-align: center;
    margin-bottom: -20px;
    }
    
h4 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
        color: #333333;
        text-align: center;
    }
    `
