import React from 'react'
import {withRouter} from 'react-router-dom'

function OpenSearch (props) {
    const {history} = props;
    return (
        <div className="open-search">
            <button onClick={() => {history.push('/search')}}>Add a book</button>
        </div>
    )
}

export default withRouter(OpenSearch)