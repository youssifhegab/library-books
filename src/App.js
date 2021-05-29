import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import ShelfPage from './ShelfPage'


class BooksApp extends React.Component {
  state = {
    books:[]
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(
          <ShelfPage 
            
          />
        )}/>
        <Route path='/search' render={()=>(
          <SearchPage 

          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
