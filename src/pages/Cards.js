import React from 'react'
import styled from 'styled-components'
import Card from './Card' 
import workData from './workData'

export default function Cards() {
  return (

    <Containerall> 
      <CardContainer>
        {workData.map(task => {
          return <Card task={task} />
        })}
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