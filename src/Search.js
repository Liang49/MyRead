import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'


class Search extends Component {
  constructor(props) {
  super(props);
  this.state = {
    books: [],
    query:'',
    queryBooks: [],
  };
  }
  
updateQuery = (query) => {
  this.setState({query}, this.none);
}

none() {
  if (this.state.query === '' || this.state.query === undefined) {
    return this.setState({queryBooks: []});
  }
    BooksAPI.search(this.state.query).then(books => {
      if (books.error) {
    return this.setState({queryBooks: []});
      }
      else {
        books.forEach(book => {
           const found = this.props.books.find(({ id }) => id === book.id);
          book.shelf = found ? found.shelf : "none";
        });
        return this.setState({ queryBooks: books });
        
      }
    });
}

        
        
        
  render() {
    return (
       <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
               
                <input type="text" 
				placeholder="Search by title or author"
				value={this.state.query}
				onChange={(event) => this.updateQuery(event.target.value)}
				/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
				{
                  this.state.queryBooks.map((book) => 
(<li key={book.id}>
<Book 
book={book} 
updateShelf={this.props.updateShelf}

/>
</li>
))}
</ol>
            </div>
          </div>
      );
  }
}

export default Search 