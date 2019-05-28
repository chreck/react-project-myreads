import React from 'react'
import PropTypes from 'prop-types'

function BookShelfChanger (props) {
    const {options, defaultValue, onChange} = props;
    return (
        <div className="book-shelf-changer">
            <select value={defaultValue} onChange={onChange}>
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

BookShelfChanger.propTypes = {
	options: PropTypes.array.isRequired,
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default BookShelfChanger