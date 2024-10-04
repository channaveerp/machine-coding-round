import React, { useState } from 'react';
import '../../Styles/stars.css';

const StarsRating = ({ starCount = 5 }) => {
  const [starValues, setStarValues] = useState();
  const [onmouseValue, setonMouseValues] = useState();
  console.log('onmouseValue', onmouseValue);

  return (
    <div>
      {new Array(starCount).fill(0).map((star, index) => (
        <div style={{ display: 'inline' }} key={index}>
          <span
            onMouseLeave={() => setonMouseValues(0)}
            onMouseEnter={() => setonMouseValues(index)}
            className={`${
              index < starValues || index < onmouseValue ? 'gold' : ''
            }`}
            onClick={() => setStarValues(index + 1)}>
            &#9733;
          </span>
        </div>
      ))}
    </div>
  );
};

export default StarsRating;
