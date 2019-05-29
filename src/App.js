import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import Dashboard from './Dashboard';

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  transform = (origBook) => {
    return {
      id: origBook.id,
      thumbnail: (origBook.imageLinks && origBook.imageLinks.thumbnail) ? origBook.imageLinks.thumbnail : '',
      title: origBook.title,
      authors: origBook.authors ? origBook.authors.join(' | ') : '',
      shelf: origBook.shelf || 'none'
    }
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState((prevState) => {
        prevState.books = books.map((book) => this.transform(book))
        return prevState;
      })
    });
  }

  onShelfChange = (change) => {
    const { book, shelf } = change;
    this.setState((prevState) => {
      const index = prevState.books.findIndex((b) => {
        return book.id === b.id;
      });
      if (index === -1) {
        book.shelf = shelf;
        prevState.books.unshift(book);
      } else {
        prevState.books[index].shelf = shelf;
      }
      return prevState;
    });
    BooksAPI.update({ id: book.id }, shelf);
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <Search onShelfChange={this.onShelfChange} transform={this.transform} books={books} />
        )}
        />
        <Route exact path='/' render={() => (
          <Dashboard books={books} onShelfChange={this.onShelfChange} />
        )} />
      </div>
    )
  }
}

export default BooksApp
