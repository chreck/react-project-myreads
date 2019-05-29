import React from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends React.Component {
    onChange = (event) => {
        event.preventDefault();
        const {bookId, onChange} = this.props;
        const shelf = event.target.value;
        onChange(bookId, shelf);
    }
    render () {
        const {options, defaultValue} = this.props;
        return (
            <div className="book-shelf-changer">
                <select value={defaultValue} onChange={this.onChange}>
                    <option key='move' value='move' disabled>Move to...</option>
                    {options.map((option) => {
                        const {value, text} = option;
                        return (
                            <option key={value} value={value}>{text}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}

BookShelfChanger.propTypes = {
    bookId: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default BookShelfChanger