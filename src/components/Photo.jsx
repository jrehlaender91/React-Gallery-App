import PropTypes from 'prop-types';

// Photo component that displays the image passed as a prop (url) from PhotoList component. 

function Photo(props) {

    return (
        <li>
            <img src={props.url} alt="" />
        </li>
    )
}

Photo.propTypes = {
    url: PropTypes.string.isRequired
}

export default Photo
