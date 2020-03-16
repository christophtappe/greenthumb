import React from 'react'
import styled from 'styled-components'

export default function Foto() {
    return (
            <FotoLayer>
                
            <h2>Zeige Deinen Garten von seiner schönsten Seite:</h2>
            <p>Auch im stürmischen Herbst oder im regnerischen Winter findest Du hier Deinen Platz an der Sonne.
                Vorausgesetzt, Du hast Deinen Garten verschönert! Und ein paar eindrucksvolle Vorher-Nachher-Fotos hochgeladen.
            </p>
                
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

div {
   display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;
}

p {
    font-size: 14px;
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
