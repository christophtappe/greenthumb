import React, { useState } from 'react'
import styled from 'styled-components'

export default function Card({ task }) {
  const [isGreen, setGreen] = useState(false);
  const change = () => {
    setGreen(!isGreen);
  };

  return (
    <CardStyled >
      <h3>{task.motivation}</h3>
      <img src={task.icon} alt=" "/>
      <h1 className={isGreen ? 'green' : ''}>{task.aufgabe}</h1> 
      <div className="checkbox-group"></div>
      <button onClick={change}>Erledigt? Klicken! </button>
    </CardStyled > 
  )
}



const CardStyled = styled.section`
  background: #e6eddf;
  margin: auto;
  margin-top: 20px;
  margin-bottom: -40px;
  padding-left: 25px;
  gap: 5px;
  width: 80%;
  height: 150px;
  border-radius: 5px;
  box-shadow: 2px 1px 15px rgba(0, 0, 0, 0.4);

  p {
    color: #5E918e;
    
  }

  h1 {
      color: #d53f63;
      font-size: 1.2rem;
      margin-top: 0px;
      margin-bottom: 6px;
      text-algin: center;
      
  }

  h3 {
      color: #333333;
      font-size: 0.8rem;
      margin: 20px 0px 10px 0px;
  }

  .green {
    color: #6b9e52;
  }

  .red {
    color: #d53f63;
  }


  img {
    
      float: left; 
      display: inline; 
      width: 20%;
      margin-right: 15px;
  }

  .icon {
    position: fixed;
    right: 20px;
    top: 150px;
    width: 240px;
  }
  div { 
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`



