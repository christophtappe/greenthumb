import React from 'react'
import styled from 'styled-components'

export default function Foto() {
    return (
        <FotoLayer>
                <div className="container">
                    <div className="main">
            <h3>Zeige Deinen Garten von seiner schönsten Seite:</h3>
                </div>
            
            <p>Auch im stürmischen Herbst oder im regnerischen Winter findest Du hier Deinen Platz an der Sonne.
                Vorausgesetzt, Du hast Deinen Garten verschönert! Und ein paar eindrucksvolle Vorher-Nachher-Fotos hochgeladen.
            </p>
            </div> 
                
                    <h3>Das Paradies.</h3>
                    <img src="IMG_0402.jpg" alt=""/>
               
                
            </FotoLayer>
    )
}

const FotoLayer = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 150px;
    width: 90%;
    height: 150%;
    border-radius: 5px;
    overflow-y: scroll;

.container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin: auto;
}

.main {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
}

.icon {
    grid-column-start: 2;
    grid-column-edn: 3;
    grid-row-start: 1;
    grid-row-end: 1;
}

p {
    font-size: 12px;
    color: #333333;
}
    

    img {
        width: 80%;
        border: 8px solid white;
        box-shadow: 2px 1px 15px rgba(0, 0, 0, 0.4);
        transform: rotate(3deg);
        
    }

    h3 {
        color: #6b9e52;
        text-align: center;
    }

    h4 {
        text-align: center;
    }


    `
