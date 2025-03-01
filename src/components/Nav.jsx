import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// Nav component that displays the navigation links for 3 categories: Cats, Dogs, and Computers.
// The Nav component receives the setQuery function as a prop from the App component.

function Nav(props) {

    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="cats" onClick={() => props.setQuery("cats")}>Cats</NavLink></li>
                <li><NavLink to="dogs" onClick={() => props.setQuery("dogs")}>Dogs</NavLink></li>
                <li><NavLink to="computers" onClick={() => props.setQuery("computers")}>Computers</NavLink></li>
            </ul>
        </nav>
    )
}

Nav.propTypes = {
    setQuery: PropTypes.func.isRequired
}

export default Nav
