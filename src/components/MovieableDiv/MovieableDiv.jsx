import React, { useState } from 'react';

const MovieableDiv = () => {
  const [move, setMove] = useState({ x: 0, y: 0 });
  console.log('Movieablexy', move.x, move.y);

  const blockMoving = (dir) => {
    console.log('dir', dir);
    const boundries = {
      left: move.x <= 50,
      top: move.y <= 0,
      right: move.x >= 710,
      bottom: move.y >= 255,
    };
    if (boundries[dir]) return;

    const update = {
      top: { y: move.y - 10 },
      bottom: { y: move.y + 10 },
      left: { x: move.x - 10 },
      right: { x: move.x + 10 },
    };
    debugger;
    setMove((prev) => ({ ...prev, ...update[dir] }));
  };

  return (
    <div className='container-wrapper'>
      <div className='topblock' onClick={() => blockMoving('top')}>
        top
      </div>
      <div className='block-div'>
        <div className='topblock' onClick={() => blockMoving('left')}>
          left
        </div>
        <div className='block' style={{ top: move.y, left: move.x }}></div>
        <div className='topblock' onClick={() => blockMoving('right')}>
          right
        </div>
      </div>
      <div className='bottomblock' onClick={() => blockMoving('bottom')}>
        bottom
      </div>
    </div>
  );
};

export default MovieableDiv;
