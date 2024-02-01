import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from './token';

function UserAuthorization({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = getAccessToken();
        if (!accessToken) {
            navigate('/');
        }
    }, [navigate]);

    if (!getAccessToken()) {
        navigate('/');
    }

    return <div>{children}</div>;
}

export default UserAuthorization;
