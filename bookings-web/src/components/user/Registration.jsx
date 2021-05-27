import React from 'react'
import PropTypes from 'prop-types';

function Registration ({ username, email, password, onSubmit, onChange }) {
    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={onSubmit}>
                <label> Username
                    <input 
                    type ="text"
                    name="username"
                    value={username}
                    onChange={onChange}
                    />
                    </label>
                <label> Email
                    <input 
                    type ="text"
                    name="email"
                    value={email}
                    onChange={onChange}
                    />
                    </label>
                <label> Password
                    <input 
                    type ="text"
                    name="password"
                    value={password}
                    onChange={onChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
};

Registration.propTypes = {
username: PropTypes.string.isRequired,
email: PropTypes.string.isRequired,
password: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired,
onSubmit: PropTypes.func.isRequired,
};

export default Registration;
