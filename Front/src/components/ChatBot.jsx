import React, { useState } from 'react';
import axios from 'axios';
import UserInput from './UserInput';
import ArtistInfo from './ArtistInfo';
import './ChatBot.css';

const ChatBot = () => {
  const [ArtistData, setArtistData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchArtistData = async (name) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:3000/api/Artist', { name });
      setArtistData(response.data);
    } catch (error) {
      setError('Error fetching Artist data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <UserInput onSubmit={fetchArtistData} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {ArtistData && <ArtistInfo data={ArtistData} />}
    </div>
  );
};

export default ChatBot;