import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Demo from './components/Demo';
import Loginsample from './components/Loginsample';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        <BrowserRouter>
        <div>
          <Header/>
          <Switch>
              <Route path='/' component={Loginsample} exact={true}/>
              {/* <Route path='/Demo' component={Demo}/> */}
              <Route component={ErrorPage}/>
            </Switch>
            <Footer/>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
