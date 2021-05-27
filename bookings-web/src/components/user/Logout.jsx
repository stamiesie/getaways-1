import React from 'react';
import PropTypes from 'prop-types';

function Logout ({ onClick }) {
    return (
        <div>
            <h1>Click to Logout</h1>
            <button onClick={onClick}>Log Out</button>
        </div>
    );
    }

    Logout.propTypes = {
        onClick: PropTypes.func.isRequired,
    }

    export default Logout;