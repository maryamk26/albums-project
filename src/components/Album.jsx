import React, { useState } from 'react';

const Album = ({ album }) => {
  const [showSongs, setShowSongs] = useState(false);

  const toggleSongs = () => {
    setShowSongs(!showSongs);
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={album.cover} alt={album.name} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title" onClick={toggleSongs} style={{ cursor: 'pointer' }}>
              {album.name}
            </h5>
            {showSongs && (
              <ul className="list-group list-group-flush">
                {album.songs.map((song, index) => (
                  <li key={index} className="list-group-item">{song}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
