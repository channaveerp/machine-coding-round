import React, { useState } from 'react';
import '../../Styles/stars.css';

const StarsRating = ({ starCount = 5 }) => {
  const [starsValue, setStartValue] = useState();
  const [mouhoverValue, setmouhoverValue] = useState();
  console.log(mouhoverValue);

  return (
    <div>
      {new Array(starCount).fill(0).map((value, index) => (
        <div key={index} style={{ display: 'inline' }}>
          <span
            onMouseEnter={() => setmouhoverValue(index + 1)}
            onMouseLeave={() => setmouhoverValue(0)}
            className={`${
              (mouhoverValue === 0 && index < starsValue) ||
              index < mouhoverValue
                ? 'gold'
                : 'star'
            }`}
            onClick={() => setStartValue(index + 1)}>
            &#9733;
          </span>
        </div>
      ))}
    </div>
  );
};

export default StarsRating;
