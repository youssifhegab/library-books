import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

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
    const {changingBooks} = this.props
    const { query, newBooks} = this.state;
    const changeShelf = (event, book) => changingBooks(book, event.target.value)
    return(
        <div className="search-books">
        <div className="search-books-bar">
          <Link 
            className="close-search" 
            to='/'
            >Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query} onChange={this.gettingBooks}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {newBooks.filter((book)=>{
              return book.imageLinks&&book.imageLinks.thumbnail}).map((book)=>(
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, 
                      backgroundImage: `url(${book.imageLinks&&book.imageLinks.thumbnail})`}}></div>
                    <div className="book-shelf-changer">
                      <select onChange={(event)=>changeShelf(event, book)} defaultValue="none">
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="book-title">{book.title ? book.title : 'No title available'}</div>
                  {book.authors && book.authors.map((author, index) => (
                      <div className="book-authors" key={index}>{author}</div>
                  ))}
                </div>
              </li>
            ))}
          </ol>

        </div>
      </div>
    )
  }
}

export default SearchPage