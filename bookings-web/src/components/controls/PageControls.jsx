import React from 'react';
import PropTypes from 'prop-types';

const PageControls = ({ 
    currentPage,
    totalPages,
    onDecrementPage,
    onIncrementPage,
}) => {
    return (
    <div>
       <button onClick={onDecrementPage} disabled={currentPage === 1}>
        Prev    
        </button> 
        <span>
            Page {currentPage} 
        </span>
        <button onClick={onIncrementPage} disabled={currentPage === 10}>
        Next    
        </button>

    </div>
    )
};

PageControls.propTypes = {
    currentPage: PropTypes.number.isRequired,
    // totalPages: PropTypes.number.isRequired,
    onDecrementPage: PropTypes.func.isRequired,
    onIncrementPage: PropTypes.func.isRequired,

}

export default PageControls;
