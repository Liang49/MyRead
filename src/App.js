import React from 'react'
import * as BooksAPI from './BooksAPI'
import Main from './Main'
import Search from './Search'
import './App.css'
import { Route } from 'react-router-dom'



class BooksApp extends React.Component {
  state = {
    books: []
  }
     componentDidMount() {
	BooksAPI.getAll()
	 .then((books) => {
		this.setState({
		  books
		})
	  })
  }

updateShelf = (book, shelf) => {
  BooksAPI.update(book, shelf)
  .then(response => {
    book.shelf = shelf;
    this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
  });
}


  

render() {
    return (
      <div className="app">
       <Route exact path="/" render={() => (
       <Main
      books={this.state.books}
      updateShelf={this.updateShelf}
      />
)} />

 <Route path="/search" render={() => (
       <Search
   		books={this.state.books}
      updateShelf={this.updateShelf}
      />
)} />
      
</div>
    );
  }
}

export default BooksApp