import React from 'react';

const NamePicture = ({ img1, caption }) => {
  return (
    <div className="photo-display">
      <img src={img1} alt={""} />
      <p>{caption}</p>
    </div>
  );
};

export default NamePicture;