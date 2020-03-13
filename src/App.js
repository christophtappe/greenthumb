import React from 'react'
import Cards from './pages/Cards'
import Nav from './pages/Nav'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Greenthumb from './pages/Greenthumb'
import Form from './pages/Form'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Nav />
        <Switch>
        <Route path="/cards" exact component={Cards} />
        <Route path="/greenthumb" component={Greenthumb} />
        <Route path="/form" component={Form} />
        <Route path="/fotos" component={Cards} />
        <Footer />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
