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

  shelfChanging = (book, shelf) => {
    BooksAPI.update(book, shelf)
    if (shelf === 'none') {
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id)
      }));
    } else {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }));
    }
  };

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
