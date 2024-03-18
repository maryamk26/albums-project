import React from 'react';
import Album from './Album';

const Main = () => {
  const albums = [
    {
      name: 'Thriller',
      cover: 'public/Thriller.jpeg',
      songs: ['Wanna Be Startin’ Somethin’', 'Baby Be Mine', 'The Girl Is Mine', 'Thriller', 'Beat It', 'Billie Jean', 'Human Nature', 'P.Y.T. (Pretty Young Thing)', 'The Lady in My Life'],
    },
    {
      name: 'Back in Black',
      cover: 'public/backinblack.jpg',
      songs: ['Hells Bells', 'Shoot to Thrill', 'What Do You Do for Money Honey', 'Given the Dog a Bone', 'Let Me Put My Love into You', 'Back in Black', 'You Shook Me All Night Long', 'Have a Drink on Me', 'Shake a Leg', 'Rock and Roll Ain’t Noise Pollution'],
    },
  ];

  return (
    <div>
      {albums.map((album, index) => (
        <Album key={index} album={album} />
      ))}
    </div>
  );
};

export default Main;
