import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Cards from './pages/Cards'
import Nav from './pages/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import Greenthumb from './pages/Greenthumb'
import Foto from './pages/Foto'
import Form from './pages/Form'
import User from './pages/User'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import workData from './pages/workData'


export default function App() {
  const [tasks, setTasks] = useState(workData);



  function setTaskDone (id) {
    const index  = tasks.findIndex(task => task.id === id)
    const taskDone = tasks[index]
    setTasks([...tasks.slice(0, index), {...taskDone, done: !taskDone.done }, ...tasks.slice(index)])
  }
  function addTask (newTask) {
    setTasks([...tasks, newTask])
  }

  function countDoneTasks(){
   const counter = tasks.filter(task => task.done ).length
   return counter
  } 


  return (
    <Router>
      <div className="App">
        <Header />
         
            <Switch>
              <Route exact path="/">
                <Cards
                  tasks={tasks}
                  setDone= {setTaskDone}
                />
                
                </Route>
              
              <Route path="/greenthumb">
                <Greenthumb
                  task={Greenthumb} 
                  taskCount={tasks.length}
                  taskDoneCount={tasks.filter(task => task.done ).length}
                  
                />
                </Route>
              <Route path="/form">
                <Form 
                  tasks={tasks}
                  onAdd={addTask}
                />
              </Route>
            </Switch>
            <Nav />
      </div>
    </Router>
  );
}




const style = styled.div`

p {
  font-size: 18px;
  color: #5E918e;
  padding-left: 20px;
}
`