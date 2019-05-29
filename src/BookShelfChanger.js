import React from 'react'
import PropTypes from 'prop-types'
import ChangerOptions from './ChangerOptions'

class BookShelfChanger extends React.Component {
    state = {
        options: new ChangerOptions().all,
        defaultValue: this.props.defaultValue
    }
    onChange = (event) => {
        event.preventDefault();
        const { book, onChange } = this.props;
        const shelf = event.target.value;
        this.setState((prevState) => {
            prevState.defaultValue = shelf;
            return prevState;
        });
        onChange({ book, shelf });
    }
    render() {
        const { options, defaultValue } = this.state;
        return (
            <div className="book-shelf-changer">
                <select value={defaultValue} onChange={this.onChange}>
                    <option key='move' value='move' disabled>Move to...</option>
                    {options.map((option) => {
                        const { value, text } = option;
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
    book: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.string.isRequired
}

export default BookShelfChanger