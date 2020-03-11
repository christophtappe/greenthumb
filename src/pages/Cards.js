import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card' 
import workData from './workData'
import Form from './Form'


export default function Cards() {
  const [tasks, setTasks] = useState(workData);

  function onAdd(newTask) {
    setTasks([...tasks, newTask])
  }

  return (

/*    <Containerall> */
      <CardContainer>
        {tasks.map(task => {
          return <Card task={task} />
        })}
        <Form onAdd={onAdd}/>
      </CardContainer>
 /*   </Containerall> */
  )
}

const CardContainer = styled.div`
  display: grid;
  gap: 45px;
  overflow-y: scroll;
`

/*const Containerall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`*/