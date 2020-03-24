import React from 'react'
import styled from 'styled-components'
import Card from './Card'


export default function Cards({tasks, setDone}) {
 console.log(tasks)

  return (
    <>
      <CardContainer>
        {tasks.map(task => {
          return <Card key={task.id} task={task} setDone={setDone} />
        })}
      </CardContainer>
    </>
  )
}

const CardContainer = styled.div`
  display: grid;
  margin-bottom: 80px;
  gap: 45px;
  overflow-y: scroll;
`

/*const Containerall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`*/