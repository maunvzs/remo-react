import React from 'react';
import './App.css';

// Router
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Header from './components/Header';
import Container from './components/Container';

import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>  
          <React.Fragment>        
            <Header />
            <Container />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
