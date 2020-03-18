import React from 'react'
import styled from 'styled-components'

export default function User() {
    return (
    <>
    <CardStyled>
        <div className="container">
            <div className="f1">
               
                <img src={'../icons/user-icon-chrissie.svg'}/>
            </div>
            <div className="f2">
                <h3>Box 2</h3>
            </div>
        </div>
        </CardStyled>
    </>

  
  )
}

const CardStyled = styled.section`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 0px;
  width: 80%;
  

.container { 
    width: 100%;
    display: grid;
    grid-template-columns: 4fr 2fr;
    grid-template-rows: 1fr 1fr;

  }
 
  .f1 {
    background-color: ;
    grid-column-start:  1;
    grid-column-end:  2;
    grid-row-start:  1;
    grid-row-end:  3;
    align-self: stretch;

  }

  .f2 {
    background-color: orange;
    grid-column-start:  2;
    grid-column-end:  3;
    grid-row-start:  1;
    grid-row-end:  3;
  }

  .f3 {
    background-color: lightblue;
    grid-column-start: span 1;
    grid-column-end: span 2;
    grid-row-start: span 2;
    grid-row-end: span 4;
  }

  .f4 {
    background-color: coral;
    grid-column-start: span 2;
    grid-column-end: span 4;
    grid-row-start: span 3;
    grid-row-end: span 4;
  }

  img {
      width: 200px;
  }
    `

