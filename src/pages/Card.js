import React, { useState } from 'react'
import styled from 'styled-components'

export default function Card({ task }) {
  const [isGreen, setGreen] = useState(false);
  const [count, setCount] = useState(0);
  const change = () => {
    setGreen(!isGreen);
  }
  const increment = () => {
    setCount(count + 1);
  };

  

  return (
    <CardStyled >
      <div className="container">
      <div className="f1">
    <h3 className>{task.motivation}</h3>
    </div>
    <div className="f2">
    <img src={task.icon} alt=" "/>
    </div>
    <div className="f3">
    <h1 className={isGreen ? 'green' : ''}>{task.aufgabe}{count}</h1> 
    </div>
    <div className="f4">
    <button className="Button" onClick={() =>{ change(); increment();}}>Erledigt? Klicken! </button>

    </div>
    </div>
  </CardStyled >  

  /*
    <CardStyled >
      <h3>{task.motivation}</h3>
      <img src={task.icon} alt=" "/>
      <h1 className={isGreen ? 'green' : ''}>{task.aufgabe}</h1> 
      <div className="checkbox-group"></div>
      <button onClick={change}>Erledigt? Klicken! </button>
    </CardStyled >  
    */
  )
}

const CardStyled = styled.section`
  background: #e6eddf;
  margin: auto;
  margin-top: 20px;
  margin-bottom: -35px;
  width: 80%;
  height: 190;
  border-radius: 5px;
  box-shadow: 2px 1px 15px rgba(0, 0, 0, 0.4);

  .container { 
    display: grid;
    grid-template-columns: 30% 30% 40%;
    grid-template-rows: 1fr, 3fr, 2fr;
    padding: 5px 15px 15px 15px;
  }
 
  .f1 {
    background-color: ;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .f2 {
    background-color: ;
    grid-column-start:1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 4;
    
  }

  .f3 {
    background-color: ;
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .f4 {
    background-color: ;
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  p {
    font-family: 'Roboto';
    color: #5E918e;
  }

  h1 {
      margin-top: -5px;
      margin-bottom: -1px;
      color: #d53f63;
      font-size: 20px;
      font-weight: 600;
      line-height: 22px;
      padding-left: 12px;
    
  }

  h3 {
      margin-top: 10px;  
      color: #333333;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      align-self: start;
      padding-right: 15px;
  }

  .overline {
    display: flex;
    align-content: flex-start;
  }

  .green {
    color: #6b9e52;
  }

  .red {
    color: #d53f63;
  }

  img {
    width: 90%;
  }

  button {
    background-color: ;
    margin-top: 5px;
    margin-left: 12px;
    width: 130px;
    height: 20px;
    background-color: #cadad9;
    border-radius: 3px;
  
  }

`



