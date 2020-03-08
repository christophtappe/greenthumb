import React from 'react'
import styled from 'styled-components'
import Card from './Card' 
import wasserIcon from '../icons/012-wasser.svg'


export default function Cards() {



  return (
    <Containerall> 
    <CardContainer>
      <Card aufgabe=" Bitte Blumen gießen" motivation="Es könnte heute warm werden:" src={wasserIcon} als="" />
      <Card aufgabe="Kompost lockern" motivation="Die Erdbeeren freuen sich schon:"/>
      <Card aufgabe="Heute Rasen mähen" motivation="Lust auf ein Picknick?"/>
      <Card aufgabe="Hecke schneiden" motivation="Muß auch mal sein:" />
      <Card aufgabe="Zaun streichen" motivation="Was sollen denn die Nachbarn denken:" />
   
    </CardContainer>
    </Containerall>
  )
}

const CardContainer = styled.div`
  display: grid;
  gap: 45px;
  overflow-y: scroll;
`

const Containerall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;



`