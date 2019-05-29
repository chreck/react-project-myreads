import React from 'react'
import PropTypes from 'prop-types'

function OpenSearch (props) {
    const {onAddClick} = props;
    return (
        <div className="open-search">
            <button onClick={onAddClick}>Add a book</button>
        </div>
    )
}

OpenSearch.propTypes = {
    onAddClick: PropTypes.func.isRequired
}

export default OpenSearch