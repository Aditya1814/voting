import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8000/auth/jwt/create/', {
                username,
                password,
            });
            localStorage.setItem('access', response.data.access);
            navigate('/search-voter');
        } catch (error) {
            setError('Invalid credentials. Please try again.');
            console.error(error);
        }
    };

    const handleSignupRedirect = () => {
        navigate('/signup');
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {error && (
                <div>
                    <p>{error}</p>
                    <button onClick={handleSignupRedirect}>Signup</button>
                </div>
            )}
        </div>
    );
};

export default Login;
