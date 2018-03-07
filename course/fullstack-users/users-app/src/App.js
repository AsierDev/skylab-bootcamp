import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/* import {
  Forms,
  Buttons,
  Navbar
} from 'reactstrap'; */
import { Route, HashRouter } from 'react-router-dom'

import SearchForm from './components/SearchForm'
import ListUsers from './components/ListUsers'
import NavBar from './components/NavBar'

import { usersApi } from './components/api-client'



class App extends Component {

  constructor() {
    super()

    this.state = {
      users: []
    }
  }


  fetchUsers = query => {
    usersApi.searchUsers(query)
      .then(users => this.setState({
        users: users.data.data
      }))
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <div className="container-fluid">
            <Route path="/" render={() => (
              <NavBar />
            )} />
            <Route path="/" render={() => (
              <SearchForm onResults={this.fetchUsers} />
            )} />
            <Route path="/" render={() => (
              <ListUsers
                usersList={this.state.users}
              />
            )} />

          </div>
        </HashRouter>

      </div>


    );
  }
}


export default App;
