import React, { useState, useEffect } from 'react'

import apiKey from '../config'
import Photo from './Photo.jsx'


function PhotoList(props) {
    const [photos, setPhotos] = useState([]);
    const [query, setQuery] = useState("cats");
    let results;

    useEffect(() => {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => response.json())
            .then(responseData => setPhotos(responseData.photos.photo))
            .catch(error => console.log("Error fetching and parsing data.", error));
    }, [query]);
    results = photos.map((result, index) => <Photo url={`https://farm5.staticflickr.com/${result.server}/${result.id}_${result.secret}.jpg`} key={index}/>);

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
