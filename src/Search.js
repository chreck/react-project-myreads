import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { debounce } from 'lodash'

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    state = {
        books: [],
        value: '',
    }

    isValueEmpty = () => this.state.value === '';

    setBookEmpty = () => {
        this.setState((prevState) => {
            prevState.books = [];
            return prevState;
        });
    }

    fetch = () => {
        if (this.isValueEmpty() === false) {
            BooksAPI.search(this.state.value).then((books) => {
                if (books.error === undefined && this.isValueEmpty() === false) {
                    this.setState((prevState) => {
                        prevState.books = books;
                        return prevState;
                    });
                } else {
                    this.setBookEmpty();
                }
            }).catch(r => this.setBookEmpty());
        } else {
            this.setBookEmpty();
        }
    }

    debouncedFetch = debounce(this.fetch, 250)

    onChange = (event) => {
        event.persist();
        if (event.target !== null && event.target.value !== null) {
            const value = event.target.value;
            this.setState((prevState) => {
                if (value != null) {
                    prevState.value = value;
                }
                return prevState;
            });
            this.debouncedFetch();
        }
    }

    render() {
        const { value, books } = this.state;
        const { onShelfChange, transform } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.onChange} value={value} autoFocus />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((book) => {
                            book = transform(book);
                            const changer = {
                                defaultValue: book.shelf,
                                onShelfChange,
                            };
                            const { id } = book;
                            return (
                                <li key={id}>
                                    <Book book={book} changer={changer} />
                                </li>
                            )
                        }
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    onShelfChange: PropTypes.func.isRequired,
    transform: PropTypes.func.isRequired
};

export default Search