import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Book from './Book'


class ShelfPage extends React.Component{
  static propTypes = {
    books: PropTypes.array.isRequired,
    changingBooks: PropTypes.func.isRequired
  }
  render(){
      const shelfType = [
        {id:"1", title:"Currently Reading", type:'currentlyReading'},
        {id:"2", title:"Want to Read", type:'wantToRead'},
        {id:"3", title:"Read", type:'read'}
      ]
      const {books, changingBooks} = this.props
      const changeShelf = (event, book)=>{changingBooks(book, event.target.value)}
      return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {shelfType.map((shelf)=>{
              const shelfBooks = books.filter(book => book.shelf === shelf.type);
              return(
              <div className="bookshelf" key={shelf.id}>
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {shelfBooks.map((book)=>(
                      <Book book={book} changeShelf={changeShelf}/>
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