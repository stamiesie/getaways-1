import React from 'react';
import Logout from '../components/user/Logout';
import { logoutUser } from '../services/userApi';

const LogoutContainer = () => {
    const handleClick = async () => {
        const user = await logoutUser();
        console.log(user);
    };

    return (
        <>
        <Logout onClick={handleClick}/>
        </>
    )
}

export default LogoutContainer;