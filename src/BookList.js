import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

function BookList (props) {
    const {books, changerOptions, onShelfChange} = props;
    const shelfs = (shelf) => {
        return books.filter((b) => shelf === b.shelf);
    };
    const booksShelfs = changerOptions.map((option) => ({
        books: shelfs(option.value),
        title: option.text,
        id: option.value,
    }));
    return (
        <div className="list-books-content">
            {booksShelfs.map((bookShelf) => {
                const {books, title, id} = bookShelf;
                return (
                <div key={id}>
                    <BookShelf books={books} changerOptions={changerOptions} title={title} onShelfChange={onShelfChange} />
                </div>
                )
            })
            }
        </div>
    )
}

BookList.propTypes = {
	books: PropTypes.array.isRequired,
    changerOptions: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
}

export default BookList