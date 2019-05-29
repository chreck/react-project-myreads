import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import ChangerOptions from './ChangerOptions'
import { debounce } from 'lodash'

class Search extends React.Component {

    state = {
        books: [],
        value: '',
        changerOptions: new ChangerOptions()
    }

    onChange = (event) => {
        event.preventDefault();
        if(event.target != null && event.target.value != null) {
            this.setState((prevState) => {
                prevState.value = event.target.value;
                return prevState;
            });
        }
    }

    fetch = () => {
        if(this.state.value !== '') {
            this.setState((prevState) => {
                const books = BooksAPI.search(this.state.value);
                prevState.books = books;
                return prevState;
            });
        } else {
            this.setState((prevState) => {
                prevState.books = [];
                return prevState;
            });
        }
    }

    debouncedOnChange = debounce(this.fetch, 250);

    render() {
        const {value, books, changerOptions} = this.state;
        const {onShelfChange} = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={(event) => {
                        this.onChange(event);
                        this.debouncedOnChange();
                    }} value={value} />
                </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((book) => {
                            const changer = {
                                options: changerOptions,
                                defaultValue: book.shelf,
                                onShelfChange,
                            };
                            const {id} = book;
                            return (
                                <li key={id}>
                                    <Book book={book} changer={changer} />
                                </li>
                            )}
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    onShelfChange: PropTypes.func.isRequired,
};

export default Search