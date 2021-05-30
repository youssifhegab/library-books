import React from 'react'
import PropTypes from 'prop-types'


class Book extends React.Component{
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired
      }
    render(){
        const {book, changeShelf} = this.props
        return(
        <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, 
                  backgroundImage: `url(${book.imageLinks&&book.imageLinks.thumbnail})`}}></div>
                <div className="book-shelf-changer">
                  <select onChange={(event)=>changeShelf(event, book)} value={book.shelf? book.shelf: 'none'}>
                    <option value="moveTo" disabled>Move to...</option>
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
        </li>)
    }
}

export default Book