import React, { useState } from 'react';
import axios from 'axios';

const SearchVoter = () => {
    const [voterDetails, setVoterDetails] = useState(null);
    const [searchId, setSearchId] = useState('');
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/voters/${searchId}/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access')}`,
                },
            });
            setVoterDetails(response.data);
            setError('');
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setError('No data exists with this voter ID');
                setVoterDetails(null);
            } else {
                setError('Error fetching data');
            }
        }
    };

    return (
        <div className="container">
            <h2>Search Voter</h2>
            <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Enter Voter ID"
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p>{error}</p>}
            {voterDetails && (
                <div className="voter-details">
                    <p>Name: {voterDetails.voter_name}</p>
                    <p>Phone Number: {voterDetails.phone_number}</p>
                    <p>Aadhaar Number: {voterDetails.aadhaar_number}</p>
                </div>
            )}
        </div>
    );
};

export default SearchVoter;
