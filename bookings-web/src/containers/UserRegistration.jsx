import React, { useState } from 'react';
import Loading from '../components/loading/Loading';
import Registration from '../components/user/Registration';
import { registerUser } from '../services/userApi';

const UserRegistration = ({ history }) => {
    const [loading, setLoading] = useState(true);
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
            const user = await registerUser(username, email, password);
            console.log(user)
        history.push("/");
        } catch(err) {
            console.log(err);
            setError(err.message)
        }
    };

    // if(loading) return <Loading />;
    return (
        <>
        {error && <p style={{color:"red"}}>{error}</p>}
            <Registration 
                username={username}
                email={email}
                password={password}
                onChange={handleChange}
                onSubmit={handleSubmit}
                />
        </>
    );
};

export default UserRegistration;