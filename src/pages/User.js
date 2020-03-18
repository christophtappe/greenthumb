import React from 'react'
import styled from 'styled-components'

export default function User() {
    return (
    <>
        <div className='container'>
            <div className="f1">
                <h3>Box 1</h3>
            </div>
            <div className="f2">
                <h3>Box 2</h3>
            </div>
            <div className="f3">
                <h3>Box 3</h3>
            </div>
            <div className="f4">
                <h3>Box 4</h3>
            </div>
        </div>
    </>

  
  )
}

const CardStyled = styled.section`
  background: #e6eddf;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 0px;
  width: 80%;

.container { 
    width: 70vh;
    height: 50vh;
    display: grid;
    grid-template-columns: 40% 20% 40%;
    grid-template-rows: 35% 30% 35%;

  }
 
  .f1 {
    background-color: yellow;
    grid-column-start: span 1;
    grid-column-end: span 3;
    grid-row-start: span 1;
    grid-row-end: span 2;
  }

  .f2 {
    background-color: orange;
    grid-column-start: span 3;
    grid-column-end: span 4;
    grid-row-start: span 1;
    grid-row-end: span 3;
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
    `

