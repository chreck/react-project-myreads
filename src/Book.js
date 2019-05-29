import React from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

function Book (props) {
    const {changer, book} = props;
    const {thumbnail, title, authors} = book;
    const {options, defaultValue, onChange} = changer;
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})`}}></div>
                <BookShelfChanger bookId={book.id} options={options} defaultValue={defaultValue} onChange={onChange} />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    )
}

Book.propTypes = {
	changer: PropTypes.object.isRequired,
    book: PropTypes.object.isRequired,
}

export default Book