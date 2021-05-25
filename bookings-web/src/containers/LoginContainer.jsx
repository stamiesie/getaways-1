import React, { useState } from 'react';
import Login from '../components/user/Login';
import { loginUser } from '../services/userApi';
import { putUserInLocalStorage } from '../utils/Utils';

const LoginContainer = ({ history }) => {
    const [username, setUsername] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleChange = async ({ target }) => {
        if(target.name === 'username') setUsername(target.value);
        if(target.name === 'email') setEmail(target.value);
        if(target.name === 'password') setPassword(target.value);
    }

    const handleSubmit = async (e) => {
        setError(null);
        e.preventDefault();
        try {
        const user = await loginUser(username, email, password);
        history.push("/");
        } catch(err) {
            console.log(err);
            setError(err.message)
        }
    };

    return (
        <>
        {error && <p style={{color:"red"}}>{error}</p>}
        <Login 
            username={username}
            email={email}
            password={password}
            onChange={handleChange}
            onSubmit={handleSubmit}

        />
        </>
    );
};

export default LoginContainer;