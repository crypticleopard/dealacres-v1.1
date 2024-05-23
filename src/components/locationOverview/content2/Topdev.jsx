import React from 'react';
import styles from './topdev.module.css';
import Devcard from './Devcard';

function Topdev({ numberOfCards = 6, gap = '8px' }) {
  const topdevStyle = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
    gap: gap
  };

  const imgSrcArray = [
    "/property/developerLogo.webp",
    "/property/developerLogo.webp",
    "/property/developerLogo.webp",
    "/property/developerLogo.webp",
    "/property/developerLogo.webp",
    "/property/developerLogo.webp",
    "/property/developerLogo.webp",
    "/property/developerLogo.webp"
  ];

  return (
    <div style={topdevStyle} className='md:!justify-normal'>
      {imgSrcArray.slice(0, numberOfCards).map((imgSrc, index) => (
        <Devcard key={index} imgSrc={imgSrc} />
      ))}
    </div>
  );
}

export default Topdev;
