import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

function BookShelf(props) {
    const { books, title, onShelfChange } = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => {
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

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired,
}

export default BookShelf