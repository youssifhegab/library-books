import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class SearchPage extends React.Component{
  state = {
    query: '',
    newBooks:[],
  }
  static propTypes = {
    books: PropTypes.array.isRequired,
    changingBooks: PropTypes.func.isRequired
  }

  gettingBooks= (event)=>{
    const query = event.target.value
    this.setState((currState)=>({query}))

    if(query){
      BooksAPI.search(query.trim(), 20).then((res)=>{
        res.length > 0?this.setState((currState)=>({newBooks: res})):
        this.setState((currState)=>({newBooks:[]}))
      })
    }else{
      this.setState((currState)=>({newBooks:[]}))
    }

  }

  render(){
    const {books, changingBooks} = this.props
    const { query, newBooks} = this.state;
    const changeShelf = (event, book) => changingBooks(book, event.target.value)
    const updatedBooks = newBooks.map(book => {
      books.map(b => {
        if (b.id === book.id) {
          book.shelf = b.shelf;
        }
        return b;
      });
      return book;
    });
    return(
        <div className="search-books">
        <div className="search-books-bar">
          <Link 
            className="close-search" 
            to='/'
            >Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query} onChange={(event)=>this.gettingBooks(event)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {updatedBooks.filter((book)=>{
              return book.imageLinks&&book.imageLinks.thumbnail}).map((book)=>(
              <Book book={book} changeShelf={changeShelf}/>
            ))}
          </ol>

        </div>
      </div>
    )
  }
}

export default SearchPage