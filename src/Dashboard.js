import React from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'
import OpenSearch from './OpenSearch'
import ChangerOptions from './ChangerOptions'

class Dashboard extends React.Component {
    state = {
        options: new ChangerOptions()
    }

    render () {
        const {options} = this.state;
        const {books, onShelfChange} = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <BookList books={books} changerOptions={options} onShelfChange={onShelfChange}></BookList>
                <OpenSearch />
            </div>
        )
    }
}

Dashboard.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
};
export default Dashboard