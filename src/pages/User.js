import React from 'react'
import styled from 'styled-components'

export default function User() {
    return (
        <>
        <CardStyled>
            
            <img src="99-chrissie.svg" alt=""/>
            
        </CardStyled>
        </>
    )
}

const CardStyled = styled.section`
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
   
   

img {
    width: 80%;
        border: 8px solid white;
        height: 100%;
        box-shadow: 2px 1px 15px rgba(0, 0, 0, 0.4);
        transform: rotate(3deg);
}
  
    div {
  
    width: 80%;
    margin: auto;
    justify-content: center;
}

    h3 {
        color: #6b9e52;
        text-align: center;
    }

    h4 {
        text-align: center;
    }
    `

