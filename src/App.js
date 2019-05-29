import React from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import Search from './Search'
import Dashboard from './Dashboard';

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
          <Route exact path='/search' render={() => (
            <Search />
          )}
          />
          <Route exact path='/' render={() => (
            <Dashboard />
          )} />
      </div>
    )
  }
}

export default BooksApp
