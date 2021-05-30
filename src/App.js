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

  shelfChanging = (changedBook, shelf)=>{
    BooksAPI.update(changedBook, shelf).then((res)=>{
      changedBook.shelf = shelf
      this.setState((currState)=>(
        {books: currState.books.filter((book)=>book.id !== changedBook.id).concat(changedBook)}))
    })
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState(()=>({books}))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(
          <ShelfPage 
            books={this.state.books}
            changingBooks={this.shelfChanging}
          />
        )}/>
        <Route path='/search' render={()=>(
          <SearchPage 
            books={this.state.books}
            changingBooks={this.shelfChanging}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
