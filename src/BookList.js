import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import ChangerOptions from './ChangerOptions'

function BookList (props) {
    const {books, onShelfChange} = props;
    const options = new ChangerOptions().valid;
    const shelfs = (shelf) => {
        return books.filter((b) => shelf === b.shelf);
    };
    const booksShelfs = options.map((option) => ({
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
                    <BookShelf books={books} title={title} onShelfChange={onShelfChange} />
                </div>
                )
            })
            }
        </div>
    )
}

BookList.propTypes = {
	books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
}

export default BookList