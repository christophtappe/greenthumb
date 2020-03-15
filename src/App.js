import React from 'react'
import styled from 'styled-components'
import Cards from './pages/Cards'
import Nav from './pages/Nav'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Greenthumb from './pages/Greenthumb'
import Foto from './pages/Foto'
import Form from './pages/Form'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
    
        <p>Wetter</p>
     
       
        <Nav />
        <Switch>
          <Route path="/" exact component={Cards} />
          <Route path="/cards" exact component={Cards} />
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