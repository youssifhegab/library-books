import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import NoCover from './images/no-cover.png'


class ShelfPage extends React.Component{
  shelfType = [
    {id:"1", title:"Currently Reading", type:'currentlyReading'},
    {id:"2", title:"Want to Read", type:'wantToRead'},
    {id:"3", title:"Read", type:'read'}
  ]
  static propTypes = {
    books: PropTypes.array.isRequired,
    changingBooks: PropTypes.func.isRequired
  }
  render(){
      const {books, changingBooks} = this.props
      const changeShelf = (event, book)=>{changingBooks(book, event.target.value)}
      return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {this.shelfType.map((shelf)=>{
              const shelfBooks = books.filter(book => book.shelf === shelf.type);
              return(
              <div className="bookshelf" key={shelf.id}>
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {shelfBooks.map((book)=>(
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, 
                              backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(event)=>changeShelf(event, book)} defaultValue='none'>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div>
                            <div className="book-title">{book.title}</div>
                            {book.authors.map((author)=>(
                              <div className="book-authors">{author}</div>
                            ))}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              )
            })}      
          </div>
          <div className="open-search">
              <Link to="/search" className='open-search-button'>Add a book</Link>
          </div>
        </div>
        )
  }
}

export default ShelfPage