import React from 'react'
import styled from 'styled-components'

export default function User() {
    return (
    <>
    <CardStyled>
        <div className="container">
            <div className="f1">
                <img src={'../icons/user-icon-chrissie.svg'} alt=" "/>
            </div>
            <div className="f2">
                <h3>Der Hobbygärtner</h3>
                <p>Name: <b>Christoph</b></p>
                <p>Gartengröße: <b>960 qm</b></p>
                <p>Lieblingsblume: <b>Cosmea</b></p>  
                <p className='size'>(latein.: Cosmos bipinnatus; dt: Schmuckkörbchen)</p>
                <p>Lieblingsobst: <b>Apfel</b></p>
                <p>Lieblingspflanze: <b>Funkie 'Big Daddy'</b></p>
                <p className='size'>(latein.: Hosta sieboldiana, Blaublatt-Funkie)</p>
            </div>
        </div>
        <h3 className="headline">Du hast bisher -?- Aufgaben erfüllt.</h3>
        </CardStyled>
    </>

  
  )
}

const CardStyled = styled.section`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 0px;
  width: 100%;
  

.container { 
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

  }
 
  .f1 {
    background-color: ;
    grid-column-start:  1;
    grid-column-end:  2;
    grid-row-start:  1;
    grid-row-end:  3;
    margin: 0;
    

  }
  .f2 {
    background-color: ;
    grid-column-start:  2;
    grid-column-end:  3;
    grid-row-start:  1;
    grid-row-end:  3;
    margin-right: 10px;
    margin-left: -8px;
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
      height: 190px;
      margin-top: 15px;
  }

h3 {
    color: #6b9e52;
    font-size: 0.8rem;
}
    
.headline { 
  text-align: center;
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
    font-family: 'Roboto';
    font-size: 12px;
    line-height: 14px;
  }

  .size {
    font-family: 'Roboto';
    font-style: italic;
    font-size: 10px;
    line-height: 9px;
    margin-top: -5px;
  }
    `

