import React, { useState } from 'react'
import Cards from './pages/Cards'
import Nav from './pages/Nav'
import Header from './components/Header'
import Greenthumb from './pages/Greenthumb'
import Form from './pages/Form'
import User from './pages/User'
import Foto from './pages/Foto'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import workData from './pages/workData'


export default function App() {
  const [tasks, setTasks] = useState(workData);

  function setTaskDone(id) {
    const index  = tasks.findIndex(task => task.id === id)
    const taskDone = tasks[index]
    setTasks([...tasks.slice(0, index), {...taskDone, done: !taskDone.done }, ...tasks.slice(index +1)])
  }
  function addTask(newTask) {
    setTasks([newTask, ...tasks])
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
                <Route path="/form">
                <Form 
                  tasks={tasks}
                  onAdd={addTask}
                />
              </Route>
              <Route path="/User">
                <User 
                />
              </Route>
              <Route path="/greenthumb">
                <Greenthumb
                  task={Greenthumb} 
                  taskCount={tasks.length}
                  taskDoneCount={tasks.filter(task => task.done ).length}
                />
                </Route>
                <Route path="/Foto">
                <Foto 
                />
                </Route>
            </Switch>
            <Nav />
      </div>
    </Router>
  );
}




