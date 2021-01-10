import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Project from './Project';
import Footer from './Footer';
import Photo from './Photo';
import Home from '../containers/Home'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Project" component={Project} />
            <Route path="/:img_id" component={Photo} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
