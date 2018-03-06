import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/* import {
  Forms,
  Buttons,
  Navbar
} from 'reactstrap'; */
import { SearchForm } from './components/SearchForm';

class App extends Component {

  state = {
    results: ""
  }


  _handleResults = inputSearch => {
    // this.setState(inputSearch)
    alert(inputSearch)
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-primary justify-content-center">
          <form className="form-inline">
            <button 
            className="btn btn-dark p-3 mx-5" 
            type="button">Main button
            </button>
            <button 
            className="btn btn-dark p-3 mx-5" 
            type="button">Main button
            </button>
          </form>
        </nav>

        <main className="container-fluid">
          <SearchForm onResults={this._handleResults}/> 
        </main>
      </div>


    );
  }
}

export default App;
