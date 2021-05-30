// import React from 'react'
// import PropTypes from 'prop-types'

// class Shelfs extends React.Component{
//     render(){
//         {this.shelfType.map((shelf)=>{
//             const shelfBooks = books.filter((book) =>{book.shelf == shelf.type});
//             return
//                 (<div className="bookshelf" key={shelf.id}>
//                 <h2 className="bookshelf-title">{shelf.title}</h2>
//                 <div className="bookshelf-books">
//                     <ol className="books-grid">
//                     {shelfBooks.map((book)=>(
//                         <li>
//                         <div className="book">
//                             <div className="book-top">
//                             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks.thumbnail }}></div>
//                                 <div className="book-shelf-changer">
//                                 <select>
//                                     <option value="move" disabled>Move to...</option>
                                    
//                                 </select>
//                                 </div>
//                             </div>
//                         </div>
//                         </li>
//                     ))}
//                     </ol>
//                 </div>
//                 </div>
//                 )
//           })}
//     }
// }

// export default Shelfs