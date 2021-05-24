import React, { useState } from 'react';
import Loading from '../components/loading/Loading';
import Registration from '../components/registration/Registration';
import { registerUser } from '../services/userApi';

const UserRegistration = () => {
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = async ({ target }) => {
        if(target.name === 'username') setUsername(target.value);
        if(target.name === 'email') setEmail(target.value);
        if(target.name === 'password') setPassword(target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerUser(username, email, password);
    };

    // if(loading) return <Loading />;
    return (
        <Registration 
            username={username}
            email={email}
            password={password}
            onChange={handleChange}
            onSubmit={handleSubmit}
            />
    );
};

export default UserRegistration;