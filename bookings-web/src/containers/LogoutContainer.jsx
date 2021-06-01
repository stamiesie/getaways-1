import React, { useState } from 'react';
import Logout from '../components/user/Logout';
import { logoutUser } from '../services/userApi';

const LogoutContainer = () => {
    const [message, setMessage] = useState(null);

    const handleClick = async () => {
        setMessage(null);
        const user = await logoutUser();
       
        // setMessage(json);
        console.log(user);
    };

    return (
        <>
        {/* {<p style={{color:"red"}}>{message}</p>} */}
        <Logout onClick={handleClick}/>
        </>
    )
}

export default LogoutContainer;