import React from 'react';
import './ArtistInfo.css';

const ArtistInfo = ({ data }) => {
  // Convertit les sauts de ligne en éléments <br />
  const formatText = (text) => {
    return text.split('\n').map((item, key) => (
      <React.Fragment key={key}>
        {item}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className='result fadeIn'>
      <h2>Information</h2>
      {/* Utilise formatText pour afficher data avec des sauts de ligne */}
      <p>{formatText(JSON.stringify(data, null, 2))}</p>
    </div>
  );                              
};

export default ArtistInfo;