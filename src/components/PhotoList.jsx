import Photo from './Photo.jsx'
import NoMatches from './NoMatches.jsx'
import PropTypes from 'prop-types';

// PhotoList component that displays the results of the query. If there are no results, it displays a NoMatches component.
// The PhotoList component receives the data prop, which is an array of objects containing the photo information. 
// It maps over the data array and creates a Photo component for each object in the array.

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

PhotoList.propTypes = {
    data: PropTypes.array.isRequired
}

export default PhotoList
