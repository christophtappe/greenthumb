import React from 'react'
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


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Nav />
        <Switch>
          <Route path="/" exact component={Cards} />
          <Route path="/cards" exact component={Cards} />
          <Route path="/user" exact component={User} />
          <Route path="/greenthumb" component={Greenthumb} />
          <Route path="/form" component={Form} />
          <Route path="/fotos" component={Foto} />
        <Footer />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


const style = styled.div`

p {
  font-size: 18px;
  color: #5E918e;
  padding-left: 20px;
}
`