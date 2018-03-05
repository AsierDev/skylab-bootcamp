import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Forms,
  Buttons,
  Navbar
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-primary justify-content-center">
          <form className="form-inline">
            <button className="btn btn-dark p-3 mx-5" type="button">Main button</button>
            <button className="btn btn-dark p-3 mx-5" type="button">Main button</button>
          </form>
        </nav>

        <main className="container-fluid">
          <div id="search" className=" row">
            <form className="row justify-content-center col-12">
              <input className="form-control form-control-lg mt-5 col-10 text-center text-uppercase font-weight-bold" type="text" placeholder="search for an user" required autofocus />
              <input className="btn-primary btn-block rounded my-4 py-3 col-6 col align-self-center button" type="submit" defaultValue="Search" />
            </form>
          </div>
        </main>
      </div>


    );
  }
}

export default App;
