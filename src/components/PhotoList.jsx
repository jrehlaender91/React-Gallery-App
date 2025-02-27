import React from 'react'

import Photo from './Photo.jsx'
import NoMatches from './NoMatches.jsx'


function PhotoList(props) {
    const photos = props.data;
    let results;

    if (photos.length > 0) {
        results = photos.map((result, index) => <Photo url={`https://farm5.staticflickr.com/${result.server}/${result.id}_${result.secret}.jpg`} key={index} />);
    } else {
        results = <NoMatches />;
    }

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {results}
            </ul>
        </div>
    )
}

export default PhotoList
